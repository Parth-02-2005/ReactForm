import { useState } from "react";
import StepperIndicator from "./StepperIndicator";
import StepOne from "./steps/StepOne";
import StepTwo from "./steps/StepTwo";
import StepThree from "./steps/StepThree";
import StepFour from "./steps/StepFour";
import StepFive from "./steps/StepFive";

const MultiStepController = () => {
  // Step 1 - Personal Details
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [contact, setContact] = useState<string | undefined>(undefined);
  const [dateOfBirth, setDateOfBirth] = useState<string>("");
  const [gender, setGender] = useState<string>("prefer not to say");

  // Step 2 - Address
  const [addressLine1, setAddressLine1] = useState<string>("");
  const [addressLine2, setAddressLine2] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [state, setState] = useState<string>("");
  const [pincode, setPincode] = useState<string>("");
  const [country, setCountry] = useState<string>("India");

  // Step 3 - Education
  const [qualification, setQualification] = useState<string>("");
  const [college, setCollege] = useState<string>("");
  const [passingYear, setPassingYear] = useState<string>("");
  const [skills, setSkills] = useState<string[]>([]);
  const [experience, setExperience] = useState<string>("");

  // Step 4 - Documents
  const [idType, setIdType] = useState<string>("");
  const [idNumber, setIdNumber] = useState<string>("");
  const [resume, setResume] = useState<File | null>(null);
  const [profilePhoto, setProfilePhoto] = useState<File | null>(null);

  const [currentStep, setCurrentStep] = useState<number>(1);

  return (
    <div className="multi-step-container">
      <StepperIndicator currentStep={currentStep} />

      <div className="step-form-content">

        {currentStep === 1 && (
          <StepOne
            firstName={firstName}
            setFirstName={setFirstName}
            lastName={lastName}
            setLastName={setLastName}
            email={email}
            setEmail={setEmail}
            contact={contact}
            setContact={setContact}
            dateOfBirth={dateOfBirth}
            setDateOfBirth={setDateOfBirth}
            gender={gender}
            setGender={setGender}
            nextStep={() => setCurrentStep(2)}
          />
        )}

        {currentStep === 2 && (
          <StepTwo
            addressLine1={addressLine1}
            setAddressLine1={setAddressLine1}
            addressLine2={addressLine2}
            setAddressLine2={setAddressLine2}
            city={city}
            setCity={setCity}
            state={state}
            setState={setState}
            pincode={pincode}
            setPincode={setPincode}
            country={country}
            setCountry={setCountry}
            nextStep={() => setCurrentStep(3)}
            prevStep={() => setCurrentStep(1)}
          />
        )}

        {currentStep === 3 && (
          <StepThree
            qualification={qualification}
            setQualification={setQualification}
            college={college}
            setCollege={setCollege}
            passingYear={passingYear}
            setPassingYear={setPassingYear}
            skills={skills}
            setSkills={setSkills}
            experience={experience}
            setExperience={setExperience}
            prevStep={() => setCurrentStep(2)}
            nextStep={() => setCurrentStep(4)}
          />
        )}

        {currentStep === 4 && (
          <StepFour
            idType={idType}
            setIdType={setIdType}
            idNumber={idNumber}
            setIdNumber={setIdNumber}
            resume={resume}
            setResume={setResume}
            profilePhoto={profilePhoto}
            setProfilePhoto={setProfilePhoto}
            prevStep={() => setCurrentStep(3)}
            nextStep={() => setCurrentStep(5)}
          />
        )}

        {currentStep === 5 && (
          <StepFive
            firstName={firstName}
            lastName={lastName}
            email={email}
            contact={contact}
            dateOfBirth={dateOfBirth}
            gender={gender}
            addressLine1={addressLine1}
            city={city}
            state={state}
            pincode={pincode}
            country={country}
            qualification={qualification}
            college={college}
            passingYear={passingYear}
            skills={skills}
            experience={experience}
            idNumber={idNumber}
            resume={resume}
            profilePhoto={profilePhoto}
            prevStep={() => setCurrentStep(4)}
          />
        )}

      </div>
    </div>
  );
};

export default MultiStepController;
