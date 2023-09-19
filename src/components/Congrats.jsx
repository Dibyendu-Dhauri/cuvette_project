import Rules from "./Rules";
import { useNavigate } from "react-router-dom";

export default function Congrats() {
  const navigate = useNavigate();
  return (
    <div className="relative bg-lightgreen w-full h-[46.13rem] overflow-hidden text-center text-[5.69rem] text-white font-roboto">
      <img
        className="absolute h-[27.24%] w-[15.66%] top-[25.61%] right-[40.83%] bottom-[47.15%] left-[36.52%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/Vector.svg"
      />
      <img
        className="absolute top-[12.38rem] left-[24.25rem] "
        alt=""
        src="/Star 1.svg"
      />
      <img
        className="absolute top-[22.38rem] left-[30.25rem] "
        alt=""
        src="/Star 5.svg"
      />
      <img
        className="absolute top-[8.38rem] left-[30.25rem] "
        alt=""
        src="/Star 9.svg"
      />
      <img
        className="absolute top-[6.38rem] left-[35.25rem] "
        alt=""
        src="/Star 3.svg"
      />
      <img
        className="absolute top-[8.38rem] left-[39.25rem] "
        alt=""
        src="/Star 4.svg"
      />
      <img
        className="absolute top-[4.38rem] left-[45.25rem] "
        alt=""
        src="/Star 2.svg"
      />
      <img
        className="absolute top-[11.38rem] left-[52.25rem] "
        alt=""
        src="/Star 7.svg"
      />
      <img
        className="absolute top-[16.38rem] left-[52.25rem] "
        alt=""
        src="/Star 6.svg"
      />
      <div className="absolute top-[26.38rem] left-[27.25rem] tracking-[0.1em] font-semibold inline-block w-[29rem] h-[5.38rem]">
        HURRAY!!
      </div>
      <div className="absolute top-[33.31rem] left-[27.63rem] text-[2.56rem] tracking-[0.1em] font-semibold">
        YOU WON THE GAME
      </div>
      <div className="absolute top-[39.94rem] left-[36.31rem] rounded-[9px] bg-white w-[10.88rem] h-[2.75rem]" />
      <div className="absolute top-[40.81rem] left-[38.75rem] text-[0.94rem]  font-semibold text-dimgray text-left inline-block w-[6.19rem] h-[0.88rem] hover:cursor-pointer" onClick={()=>navigate('/')}>
        PLAY AGAIN
      </div>
      <Rules/>
    </div>
  );
}
