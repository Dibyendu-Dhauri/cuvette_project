import { useNavigate } from "react-router-dom";


export default function Game(value) {

  const { choices, result, updateStatus } = value;

  const navigate = useNavigate();

  const playerImgSrc = choices.playerChoice + ".svg";
  const computerImgSrc = choices.computerChoice + ".svg";

  return (
    // <div className="relative bg-lightgreen w-full h-[46.13rem] overflow-hidden text-left text-[1.06rem] text-white font-roboto">

    <div className="bg-lightgreen">

      {result === "WIN" ? (
        <>
          <div className="absolute top-[19.38rem] left-[13.63rem] rounded-[50%] bg-forestgreen-200 shadow-[0px_1px_62px_rgba(0,_0,_0,_0.13)] w-[21.88rem] h-[21.88rem]" />

          <img
            className="absolute top-[20.94rem] left-[15rem]  w-[18.75rem] h-[18.75rem]"
            alt=""
            src="/Ellipse 3.svg"
          />
          <img
            className="absolute top-[22.5rem] left-[16.56rem] w-[15.63rem] h-[15.63rem]"
            alt=""
            src="/Ellipse 5.svg"
          />
          <img
            className="absolute top-[19.38rem] left-[13.63rem] w-[21.88rem] h-[21.88rem] "
            alt=""
            src="/Ellipse 4.svg"
          />
          <div>
            <img
              className="absolute top-[24.31rem] left-[18.44rem] w-[12.13rem] h-[12.13rem]"
              alt=""
              src="/Group 2.svg"
            />
            <img
              className="absolute top-[27.94rem] left-[21.75rem] w-[6rem] h-[4.66rem] object-cover"
              alt=""
              src={playerImgSrc}
            />
          </div>
        </>
      ) : (
        <>
          <div>
            <img
              className="absolute top-[24.31rem] left-[18.44rem] w-[12.13rem] h-[12.13rem]"
              alt=""
              src="/Group 2.svg"
            />
            <img
              className="absolute top-[27.94rem] left-[21.75rem] w-[6rem] h-[4.66rem] object-cover"
              alt=""
              src={playerImgSrc}
            />
          </div>
        </>
      )}

      {result === "LOST" ? (
        <>
          <div className="absolute top-[19.38rem] left-[46.56rem] rounded-[50%] bg-forestgreen-200 shadow-[0px_1px_62px_rgba(0,_0,_0,_0.13)] w-[21.88rem] h-[21.88rem]" />

          <img
            className="absolute top-[20.94rem] left-[47.94rem]  w-[18.75rem] h-[18.75rem]"
            alt=""
            src="/Ellipse 3.svg"
          />
          <img
            className="absolute top-[22.5rem] left-[49.5rem] w-[15.63rem] h-[15.63rem]"
            alt=""
            src="/Ellipse 5.svg"
          />
          <img
            className="absolute top-[19.38rem] left-[46.56rem] w-[21.88rem] h-[21.88rem] "
            alt=""
            src="/Ellipse 4.svg"
          />
          <div>
            <img
              className="absolute top-[24.31rem] left-[51.19rem] w-[12.13rem] h-[12.13rem]"
              alt=""
              src="/Group 1.svg"
            />

            <img
              className="absolute top-[27rem] left-[55.69rem] w-[3.61rem] h-[5.54rem] object-cover"
              alt=""
              src={computerImgSrc}
            />
          </div>
        </>
      ) : (
        <>
          <div>
            <img
              className="absolute top-[24.31rem] left-[51.19rem] w-[12.13rem] h-[12.13rem]"
              alt=""
              src="/Group 1.svg"
            />

            <img
              className="absolute top-[27rem] left-[55.69rem] w-[3.61rem] h-[5.54rem] object-cover"
              alt=""
              src={computerImgSrc}
            />
          </div>
        </>
      )}

      <div className="absolute top-[21.5rem] left-[20.81rem] tracking-[0.1em] font-semibold inline-block w-[7.06rem] h-[1rem]">
        YOU PICKED
      </div>
      <div className="absolute top-[21.5rem] left-[54.19rem] tracking-[0.1em] font-semibold inline-block w-[6.25rem] h-[1rem]">
        PC PICKED
      </div>
      <div className="absolute top-[34.19rem] left-[35.63rem] rounded-4xs bg-white w-[10.88rem] h-[2.75rem]" />
      <div
        className="absolute top-[35.06rem] left-[38.06rem] text-[0.94rem] font-semibold text-gray-100 inline-block w-[6.19rem] h-[0.88rem] hover:cursor-pointer"
        onClick={()=>updateStatus(false)}
      >
        {" "}
        PLAY AGAIN
      </div>

      <div className="absolute top-[28.38rem] left-[35.19rem] text-[2.44rem]  font-extrabold text-center inline-block w-[11.44rem] h-[2.25rem]">
        {result === "TIE UP" ? result : "YOU " + result}
      </div>
      <div className="absolute top-[31.31rem] left-[35.81rem] text-[1.56rem]  font-extrabold text-center inline-block w-[10.5rem] h-[1.94rem]">
        {result === "TIE UP" ? "" : "AGAINST PC"}
      </div>

  {result === "WIN" && 
  <> 
  <div className="absolute top-[42.06rem] left-[71.06rem] rounded-[10px] bg-gainsboro box-border w-[7.44rem] h-[2.5rem] border-[2px] border-solid border-white " />

  <div
    className="absolute top-[42.81rem] left-[72.94rem] text-[1.31rem] tracking-[0.1em] leading-[82.19%] font-semibold inline-block w-[3.75rem] h-[1rem] hover:cursor-pointer"
    onClick={() => navigate("/congrats")}
  >
    NEXT
  </div>
  </> }
    </div>
    //  </div>
  );
}
