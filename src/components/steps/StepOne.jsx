import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import toast from "react-hot-toast";

const StepOne = ({
  firstName,
  setFirstName,
  lastName,
  setLastName,
  email,
  setEmail,
  contact,
  setContact,
  dateOfBirth,
  setDateOfBirth,
  gender,
  setGender,
  nextStep
}) => {

  const [errors, setErrors] = useState({});
  const [shake, setShake] = useState(false);

  const validate = () => {
    let newErrors = {};

    if (!firstName.trim()) newErrors.firstName = "First name is required";
    if (!lastName.trim()) newErrors.lastName = "Last name is required";

    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Invalid email format";
    }

    if (!contact) newErrors.contact = "Phone number is required";
    if (!dateOfBirth) newErrors.dateOfBirth = "Date of birth is required";
    if (!gender) newErrors.gender = "Please select gender";

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      toast.error("Please fix the highlighted errors.");
      setShake(true);
      setTimeout(() => setShake(false), 400);
      return false;
    }

    return true;
  };

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
        Basic Information
      </h2>

      <div className="space-y-5">

        {/* First Name */}
        <div>
          <label className="block text-sm text-gray-700 mb-1">
            First Name *
          </label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 transition ${
              errors.firstName
                ? "border-red-500 focus:ring-red-200"
                : "border-gray-300 focus:ring-gray-300"
            }`}
          />
          {errors.firstName && (
            <p className="text-red-500 text-xs mt-1">
              {errors.firstName}
            </p>
          )}
        </div>

        {/* Last Name */}
        <div>
          <label className="block text-sm text-gray-700 mb-1">
            Last Name *
          </label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 transition ${
              errors.lastName
                ? "border-red-500 focus:ring-red-200"
                : "border-gray-300 focus:ring-gray-300"
            }`}
          />
          {errors.lastName && (
            <p className="text-red-500 text-xs mt-1">
              {errors.lastName}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm text-gray-700 mb-1">
            Email *
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 transition ${
              errors.email
                ? "border-red-500 focus:ring-red-200"
                : "border-gray-300 focus:ring-gray-300"
            }`}
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">
              {errors.email}
            </p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label className="block text-sm text-gray-700 mb-1">
            Phone Number *
          </label>
          <PhoneInput
            defaultCountry="IN"
            value={contact}
            onChange={setContact}
            className="border border-gray-300 rounded-md px-3 py-2"
          />
          {errors.contact && (
            <p className="text-red-500 text-xs mt-1">
              {errors.contact}
            </p>
          )}
        </div>

        {/* Date */}
        <div>
          <label className="block text-sm text-gray-700 mb-1">
            Date of Birth *
          </label>
          <input
            type="date"
            value={dateOfBirth}
            onChange={(e) => setDateOfBirth(e.target.value)}
            className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 transition ${
              errors.dateOfBirth
                ? "border-red-500 focus:ring-red-200"
                : "border-gray-300 focus:ring-gray-300"
            }`}
          />
          {errors.dateOfBirth && (
            <p className="text-red-500 text-xs mt-1">
              {errors.dateOfBirth}
            </p>
          )}
        </div>

        {/* Gender */}
        <div>
          <label className="block text-sm text-gray-700 mb-1">
            Gender *
          </label>
          <select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 transition ${
              errors.gender
                ? "border-red-500 focus:ring-red-200"
                : "border-gray-300 focus:ring-gray-300"
            }`}
          >
            <option value="">Select Gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>Prefer not to say</option>
          </select>
          {errors.gender && (
            <p className="text-red-500 text-xs mt-1">
              {errors.gender}
            </p>
          )}
        </div>

        {/* Button */}
        <button
          type="button"
          onClick={handleNext}
          className="w-full bg-gray-900 text-white py-2.5 rounded-md hover:bg-gray-700 transition duration-200"
        >
          Continue
        </button>

      </div>
    </div>
  );
};

export default StepOne;
