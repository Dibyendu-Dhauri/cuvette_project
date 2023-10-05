import React from "react";

export default function DetailsForm({
  cardDetails,
  setCardDetails,
  errorDetails,
  setErrorDetails,
  setSubmit,
  handleSubmit
}) {
  return (
    <div className="flex justify-center items-center h-full">
      <div className=" p-8 rounded-lg shadow-lg">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className=" text-gray-700 font-bold">CARDHOLDER NAME</label>
            <input
              type="text"
              className="form-input w-full mt-1 border border-gray-900 p-2 outline-none rounded-lg
              bg-transparent "
              placeholder="e.g. John Doe"
              // required
              value={cardDetails.cardHolderName}
              onChange={(e) => {
                setCardDetails({
                  ...cardDetails,
                  cardHolderName: e.target.value,
                });
                setSubmit(false);
              }}

            />
            {errorDetails.cardHolderNameError && (
              <div className="text-red-600">
                'Cardholder name should contain only letters and spaces'
              </div>
            )}
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold"
            >
              CARD NUMBER
            </label>
            <input
              type="text"
              className="form-input w-full mt-1 border border-gray-900 p-2 outline-none rounded-lg
              bg-transparent "
              placeholder="e.g. 1234 5678 9012 3456"
              // required
              value={cardDetails.cardNumber}
              onChange={(e) => {
                setCardDetails({
                  ...cardDetails,
                  cardNumber: e.target.value,
                });
                setSubmit(false);
              }}
              // onFocus={setSubmit(false)}
            />
            {errorDetails.cardNumberError && (
              <div className="text-red-600">
                'Card Number should be numeric'
              </div>
            )}
          </div>

          <div className="flex mb-4">
            <div className="">
              <label className="block text-gray-700 font-bold ">
                EXP. DATE (MM/YY)
              </label>
              <div className="flex">
                <input
                  type="text"
                  className="form-input w-1/3 mt-1 mr-2 border border-gray-900 p-2 outline-none rounded-lg
                bg-transparent "
                  placeholder="MM"
                  //   required
                  value={cardDetails.expiryMonth}
                  onChange={(e) =>{
                    setCardDetails({
                      ...cardDetails,
                      expiryMonth: e.target.value,
                    })
                    setSubmit(false);
                  }
                  }
                />

                <input
                  type="text"
                  className="form-input w-1/3 mt-1 border border-gray-900 p-2 outline-none rounded-lg
                bg-transparent "
                  placeholder="YY"
                  //   required
                  value={cardDetails.expiryYear}
                  onChange={(e) =>{
                    setCardDetails({
                      ...cardDetails,
                      expiryYear: e.target.value,
                    })
                    setSubmit(false);
                  }
                  }
                />
              </div>

              {(errorDetails.expiryMonthError || errorDetails.expiryYearError) && (
                <div className="text-red-600">
                  'Exp. Date should be Numeric'
                </div>
              )}
            </div>

            <div className="">
              <label className="block text-gray-700 font-bold">CVC</label>
              <input
                type="text"
                className="form-input  mt-1 border border-gray-900 p-2 outline-none rounded-lg
              bg-transparent "
                placeholder="e.g. 123"
                //   required
                value={cardDetails.cvc}
                onChange={(e) => {
                  setCardDetails({
                    ...cardDetails,
                    cvc: e.target.value,
                  });
                  setSubmit(false);
                }}
              />
              {errorDetails.cvcError && (
                <div className="text-red-600">'CVC should be Numeric'</div>
              )}
            </div>
          </div>

          <button
            type="submit"
            className="bg-violet-900 text-white px-4 py-3 rounded-md w-full border-none "
          >
            Confirm
          </button>
        </form>
      </div>
    </div>
  );
}
