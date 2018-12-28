const { GraphQLServer } = require('graphql-yoga');
const os = require('os');
const express = require('express');
const { prisma } = require('./generated/prisma-client');
const resolvers = require('./resolvers');

const server = new GraphQLServer({
  typeDefs: './src/server/api/schema.graphql',
  resolvers,
  context: {
    prisma,
  },
});

server.express.use(express.static('dist'));
server.express.get('/api/getUsername', (req, res) => res.send({ username: os.userInfo().username }),);

const options = {
  endpoint: '/graphql',
  playground: '/playground',
};
server.start(options, () => console.log('🚀  Server is running on http://localhost:4000'));
