import React, { ChangeEvent, Dispatch, SetStateAction } from "react";

import {
  MedicalCondition,
  PatientInfoProps,
} from "../../../types/PatientProfile";
import HpInputField from "../../common/HpComponents/HpInputField";
import HpSelect from "../../common/HpComponents/HpSelect";
import HpRadioGroup from "../../common/HpComponents/HpRadioGroup";
import HpCheckbox from "../../common/HpComponents/HpCheckbox";
import HpButton from "../../common/HpComponents/HpButton";
import { ArrowRightCircleIcon } from "@heroicons/react/20/solid";
import HpRadio from "../../common/HpComponents/HpRadio";
import { z } from "zod";
import { useForm, Controller } from "react-hook-form";

interface PatientBasicInfoProps {
  handleClose: () => void;
  setPatientInfo: Dispatch<SetStateAction<PatientInfoProps>>;
  patientInfo: PatientInfoProps;
  handleIncrementStep: () => void;
}

const GENDER = ["Male", "Female", "Others"];

const ageRanges = [
  { name: "New Born (0 To 3 Months)", value: "NEW_BORN" },
  { name: "Infant (4 To 11 Months)", value: "INFANT" },
  { name: "Toddler (1 To 2 Years)", value: "TODDLER" },
  { name: "Preschooler (3 To 4 Years)", value: "PRESCHOOLER" },
  { name: "School Age (5 To 12 Years)", value: "SCHOOL_AGE" },
  { name: "Teenager (13 To 17 Years)", value: "TEENAGER" },
  { name: "Adult (18 To 64 Years)", value: "ADULT" },
  { name: "Older Adult (65 Years And Over)", value: "OLDER_ADULT" },
];

const RELATIONSHIPS = [
  "self",
  "father",
  "mother",
  "son",
  "daughter",
  "husband",
  "wife",
  "friend",
  "others",
];

const medicalConditions = [
  {
    name: "Hypertension",
    value: "Hypertension",
    en: "Hypertension",
    ne: "उच्च रक्तचाप",
  },
  {
    name: "Heart Conditions",
    value: "Heart Conditions",
    en: "Heart Conditions",
    ne: "मुटुरोग",
  },
  {
    name: "Diabetes",
    value: "Diabetes",
    en: "Diabetes",
    ne: "मधुमेह तथा सुगर",
  },
  {
    name: "Asthma",
    value: "Asthma",
    en: "Asthma",
    ne: "आस्थमा",
  },
  {
    name: "Tuberculosis",
    value: "Tuberculois",
    en: "Tuberculosis",
    ne: "क्षयरोग",
  },
];

const PatientBasicInfo: React.FC<PatientBasicInfoProps> = (props) => {
  const { patientInfo, setPatientInfo, handleClose, handleIncrementStep } =
    props;
  const { control, handleSubmit, setValue } = useForm({
    defaultValues: {
      ...patientInfo,
    },
  });

  console.log("medical conditions", patientInfo);

  const handleMedicalConditionChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    console.log("e", e.target);
    if (!checked) {
      const remaining = patientInfo.medicalConditions.filter(
        (item: MedicalCondition) => item.name !== value
      );
      setValue("medicalConditions", [...remaining]);
    } else {
      setValue("medicalConditions", [{ name: value, state: "PRESENT" }]);
    }
  };

  const handleSubmitPatientProfile = (data: any) => {
    console.log("data", data);
  };

  const patientInfoSchema = z.object({
    name: z.string(),
    gender: z.string(),
    relation: z.string(),
    phoneNumber: z.string(),
    ageRange: z.string(),
  });

  return (
    <div className="mt-2">
      <h4 className="font-medium">Basic Info</h4>
      <form onSubmit={handleSubmit(handleSubmitPatientProfile)}>
        <div className="mt-2 grid grid-cols-2 gap-x-3 gap-y-4">
          <Controller
            name="name"
            control={control}
            render={({ field: { onChange, value, onBlur } }) => (
              <HpInputField
                label="Name"
                placeholder="Enter Full Name"
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                required
              />
            )}
          />

          <Controller
            name="gender"
            control={control}
            render={({ field: { onChange, value } }) => {
              return (
                <HpSelect
                  options={GENDER}
                  label="Gender"
                  selected={value}
                  onChange={onChange}
                />
              );
            }}
          />

          <Controller
            name="phoneNumber"
            control={control}
            render={({ field: { onChange, value, onBlur } }) => (
              <HpInputField
                label="Phone Number"
                placeholder="Enter Phone Number"
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                required
              />
            )}
          />

          <Controller
            name="relation"
            control={control}
            render={({ field: { onChange, value } }) => (
              <HpSelect
                options={RELATIONSHIPS}
                label="Relation"
                selected={value}
                onChange={onChange}
              />
            )}
          />
        </div>

        <div className="mt-5">
          <Controller
            name="ageRange"
            control={control}
            render={({ field: { onChange } }) => {
              return (
                <HpRadioGroup label="Age">
                  <div className="sm:grid sm:grid-cols-2 sm:gap-5">
                    {ageRanges.map((age, sideIdx) => (
                      <HpRadio
                        key={sideIdx}
                        label={age.name}
                        value={age.value}
                        onChange={onChange}
                      />
                    ))}
                  </div>
                </HpRadioGroup>
              );
            }}
          />
          {/* {errors.ageRange && (
          <p className="mt-2 text-xs text-red-600" id="email-error">
            {errors.ageRange}
          </p>
        )} */}
        </div>

        <div className="mt-5">
          <h4 className="font-medium">Medical Conditions</h4>
          <Controller
            name="medicalConditions"
            control={control}
            render={({ field: { value } }) => {
              console.log("value", value);
              return (
                <div className="flex gap-4 items-center flex-wrap mt-2">
                  {medicalConditions?.map((medicalCondition, idx) => (
                    <HpCheckbox
                      key={idx}
                      label={medicalCondition.name}
                      value={medicalCondition.value}
                      onChange={handleMedicalConditionChange}
                      checked={
                        patientInfo.medicalConditions.some(
                          (mC) =>
                            mC.name === medicalCondition.name &&
                            mC.state === "PRESENT"
                        ) || false
                      }
                    />
                  ))}
                </div>
              );
            }}
          />
        </div>
        <div className="mt-5 flex gap-4 justify-end">
          <HpButton
            variant="contained"
            // onClick={handleNextStep}
            type="submit"
            endIcon={
              <ArrowRightCircleIcon
                className="-ml-0.5 h-5 w-5"
                aria-hidden="true"
              />
            }
          >
            Next
          </HpButton>
          <HpButton variant="outlined" onClick={handleClose}>
            Cancel
          </HpButton>
        </div>
      </form>
    </div>
  );
};

export default PatientBasicInfo;
