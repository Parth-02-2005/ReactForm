import React, { useState } from 'react'
import { StepperIndicator } from './StepperIndicator';
import StepOne from './steps/StepOne';
import SteopTwo from './steps/stepTwo'

const MultiStepController = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [contact, setContact] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState(new Date());
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
            nextStep={() => setCurrentStep(2)} 
            prevStep={() => setCurrentStep(1)}
          />
        )}
      </div>

    </div>
  )
}

export default MultiStepController