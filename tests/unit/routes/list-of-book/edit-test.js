import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | list-of-book/edit', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:list-of-book/edit');
    assert.ok(route);
  });
});
