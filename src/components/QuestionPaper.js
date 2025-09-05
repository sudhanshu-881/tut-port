export default function QuestionPaper({ questions }) {
  return (
    <div>
      <h1>Question Paper</h1>
      {questions.map((q, i) => (
        <div key={i} style={{margin: "1em 0"}}>
          <div>{q.text}</div>
          {q.options && (
            <ul>
              {q.options.map((opt, j) => <li key={j}>{opt}</li>)}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}