import React, { useState } from 'react'

const MultiStepController = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [contact, setContact] = useState(+91-9825317500);
    const [dateOfBirth, setDateOfBirth] = useState(new Date());
    const [gender, setGender] = useState("prefer not to say");
    
  return (
    <div>MultiStepController</div>
  )
}

export default MultiStepController