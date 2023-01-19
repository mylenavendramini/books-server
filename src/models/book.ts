import { model, Schema } from "mongoose";
import { Ibook } from "../types/book";

const bookSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    pages: {
      type: Number,
      required: true,
    },
    date: {
      type: Date,
      required: false,
    },
    description: {
      type: String,
      required: true,
    },
    firstCap: {
      type: String,
      required: true,
    },
    jornal: {
      type: String,
      required: true,
    },
    review: {
      type: String,
      required: true,
    },
    status: {
      type: Boolean,
      required: false,
    },
    show: {
      type: Boolean,
      required: false,
    },
  },
  { timestamps: true }
);

export default model<Ibook>("Book", bookSchema);
