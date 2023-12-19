import { test } from 'node:test';
import { build } from '../lib/app.js';
import { strictEqual, deepStrictEqual } from 'node:assert';

test('GET /', async () => {
  const app = await build();

  const response = await app.inject({
    method: 'GET',
    url: '/'
  });

  strictEqual(response.statusCode, 200);
  strictEqual(response.headers['content-type'], 'application/json; charset=utf-8');
  deepStrictEqual(response.json(), { hello: 'world' });
});

test('GET /user/:id', async () => {
  const app = await build();

  const response = await app.inject({
    method: 'GET',
    url: '/user/foo'
  });

  strictEqual(response.statusCode, 200);
  strictEqual(response.headers['content-type'], 'application/json; charset=utf-8');
  deepStrictEqual(response.json(), { id: 'foo' });
});
