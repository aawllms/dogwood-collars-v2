import { Schema, model, Date, type Document } from "mongoose";
import bcrypt from "bcrypt";
import type { ProductDocument } from "./Products.js";

export interface UserDocument extends Document {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  isCorrectPassword(password: string): Promise<boolean>;
  phoneNumber: number;
  address: string;
  city: string;
  state: string;
  zipcode: number;
  role: string;
  cartProducts: ProductDocument[];
  createdOn: Date;
}

const userSchema = new Schema<UserDocument>({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    min: 8,
    max: 30,
  },
  phoneNumber: {
    type: Number,
    required: false,
  },
  address: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  zipcode: {
    type: Number,
    required: true,
  },
  role: {
    type: String,
    default: "customer",
    required: true,
  },
  cartProducts: [
    {
      type: Schema.Types.ObjectId,
      ref: "Products",
    },
  ],
});

userSchema.methods.isCorrectPassword = async function (password: string) {
  return await bcrypt.compare(password, this.password);
};

const User = model<UserDocument>("User", userSchema);

export default User;
