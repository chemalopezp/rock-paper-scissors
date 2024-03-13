type Symbol = "rock" | "paper" | "scissors" | null;

interface Props {
  selection: Symbol;
  computerSelection: Symbol;
}

const border = (icon: Symbol) => {
  switch (icon) {
    case "rock":
      return "border-red-500";
    case "paper":
      return "border-sky-500";
    case "scissors":
      return "border-yellow-500";
    default:
      return "";
  }
};

const Selections: React.FC<Props> = ({ selection, computerSelection }) => {
  return (
    <div className="m-64 relative mt-4 flex justify-center items-center">
      <div className="relative transform -translate-x-32 translate-y-1/2 flex flex-col justify-center items-center">
        <p className="text-2xl uppercase font-bold text-white">You picked</p>
        <img
          className={`m-2 rounded-full shadow-lg bg-white p-8 rounded-full border-8 shadow-lg ${border(
            selection
          )}`}
          src={`icon-${selection}.svg`}
          alt="Selection icon"
        />
      </div>
      <div className="absolute transform translate-x-32 translate-y-1/2 flex flex-col justify-center items-center">
        <p className="text-2xl uppercase font-bold text-white">
          The House picked
        </p>
        <img
          className={`m-2 rounded-full shadow-lg bg-white p-8 rounded-full border-8 shadow-lg ${border(
            computerSelection
          )}`}
          src={`icon-${computerSelection}.svg`}
          alt="Paper icon"
        />
      </div>
    </div>
  );
};

export default Selections;
