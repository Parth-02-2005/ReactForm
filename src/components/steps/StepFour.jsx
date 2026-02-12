import React from "react";

const StepFour = ({
  idType,
  setIdType,
  idNumber,
  setIdNumber,
  resume,
  setResume,
  profilePhoto,
  setProfilePhoto,
  prevStep,
  resetForm
}) => {
  return (
    <div className="space-y-4">

      <h2 className="text-xl font-semibold text-gray-800">Documents</h2>

      <input
        type="text"
        placeholder="ID Type"
        value={idType}
        onChange={(e) => setIdType(e.target.value)}
        className="input"
      />

      <input
        type="text"
        placeholder="ID Number"
        value={idNumber}
        onChange={(e) => setIdNumber(e.target.value)}
        className="input"
      />

      <input
        type="file"
        onChange={(e) => setResume(e.target.files[0])}
        className="input"
      />

      <input
        type="file"
        onChange={(e) => setProfilePhoto(e.target.files[0])}
        className="input"
      />

      <div className="flex justify-between">
        <button type="button" onClick={prevStep} className="btn-secondary">
          Back
        </button>

        <button type="button" onClick={resetForm} className="btn-primary">
          Reset
        </button>
      </div>
    </div>
  );
};

export default StepFour;
