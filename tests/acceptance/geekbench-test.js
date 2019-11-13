import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | geekbench', function (hooks) {
  setupApplicationTest(hooks);

  test('should show geekbench as the home page', async (assert) => {

  });

  test('should show geekbench tab on the home page', async (assert) => {

  });

  test('should show a canvas on the geekbench page', async (assert) => {

  })

  test('should show some data in the chart on the geekbench page', async (assert) => {

  })

  test('visiting /geekbench', async function (assert) {
    await visit('/geekbench');
    assert.equal(currentURL(), '/geekbench');
  });
});
