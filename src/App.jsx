import { useState } from "react";
import QuizScreen from "./components/QuizScreen";
import StartScreen from "./components/Startscreen";

function App() {
  const [isQuizStarted, setIsQuizStarted] = useState(false);

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-[url('/images/intro-page.png')] bg-no-repeat bg-center bg-cover text-center">
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
