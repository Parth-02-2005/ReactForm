import React from "react";

const StepTwo = ({
  addressLine1,
  setAddressLine1,
  addressLine2,
  setAddressLine2,
  city,
  setCity,
  state,
  setState,
  pincode,
  setPincode,
  country,
  setCountry,
  nextStep,
  prevStep
}) => {
  return (
    <div className="space-y-4">

      <h2 className="text-xl font-semibold text-gray-800">Address Details</h2>

      <input
        type="text"
        placeholder="Address Line 1"
        value={addressLine1}
        onChange={(e) => setAddressLine1(e.target.value)}
        className="input"
      />

      <input
        type="text"
        placeholder="Address Line 2"
        value={addressLine2}
        onChange={(e) => setAddressLine2(e.target.value)}
        className="input"
      />

      <input
        type="text"
        placeholder="City"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="input"
      />

      <input
        type="text"
        placeholder="State"
        value={state}
        onChange={(e) => setState(e.target.value)}
        className="input"
      />

      <input
        type="text"
        placeholder="Pincode"
        value={pincode}
        onChange={(e) => setPincode(e.target.value)}
        className="input"
      />

      <input
        type="text"
        placeholder="Country"
        value={country}
        onChange={(e) => setCountry(e.target.value)}
        className="input"
      />

      <div className="flex justify-between">
        <button type="button" onClick={prevStep} className="btn-secondary">
          Back
        </button>

        <button type="button" onClick={nextStep} className="btn-primary">
          Next
        </button>
      </div>
    </div>
  );
};

export default StepTwo;
