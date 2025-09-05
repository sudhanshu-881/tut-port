import { useEffect, useState } from "react";
import Performance from "../components/Performance";
export default function PerformancePage() {
  const [student, setStudent] = useState(null);
  useEffect(() => {
    // Assume userId is available via auth context
    const userId = "USER_ID_FROM_AUTH";
    fetch(`/api/students?userId=${userId}`)
      .then(res => res.json())
      .then(data => setStudent(data.student));
  }, []);
  return student && <Performance student={student} />;
}