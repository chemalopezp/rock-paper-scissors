import { ResultType } from "../types";

interface Props {
  result: ResultType;
  onResetClick: Function;
}

const Result: React.FC<Props> = ({ result, onResetClick }) => {
  console.log("Winner ", result);
  return (
    <div className="m-4 p-4 max-w-lg mx-auto border-gray-500 border-2 rounded-xl shadow-lg flex items-center space-x-4">
      <div className="m-4 p-4 max-w-64 text-2xl font-bold uppercase flex flex-col text-left">
        {result === "player"
          ? "You win"
          : result === "computer"
          ? "You lose"
          : "Draw"}
      </div>
      <button
        onClick={() => onResetClick()}
        className="p-8 relative inset-y-0 right-0 rounded-xl shadow-lg text-2xl font-bold flex flex-col bg-white"
      >
        <p className="text-sky-700 uppercase">Play again</p>
      </button>
    </div>
  );
};

export default Result;
