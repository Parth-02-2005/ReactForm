Multi-Step Application Form (React + Tailwind)

A production-grade multi-step application form built using React, Tailwind CSS, and modern UX practices.

This project demonstrates:

Advanced state management

Step-based navigation

Form validation

File upload with preview

Review & final submission screen

Toast notifications

Animated step transitions

📌 Features
🧭 Multi-Step Flow

Basic Information

Address Details

Professional Details

Document Upload

Review & Submit

✅ Validation (Step-wise)

Required field validation

Email format validation

Pincode format validation

Passing year validation

Experience numeric validation

File type validation (PDF for resume)

Image type validation (JPG/PNG)

File size limit (2MB)

Inline error messages

Toast error notifications

📂 File Upload Features

Resume upload (PDF only)

Profile photo upload (image only)

File size restriction

Image preview using URL.createObjectURL

Resume file name display

👀 Review Screen

Before final submission, users can:

Preview all entered details

View uploaded image preview

View resume file name

Go back and edit any step

Submit final application

🎨 UI & UX

Built with Tailwind CSS

Smooth slide animation between steps

Animated step progress bar

Percentage completion indicator

Shake animation on validation failure

Professional grey & white design theme

🛠 Tech Stack

React (Functional Components + Hooks)

Tailwind CSS

React Hot Toast

JavaScript (ES6+)

📁 Project Structure
src/
 ├── components/
 │     ├── StepperIndicator.jsx
 │     ├── MultiStepController.jsx
 │     └── steps/
 │           ├── StepOne.jsx
 │           ├── StepTwo.jsx
 │           ├── StepThree.jsx
 │           ├── StepFour.jsx
 │           └── StepFive.jsx
 ├── App.jsx
 └── main.jsx

⚙️ Installation & Setup
1️⃣ Clone Repository
git clone <your-repo-link>
cd project-folder

2️⃣ Install Dependencies
npm install

3️⃣ Install Required Packages
npm install react-hot-toast

4️⃣ Start Development Server
npm run dev
