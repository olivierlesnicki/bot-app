import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'button',
  click() {
    this.attrs.action(this.$().text());
  }
});
