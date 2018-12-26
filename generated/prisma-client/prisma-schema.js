module.exports = {
        typeDefs: /* GraphQL */ `type AggregateStream {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

scalar DateTime

scalar Long

type Mutation {
  createStream(data: StreamCreateInput!): Stream!
  updateStream(data: StreamUpdateInput!, where: StreamWhereUniqueInput!): Stream
  updateManyStreams(data: StreamUpdateManyMutationInput!, where: StreamWhereInput): BatchPayload!
  upsertStream(where: StreamWhereUniqueInput!, create: StreamCreateInput!, update: StreamUpdateInput!): Stream!
  deleteStream(where: StreamWhereUniqueInput!): Stream
  deleteManyStreams(where: StreamWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  stream(where: StreamWhereUniqueInput!): Stream
  streams(where: StreamWhereInput, orderBy: StreamOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Stream]!
  streamsConnection(where: StreamWhereInput, orderBy: StreamOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): StreamConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Stream {
  id: ID!
  title: String!
  description: String
  createdAt: DateTime!
  finishedAt: DateTime
  category: String
  language: String
  author: User
}

type StreamConnection {
  pageInfo: PageInfo!
  edges: [StreamEdge]!
  aggregate: AggregateStream!
}

input StreamCreateInput {
  title: String!
  description: String
  finishedAt: DateTime
  category: String
  language: String
  author: UserCreateOneWithoutStreamsInput
}

input StreamCreateManyWithoutAuthorInput {
  create: [StreamCreateWithoutAuthorInput!]
  connect: [StreamWhereUniqueInput!]
}

input StreamCreateWithoutAuthorInput {
  title: String!
  description: String
  finishedAt: DateTime
  category: String
  language: String
}

type StreamEdge {
  node: Stream!
  cursor: String!
}

enum StreamOrderByInput {
  id_ASC
  id_DESC
  title_ASC
  title_DESC
  description_ASC
  description_DESC
  createdAt_ASC
  createdAt_DESC
  finishedAt_ASC
  finishedAt_DESC
  category_ASC
  category_DESC
  language_ASC
  language_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type StreamPreviousValues {
  id: ID!
  title: String!
  description: String
  createdAt: DateTime!
  finishedAt: DateTime
  category: String
  language: String
}

input StreamScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  finishedAt: DateTime
  finishedAt_not: DateTime
  finishedAt_in: [DateTime!]
  finishedAt_not_in: [DateTime!]
  finishedAt_lt: DateTime
  finishedAt_lte: DateTime
  finishedAt_gt: DateTime
  finishedAt_gte: DateTime
  category: String
  category_not: String
  category_in: [String!]
  category_not_in: [String!]
  category_lt: String
  category_lte: String
  category_gt: String
  category_gte: String
  category_contains: String
  category_not_contains: String
  category_starts_with: String
  category_not_starts_with: String
  category_ends_with: String
  category_not_ends_with: String
  language: String
  language_not: String
  language_in: [String!]
  language_not_in: [String!]
  language_lt: String
  language_lte: String
  language_gt: String
  language_gte: String
  language_contains: String
  language_not_contains: String
  language_starts_with: String
  language_not_starts_with: String
  language_ends_with: String
  language_not_ends_with: String
  AND: [StreamScalarWhereInput!]
  OR: [StreamScalarWhereInput!]
  NOT: [StreamScalarWhereInput!]
}

type StreamSubscriptionPayload {
  mutation: MutationType!
  node: Stream
  updatedFields: [String!]
  previousValues: StreamPreviousValues
}

input StreamSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: StreamWhereInput
  AND: [StreamSubscriptionWhereInput!]
  OR: [StreamSubscriptionWhereInput!]
  NOT: [StreamSubscriptionWhereInput!]
}

input StreamUpdateInput {
  title: String
  description: String
  finishedAt: DateTime
  category: String
  language: String
  author: UserUpdateOneWithoutStreamsInput
}

input StreamUpdateManyDataInput {
  title: String
  description: String
  finishedAt: DateTime
  category: String
  language: String
}

input StreamUpdateManyMutationInput {
  title: String
  description: String
  finishedAt: DateTime
  category: String
  language: String
}

input StreamUpdateManyWithoutAuthorInput {
  create: [StreamCreateWithoutAuthorInput!]
  delete: [StreamWhereUniqueInput!]
  connect: [StreamWhereUniqueInput!]
  disconnect: [StreamWhereUniqueInput!]
  update: [StreamUpdateWithWhereUniqueWithoutAuthorInput!]
  upsert: [StreamUpsertWithWhereUniqueWithoutAuthorInput!]
  deleteMany: [StreamScalarWhereInput!]
  updateMany: [StreamUpdateManyWithWhereNestedInput!]
}

input StreamUpdateManyWithWhereNestedInput {
  where: StreamScalarWhereInput!
  data: StreamUpdateManyDataInput!
}

input StreamUpdateWithoutAuthorDataInput {
  title: String
  description: String
  finishedAt: DateTime
  category: String
  language: String
}

input StreamUpdateWithWhereUniqueWithoutAuthorInput {
  where: StreamWhereUniqueInput!
  data: StreamUpdateWithoutAuthorDataInput!
}

input StreamUpsertWithWhereUniqueWithoutAuthorInput {
  where: StreamWhereUniqueInput!
  update: StreamUpdateWithoutAuthorDataInput!
  create: StreamCreateWithoutAuthorInput!
}

input StreamWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  finishedAt: DateTime
  finishedAt_not: DateTime
  finishedAt_in: [DateTime!]
  finishedAt_not_in: [DateTime!]
  finishedAt_lt: DateTime
  finishedAt_lte: DateTime
  finishedAt_gt: DateTime
  finishedAt_gte: DateTime
  category: String
  category_not: String
  category_in: [String!]
  category_not_in: [String!]
  category_lt: String
  category_lte: String
  category_gt: String
  category_gte: String
  category_contains: String
  category_not_contains: String
  category_starts_with: String
  category_not_starts_with: String
  category_ends_with: String
  category_not_ends_with: String
  language: String
  language_not: String
  language_in: [String!]
  language_not_in: [String!]
  language_lt: String
  language_lte: String
  language_gt: String
  language_gte: String
  language_contains: String
  language_not_contains: String
  language_starts_with: String
  language_not_starts_with: String
  language_ends_with: String
  language_not_ends_with: String
  author: UserWhereInput
  AND: [StreamWhereInput!]
  OR: [StreamWhereInput!]
  NOT: [StreamWhereInput!]
}

input StreamWhereUniqueInput {
  id: ID
}

type Subscription {
  stream(where: StreamSubscriptionWhereInput): StreamSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type User {
  id: ID!
  email: String
  name: String!
  streams(where: StreamWhereInput, orderBy: StreamOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Stream!]
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  email: String
  name: String!
  streams: StreamCreateManyWithoutAuthorInput
}

input UserCreateOneWithoutStreamsInput {
  create: UserCreateWithoutStreamsInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutStreamsInput {
  email: String
  name: String!
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  email_ASC
  email_DESC
  name_ASC
  name_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UserPreviousValues {
  id: ID!
  email: String
  name: String!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateInput {
  email: String
  name: String
  streams: StreamUpdateManyWithoutAuthorInput
}

input UserUpdateManyMutationInput {
  email: String
  name: String
}

input UserUpdateOneWithoutStreamsInput {
  create: UserCreateWithoutStreamsInput
  update: UserUpdateWithoutStreamsDataInput
  upsert: UserUpsertWithoutStreamsInput
  delete: Boolean
  disconnect: Boolean
  connect: UserWhereUniqueInput
}

input UserUpdateWithoutStreamsDataInput {
  email: String
  name: String
}

input UserUpsertWithoutStreamsInput {
  update: UserUpdateWithoutStreamsDataInput!
  create: UserCreateWithoutStreamsInput!
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  streams_every: StreamWhereInput
  streams_some: StreamWhereInput
  streams_none: StreamWhereInput
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  email: String
}
`
      }
    