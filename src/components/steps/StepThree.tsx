import { useState } from "react";
import toast from "react-hot-toast";

/* ===================== Props Interface ===================== */

interface StepThreeProps {
  qualification: string;
  setQualification: React.Dispatch<React.SetStateAction<string>>;

  college: string;
  setCollege: React.Dispatch<React.SetStateAction<string>>;

  passingYear: string;
  setPassingYear: React.Dispatch<React.SetStateAction<string>>;

  skills: string[];
  setSkills: React.Dispatch<React.SetStateAction<string[]>>;

  experience: string;
  setExperience: React.Dispatch<React.SetStateAction<string>>;

  nextStep: () => void;
  prevStep: () => void;
}

/* ===================== Error Interface ===================== */

interface ProfessionalErrors {
  qualification?: string;
  college?: string;
  passingYear?: string;
  skills?: string;
  experience?: string;
}

const StepThree = ({
  qualification,
  setQualification,
  college,
  setCollege,
  passingYear,
  setPassingYear,
  skills,
  setSkills,
  experience,
  setExperience,
  nextStep,
  prevStep,
}: StepThreeProps) => {

  const [errors, setErrors] = useState<ProfessionalErrors>({});
  const [shake, setShake] = useState<boolean>(false);

  const validate = (): boolean => {
    const newErrors: ProfessionalErrors = {};
    const currentYear = new Date().getFullYear();
    const yearNumber = Number(passingYear);
    const experienceNumber = Number(experience);

    if (!qualification.trim())
      newErrors.qualification = "Qualification is required";

    if (!college.trim())
      newErrors.college = "College name is required";

    if (!passingYear.trim()) {
      newErrors.passingYear = "Passing year is required";
    } else if (
      !/^\d{4}$/.test(passingYear) ||
      yearNumber < 1950 ||
      yearNumber > currentYear
    ) {
      newErrors.passingYear = "Enter a valid year";
    }

    if (!skills || skills.length === 0)
      newErrors.skills = "At least one skill is required";

    if (!experience.trim()) {
      newErrors.experience = "Experience is required";
    } else if (isNaN(experienceNumber) || experienceNumber < 0) {
      newErrors.experience = "Enter valid experience in years";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      toast.error("Please fix the errors before continuing.");
      setShake(true);
      setTimeout(() => setShake(false), 400);
      return false;
    }

    return true;
  };

  const handleNext = (): void => {
    if (validate()) {
      toast.success("Professional details saved");
      nextStep();
    }
  };

  return (
    <div
      className={`max-w-xl mx-auto bg-white p-8 rounded-xl shadow-md border border-gray-200 transition-all duration-300 ${
        shake ? "animate-[wiggle_0.3s_ease-in-out]" : ""
      }`}
    >
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        Professional Details
      </h2>

      <div className="space-y-5">

        {/* Qualification */}
        <div>
          <input
            type="text"
            placeholder="Qualification"
            value={qualification}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setQualification(e.target.value)
            }
            className={`w-full px-3 py-2 border rounded-md ${
              errors.qualification ? "border-red-500" : "border-gray-300"
            }`}
          />
          <p className="text-red-500 text-xs min-h-[16px]">
            {errors.qualification || ""}
          </p>
        </div>

        {/* College */}
        <div>
          <input
            type="text"
            placeholder="College"
            value={college}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setCollege(e.target.value)
            }
            className={`w-full px-3 py-2 border rounded-md ${
              errors.college ? "border-red-500" : "border-gray-300"
            }`}
          />
          <p className="text-red-500 text-xs min-h-[16px]">
            {errors.college || ""}
          </p>
        </div>

        {/* Passing Year */}
        <div>
          <input
            type="text"
            placeholder="Passing Year (e.g. 2023)"
            value={passingYear}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setPassingYear(e.target.value)
            }
            className={`w-full px-3 py-2 border rounded-md ${
              errors.passingYear ? "border-red-500" : "border-gray-300"
            }`}
          />
          <p className="text-red-500 text-xs min-h-[16px]">
            {errors.passingYear || ""}
          </p>
        </div>

        {/* Skills */}
        <div>
          <input
            type="text"
            placeholder="Skills (comma separated)"
            value={skills.join(", ")}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setSkills(
                e.target.value
                  .split(",")
                  .map((skill) => skill.trim())
                  .filter((skill) => skill.length > 0)
              )
            }
            className={`w-full px-3 py-2 border rounded-md ${
              errors.skills ? "border-red-500" : "border-gray-300"
            }`}
          />
          <p className="text-red-500 text-xs min-h-[16px]">
            {errors.skills || ""}
          </p>
        </div>

        {/* Experience */}
        <div>
          <input
            type="text"
            placeholder="Experience (in years)"
            value={experience}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setExperience(e.target.value)
            }
            className={`w-full px-3 py-2 border rounded-md ${
              errors.experience ? "border-red-500" : "border-gray-300"
            }`}
          />
          <p className="text-red-500 text-xs min-h-[16px]">
            {errors.experience || ""}
          </p>
        </div>

        {/* Buttons */}
        <div className="flex justify-between pt-4">
          <button
            type="button"
            onClick={prevStep}
            className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300"
          >
            Back
          </button>

          <button
            type="button"
            onClick={handleNext}
            className="px-4 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-700"
          >
            Next
          </button>
        </div>

      </div>
    </div>
  );
};

export default StepThree;
