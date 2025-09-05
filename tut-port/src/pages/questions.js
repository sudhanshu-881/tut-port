import { useEffect, useState } from "react";
import QuestionPaper from "../components/QuestionPaper";
export default function QuestionsPage() {
  const [questions, setQuestions] = useState([]);
  useEffect(() => {
    fetch("/api/questions")
      .then(res => res.json())
      .then(data => setQuestions(data.questions));
  }, []);
  return <QuestionPaper questions={questions} />;
}