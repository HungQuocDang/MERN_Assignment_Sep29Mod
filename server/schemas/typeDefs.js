const { gql } = require('apollo-server-express');

const typeDefs = gql`

  type User {
    _id: ID!
    username: String!
    email: String!
    savedBooks: [Book]
  }

  type Book {
    authors: [String]
    description: String!
    bookId: ID!
    image: String
    link: String
    title: String
  }
   input BookInput {
    authors: [String]
    description: String!
    bookId: String!
    image: String
    link: String
    title: String!
   }
  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth 
    addBook(bookdata: BookInput!): User
    removeBook(bookId: ID!): User
  }
`;

module.exports = typeDefs;
