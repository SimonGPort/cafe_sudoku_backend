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
    name:String
    score:[String]
}

type loginAnswer{
    success:Boolean
    user:User
}


type createUserAnswer{
    success:Boolean
    id:String
}

type Query {
    login(_id:String!):loginAnswer
}
type Mutation {
    createUser(name: String!,password:String!):createUserAnswer
}
`
// type newScoreAnswer{
//     success:Boolean
// }
// newScore(_id:String!,date:String!):newScoreAnswer
// ObjectId("634614b2f3aa77aea99b7045")



export {typeDefs}