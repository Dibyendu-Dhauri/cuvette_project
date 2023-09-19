import { useState } from "react"


export default function Rules() {
    const [visible, setVisible] = useState(false);
  return (
    <>
    <div className="absolute top-[42.19rem] left-[86rem] rounded-[10px] bg-gainsboro box-border w-[7.44rem] h-[2.5rem] border-[2px] border-solid border-white hover:cursor-pointer" />
      <div className="absolute top-[42.69rem] left-[87.5rem] text-[1.31rem] tracking-[0.1em] font-semibold inline-block w-[4.5rem] h-[1.25rem] hover:cursor-pointer" onClick={()=>setVisible(!visible)} >
        RULES
      </div>
      { visible &&  (

<div className="absolute top-[18rem] left-[73.25rem] w-[18.94rem] h-[22.94rem] text-[0.81rem]">
  <div className="absolute top-[2.63rem] left-[0rem] rounded-smi bg-darkslategray box-border w-[17.38rem] h-[20.31rem] overflow-hidden border-[7px] border-solid border-white">
    <div className="absolute top-[1.56rem] left-[3.81rem] text-[1.81rem] font-medium inline-block w-[9.75rem] h-[1.69rem]">
      Game Rules
    </div>
    <div className="absolute top-[5.75rem] left-[1.69rem] bg-gold w-[0.5rem] h-[0.5rem]" />
    <div className="absolute top-[8.63rem] left-[1.69rem] bg-gold w-[0.5rem] h-[0.5rem]" />
    <div className="absolute top-[5rem] left-[2.88rem] inline-block w-[13.19rem] h-[1.69rem]">
      Rock beats scissors, scissors beat paper, and paper beats rock.
    </div>
    <div className="absolute top-[7.81rem] left-[2.88rem] inline-block w-[13.5rem] h-[2.69rem]">
      Agree ahead of time whether you’ll count off “rock, paper, scissors,
      shoot” or just “rock, paper, scissors.”
    </div>
    <div className="absolute top-[12.38rem] left-[1.69rem] bg-gold w-[0.5rem] h-[0.5rem]" />
    <div className="absolute top-[16.06rem] left-[1.69rem] bg-gold w-[0.5rem] h-[0.5rem]" />
    <div className="absolute top-[11.63rem] left-[2.88rem] inline-block w-[13.19rem] h-[1.69rem]">
      Use rock, paper, scissors to settle minor decisions or simply play
      to pass the time
    </div>
    <div className="absolute top-[15.25rem] left-[2.88rem] inline-block w-[13.5rem] h-[3rem]">
      If both players lay down the same hand, each player lays down
      another hand
    </div>
  </div>
  <div className="absolute top-[0.44rem] left-[15.5rem] rounded-[50%] bg-red box-border w-[3.75rem] h-[3.75rem] border-[5px] border-solid border-white" />
  <div onClick={()=>setVisible(false)} className="absolute top-[0rem] left-[16.63rem] text-[2.75rem] font-dangrek inline-block w-[1.5rem] h-[3.31rem] hover:cursor-pointer">
    X
  </div>
</div>
)
}
    </>
  )
}
