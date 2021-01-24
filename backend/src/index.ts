import fastify from 'fastify';

const server = fastify();

server.get('/ping', async (req, res) => {
  return 'pong';
})

server.listen(8080, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }

  console.log(`server listening on ${address}`);
})