import { gql } from "apollo-server-micro";
import { books } from "./mock";

export const typeDefs = gql`
  type Book {
    title: String
    author: String
  }
`;

export const resolvers = {
  Query: {
    books: () => books,
  },
};