import React from 'react'


const StepperIndicator = ({currentStep, setCurrentStep}) => {

  const steps = [
  "Basic Info",
  "Address",
  "Professional",
  "Documents"
];

  return (
    <div className="w-full max-w-4xl mx-auto py-8">
      <div className="flex items-center justify-between relative">

        {steps.map((step, index) => {
          const stepNumber = index + 1;

          const isCompleted = stepNumber < currentStep;
          const isActive = stepNumber === currentStep;

          return (
            <div
              key={index}
              className="flex flex-col items-center flex-1 relative"
            >
              {/* Connector Line */}
              {index !== 0 && (
                <div
                  className={`absolute top-5 left-0 w-full h-[2px] -z-10 transition-all duration-300
                  ${isCompleted ? "bg-gray-900" : "bg-gray-300"}`}
                />
              )}

              {/* Circle */}
              <div
                className={`
                  w-10 h-10 flex items-center justify-center rounded-full
                  border-2 transition-all duration-300
                  ${
                    isCompleted
                      ? "bg-gray-900 border-gray-900 text-white"
                      : isActive
                      ? "bg-white border-gray-800 text-gray-900"
                      : "bg-gray-200 border-gray-300 text-gray-500"
                  }
                `}
              >
                {isCompleted ? "✓" : stepNumber}
              </div>

              {/* Label */}
              <span
                className={`mt-2 text-sm transition-all duration-300
                ${
                  isActive
                    ? "text-gray-900 font-medium"
                    : "text-gray-500"
                }`}
              >
                {step}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default StepperIndicator
