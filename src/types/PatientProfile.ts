export interface PatientProfileDialog {
  open: boolean;
  handleClose: () => void;
}

export interface PatientInfoProps {
  name: string;
  gender: string;
  relation: string;
  phoneNumber: string;
  ageRange: string;
  medicalConditions: MedicalCondition[];
}

export interface CheckupReasonsProps {
  symptoms: string[];
  additionalSymptoms: string;
  documents: string[];
}

export interface MedicalCondition {
  name: string;
  state: string;
}
