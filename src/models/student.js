import mongoose from "mongoose";
const PerformanceSchema = new mongoose.Schema({
  score: Number,
  date: Date,
  review: String,
});
const StudentSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  name: String,
  class: String,
  performances: [PerformanceSchema],
});
export default mongoose.models.Student || mongoose.model("Student", StudentSchema);