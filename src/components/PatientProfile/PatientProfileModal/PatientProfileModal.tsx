import React, { useState } from "react";

import { ArrowLeftIcon, XMarkIcon } from "@heroicons/react/20/solid";

import {
  PatientProfileDialog,
  CheckupReasonsProps,
} from "../../../types/PatientProfile";
import PatientBasicInfo from "../PatientBasicInfo/PatientBasicInfo";
import { PatientInfoProps } from "../../../types/PatientProfile";
import { Dialog } from "@headlessui/react";
import HpIconButton from "../../common/HpComponents/HpIconButton";
import HpDialog from "../../common/HpComponents/HpDialog";
import CheckupReasons from "../CheckupReasons/CheckupReasons";

const PatientProfileModal: React.FC<PatientProfileDialog> = (props) => {
  const { open, handleClose } = props;
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [patientInfo, setPatientInfo] = useState<PatientInfoProps>({
    name: "",
    gender: "Male",
    relation: "self",
    phoneNumber: "",
    ageRange: "",
    medicalConditions: [],
  });

  const [checkupReasons, setCheckupReasons] = useState<CheckupReasonsProps>({
    symptoms: [],
    additionalSymptoms: "",
    documents: [],
  });

  const handleIncrementStep = () => {
    setCurrentStep((prev) => prev + 1);
  };

  const handleDecrementStep = () => {
    setCurrentStep((prev) => prev - 1);
  };

  return (
    <HpDialog open={open} onClose={handleClose}>
      {currentStep === 1 ? (
        <Dialog.Title className="flex items-center justify-between font-medium text-lg">
          Add Patient Profile
          <HpIconButton onClick={handleClose}>
            <XMarkIcon className="w-5 h-5" aria-hidden="true" />
          </HpIconButton>
        </Dialog.Title>
      ) : (
        <Dialog.Title className="flex items-center justify-between font-medium text-lg">
          <HpIconButton onClick={handleDecrementStep}>
            <ArrowLeftIcon className="w-5 h-5" aria-hidden="true" />
          </HpIconButton>
          Add Patient Profile
          <HpIconButton onClick={handleClose}>
            <XMarkIcon className="w-5 h-5" aria-hidden="true" />
          </HpIconButton>
        </Dialog.Title>
      )}

      {currentStep === 1 && (
        <PatientBasicInfo
          patientInfo={patientInfo}
          setPatientInfo={setPatientInfo}
          handleClose={handleClose}
          handleIncrementStep={handleIncrementStep}
        />
      )}

      {currentStep === 2 && (
        <CheckupReasons
          checkupReasons={checkupReasons}
          setCheckupReasons={setCheckupReasons}
        />
      )}
    </HpDialog>
  );
};

export default PatientProfileModal;
