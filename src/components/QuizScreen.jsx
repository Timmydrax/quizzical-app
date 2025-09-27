import { useState, useEffect } from "react";

export default function QuizScreen() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch(
      "https://opentdb.com/api.php?amount=5&category=9&difficulty=easy&type=multiple"
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data.results);
      });
  }, []);

  return (
    <>
      <div className="flex flex-col items-center p-4 gap-4">
        <h2 className="text-2xl font-semibold">Quiz Started!</h2>
        <p className="mt-4 text-gray-600">Questions will appear here...</p>
      </div>
    </>
  );
}
