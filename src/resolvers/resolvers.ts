import { isConstValueNode } from 'graphql'
import {User} from '../models/User'

interface resolvers{
    resolvers():String
}

const resolvers={
    Query:{
        login:async(_:any,_id:String)=>{
            const userFound= await User.findOne({_id})
            if(userFound){
                return {success:true,user:{name:userFound.name, score:userFound.score}}
            }
            else{
                return {success:false}
            }
        },
    },
    Mutation:{
        createUser:async (_:any,name:String,password:String)=>{
            const newUser=new User(name,password,[])
            await newUser.save();
            console.log("newUser._id",newUser._id)
            return {success:true, id:newUser._id};
        },
        // newScore:async (_:any,_id:String,date:String)=>{
        //     return {success:true};
        // }
    }
}

export {resolvers}