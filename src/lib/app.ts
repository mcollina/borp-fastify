import Fastify from 'fastify';
import { Type, TypeBoxTypeProvider } from '@fastify/type-provider-typebox'

export async function build () {
  const app = Fastify().withTypeProvider<TypeBoxTypeProvider>();

  app.get('/', {
    schema: {
      response: {
        200: Type.Object({
          hello: Type.String()
        })
      }
    }
  }, async () => {
    return { hello: 'world' };
  });

  app.get('/user/:id', {
    schema: {
      params: Type.Object({
        id: Type.String()
      }),
      response: {
        200: Type.Object({
          id: Type.String()
        })
      }
    }
  }, async (request) => {
    // Note that `foo` property is not defined in the schema
    // but it is still allowed to be returned. It is anyhow
    // ignored by Fastify when rendering the response.
    return { id: request.params.id, foo: 'bar' };
  });

  return app;
}
