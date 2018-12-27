const { prisma } = require("./generated/prisma-client");
const { GraphQLServer } = require("graphql-yoga");

const resolvers = {
  Query: {
    streams(root, args, context) {
      return context.prisma.streams();
    },
    stream(root, args, context) {
      return context.prisma.stream({ id: args.streamId });
    },
    streamsByUser(root, args, context) {
      return context.prisma
        .user({
          id: args.userId
        })
        .streams();
    }
  },
  Mutation: {
    createStream(root, args, context) {
      return context.prisma.createStream({
        title: args.title,
        author: {
          connect: { id: args.userId }
        }
      });
    },
    createUser(root, args, context) {
      return context.prisma.createUser({ name: args.name, email: args.email });
    }
  },
  User: {
    streams(root, args, context) {
      return context.prisma
        .user({
          id: root.id
        })
        .streams();
    }
  },
  Stream: {
    author(root, args, context) {
      return context.prisma
        .stream({
          id: root.id
        })
        .author();
    }
  }
};

const server = new GraphQLServer({
  typeDefs: "./schema.graphql",
  resolvers,
  context: {
    prisma
  }
});
server.start(() => console.log("Server is running on http://localhost:4000"));
