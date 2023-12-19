import Fastify from 'fastify';
import { Type, TypeBoxTypeProvider } from '@fastify/type-provider-typebox'

export async function build () {
  const app = Fastify().withTypeProvider<TypeBoxTypeProvider>();

  app.get('/', async () => {
    return { hello: 'world' };
  });

  app.get('/user/:id', {
    schema: {
      params: Type.Object({
        id: Type.String()
      })
    }
  }, async (request) => {
    return { id: request.params.id };
  });

  return app;
}
