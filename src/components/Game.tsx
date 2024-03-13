import { useState } from "react";

type Symbol = "rock" | "paper" | "scissors" | null;

interface Props {
  setScore: Function;
}
const Game: React.FC<Props> = () => {
  const [selection, setSelection]: [Symbol, Function] = useState(null);
  console.log(selection);
  return (
    <div className="m-8 relative mt-24 flex justify-center items-center">
      <img src="./bg-triangle.svg" alt="Triangle background" />
      <div className="absolute">
        <button
          className="p-4 relative transform -translate-x-12 -translate-y-32 bg-white p-8 rounded-full border-8 border-sky-500 shadow-lg hover:border-sky-800"
          onClick={() => setSelection("paper")}
        >
          <img
            className="rounded-full shadow-lg"
            src="icon-paper.svg"
            alt="Paper icon"
          />
        </button>
        <button
          className="p-4 relative transform translate-y-3/4 bg-white p-8 rounded-full border-8 border-red-500 shadow-lg hover:border-red-800"
          onClick={() => setSelection("rock")}
        >
          <img
            className="rounded-full shadow-lg"
            src="icon-rock.svg"
            alt="Rock icon"
          />
        </button>
        <button
          className="p-4 relative transform translate-x-12 -translate-y-32 bg-white p-8 rounded-full border-8 border-yellow-500 shadow-lg hover:border-yellow-800"
          onClick={() => setSelection("scissors")}
        >
          <img
            className="rounded-full shadow-lg"
            src="icon-scissors.svg"
            alt="Scissors icon"
          />
        </button>
      </div>
    </div>
  );
};

export default Game;
