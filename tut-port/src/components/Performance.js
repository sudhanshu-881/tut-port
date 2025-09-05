export default function Performance({ student }) {
  return (
    <div>
      <h2>{student.name} - Performance</h2>
      <div>Class: {student.class}</div>
      <h3>Past Scores & Reviews:</h3>
      <ul>
        {student.performances.map((p, i) => (
          <li key={i}>
            Date: {new Date(p.date).toLocaleDateString()} - Score: {p.score}
            <br/>Review: {p.review}
          </li>
        ))}
      </ul>
    </div>
  );
}