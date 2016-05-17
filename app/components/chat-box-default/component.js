import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    submit() {
      this.attrs.action(this.$('button').text());
    }
  }
});
