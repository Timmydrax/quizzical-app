export default function StartScreen({ onStart }) {
  return (
    <>
      <div className="flex flex-col items-center p-4 gap-4">
        <h1 className="text-[#293264] text-4xl font-semibold">Quizzical</h1>
        <p>A random quiz app to test your knowledge.</p>
        <button
          className="bg-[#4D5B9E] px-6 py-2 text-white rounded cursor-pointer hover:bg-blue-900 transition"
          onClick={onStart}
        >
          Start Quiz
        </button>
      </div>
    </>
  );
}
