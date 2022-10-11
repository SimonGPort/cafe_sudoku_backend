const express = require("express");
import { ApolloServer } from "apollo-server-express";
const PORT = 4000;
import { typeDefs } from './query/typeDefs';
import { resolvers } from './resolvers/resolvers'

(async () => {
    const app = express();
  
    const server = new ApolloServer({
        typeDefs,
        resolvers
      });
      await server.start()
      server.applyMiddleware({ app });
  
    app.listen(PORT, () => {
      console.log(`express server started on http://localhost:${PORT}${server.graphqlPath}`);
    });
  })();