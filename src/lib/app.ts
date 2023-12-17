import Fastify from 'fastify';

export async function build () {
  const app = Fastify();

  app.get('/', async () => {
    return { hello: 'world' };
  });

  return app;
}
