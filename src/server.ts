import { build } from './lib/app.js';

const server = await build();

const port = parseInt(process.env.PORT || '3000');
await server.listen({ port });
