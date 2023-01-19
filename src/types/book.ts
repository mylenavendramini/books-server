import { Document } from "mongoose";

export interface Ibook extends Document {
  name: string;
  category: string;
  imageUrl: string;
  price: number;
  pages: number;
  date: Date;
  description: string;
  firstCap: string;
  jornal: string;
  review: string;
  status: boolean;
  show: boolean;
}
