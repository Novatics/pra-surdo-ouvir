const { GraphQLServer } = require('graphql-yoga');
const { prisma } = require('./generated/prisma-client');
const resolvers = require('./resolvers');

const server = new GraphQLServer({
  typeDefs: './src/server/api/schema.graphql',
  resolvers,
  context: {
    prisma,
  },
});

module.exports = server;
