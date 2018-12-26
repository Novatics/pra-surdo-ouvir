// Code generated by Prisma (prisma@1.23.2). DO NOT EDIT.
// Please don't change this file manually but run `prisma generate` to update it.
// For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

import { DocumentNode } from "graphql";
import {
  makePrismaClientClass,
  BaseClientOptions,
  Model
} from "prisma-client-lib";
import { typeDefs } from "./prisma-schema";

export type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];

export interface Exists {
  stream: (where?: StreamWhereInput) => Promise<boolean>;
  user: (where?: UserWhereInput) => Promise<boolean>;
}

export interface Node {}

export type FragmentableArray<T> = Promise<Array<T>> & Fragmentable;

export interface Fragmentable {
  $fragment<T>(fragment: string | DocumentNode): Promise<T>;
}

export interface Prisma {
  $exists: Exists;
  $graphql: <T = any>(
    query: string,
    variables?: { [key: string]: any }
  ) => Promise<T>;

  /**
   * Queries
   */

  stream: (where: StreamWhereUniqueInput) => StreamPromise;
  streams: (
    args?: {
      where?: StreamWhereInput;
      orderBy?: StreamOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => FragmentableArray<Stream>;
  streamsConnection: (
    args?: {
      where?: StreamWhereInput;
      orderBy?: StreamOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => StreamConnectionPromise;
  user: (where: UserWhereUniqueInput) => UserPromise;
  users: (
    args?: {
      where?: UserWhereInput;
      orderBy?: UserOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => FragmentableArray<User>;
  usersConnection: (
    args?: {
      where?: UserWhereInput;
      orderBy?: UserOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => UserConnectionPromise;
  node: (args: { id: ID_Output }) => Node;

  /**
   * Mutations
   */

  createStream: (data: StreamCreateInput) => StreamPromise;
  updateStream: (
    args: { data: StreamUpdateInput; where: StreamWhereUniqueInput }
  ) => StreamPromise;
  updateManyStreams: (
    args: { data: StreamUpdateManyMutationInput; where?: StreamWhereInput }
  ) => BatchPayloadPromise;
  upsertStream: (
    args: {
      where: StreamWhereUniqueInput;
      create: StreamCreateInput;
      update: StreamUpdateInput;
    }
  ) => StreamPromise;
  deleteStream: (where: StreamWhereUniqueInput) => StreamPromise;
  deleteManyStreams: (where?: StreamWhereInput) => BatchPayloadPromise;
  createUser: (data: UserCreateInput) => UserPromise;
  updateUser: (
    args: { data: UserUpdateInput; where: UserWhereUniqueInput }
  ) => UserPromise;
  updateManyUsers: (
    args: { data: UserUpdateManyMutationInput; where?: UserWhereInput }
  ) => BatchPayloadPromise;
  upsertUser: (
    args: {
      where: UserWhereUniqueInput;
      create: UserCreateInput;
      update: UserUpdateInput;
    }
  ) => UserPromise;
  deleteUser: (where: UserWhereUniqueInput) => UserPromise;
  deleteManyUsers: (where?: UserWhereInput) => BatchPayloadPromise;

  /**
   * Subscriptions
   */

  $subscribe: Subscription;
}

export interface Subscription {
  stream: (
    where?: StreamSubscriptionWhereInput
  ) => StreamSubscriptionPayloadSubscription;
  user: (
    where?: UserSubscriptionWhereInput
  ) => UserSubscriptionPayloadSubscription;
}

export interface ClientConstructor<T> {
  new (options?: BaseClientOptions): T;
}

/**
 * Types
 */

export type StreamOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "title_ASC"
  | "title_DESC"
  | "description_ASC"
  | "description_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "finishedAt_ASC"
  | "finishedAt_DESC"
  | "category_ASC"
  | "category_DESC"
  | "language_ASC"
  | "language_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export type UserOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "email_ASC"
  | "email_DESC"
  | "name_ASC"
  | "name_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export type MutationType = "CREATED" | "UPDATED" | "DELETED";

export interface UserUpdateOneWithoutStreamsInput {
  create?: UserCreateWithoutStreamsInput;
  update?: UserUpdateWithoutStreamsDataInput;
  upsert?: UserUpsertWithoutStreamsInput;
  delete?: Boolean;
  disconnect?: Boolean;
  connect?: UserWhereUniqueInput;
}

export type StreamWhereUniqueInput = AtLeastOne<{
  id: ID_Input;
}>;

export interface StreamUpdateManyWithoutAuthorInput {
  create?: StreamCreateWithoutAuthorInput[] | StreamCreateWithoutAuthorInput;
  delete?: StreamWhereUniqueInput[] | StreamWhereUniqueInput;
  connect?: StreamWhereUniqueInput[] | StreamWhereUniqueInput;
  disconnect?: StreamWhereUniqueInput[] | StreamWhereUniqueInput;
  update?:
    | StreamUpdateWithWhereUniqueWithoutAuthorInput[]
    | StreamUpdateWithWhereUniqueWithoutAuthorInput;
  upsert?:
    | StreamUpsertWithWhereUniqueWithoutAuthorInput[]
    | StreamUpsertWithWhereUniqueWithoutAuthorInput;
  deleteMany?: StreamScalarWhereInput[] | StreamScalarWhereInput;
  updateMany?:
    | StreamUpdateManyWithWhereNestedInput[]
    | StreamUpdateManyWithWhereNestedInput;
}

export interface UserCreateInput {
  email?: String;
  name: String;
  streams?: StreamCreateManyWithoutAuthorInput;
}

export interface UserUpdateInput {
  email?: String;
  name?: String;
  streams?: StreamUpdateManyWithoutAuthorInput;
}

export interface UserUpsertWithoutStreamsInput {
  update: UserUpdateWithoutStreamsDataInput;
  create: UserCreateWithoutStreamsInput;
}

export interface UserSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: UserWhereInput;
  AND?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput;
  OR?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput;
  NOT?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput;
}

export interface UserUpdateManyMutationInput {
  email?: String;
  name?: String;
}

export interface StreamCreateInput {
  title: String;
  description?: String;
  finishedAt?: DateTimeInput;
  category?: String;
  language?: String;
  author?: UserCreateOneWithoutStreamsInput;
}

export interface StreamUpdateManyWithWhereNestedInput {
  where: StreamScalarWhereInput;
  data: StreamUpdateManyDataInput;
}

export interface UserCreateOneWithoutStreamsInput {
  create?: UserCreateWithoutStreamsInput;
  connect?: UserWhereUniqueInput;
}

export interface StreamUpsertWithWhereUniqueWithoutAuthorInput {
  where: StreamWhereUniqueInput;
  update: StreamUpdateWithoutAuthorDataInput;
  create: StreamCreateWithoutAuthorInput;
}

export interface UserCreateWithoutStreamsInput {
  email?: String;
  name: String;
}

export interface StreamUpdateWithoutAuthorDataInput {
  title?: String;
  description?: String;
  finishedAt?: DateTimeInput;
  category?: String;
  language?: String;
}

export interface StreamUpdateInput {
  title?: String;
  description?: String;
  finishedAt?: DateTimeInput;
  category?: String;
  language?: String;
  author?: UserUpdateOneWithoutStreamsInput;
}

export interface UserWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  email?: String;
  email_not?: String;
  email_in?: String[] | String;
  email_not_in?: String[] | String;
  email_lt?: String;
  email_lte?: String;
  email_gt?: String;
  email_gte?: String;
  email_contains?: String;
  email_not_contains?: String;
  email_starts_with?: String;
  email_not_starts_with?: String;
  email_ends_with?: String;
  email_not_ends_with?: String;
  name?: String;
  name_not?: String;
  name_in?: String[] | String;
  name_not_in?: String[] | String;
  name_lt?: String;
  name_lte?: String;
  name_gt?: String;
  name_gte?: String;
  name_contains?: String;
  name_not_contains?: String;
  name_starts_with?: String;
  name_not_starts_with?: String;
  name_ends_with?: String;
  name_not_ends_with?: String;
  streams_every?: StreamWhereInput;
  streams_some?: StreamWhereInput;
  streams_none?: StreamWhereInput;
  AND?: UserWhereInput[] | UserWhereInput;
  OR?: UserWhereInput[] | UserWhereInput;
  NOT?: UserWhereInput[] | UserWhereInput;
}

export interface StreamCreateWithoutAuthorInput {
  title: String;
  description?: String;
  finishedAt?: DateTimeInput;
  category?: String;
  language?: String;
}

export interface StreamUpdateManyDataInput {
  title?: String;
  description?: String;
  finishedAt?: DateTimeInput;
  category?: String;
  language?: String;
}

export interface StreamCreateManyWithoutAuthorInput {
  create?: StreamCreateWithoutAuthorInput[] | StreamCreateWithoutAuthorInput;
  connect?: StreamWhereUniqueInput[] | StreamWhereUniqueInput;
}

export interface StreamUpdateManyMutationInput {
  title?: String;
  description?: String;
  finishedAt?: DateTimeInput;
  category?: String;
  language?: String;
}

export interface StreamWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  title?: String;
  title_not?: String;
  title_in?: String[] | String;
  title_not_in?: String[] | String;
  title_lt?: String;
  title_lte?: String;
  title_gt?: String;
  title_gte?: String;
  title_contains?: String;
  title_not_contains?: String;
  title_starts_with?: String;
  title_not_starts_with?: String;
  title_ends_with?: String;
  title_not_ends_with?: String;
  description?: String;
  description_not?: String;
  description_in?: String[] | String;
  description_not_in?: String[] | String;
  description_lt?: String;
  description_lte?: String;
  description_gt?: String;
  description_gte?: String;
  description_contains?: String;
  description_not_contains?: String;
  description_starts_with?: String;
  description_not_starts_with?: String;
  description_ends_with?: String;
  description_not_ends_with?: String;
  createdAt?: DateTimeInput;
  createdAt_not?: DateTimeInput;
  createdAt_in?: DateTimeInput[] | DateTimeInput;
  createdAt_not_in?: DateTimeInput[] | DateTimeInput;
  createdAt_lt?: DateTimeInput;
  createdAt_lte?: DateTimeInput;
  createdAt_gt?: DateTimeInput;
  createdAt_gte?: DateTimeInput;
  finishedAt?: DateTimeInput;
  finishedAt_not?: DateTimeInput;
  finishedAt_in?: DateTimeInput[] | DateTimeInput;
  finishedAt_not_in?: DateTimeInput[] | DateTimeInput;
  finishedAt_lt?: DateTimeInput;
  finishedAt_lte?: DateTimeInput;
  finishedAt_gt?: DateTimeInput;
  finishedAt_gte?: DateTimeInput;
  category?: String;
  category_not?: String;
  category_in?: String[] | String;
  category_not_in?: String[] | String;
  category_lt?: String;
  category_lte?: String;
  category_gt?: String;
  category_gte?: String;
  category_contains?: String;
  category_not_contains?: String;
  category_starts_with?: String;
  category_not_starts_with?: String;
  category_ends_with?: String;
  category_not_ends_with?: String;
  language?: String;
  language_not?: String;
  language_in?: String[] | String;
  language_not_in?: String[] | String;
  language_lt?: String;
  language_lte?: String;
  language_gt?: String;
  language_gte?: String;
  language_contains?: String;
  language_not_contains?: String;
  language_starts_with?: String;
  language_not_starts_with?: String;
  language_ends_with?: String;
  language_not_ends_with?: String;
  author?: UserWhereInput;
  AND?: StreamWhereInput[] | StreamWhereInput;
  OR?: StreamWhereInput[] | StreamWhereInput;
  NOT?: StreamWhereInput[] | StreamWhereInput;
}

export interface UserUpdateWithoutStreamsDataInput {
  email?: String;
  name?: String;
}

export interface StreamScalarWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  title?: String;
  title_not?: String;
  title_in?: String[] | String;
  title_not_in?: String[] | String;
  title_lt?: String;
  title_lte?: String;
  title_gt?: String;
  title_gte?: String;
  title_contains?: String;
  title_not_contains?: String;
  title_starts_with?: String;
  title_not_starts_with?: String;
  title_ends_with?: String;
  title_not_ends_with?: String;
  description?: String;
  description_not?: String;
  description_in?: String[] | String;
  description_not_in?: String[] | String;
  description_lt?: String;
  description_lte?: String;
  description_gt?: String;
  description_gte?: String;
  description_contains?: String;
  description_not_contains?: String;
  description_starts_with?: String;
  description_not_starts_with?: String;
  description_ends_with?: String;
  description_not_ends_with?: String;
  createdAt?: DateTimeInput;
  createdAt_not?: DateTimeInput;
  createdAt_in?: DateTimeInput[] | DateTimeInput;
  createdAt_not_in?: DateTimeInput[] | DateTimeInput;
  createdAt_lt?: DateTimeInput;
  createdAt_lte?: DateTimeInput;
  createdAt_gt?: DateTimeInput;
  createdAt_gte?: DateTimeInput;
  finishedAt?: DateTimeInput;
  finishedAt_not?: DateTimeInput;
  finishedAt_in?: DateTimeInput[] | DateTimeInput;
  finishedAt_not_in?: DateTimeInput[] | DateTimeInput;
  finishedAt_lt?: DateTimeInput;
  finishedAt_lte?: DateTimeInput;
  finishedAt_gt?: DateTimeInput;
  finishedAt_gte?: DateTimeInput;
  category?: String;
  category_not?: String;
  category_in?: String[] | String;
  category_not_in?: String[] | String;
  category_lt?: String;
  category_lte?: String;
  category_gt?: String;
  category_gte?: String;
  category_contains?: String;
  category_not_contains?: String;
  category_starts_with?: String;
  category_not_starts_with?: String;
  category_ends_with?: String;
  category_not_ends_with?: String;
  language?: String;
  language_not?: String;
  language_in?: String[] | String;
  language_not_in?: String[] | String;
  language_lt?: String;
  language_lte?: String;
  language_gt?: String;
  language_gte?: String;
  language_contains?: String;
  language_not_contains?: String;
  language_starts_with?: String;
  language_not_starts_with?: String;
  language_ends_with?: String;
  language_not_ends_with?: String;
  AND?: StreamScalarWhereInput[] | StreamScalarWhereInput;
  OR?: StreamScalarWhereInput[] | StreamScalarWhereInput;
  NOT?: StreamScalarWhereInput[] | StreamScalarWhereInput;
}

export interface StreamSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: StreamWhereInput;
  AND?: StreamSubscriptionWhereInput[] | StreamSubscriptionWhereInput;
  OR?: StreamSubscriptionWhereInput[] | StreamSubscriptionWhereInput;
  NOT?: StreamSubscriptionWhereInput[] | StreamSubscriptionWhereInput;
}

export interface StreamUpdateWithWhereUniqueWithoutAuthorInput {
  where: StreamWhereUniqueInput;
  data: StreamUpdateWithoutAuthorDataInput;
}

export type UserWhereUniqueInput = AtLeastOne<{
  id: ID_Input;
  email?: String;
}>;

export interface NodeNode {
  id: ID_Output;
}

export interface UserPreviousValues {
  id: ID_Output;
  email?: String;
  name: String;
}

export interface UserPreviousValuesPromise
  extends Promise<UserPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  email: () => Promise<String>;
  name: () => Promise<String>;
}

export interface UserPreviousValuesSubscription
  extends Promise<AsyncIterator<UserPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  email: () => Promise<AsyncIterator<String>>;
  name: () => Promise<AsyncIterator<String>>;
}

export interface AggregateStream {
  count: Int;
}

export interface AggregateStreamPromise
  extends Promise<AggregateStream>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateStreamSubscription
  extends Promise<AsyncIterator<AggregateStream>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface Stream {
  id: ID_Output;
  title: String;
  description?: String;
  createdAt: DateTimeOutput;
  finishedAt?: DateTimeOutput;
  category?: String;
  language?: String;
}

export interface StreamPromise extends Promise<Stream>, Fragmentable {
  id: () => Promise<ID_Output>;
  title: () => Promise<String>;
  description: () => Promise<String>;
  createdAt: () => Promise<DateTimeOutput>;
  finishedAt: () => Promise<DateTimeOutput>;
  category: () => Promise<String>;
  language: () => Promise<String>;
  author: <T = UserPromise>() => T;
}

export interface StreamSubscription
  extends Promise<AsyncIterator<Stream>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  title: () => Promise<AsyncIterator<String>>;
  description: () => Promise<AsyncIterator<String>>;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  finishedAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  category: () => Promise<AsyncIterator<String>>;
  language: () => Promise<AsyncIterator<String>>;
  author: <T = UserSubscription>() => T;
}

export interface StreamEdge {
  node: Stream;
  cursor: String;
}

export interface StreamEdgePromise extends Promise<StreamEdge>, Fragmentable {
  node: <T = StreamPromise>() => T;
  cursor: () => Promise<String>;
}

export interface StreamEdgeSubscription
  extends Promise<AsyncIterator<StreamEdge>>,
    Fragmentable {
  node: <T = StreamSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface User {
  id: ID_Output;
  email?: String;
  name: String;
}

export interface UserPromise extends Promise<User>, Fragmentable {
  id: () => Promise<ID_Output>;
  email: () => Promise<String>;
  name: () => Promise<String>;
  streams: <T = FragmentableArray<Stream>>(
    args?: {
      where?: StreamWhereInput;
      orderBy?: StreamOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => T;
}

export interface UserSubscription
  extends Promise<AsyncIterator<User>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  email: () => Promise<AsyncIterator<String>>;
  name: () => Promise<AsyncIterator<String>>;
  streams: <T = Promise<AsyncIterator<StreamSubscription>>>(
    args?: {
      where?: StreamWhereInput;
      orderBy?: StreamOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => T;
}

export interface AggregateUser {
  count: Int;
}

export interface AggregateUserPromise
  extends Promise<AggregateUser>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateUserSubscription
  extends Promise<AsyncIterator<AggregateUser>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface StreamSubscriptionPayload {
  mutation: MutationType;
  node: Stream;
  updatedFields: String[];
  previousValues: StreamPreviousValues;
}

export interface StreamSubscriptionPayloadPromise
  extends Promise<StreamSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = StreamPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = StreamPreviousValuesPromise>() => T;
}

export interface StreamSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<StreamSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = StreamSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = StreamPreviousValuesSubscription>() => T;
}

export interface StreamConnection {
  pageInfo: PageInfo;
  edges: StreamEdge[];
}

export interface StreamConnectionPromise
  extends Promise<StreamConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<StreamEdge>>() => T;
  aggregate: <T = AggregateStreamPromise>() => T;
}

export interface StreamConnectionSubscription
  extends Promise<AsyncIterator<StreamConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<StreamEdgeSubscription>>>() => T;
  aggregate: <T = AggregateStreamSubscription>() => T;
}

export interface PageInfo {
  hasNextPage: Boolean;
  hasPreviousPage: Boolean;
  startCursor?: String;
  endCursor?: String;
}

export interface PageInfoPromise extends Promise<PageInfo>, Fragmentable {
  hasNextPage: () => Promise<Boolean>;
  hasPreviousPage: () => Promise<Boolean>;
  startCursor: () => Promise<String>;
  endCursor: () => Promise<String>;
}

export interface PageInfoSubscription
  extends Promise<AsyncIterator<PageInfo>>,
    Fragmentable {
  hasNextPage: () => Promise<AsyncIterator<Boolean>>;
  hasPreviousPage: () => Promise<AsyncIterator<Boolean>>;
  startCursor: () => Promise<AsyncIterator<String>>;
  endCursor: () => Promise<AsyncIterator<String>>;
}

export interface BatchPayload {
  count: Long;
}

export interface BatchPayloadPromise
  extends Promise<BatchPayload>,
    Fragmentable {
  count: () => Promise<Long>;
}

export interface BatchPayloadSubscription
  extends Promise<AsyncIterator<BatchPayload>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Long>>;
}

export interface UserEdge {
  node: User;
  cursor: String;
}

export interface UserEdgePromise extends Promise<UserEdge>, Fragmentable {
  node: <T = UserPromise>() => T;
  cursor: () => Promise<String>;
}

export interface UserEdgeSubscription
  extends Promise<AsyncIterator<UserEdge>>,
    Fragmentable {
  node: <T = UserSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface UserSubscriptionPayload {
  mutation: MutationType;
  node: User;
  updatedFields: String[];
  previousValues: UserPreviousValues;
}

export interface UserSubscriptionPayloadPromise
  extends Promise<UserSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = UserPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = UserPreviousValuesPromise>() => T;
}

export interface UserSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<UserSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = UserSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = UserPreviousValuesSubscription>() => T;
}

export interface StreamPreviousValues {
  id: ID_Output;
  title: String;
  description?: String;
  createdAt: DateTimeOutput;
  finishedAt?: DateTimeOutput;
  category?: String;
  language?: String;
}

export interface StreamPreviousValuesPromise
  extends Promise<StreamPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  title: () => Promise<String>;
  description: () => Promise<String>;
  createdAt: () => Promise<DateTimeOutput>;
  finishedAt: () => Promise<DateTimeOutput>;
  category: () => Promise<String>;
  language: () => Promise<String>;
}

export interface StreamPreviousValuesSubscription
  extends Promise<AsyncIterator<StreamPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  title: () => Promise<AsyncIterator<String>>;
  description: () => Promise<AsyncIterator<String>>;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  finishedAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  category: () => Promise<AsyncIterator<String>>;
  language: () => Promise<AsyncIterator<String>>;
}

export interface UserConnection {
  pageInfo: PageInfo;
  edges: UserEdge[];
}

export interface UserConnectionPromise
  extends Promise<UserConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<UserEdge>>() => T;
  aggregate: <T = AggregateUserPromise>() => T;
}

export interface UserConnectionSubscription
  extends Promise<AsyncIterator<UserConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<UserEdgeSubscription>>>() => T;
  aggregate: <T = AggregateUserSubscription>() => T;
}

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

export type Long = string;

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;

/*
DateTime scalar input type, allowing Date
*/
export type DateTimeInput = Date | string;

/*
DateTime scalar output type, which is always a string
*/
export type DateTimeOutput = string;

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number;

/**
 * Model Metadata
 */

export const models: Model[] = [
  {
    name: "Stream",
    embedded: false
  },
  {
    name: "User",
    embedded: false
  }
];

/**
 * Type Defs
 */

export const prisma: Prisma;
