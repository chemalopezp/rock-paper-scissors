import { useState } from "react";

import "./App.css";
import Score from "./components/Score";
import ShowRulesModal from "./components/ShowRulesModal";
import Game from "./components/Game";

function App() {
  const [score, setScore] = useState(0);

  return (
    <div className="p-4 m-4 bg-blue-950">
      <Score score={score} />
      <Game setScore={setScore} />
      <ShowRulesModal />
    </div>
  );
}

export default App;
