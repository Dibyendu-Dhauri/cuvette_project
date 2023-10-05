
const Card = ({errorDetails, cardDetails,submit}) => {
    return (
       <> 
        <div className="absolute top-[5rem] left-[5rem] rounded-3xs shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border w-[27.94rem] h-[15.38rem] overflow-hidden border-[1px] border-solid border-gray-200  ">
          <div className="absolute top-[0rem] left-[0rem] bg-blueviolet-200 w-[27.94rem] h-[15.38rem]" />
          <div className="absolute top-[14.81rem] left-[-4.19rem] rounded-[50%] bg-darkorchid w-[15.63rem] h-[7.38rem] [transform:_rotate(-34.62deg)] [transform-origin:0_0]" />
          <div className="absolute top-[5.62rem] left-[11.49rem] rounded-[50%] bg-salmon w-[18.77rem] h-[11.55rem] [transform:_rotate(-34.62deg)] [transform-origin:0_0]" />
          <div className="absolute top-[5.97rem] left-[7.94rem] rounded-[50%] bg-orchid w-[14.38rem] h-[5.37rem] [transform:_rotate(-38.59deg)] [transform-origin:0_0]" />
          <div className="absolute top-[18.86rem] left-[2.06rem] rounded-[50%] bg-cornflowerblue w-[23.81rem] h-[8.92rem] [transform:_rotate(-41.78deg)] [transform-origin:0_0]" />
          <div className="absolute top-[17.02rem] left-[16.81rem] rounded-[50%] bg-indigo w-[20.82rem] h-[7.98rem] [transform:_rotate(-45.65deg)] [transform-origin:0_0]" />
          <div className="absolute top-[1.88rem] left-[2.06rem] rounded-[50%] bg-gray-100 w-[2.94rem] h-[2.94rem]" />
          <div className="absolute top-[2.78rem] left-[5.97rem] rounded-[50%] [background:linear-gradient(127.75deg,_#623ff2,_#5e37ec)] box-border w-[1.38rem] h-[1.38rem] border-[1.5px] border-solid border-white" />
          <div className="absolute top-[9.06rem] left-[2.06rem] tracking-[0.18em] font-inter inline-block w-[22.94rem] h-[1.69rem] text-[1.5rem] text-white">
            {(!errorDetails.cardNumberError && submit ) ? ((cardDetails.cardNumber.slice(0,4)) + " " + 
           (cardDetails.cardNumber.slice(4,8)) + " "+ 
           (cardDetails.cardNumber.slice(8,12)) + " " +
           (cardDetails.cardNumber.slice(12,16)) ):  "0000 0000 0000 0000"}
          </div>
          <b className="absolute top-[12.81rem] left-[2.06rem] text-[1rem] tracking-[0.19em] inline-block w-[9.69rem] h-[0.69rem]">
            {(!errorDetails.cardHolderNameError && submit) ? (
                cardDetails.cardHolderName
            ): "NAME"}
          </b>
          <b className="absolute top-[12.75rem] left-[22.38rem] text-[1rem] tracking-[0.24em] inline-block w-[3.19rem] h-[0.81rem]">
            {(!errorDetails.expiryMonthError && submit) ? (
                cardDetails.expiryMonth
            ): "00"}/{(!errorDetails.expiryYearError && submit) ? (
                cardDetails.expiryYear
            ): "00"}
          </b>
        </div>
        
        <div className="absolute shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[27.94rem] h-[15.38rem] text-left text-[0.88rem] text-white font-roboto top-[25rem] left-[10rem] bg-gray-300 rounded-3xs">
      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
        
        <div className="absolute h-[21.14%] w-full top-[9.35%] right-[0%] bottom-[69.51%] left-[0%] bg-black" />
        <div className="absolute h-[15.45%] w-[80.58%] top-[39.84%] right-[9.82%] bottom-[44.72%] left-[9.6%] rounded bg-silver" />
        <b className="absolute h-[5.69%] w-[7.37%] top-[44.72%] left-[78.79%] tracking-[0.24em] inline-block">
          {(!errorDetails.cvcError && submit) ? (cardDetails.cvc) : "000"}
        </b>
        <div className="absolute h-[2.03%] w-[25.67%] top-[70.33%] right-[45.09%] bottom-[27.64%] left-[29.24%] rounded bg-darkgray" />
        <div className="absolute h-[2.03%] w-[4.91%] top-[70.33%] right-[38.62%] bottom-[27.64%] left-[56.47%] rounded bg-darkgray" />
        <div className="absolute h-[2.03%] w-[4.91%] top-[76.42%] right-[62.72%] bottom-[21.54%] left-[32.37%] rounded bg-darkgray" />
        <div className="absolute h-[2.03%] w-[4.91%] top-[82.11%] right-[62.5%] bottom-[15.85%] left-[32.59%] rounded bg-darkgray" />
        <div className="absolute h-[2.03%] w-[4.69%] top-[82.11%] right-[56.25%] bottom-[15.85%] left-[39.06%] rounded bg-darkgray" />
        <div className="absolute h-[2.03%] w-[13.62%] top-[76.42%] right-[47.99%] bottom-[21.54%] left-[38.39%] rounded bg-darkgray" />
        <div className="absolute h-[2.03%] w-[25.45%] top-[82.11%] right-[29.24%] bottom-[15.85%] left-[45.31%] rounded bg-darkgray" />
        <div className="absolute h-[2.03%] w-[10.27%] top-[76.42%] right-[36.38%] bottom-[21.54%] left-[53.35%] rounded bg-darkgray" />
        <div className="absolute h-[2.03%] w-[4.46%] top-[70.33%] right-[32.81%] bottom-[27.64%] left-[62.72%] rounded bg-darkgray" />
        <div className="absolute h-[2.03%] w-[2.01%] top-[70.33%] right-[29.24%] bottom-[27.64%] left-[68.75%] rounded bg-darkgray" />
        <div className="absolute h-[2.03%] w-[2.01%] top-[76.42%] right-[33.04%] bottom-[21.54%] left-[64.96%] rounded bg-darkgray" />
        <div className="absolute h-[2.03%] w-[2.01%] top-[82.11%] right-[68.75%] bottom-[15.85%] left-[29.24%] rounded bg-darkgray" />
      </div>
    </div>
        </>
    );
  };
  
  export default Card;
  
  