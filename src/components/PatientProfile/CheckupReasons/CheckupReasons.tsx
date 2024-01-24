import React, { ChangeEvent, Dispatch, SetStateAction } from "react";
import HpInputField from "../../common/HpComponents/HpInputField";
import { SymptomsProps } from "../../../types/PatientProfile";
import HpCheckbox from "../../common/HpComponents/HpCheckbox";
import HpButton from "@/components/common/HpComponents/HpButton";

const _symptoms = [
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

type CheckupReasons = {
  checkupReasons: SymptomsProps;
  setCheckupReasons: Dispatch<SetStateAction<SymptomsProps>>;
};

const CheckupReasons: React.FC<CheckupReasons> = (props) => {
  const { checkupReasons, setCheckupReasons } = props;

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    if (name === "symptoms") {
      setCheckupReasons({
        ...checkupReasons,
        symptoms: [...checkupReasons.symptoms, value],
      });
    } else {
      setCheckupReasons({
        ...checkupReasons,
        [name]: value,
      });
    }
  };

  return (
    <div>
      <div>
        <h4 className="font-medium">Symptoms</h4>
        <div className="flex flex-wrap gap-4 items-center mt-2">
          {_symptoms?.map((symptom, idx) => (
            <HpCheckbox
              key={idx}
              label={symptom.name}
              name="symptoms"
              value={symptom.value}
              onChange={handleChange}
            />
          ))}
        </div>
      </div>
      <div className="mt-3">
        <HpInputField
          name="additionalSymptoms"
          rows={4}
          label="Describe additional symptoms"
          value={checkupReasons.additionalSymptoms}
          onChange={handleChange}
        />
      </div>
      <div className="mt-5 text-right">
        <HpButton className="mr-5">Previous</HpButton>
        <HpButton type="submit" variant="contained">
          Submit
        </HpButton>
      </div>
    </div>
  );
};

export default CheckupReasons;
