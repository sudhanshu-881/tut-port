import mongoose from "mongoose";
const MONGODB_URI = process.env.MONGODB_URI;
export default async function dbConnect() {
  if (mongoose.connection.readyState >= 1) return;
  return mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
}