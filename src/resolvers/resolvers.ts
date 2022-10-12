import { isConstValueNode } from 'graphql'
import {User} from '../models/User'

interface resolvers{
    resolvers():String
}
interface generalArgs{
    name:String
    password:String
}

interface scoreArgs{
    id:String
    date:String
}

const resolvers={
    Query:{
        login:async(_:any,args:generalArgs)=>{
            const userFound= await User.findOne({name:args.name,password:args.password})
            if(userFound){
                return {success:true,user:{id:userFound._id, name:userFound.name, score:userFound.score}}
            }
            else{
                return {success:false}
            }
        },
    },
    Mutation:{
        createUser:async (_:any,args:generalArgs)=>{
            const newUser=new User(args.name,args.password,[])
            await newUser.save();
            return {success:true, id:newUser._id};
        },
        newScore:async (_:any,args:scoreArgs)=>{
            await User.updateOne({_id:args.id},{$push:{score:args.date}})
            return {success:true};
        }
    }
}

export {resolvers}