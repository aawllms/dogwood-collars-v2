import { signToken } from "../services/auth";
import { AuthenticationError } from "../services/auth";
import { User, Product } from "../models/index";
import { ProductDocument } from "../models/Products";

const resolvers = {
  Query: {
    getSingleUser: async (_parent: unknown, _args: any, context: any) => {
      const foundUser = await User.findOne({
        email: context.user.username,
      }).populate("cartProducts");
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

    getUserByEmail: async (_parent: any, args: any, context: any) => {
      if (context?.user) {
        const foundUser = await User.findOne({
          email: args.email,
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
        throw new AuthenticationError("Please log in to see saved products");
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
    getAllProducts: async (_parent: unknown, _args: unknown) => {
      const getProducts = await Product.find();
      return getProducts;
    },
    searchProducts: async (
      _parent: unknown,
      { searchTerm }: { searchTerm: string },
      _context: unknown
    ) => {
      const products = await Product.find({
        title: {
          $regex: searchTerm,
          $options: "i",
        },
      });
      return products;
    },
  },
};

export default resolvers;
