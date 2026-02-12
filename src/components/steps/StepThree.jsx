import React from "react";

const StepThree = ({
  qualification,
  setQualification,
  college,
  setCollege,
  passingYear,
  setPassingYear,
  skills,
  setSkills,
  experience,
  setExperience,
  nextStep,
  prevStep
}) => {
  return (
    <div className="space-y-4">

      <h2 className="text-xl font-semibold text-gray-800">Professional Details</h2>

      <input
        type="text"
        placeholder="Qualification"
        value={qualification}
        onChange={(e) => setQualification(e.target.value)}
        className="input"
      />

      <input
        type="text"
        placeholder="College"
        value={college}
        onChange={(e) => setCollege(e.target.value)}
        className="input"
      />

      <input
        type="text"
        placeholder="Passing Year"
        value={passingYear}
        onChange={(e) => setPassingYear(e.target.value)}
        className="input"
      />

      <input
        type="text"
        placeholder="Skills (comma separated)"
        onChange={(e) => setSkills(e.target.value.split(","))}
        className="input"
      />

      <input
        type="text"
        placeholder="Experience"
        value={experience}
        onChange={(e) => setExperience(e.target.value)}
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

export default StepThree;
