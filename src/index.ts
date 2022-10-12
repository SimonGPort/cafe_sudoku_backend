const express = require("express");
import { ApolloServer } from "apollo-server-express";
import { typeDefs } from "./query/typeDefs";
import { resolvers } from "./resolvers/resolvers";
import mongoose from "mongoose";
const PORT = 4000;

(async () => {
  const app = express();

  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });
  await server.start();
  server.applyMiddleware({ app });

  await mongoose.connect("mongodb://localhost:27017/cafe_sudoku");

  app.listen(PORT, () => {
    console.log(
      `graphQL-express server started on http://localhost:${PORT}${server.graphqlPath}`
    );
  });
})();
