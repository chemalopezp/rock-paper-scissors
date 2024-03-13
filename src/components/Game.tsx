import { useEffect, useState } from "react";
import Start from "./Start";
import Selections from "./Selections";
import Result from "./Result";

import type { Selection, ResultType } from "../types";

interface Props {
  score: Number;
  setScore: Function;
}
const Game: React.FC<Props> = ({ score, setScore }) => {
  const [selection, setSelection]: [Selection, Function] = useState(undefined);
  const [computerSelection, setComputerSelection]: [Selection, Function] =
    useState(undefined);
  const [result, setResult]: [ResultType, Function] = useState(undefined);

  useEffect(() => {
    if (selection !== undefined) {
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

  useEffect(() => {
    if (computerSelection === selection) {
      setResult("draw");
    } else if (
      (selection === "paper" && computerSelection === "rock") ||
      (selection === "rock" && computerSelection === "scissors") ||
      (selection === "scissors" && computerSelection === "paper")
    ) {
      setResult("player");
      setScore(score + 1);
    } else {
      setResult("computer");
    }
  }, [computerSelection]);

  const onResetClick = () => {
    setSelection(undefined);
    setComputerSelection(undefined);
    setResult(undefined);
  };

  if (selection === undefined) {
    return <Start setSelection={setSelection} />;
  } else {
    return (
      <>
        <Selections
          selection={selection}
          computerSelection={computerSelection}
        />
        {result !== undefined ? (
          <Result result={result} onResetClick={onResetClick} />
        ) : null}
      </>
    );
  }
};

export default Game;
