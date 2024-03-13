interface Props {
  score: number;
}

const Score: React.FC<Props> = ({ score }) => {
  return (
    <div className="m-4 p-4 max-w-lg mx-auto border-gray-500 border-2 rounded-xl shadow-lg flex items-center space-x-4">
      <div className="m-4 p-4 max-w-64 text-2xl font-bold uppercase flex flex-col text-left">
        Rock Paper Scissors
      </div>
      <div className="p-8 relative inset-y-0 right-0 rounded-xl shadow-lg text-2xl font-bold flex flex-col bg-white">
        <p className="text-sky-700 uppercase">Score</p>
        <p className="text-sky-800">{score}</p>
      </div>
    </div>
  );
};

export default Score;
