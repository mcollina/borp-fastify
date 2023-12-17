import { test } from 'node:test';
import { build } from '../lib/app.js';
import { strictEqual, deepStrictEqual } from 'node:assert';

test('GET /', async (t) => {
  const app = await build();

  const response = await app.inject({
    method: 'GET',
    url: '/'
  });

  strictEqual(response.statusCode, 200);
  strictEqual(response.headers['content-type'], 'application/json; charset=utf-8');
  deepStrictEqual(response.json(), { hello: 'world' });
})
