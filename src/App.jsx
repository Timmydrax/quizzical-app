import { useState } from "react";
import QuizScreen from "./components/QuizScreen";
import StartScreen from "./components/Startscreen";

function App() {
  const [isQuizStarted, setIsQuizStarted] = useState(false);

  return (
    <>
      <div>
        {!isQuizStarted ? (
          <StartScreen onStart={() => setIsQuizStarted(true)} />
        ) : (
          <QuizScreen />
        )}
      </div>
    </>
  );
}

export default App;
