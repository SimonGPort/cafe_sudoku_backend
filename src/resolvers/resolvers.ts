import {User} from '../models/User'

interface resolvers{
    resolvers():String
}

const resolvers={
    Query:{
        hello:()=>{return "hello"},
        login:()=>{
            // return "hi"
            return User.find({})
        },
  
    },
    Mutation:{
        createUser:async (_:any,name:String,password:String,score:[String])=>{
            const newUser=new User(name,password,score)
            await newUser.save();
            return newUser;
        }
    }
}

  // createUser:(name:String,password:String,score:[String])=>{
        //     // const newUser=new User(name,password,score)
        //     // await newUser.save();
        //     // return newUser;
        //     return 'Hihi'
        //     }

export {resolvers}