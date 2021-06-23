const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    id: Int!
    name: String!
    email: String!
    designation: String!
  }

  type Query {
    getAllUsers: [User]
    getUserById(id: Int!): User
    hello: String
  }
  type Mutation {
    createUser(name: String!, email: String!, designation: String!): User
    updateUser(
      id: Int!
      name: String!
      email: String!
      designation: String!
    ): User
    deleteUser(id: Int!): User
  }
`;

module.exports = { typeDefs };
