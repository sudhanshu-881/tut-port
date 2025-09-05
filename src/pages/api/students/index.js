import dbConnect from "../../../lib/dbConnect";
import Student from "../../../models/student";
export default async function handler(req, res) {
  await dbConnect();
  if (req.method === "GET") {
    // Query by userId or other criteria
    const { userId } = req.query;
    const student = await Student.findOne({ userId });
    res.status(200).json({ student });
  }
  if (req.method === "POST") {
    const { userId, name, class: studentClass } = req.body;
    const student = await Student.create({ userId, name, class: studentClass });
    res.status(201).json({ student });
  }
  if (req.method === "PUT") {
    // Add performance
    const { userId, score, review } = req.body;
    const student = await Student.findOne({ userId });
    student.performances.push({ score, date: new Date(), review });
    await student.save();
    res.status(200).json({ student });
  }
}