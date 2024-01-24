import React, { ReactNode } from "react";

type HpRadioGroupProps = {
  children: ReactNode;
  label?: string;
};

const HpRadioGroup: React.FC<HpRadioGroupProps> = (props) => {
  const { children, label } = props;

  return (
    <fieldset>
      {label && (
        <legend className="text-base font-semibold text-gray-900">
          {label}
        </legend>
      )}
      <div className="mt-4">{children}</div>
    </fieldset>
  );
};

export default HpRadioGroup;
