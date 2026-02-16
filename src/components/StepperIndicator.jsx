import React from "react";

const StepperIndicator = ({ currentStep }) => {

  const steps = [
    "Basic Info",
    "Address",
    "Professional",
    "Documents",
    "Preview & Submit"
  ];

  const progressPercent =
    ((currentStep - 1) / (steps.length - 1)) * 100;

  return (
    <div className="w-full max-w-4xl mx-auto py-10">

      {/* Step Circles */}
      <div className="flex items-center justify-between relative">

        {/* Background Line */}
        <div className="absolute top-5 left-0 w-full h-[2px] bg-gray-300 -z-10" />

        {/* Animated Active Line */}
        <div
          className="absolute top-5 left-0 h-[2px] bg-gray-900 -z-10 transition-all duration-500 ease-in-out"
          style={{ width: `${progressPercent}%` }}
        />

        {steps.map((step, index) => {

          const stepNumber = index + 1;
          const isCompleted = stepNumber < currentStep;
          const isActive = stepNumber === currentStep;

          return (
            <div
              key={index}
              className="flex flex-col items-center flex-1 relative"
            >
              {/* Circle */}
              <div
                className={`
                  w-10 h-10 flex items-center justify-center rounded-full
                  border-2 transition-all duration-300 ease-in-out
                  ${
                    isCompleted
                      ? "bg-gray-900 border-gray-900 text-white scale-105"
                      : isActive
                      ? "bg-white border-gray-900 text-gray-900 scale-110 shadow-md"
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
                  }
                `}
              >
                {step}
              </span>
            </div>
          );
        })}

      </div>
    </div>
  );
};

export default StepperIndicator;
