import dbConnect from "../../../lib/dbConnect";
import User from "../../../models/user";
export default async function handler(req, res) {
  if (req.method === "POST") {
    await dbConnect();
    const { email, password } = req.body;
    const user = await User.findOne({ email, password });
    if (user) res.status(200).json({ user });
    else res.status(401).json({ error: "Invalid credentials" });
  }
}