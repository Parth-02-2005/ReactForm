import React from "react";

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
  return (
    <div className="space-y-4">

      <h2 className="text-xl font-semibold text-gray-800">Basic Information</h2>

      <input
        type="text"
        placeholder="First Name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        className="input"
      />

      <input
        type="text"
        placeholder="Last Name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        className="input"
      />

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="input"
      />

      <input
        type="text"
        placeholder="Phone Number"
        value={contact}
        onChange={(e) => setContact(e.target.value)}
        className="input"
      />

      <input
        type="date"
        value={dateOfBirth}
        onChange={(e) => setDateOfBirth(e.target.value)}
        className="input"
      />

      <select
        value={gender}
        onChange={(e) => setGender(e.target.value)}
        className="input"
      >
        <option>prefer not to say</option>
        <option>Male</option>
        <option>Female</option>
      </select>

      <button
        type="button"
        onClick={nextStep}
        className="btn-primary"
      >
        Next
      </button>
    </div>
  );
};

export default StepOne;
