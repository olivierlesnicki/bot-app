import Ember from 'ember';
import config from '../../config/environment';

export default Ember.Component.extend({
  messages: [],
  'show-console': false,
  text: '',
  didInsertElement() {
    this._socket = window.io(config.SOCKET_URL);
    this._socket.on('reset', () => {
      this.set('messages', []);
    });
    this._socket.on('message', (message) => {
      this.get('messages').pushObject({
        text: message.text,
        isBot: message.emitter.indexOf(this._socket.id) === -1
      });
      Ember.run.scheduleOnce('afterRender', this, function() {
        let $messages = this.$('.messages');
        $messages.scrollTop($messages.prop('scrollHeight'));
      });
    });
  },
  actions: {
    submit(text) {
      if (text) {
        if (text === 'console') {
          this.set('show-console', true);
        } else {
          this._socket.emit('message', {
            text
          });
        }
        this.set('text', '');
      }
    }
  }
});
