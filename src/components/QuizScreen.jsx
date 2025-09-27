import { useState, useEffect } from "react";

export default function QuizScreen() {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  function shuffleArray(array) {
    return array
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);
  }

  useEffect(() => {
    fetch(
      "https://opentdb.com/api.php?amount=5&category=9&difficulty=easy&type=multiple"
    )
      .then((res) => res.json())
      .then((data) => {
        // Formatted quizzes
        const formattedQuizzes = data.results.map((ques, index) => ({
          id: index,
          questions: ques.question,
          correctAnswer: ques.correct_answer,
          options: shuffleArray([
            ...ques.incorrect_answers,
            ques.correct_answer, // Fixed: was "correct_answers"
          ]),
          selected: null,
        }));

        setQuestions(formattedQuizzes);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err.message);
        setError("Failed to load questions");
        setLoading(false);
      });
  }, []);

  const handleAnswerSelect = (questionId, selectedAnswer) => {
    setQuestions((prev) =>
      prev.map((q) =>
        q.id === questionId ? { ...q, selected: selectedAnswer } : q
      )
    );
  };

  if (loading)
    return <div className="text-center p-4">Loading questions...</div>;
  if (error) return <div className="text-center p-4 text-red-500">{error}</div>;

  return (
    <div className="flex flex-col items-center p-4 gap-6 max-w-2xl mx-auto">
      <h2 className="text-2xl font-semibold">Quiz Started!</h2>

      <div className="w-full space-y-6">
        {questions.map((ques) => (
          <div
            key={ques.id}
            className="bg-white border rounded-lg p-6 shadow-sm"
          >
            <h3
              className="text-lg font-medium mb-4"
              dangerouslySetInnerHTML={{ __html: ques.questions }}
            />

            <div className="space-y-2">
              {ques.options.map((option, optionIndex) => (
                <button
                  key={optionIndex}
                  onClick={() => handleAnswerSelect(ques.id, option)}
                  className={`w-full text-left p-3 rounded border transition-colors ${
                    ques.selected === option
                      ? "bg-blue-100 border-blue-300"
                      : "bg-gray-50 border-gray-200 hover:bg-gray-100"
                  }`}
                  dangerouslySetInnerHTML={{ __html: option }}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
