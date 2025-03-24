import { Schema, model, type Document } from "mongoose";

export interface ProductDocument extends Document {
  productName: string;
  productDescription: string;
  productColor: string;
  productSize: string;
  productPrice: string;
  productImg: string;
  createdOn: Date;
}

const productSchema = new Schema<ProductDocument>({
  productName: {
    type: String,
    required: true,
  },
  productDescription: {
    type: String,
    required: true,
  },
  productColor: {
    type: String,
    required: true,
  },
  productSize: {
    type: String,
    required: true,
  },
  productPrice: {
    type: String,
    required: true,
  },
  productImg: {
    type: String,
    required: true,
  },
});

const Product = model<ProductDocument>("Product", productSchema);

export default Product;
