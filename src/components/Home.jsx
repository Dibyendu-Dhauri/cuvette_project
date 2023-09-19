import { useEffect, useState } from "react";

import ScoreBoard from "./ScoreBoard";
import Rules from "./Rules";
import Game from "./Game";

export default function Home() {
  const [scoreValue, setScoreValue] = useState(() => {
    const score = JSON.parse(localStorage.getItem("score"));
    return score ? score : { playerScore: 0, computerScore: 0 };
  });

  const [result, setResult] = useState("");

  const [gameOn, setGameOn] = useState(false);

  const [choices, setChoices] = useState({
    playerChoice: "",
    computerChoice: "",
  });

  useEffect(() => {
    localStorage.setItem("score", JSON.stringify(scoreValue));
  }, [scoreValue]);

  const updateStatus = (value) => {
    setGameOn(value);
  };

  const findComputerChoice = () => {
    const choices = ["rock", "paper", "scissor"];
    const index = Math.floor(Math.random() * choices.length);
    return choices[index];
  };

  const handleClick = (choice) => {
    const playerChoice = choice.toLowerCase();
    const computerchoice = findComputerChoice().toLowerCase();
    setChoices({ playerChoice: playerChoice, computerChoice: computerchoice });
    if (
      (playerChoice === "rock" && computerchoice === "scissor") ||
      (playerChoice === "paper" && computerchoice === "rock") ||
      (playerChoice === "scissor" && computerchoice === "paper")
    ) {
      setScoreValue({ ...scoreValue, playerScore: scoreValue.playerScore + 1 });
      setResult("WIN");
    } else if (playerChoice === computerchoice) {
      setScoreValue({ ...scoreValue });
      setResult("TIE UP");
    } else {
      setScoreValue({
        ...scoreValue,
        computerScore: scoreValue.computerScore + 1,
      });
      setResult("LOST");
    }

    updateStatus(true);
  };

  return (
    <div className="relative bg-lightgreen w-full h-[46.13rem] overflow-hidden text-left text-[1.06rem] text-white font-roboto">
      <ScoreBoard score={scoreValue} />
      <Rules />
      {gameOn ? (
        <Game choices={choices} result={result} updateStatus={updateStatus} />
      ) : (
        <>
          <img
            className="absolute top-[27.5rem] left-[42.88rem] w-[4.18rem] h-[6.31rem]"
            alt=""
            src="/Line 2.svg"
          />
          <img
            className="absolute top-[27.48rem] left-[34.19rem] w-[4.13rem] h-[6.34rem]"
            alt=""
            src="/Line 3.svg"
          />
          <div className="absolute top-[24.09rem] left-[35.91rem] box-border w-[9.25rem] h-[0.94rem] border-t-[15px] border-solid border-gray-200" />

          <div
            className="hover:cursor-pointer"
            onClick={() => handleClick("paper")}
          >
            <img
              className="absolute top-[31.69rem] left-[35.44rem] w-[10.25rem] h-[10.25rem]"
              alt=""
              src="/Group 1.svg"
            />

            <img
              className="absolute top-[34.5rem] left-[38.38rem] w-[4.5rem] h-[4.5rem] object-cover"
              alt=""
              src="/paper.svg"
            />
          </div>

          <div
            className="hover:cursor-pointer"
            onClick={() => handleClick("rock")}
          >
            <img
              className="absolute top-[18.94rem] left-[28.06rem] w-[10.25rem] h-[10.25rem]"
              alt=""
              src="/Group 2.svg"
            />

            <img
              className="absolute top-[21.94rem] left-[30.75rem] w-[5rem] h-[3.66rem] object-cover"
              alt=""
              src="/rock.svg"
            />
          </div>
          <div
            className="hover:cursor-pointer"
            onClick={() => handleClick("scissor")}
          >
            <img
              className="absolute top-[18.94rem] left-[42.81rem] w-[10.25rem] h-[10.25rem]"
              alt=""
              src="/Group 3.svg"
            />
            <img
              className="absolute top-[22rem] left-[46.69rem] w-[2.61rem] h-[3.54rem] object-cover"
              alt=""
              src="/scissor.svg"
            />
          </div>
        </>
      )}
    </div>
  );
}
