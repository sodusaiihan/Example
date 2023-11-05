import gql from "graphql-tag";
import { makeExecutableSchema } from "graphql-tools";

const typeDefs = gql`
  type User {
    id: String!
    role: String!
    name: String!
    email: String!
    phonenumber: String!
    address: String!
    birthday: DateTime!
    gender: String!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type OverView {
    role: String!
    total: Int!
  }

  scalar DateTime

  type Query {
    users: [User!]!
    user(id: String!): User!
    getAllAdmin: [User!]!
    getAllUser: [User!]!
    getRecentUsers: [User!]!
    getOverView: [OverView!]!
  }

  type Mutation {
    createUser(
      role: String!
      name: String!
      email: String!
      phonenumber: String!
      address: String!
      birthday: DateTime!
      gender: String!
    ): User!
    updateUser(
      id: String!
      role: String!
      name: String!
      email: String!
      phonenumber: String!
      address: String!
      birthday: DateTime!
      gender: String!
    ): User!
    deleteUser(id: String!): Boolean!
  }
`;

const schema = makeExecutableSchema({
  typeDefs,
});

export default schema;
