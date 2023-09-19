

export default function ScoreBoard(score) {
// console.log(score.score)
  return (
    <> 
     <div className="absolute top-[3.75rem] left-[14.88rem] rounded-smi bg-darkslateblue box-border w-[50.25rem] h-[10.13rem] border-[2px] border-solid border-white" />
     
    <div className="absolute top-[4.81rem] left-[55.06rem] rounded-4xs bg-white w-[8.69rem] h-[8rem]" />
      <div className="absolute top-[4.88rem] left-[16.13rem] text-[2.5rem] tracking-[0.1em] font-semibold inline-block w-[8.44rem] h-[2.31rem]">
        ROCK
      </div>
      <div className="absolute top-[7.5rem] left-[16.13rem] text-[2.5rem] tracking-[0.1em] font-semibold inline-block w-[9.38rem] h-[2.31rem]">
        PAPER
      </div>
      <div className="absolute top-[10.19rem] left-[16.19rem] text-[2.5rem] tracking-[0.1em] font-semibold inline-block w-[14.69rem] h-[2.31rem]">
        SCISSORS
      </div>
      <div className="absolute top-[5.25rem] left-[57.88rem] tracking-[0.1em] font-semibold text-dimgray inline-block w-[3.13rem] h-[1rem]">
        YOUR
      </div>
      <b className="absolute top-[6.63rem] left-[57.5rem] tracking-[0.1em] inline-block text-dimgray w-[3.81rem] h-[1rem]">
        SCORE
      </b>
      <b className="absolute top-[8rem] left-[56.88rem] text-[4.25rem] inline-block text-gray-100 text-center w-[4.94rem] h-[3.94rem]">
       {score.score.playerScore}
       
      </b>
      <div className="absolute top-[4.81rem] left-[44.56rem] rounded-4xs bg-white w-[8.69rem] h-[8rem]" />
      <div className="absolute top-[5.25rem] left-[45.63rem] tracking-[0.1em] font-semibold text-dimgray">
        COMPUTER
      </div>
      <b className="absolute top-[6.63rem] left-[47rem] tracking-[0.1em] inline-block text-dimgray w-[3.81rem] h-[1rem]">
        SCORE
      </b>
      <b className="absolute top-[8rem] left-[46.38rem] text-[4.25rem] inline-block text-gray-100 text-center w-[4.94rem] h-[3.94rem]">
        {score.score.computerScore}
        
      </b>
      </>

  )
}
