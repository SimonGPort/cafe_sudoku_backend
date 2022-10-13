import { isConstValueNode } from "graphql";
import { User } from "../models/User";

interface resolvers {
  resolvers(): String;
}
interface generalArgs {
  name: String;
  password: String;
}
interface autoLoginArgs {
  id: String;
}

interface scoreArgs {
  id: String;
  date: String;
}

const resolvers = {
  Query: {
    login: async (_: any, args: generalArgs) => {
      const userFound = await User.findOne({
        name: args.name,
        password: args.password,
      });
      if (userFound) {
        return {
          success: { result: true, status: 200 },
          user: {
            id: userFound._id,
            name: userFound.name,
            score: userFound.score,
          },
        };
      } else {
        return { success: { result: false, status: 404 } };
      }
    },
    autoLogin: async (_: any, args: autoLoginArgs) => {
      const userFound = await User.findOne({
        _id: args.id,
      });
      if (userFound) {
        return {
          success: { result: true, status: 200 },
          user: {
            id: userFound._id,
            name: userFound.name,
            score: userFound.score,
          },
        };
      } else {
        return { success: { result: false, status: 404 } };
      }
    },
  },
  Mutation: {
    createUser: async (_: any, args: generalArgs) => {
        if(args.name=""){
            return { success: { result: false, status: 400 }, id: "" };  
        }
      const userExistant = await User.findOne({ name: args.name });
      if (userExistant) {
        return { success: { result: false, status: 409 }, id: "" };
      }
      const newUser = new User({
        name: args.name,
        password: args.password,
        score: [],
      });
      await newUser.save();
      return { success: { result: true, status: 201 }, id: newUser._id };
    },
    newScore: async (_: any, args: scoreArgs) => {
      await User.updateOne({ _id: args.id }, { $push: { score: args.date } });
      return { success: { result: true, status: 200 } };
    },
  },
};

export { resolvers };
