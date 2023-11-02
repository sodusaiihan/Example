import gql from "graphql-tag";

const typeDefs = gql`
  type User {
    id: String!
    name: String!
    email: String!
    phonenumber: Int!
    address: String!
    birthday: DateTime!
    gender: Gender!
    createdAt: DateTime!
    updatedAt: DateTime!

    roleId: String!
    role: Role!
  }

  type Role {
    id: String!
    name: String!
    user: [User!]!
  }

  enum Gender {
    MALE
    FEMALE
    OTHER
  }

  scalar DateTime

  type Query {
    users: [User!]!
    user(id: String!): User
    roles: [Role!]!
    role(id: String!): Role
  }

  type Mutation {
    createUser(
      name: String!
      email: String!
      phonenumber: Int!
      address: String!
      birthday: DateTime!
      gender: Gender!
      roleId: String!
    ): User!
    updateUser(
      id: String!
      name: String
      email: String
      phonenumber: Int
      address: String
      birthday: DateTime
      gender: Gender
      roleId: String
    ): User!
    deleteUser(id: String!): User!
    createRole(name: String!): Role!
    updateRole(id: String!, name: String): Role!
    deleteRole(id: String!): Role!
  }
`;

export default typeDefs;
