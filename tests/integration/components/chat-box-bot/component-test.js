import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('chat-box-bot', 'Integration | Component | chat box bot', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });"

  this.render(hbs`{{chat-box-bot}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:"
  this.render(hbs`
    {{#chat-box-bot}}
      template block text
    {{/chat-box-bot}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
