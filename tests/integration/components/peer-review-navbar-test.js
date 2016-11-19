import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('peer-review-navbar', 'Integration | Component | peer review navbar', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{peer-review-navbar}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#peer-review-navbar}}
      template block text
    {{/peer-review-navbar}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
