import dbConnect from "../../../lib/dbConnect";
import Question from "../../../models/question";
export default async function handler(req, res) {
  await dbConnect();
  if (req.method === "GET") {
    const questions = await Question.find({});
    res.status(200).json({ questions });
  }
  if (req.method === "POST") {
    const { text, options, answer, formatting } = req.body;
    const question = await Question.create({ text, options, answer, formatting });
    res.status(201).json({ question });
  }
}