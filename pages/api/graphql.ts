import type { NextApiRequest, NextApiResponse } from "next";
import { ApolloServer, gql } from "apollo-server-micro";

import {
  typeDefs as bookSchema,
  resolvers as bookResolver,
} from "../../src/graphql/book/book";

const typeDefs = gql`
  type Query {
    books: [Book]
  }
`;

const server = new ApolloServer({
  typeDefs: [typeDefs, bookSchema],
  resolvers: [bookResolver],
  csrfPrevention: true,
  cache: "bounded",
});

export const config = {
  api: {
    bodyParser: false,
  },
};

const startServer = server.start();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await startServer;
  await server.createHandler({ path: "/api/graphql" })(req, res);
}
