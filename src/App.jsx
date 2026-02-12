import './App.css'
import StepOne from './components/steps/StepOne';
import StepTwo from './components/steps/StepTwo';
import StepThree from './components/steps/StepThree';
import StepFour from './components/steps/StepFour';

import MultiStepController from './components/MultiStepController';
import StepperIndicator from './components/StepperIndicator';

function App() {

  return (
    <>
      <MultiStepController  /> 
      {/* <StepperIndicator /> */}
    </>
  )
}

export default App
