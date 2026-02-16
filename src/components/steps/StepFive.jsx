import React from "react";
import toast from "react-hot-toast";

const StepFive = ({
  firstName,
  lastName,
  email,
  contact,
  dateOfBirth,
  gender,
  addressLine1,
  city,
  state,
  pincode,
  country,
  qualification,
  college,
  passingYear,
  skills,
  experience,
  idNumber,
  resume,
  profilePhoto,
  prevStep
}) => {

  const handleFinalSubmit = () => {
    // Here you would send data to backend
    toast.success("Application submitted successfully 🚀");

    console.log([
      firstName,
      lastName,
      email,
      contact,
      dateOfBirth,
      gender,
      addressLine1,
      city,
      state,
      pincode,
      country,
      qualification,
      college,
      passingYear,
      skills,
      experience,
      idNumber,
      resume,
      profilePhoto
    ]);
  };

  return (
    <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-md border border-gray-200">

      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        Review & Submit
      </h2>

      <div className="space-y-8">

        {/* Basic Info */}
        <Section title="Basic Information">
          <Row label="Full Name" value={`${firstName} ${lastName}`} />
          <Row label="Email" value={email} />
          <Row label="Phone" value={contact} />
          <Row label="Date of Birth" value={dateOfBirth} />
          <Row label="Gender" value={gender} />
        </Section>

        {/* Address */}
        <Section title="Address">
          <Row
            label="Address"
            value={`${addressLine1}, ${city}, ${state}, ${pincode}, ${country}`}
          />
        </Section>

        {/* Professional */}
        <Section title="Professional Details">
          <Row label="Qualification" value={qualification} />
          <Row label="College" value={college} />
          <Row label="Passing Year" value={passingYear} />
          <Row label="Experience" value={`${experience} years`} />

          <div>
            <p className="text-sm text-gray-500 mb-2">Skills</p>
            <div className="flex flex-wrap gap-2">
              {skills &&
                skills
                  .filter(skill => skill !== "")
                  .map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
            </div>
          </div>
        </Section>

        {/* Documents */}
        <Section title="Documents">
          <Row label="ID Number" value={idNumber} />
          <Row label="Resume" value={resume?.name || "Not Uploaded"} />

          {profilePhoto && (
            <div>
              <p className="text-sm text-gray-500 mb-2">
                Profile Photo
              </p>
              <img
                src={URL.createObjectURL(profilePhoto)}
                alt="Preview"
                className="w-28 h-28 object-cover rounded-lg border"
              />
            </div>
          )}
        </Section>

        {/* Buttons */}
        <div className="flex justify-between pt-6">
          <button
            type="button"
            onClick={prevStep}
            className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300"
          >
            Back
          </button>

          <button
            type="button"
            onClick={handleFinalSubmit}
            className="px-6 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-700 transition"
          >
            Submit Application
          </button>
        </div>

      </div>
    </div>
  );
};

export default StepFive;


/* Small reusable components */

const Section = ({ title, children }) => (
  <div className="border-t pt-6">
    <h3 className="text-lg font-medium text-gray-800 mb-4">
      {title}
    </h3>
    <div className="space-y-3">{children}</div>
  </div>
);

const Row = ({ label, value }) => (
  <div className="flex justify-between text-sm">
    <span className="text-gray-500">{label}</span>
    <span className="text-gray-800 font-medium">{value}</span>
  </div>
);
