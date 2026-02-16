import { useState } from "react";
import toast from "react-hot-toast";

/* ===================== Props Interface ===================== */

interface StepFourProps {
  idType: string;
  setIdType: React.Dispatch<React.SetStateAction<string>>;

  idNumber: string;
  setIdNumber: React.Dispatch<React.SetStateAction<string>>;

  resume: File | null;
  setResume: React.Dispatch<React.SetStateAction<File | null>>;

  profilePhoto: File | null;
  setProfilePhoto: React.Dispatch<React.SetStateAction<File | null>>;

  prevStep: () => void;
  nextStep: () => void;
}

/* ===================== Error Interface ===================== */

interface DocumentErrors {
  idType?: string;
  idNumber?: string;
  resume?: string;
  profilePhoto?: string;
}

const StepFour = ({
  idType,
  setIdType,
  idNumber,
  setIdNumber,
  resume,
  setResume,
  profilePhoto,
  setProfilePhoto,
  prevStep,
  nextStep,
}: StepFourProps) => {

  const [errors, setErrors] = useState<DocumentErrors>({});
  const [preview, setPreview] = useState<string | null>(null);
  const [shake, setShake] = useState<boolean>(false);

  const MAX_SIZE = 2 * 1024 * 1024; // 2MB

  /* ===================== Resume Upload ===================== */

  const handleResumeChange = (file: File | undefined): void => {
    if (!file) return;

    if (file.type !== "application/pdf") {
      toast.error("Resume must be a PDF file.");
      return;
    }

    if (file.size > MAX_SIZE) {
      toast.error("Resume must be less than 2MB.");
      return;
    }

    setResume(file);
  };

  /* ===================== Photo Upload ===================== */

  const handlePhotoChange = (file: File | undefined): void => {
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      toast.error("Profile photo must be an image.");
      return;
    }

    if (file.size > MAX_SIZE) {
      toast.error("Image must be less than 2MB.");
      return;
    }

    setProfilePhoto(file);
    setPreview(URL.createObjectURL(file));
  };

  /* ===================== Validation ===================== */

  const validate = (): boolean => {
    const newErrors: DocumentErrors = {};

    if (!idType.trim())
      newErrors.idType = "ID type is required";

    if (!idNumber.trim())
      newErrors.idNumber = "ID number is required";

    if (!resume)
      newErrors.resume = "Resume is required";

    if (!profilePhoto)
      newErrors.profilePhoto = "Profile photo is required";

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      toast.error("Please upload required documents.");
      setShake(true);
      setTimeout(() => setShake(false), 400);
      return false;
    }

    return true;
  };

  const handleNext = (): void => {
    if (validate()) {
      toast.success("Documents uploaded successfully");
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
        Upload Documents
      </h2>

      <div className="space-y-5">

        {/* ID Type */}
        <div>
          <input
            type="text"
            placeholder="ID Type (Aadhar / PAN / Passport)"
            value={idType}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setIdType(e.target.value)
            }
            className={`w-full px-3 py-2 border rounded-md ${
              errors.idType ? "border-red-500" : "border-gray-300"
            }`}
          />
          <p className="text-red-500 text-xs min-h-[16px]">
            {errors.idType || ""}
          </p>
        </div>

        {/* ID Number */}
        <div>
          <input
            type="text"
            placeholder="ID Number"
            value={idNumber}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setIdNumber(e.target.value)
            }
            className={`w-full px-3 py-2 border rounded-md ${
              errors.idNumber ? "border-red-500" : "border-gray-300"
            }`}
          />
          <p className="text-red-500 text-xs min-h-[16px]">
            {errors.idNumber || ""}
          </p>
        </div>

        {/* Resume Upload */}
        <div>
          <label className="block text-sm text-gray-700 mb-2">
            Upload Resume (PDF, max 2MB)
          </label>

          <input
            type="file"
            accept=".pdf"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleResumeChange(e.target.files?.[0])
            }
            className="block w-full text-sm text-gray-600"
          />

          {resume && (
            <p className="text-green-600 text-xs mt-1">
              Selected: {resume.name}
            </p>
          )}

          <p className="text-red-500 text-xs min-h-[16px]">
            {errors.resume || ""}
          </p>
        </div>

        {/* Profile Photo Upload */}
        <div>
          <label className="block text-sm text-gray-700 mb-2">
            Upload Profile Photo (Image, max 2MB)
          </label>

          <input
            type="file"
            accept="image/*"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handlePhotoChange(e.target.files?.[0])
            }
            className="block w-full text-sm text-gray-600"
          />

          {preview && (
            <div className="mt-3">
              <img
                src={preview}
                alt="Preview"
                className="w-24 h-24 object-cover rounded-lg border"
              />
            </div>
          )}

          <p className="text-red-500 text-xs min-h-[16px]">
            {errors.profilePhoto || ""}
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

export default StepFour;
