import './App.css'
import { Toaster } from "react-hot-toast";


import MultiStepController from './components/MultiStepController';
import StepperIndicator from './components/StepperIndicator';

function App() {

  return (
    <>
     <Toaster
        position="top-center"
        toastOptions={{
          style: {
            background: "#111827",
            color: "#fff",
            borderRadius: "10px",
            padding: "12px 16px",
          },
        }}
      />
      <MultiStepController  /> 
      {/* <StepperIndicator /> */}
    </>
  )
}

export default App
