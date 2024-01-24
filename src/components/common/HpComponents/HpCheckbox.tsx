import React, { ChangeEvent } from "react";

type HpCheckboxProps = {
  label: string;
  name?: string;
  id?: string;
  subtext?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  checked?: boolean;
};

const HpCheckbox = React.forwardRef<HTMLInputElement, HpCheckboxProps>(
  ({ label, subtext, name, id, onChange, value, checked }, ref) => (
    <fieldset>
      <legend className="sr-only">Checkbox</legend>
      <div className="space-y-5">
        <div className="relative flex items-start">
          <div className="flex h-6 items-center">
            <input
              id={id ? id : ""}
              ref={ref}
              aria-describedby={`${label}-description`}
              name={name ? name : ""}
              onChange={onChange}
              value={value ? value : ""}
              checked={checked}
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 text-indigo-600"
            />
          </div>
          <div className="ml-3 text-sm leading-6">
            <label htmlFor={id} className="text-gray-900 whitespace-nowrap">
              {label}
            </label>
            <p className="text-gray-500">{subtext}</p>
          </div>
        </div>
      </div>
    </fieldset>
  )
);

export default HpCheckbox;
