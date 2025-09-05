import mongoose from "mongoose";
const QuestionSchema = new mongoose.Schema({
  text: String,
  options: [String],
  answer: String, // correct answer
  formatting: Object, // e.g. {type: "MCQ", section: "Math"}
});
export default mongoose.models.Question || mongoose.model("Question", QuestionSchema);