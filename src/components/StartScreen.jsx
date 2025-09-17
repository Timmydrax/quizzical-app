export default function StartScreen({ onStart }) {
  return (
    <>
      <div>
        <h1>Quizzical</h1>
        <p>A random quiz app to test your knowledge.</p>
        <button onClick={onStart}>Start Quiz</button>
      </div>
    </>
  );
}
