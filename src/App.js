import { useState } from "react";
import DetailsForm from "./components/DetailsForm";

function App() {

  const [cardDetails, setCardDetails] = useState({
    cardHolderName: "",
    cardNumber: "",
    expiryMonth: "",
    expiryYear: "",
    cvc:""
  })
  
  const [errorDetails, setErrorDetails] = useState({
    cardHolderNameError: false,
    cardNumberError: false,
    expiryMonthError: false,
    expiryYearError:false,
    cvcError:false
  })
  return (
    <div className="flex ">
      <div className="w-1/4 h-screen gradient-bg" />
      <div className="w-3/4 bg-gray-300">
        <DetailsForm cardDetails={cardDetails} setCardDetails={setCardDetails} 
        setErrorDetails={setErrorDetails}
        errorDetails={errorDetails} />
      </div>
    </div>
  );
}

export default App;
