import mongoose from "mongoose";

interface IImage {
  fileName: string;
  originalName: string;
}

interface IProduct {
  title: string;
  image: string;
  category: string;
  description: string;
  price: number;
}

const imageSchema = new mongoose.Schema<IImage>({
  fileName: {
    type: String,
    required: [true, "Missing path to file"],
  },

  originalName: {
    type: String,
    required: [true, "Image name is required"],
  },
});

const productSchema = new mongoose.Schema<IProduct>({
  title: {
    type: String,
    minlength: [2, "Min title field length is 2"],
    maxlength: [30, "Max title field length is 30"],
    required: [true, "title field must be filled"],
    unique: true,
  },
  image: imageSchema,
  category: {
    type: String,
    required: [true, "category field must be filled"],
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
    default: null,
  },
});

export default mongoose.model<IProduct>("product", productSchema);
