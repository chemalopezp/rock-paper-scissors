import { useEffect, useState } from "react";
import Start from "./Start";
import Selections from "./Selections";

type Symbol = "rock" | "paper" | "scissors" | null;

interface Props {
  setScore: Function;
}
const Game: React.FC<Props> = () => {
  const [selection, setSelection]: [Symbol, Function] = useState(null);
  const [computerSelection, setComputerSelection]: [Symbol, Function] =
    useState(null);
  console.log(selection);
  console.log("computerSelection", computerSelection);

  useEffect(() => {
    if (selection !== null) {
      const dice = Math.random();
      if (dice < 0.34) {
        setComputerSelection("rock");
      } else if (dice <= 0.67) {
        setComputerSelection("paper");
      } else {
        setComputerSelection("scissors");
      }
    }
  }, [selection]);

  if (selection === null) {
    return <Start setSelection={setSelection} />;
  } else {
    return (
      <Selections selection={selection} computerSelection={computerSelection} />
    );
  }
};

export default Game;
