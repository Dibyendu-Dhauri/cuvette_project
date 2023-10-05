import { useState } from "react";
import DetailsForm from "./components/DetailsForm";
import Card from "./components/Card";

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
  const [submit, setSubmit] = useState(false);

  const validateCardNumber = () => {
    if (
      !/^[0-9]+$/.test(cardDetails.cardNumber) ||
      cardDetails.cardNumber.length !== 16
    ) {
      return true;
    } else {
      return false;
    }
  };

  const validateCardHolderName = () => {
    if (!/^[a-zA-Z\s]+$/.test(cardDetails.cardHolderName)) {
      return true;
    } else {
      return false;
    }
  };

  const validateMonth = () => {
    if (
      !/^[0-9]+$/.test(cardDetails.expiryMonth) ||
      cardDetails.expiryMonth.length !== 2
    ) {
      return true;
    } else {
      return false;
    }
  };
  const validateYear = () => {
    if (
      !/^[0-9]+$/.test(cardDetails.expiryYear) ||
      cardDetails.expiryYear.length !== 2
    ) {
      return true;
    } else {
      return false;
    }
  };

  const validateCvc = () => {
    if (!/^[0-9]+$/.test(cardDetails.cvc) || cardDetails.cvc.length !== 3) {
      return true;
    } else {
      return false;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const cardHolderNameError = validateCardHolderName();
    const cardNumberError = validateCardNumber();
    const expiryMonthError = validateMonth();
    const expiryYearError = validateYear();
    const cvcError = validateCvc();
    setErrorDetails({
      cardHolderNameError: cardHolderNameError,
      cardNumberError: cardNumberError,
      expiryMonthError: expiryMonthError,
      expiryYearError: expiryYearError,
      cvcError: cvcError,
    });
    setSubmit(true)
  };

  return (
    <> 
    <div className="flex ">
      <div className="w-1/4 h-screen gradient-bg" />
      <div className="w-3/4 bg-gray-300">
        <DetailsForm cardDetails={cardDetails} setCardDetails={setCardDetails} 
        setErrorDetails={setErrorDetails}
        errorDetails={errorDetails} setSubmit={setSubmit}
        handleSubmit={handleSubmit} />
      </div>
  <Card 
  cardDetails={cardDetails} 
  errorDetails={errorDetails}
  submit={submit} />
   <div className={`fixed bottom-4 right-4 bg-green-500 text-white py-4 px-4 rounded-md ${(submit && !errorDetails.cardHolderNameError && !errorDetails.cardNumberError && !errorDetails.expiryMonthError && !errorDetails.expiryYearError && !errorDetails.cvcError) ? 'block' : 'hidden'}`}>
   Your payment has been processed..
    </div>
    </div>
    </>
  );
}

export default App;
