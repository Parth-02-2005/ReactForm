# 🚀 Multi-Step Application Form (React + Tailwind)

A fully responsive multi-step application form built using **React** and **Tailwind CSS**.  
The form includes step-by-step validation, file upload handling, preview before submission, and a smooth animated progress stepper.

---

## ✨ Features

- 5-step form flow
- Step-by-step validation
- Toast notifications for errors & success
- Resume upload (PDF only, max 2MB)
- Profile photo upload (Image only, max 2MB)
- Image preview using `URL.createObjectURL`
- Review screen before final submission
- Animated progress bar & step indicator
- Clean grey & white professional UI

---

## 🛠 Tech Stack

- React (Functional Components + Hooks)
- Tailwind CSS
- React Hot Toast
- JavaScript (ES6+)

---

## 📂 Project Structure

multi-step-form/
│
├── public/
│
├── src/
│ ├── components/
│ │ ├── MultiStepController.jsx
│ │ ├── StepperIndicator.jsx
│ │ └── steps/
│ │ ├── StepOne.jsx # Basic Information
│ │ ├── StepTwo.jsx # Address Details
│ │ ├── StepThree.jsx # Professional Details
│ │ ├── StepFour.jsx # Document Upload
│ │ └── StepFive.jsx # Review & Submit
│ │
│ ├── App.jsx
│ ├── main.jsx
│ └── index.css
│
├── package.json
└── README.md
