import {useState} from "react";
import toast from "react-hot-toast";


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

  const [errors, setErrors] = useState({});
  const [shake, setShake] = useState(false);

  const validate = () => {
    let newErrors = {};

    if(!addressLine1.trim()) newErrors.addressLine1 = "Address Line 1 is required"
    // if(!addressLine2.trim()) newErrors.addressLine2 = "Address Line 2 is required"
    if(!city.trim()) newErrors.city = "City is required"
    if(!state.trim()) newErrors.state = "State is required"
    if (!pincode.trim())
      newErrors.pincode = "Pincode is required";
    else if (!/^\d{5,6}$/.test(pincode))
      newErrors.pincode = "Enter valid pincode";
    if(!country.trim()) newErrors.country = "country cannot be missing"


    setErrors(newErrors);

    if(Object.keys(newErrors).length > 0) {
      toast.error('Please fix the errors before continuing.')
      setShake(true);
      setTimeout(() => setShake(false), 400);
      return false;
    }

    return true;
  }

  const handleNext = () => {
    if (validate()) {
      toast.success("Step completed successfully");
      nextStep();
    }
  };
  
  return (
    <div
      className={`max-w-xl mx-auto bg-white p-8 rounded-xl shadow-md border border-gray-200 transition-all duration-300 ${
        shake ? "animate-[wiggle_0.3s_ease-in-out]" : ""
      }`}
    >

      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        Address Details
      </h2>

      <div className="space-y-5">

       <div>
         <input
        type="text"
        placeholder="Address Line 1"
        value={addressLine1}
        onChange={(e) => setAddressLine1(e.target.value)}
        className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 transition ${
              errors.addressLine1
                ? "border-red-500 focus:ring-red-200"
                : "border-gray-300 focus:ring-gray-300"
            }`}
      />

          {errors.addressLine1 && (
            <p className="text-red-500 text-xs mt-1">
              {errors.addressLine1}
            </p>
          )}
          
       </div>

       <div>

        <input
        type="text"
        placeholder="Address Line 2"
        value={addressLine2}
        onChange={(e) => setAddressLine2(e.target.value)}
        className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 transition ${
              errors.addressLine2
                ? "border-red-500 focus:ring-red-200"
                : "border-gray-300"
            }`}
      />
      {errors.addressLine2 && (
        <p className="text-red-500 text-xs mt-1">
          {errors.addressLine2}
        </p>
      )}

       </div>

      <div>

        <input
        type="text"
        placeholder="City"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className={`w-full px-3 py-2 border rounded-md ${
              errors.city ? "border-red-500 focus:ring-red-200" : "border-gray-300"
            }`}
      />

      {errors.city && (
        <p className="text-red-500 text-xs mt-1">{errors.city}</p>
      )}

      </div>

      <div>

        <input
        type="text"
        placeholder="State"
        value={state}
        onChange={(e) => setState(e.target.value)}
        className={`w-full px-3 py-2 border rounded-md ${
              errors.state ? "border-red-500" : "border-gray-300"
            }`}
      />
      {
        errors.state && (
          <p className="text-red-500 text-xs mt-1">{errors.state}</p>
        )
      }

      </div>

      <div>

        <input
        type="text"
        placeholder="Pincode"
        value={pincode}
        onChange={(e) => setPincode(e.target.value)}
        className={`w-full px-3 py-2 border rounded-md ${
              errors.pincode ? "border-red-500" : "border-gray-300"
            }`}
      />
      {errors.pincode && (
          <p className="text-red-500 text-xs mt-1">{errors.pincode}</p>
      )}

      </div>

      <div>

        <input
        type="text"
        placeholder="Country"
        value={country}
        onChange={(e) => setCountry(e.target.value)}
        className={`w-full px-3 py-2 border rounded-md ${
              errors.country ? "border-red-500" : "border-gray-300"
            }`}
      />

      {errors.country && (
        <p className="text-red-500 text-xs mt-1">{errors.country}</p>
      )}

      </div>
      
      
      <div className="flex justify-between">
        <button type="button" onClick={prevStep} className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300">
          Back
        </button>

        <button type="button" onClick={handleNext} className="px-4 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-700">
          Next
        </button>

      </div>
      
      </div>
    </div>
  );
};

export default StepTwo;
