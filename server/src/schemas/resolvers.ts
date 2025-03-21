import { signToken } from "../services/auth";
import { AuthenticationError } from "../services/auth";
import { User, Product } from "../models/index"
import { ProductDocument } from  "../models/Products"

const resolvers = {
    Query: {
        getSingleUser: async (_parent: any, _args: any, context: any) => {
            const foundUser = await User.findOne({
              username: context.user.username,
            })
            if (!foundUser) {
              throw new AuthenticationError("Authentication Error");
            }
            return foundUser;
    },

        getAllUsers: async (_parent: any, _args: any, context: any) => {
        if (context?.user) {
          const allUsers = await User.find();
          return allUsers;
        } else {
          throw new AuthenticationError("Authentication Error");
        }
      },

        getUserByUsername: async (_parent: any, args: any, context: any) => {
        if (context?.user) {
          const foundUser = await User.findOne({
            username: args.username,
          });
          if (!foundUser) {
            throw new AuthenticationError("User not found");
          }
          return foundUser;
        } else {
          throw new AuthenticationError("Authentication Error");
        }
      },

        getProduct: async (_parent: any, { productId }: any, context: any) => {
        if (!context.user) {
          throw new AuthenticationError("You need to be logged in!");
        }
  
        try {
          const product = await Product.findById(productId);
          if (!product) {
            throw new Error("Product not found");
          }
          return product;
        } catch (error) {
          throw new Error("Error fetching product");
        }
      },



};

export default resolvers;
