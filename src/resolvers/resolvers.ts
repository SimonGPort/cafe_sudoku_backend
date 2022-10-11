import {User} from '../models/User'

interface resolvers{
    resolvers():String
}

const resolvers={
    Query:{
        hello:()=>{return "hello"},
        login:async()=>{
            const test= await User.find({})
           console.log("test:",test)
           return 'hi'
        },
  
    },
    Mutation:{
        createUser:async (_:any,name:String,password:String)=>{
            const newUser=new User(name,password,[])
            await newUser.save();
            return "success";
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