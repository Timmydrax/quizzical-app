export default function StartScreen({ onStart }) {
  return (
    <>
      <div>
        <h1>Quizzical</h1>
        <h2></h2>
        <button onClick={onStart}>Start Quiz</button>
      </div>
    </>
  );
}
