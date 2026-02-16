import React, { useState } from 'react'
import StepperIndicator from './StepperIndicator';
import StepOne from './steps/StepOne';
import StepTwo from './steps/StepTwo';
import StepThree from './steps/StepThree';
import StepFour from './steps/StepFour';
import StepFive from './steps/StepFive';

const MultiStepController = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [contact, setContact] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [gender, setGender] = useState("prefer not to say");

    const [addressLine1, setAddressLine1] = useState('');
    const [addressLine2, setAddressLine2] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [pincode, setPincode] = useState('');
    const [country, setCountry] = useState('India');

    const [qualification, setQualification] = useState('');
    const [college, setCollege] = useState('');
    const [passingYear, setPassingYear] = useState('');
    const [skills, setSkills] = useState([]);
    const [experience, setExperience] = useState('');

    const [idType, setIdType] = useState('');
    const [idNumber, setIdNumber] = useState('');
    const [resume, setResume] = useState(null);
    const [profilePhoto, setProfilePhoto] = useState(null);

    const [currentStep, setCurrentStep] = useState(1);

    
  return (
    <div className='multi-step-container'>

      <StepperIndicator currentStep={currentStep} />

      <div className='step-form-content'>

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
          prevStep={()=> setCurrentStep(3)}
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
  )
}

export default MultiStepController