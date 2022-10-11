import {gql} from "apollo-server-express";
import { DocumentNode } from "graphql";


type typeDefs=DocumentNode

interface User{
name:String,
password:String,
score:[]
}





const typeDefs=gql`
type User{
    name:String!
    password:String!
    score:[String]
}

type Query {
    hello:String!
    login:String
}
 type Mutation {
   createUser(name: String!,password:String!):String
 }

`



export {typeDefs}