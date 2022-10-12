import { gql } from "apollo-server-express";
import { DocumentNode } from "graphql";

type typeDefs = DocumentNode;

interface User {
  name: String;
  password: String;
  score: [];
}

const typeDefs = gql`
  type User {
    name: String
    score: [String]
    id: String
  }

  type SuccessObj {
    result: Boolean
    status: Int
  }

  type loginAnswer {
    success: SuccessObj
    user: User
  }

  type newScoreAnswer {
    success: SuccessObj
  }

  type createUserAnswer {
    success: SuccessObj
    id: String
  }

  type Query {
    login(name: String!, password: String!): loginAnswer
    autoLogin(id: String!): loginAnswer
  }
  type Mutation {
    createUser(name: String!, password: String!): createUserAnswer
    newScore(id: String!, date: String!): newScoreAnswer
  }
`;

export { typeDefs };
