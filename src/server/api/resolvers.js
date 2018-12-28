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
          id: args.userId,
        })
        .streams();
    },
  },
  Mutation: {
    createStream(root, args, context) {
      console.log({ args });
      return context.prisma.createStream({
        title: args.title,
        description: args.description,
        category: args.category,
        language: args.language,
        author: {
          connect: { id: args.userId },
        },
      });
    },
    createUser(root, args, context) {
      return context.prisma.createUser({ name: args.name, email: args.email });
    },
  },
  User: {
    streams(root, args, context) {
      return context.prisma
        .user({
          id: root.id,
        })
        .streams();
    },
  },
  Stream: {
    author(root, args, context) {
      return context.prisma
        .stream({
          id: root.id,
        })
        .author();
    },
  },
};

module.exports = resolvers;
