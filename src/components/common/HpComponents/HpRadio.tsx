import React, { ChangeEvent } from "react";

type RadioProps = {
  name?: string;
  id?: string;
  label?: string;
  value?: string | number;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};

const HpRadio = React.forwardRef<HTMLInputElement, RadioProps>(
  ({ name, id, value, label, onChange }, ref) => (
    <div className="relative flex items-start p-2 border rounded-md">
      <div className="min-w-0 flex-1 text-sm leading-6">
        <label
          htmlFor={id ? id : ""}
          className="select-none text-gray-700 whitespace-nowrap"
        >
          {label}
        </label>
      </div>
      <div className="ml-3 flex h-6 items-center">
        <input
          id={id ? id : ""}
          name={name ? name : "radio"}
          type="radio"
          value={value}
          onChange={onChange}
          ref={ref}
          className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
        />
      </div>
    </div>
  )
);

export default HpRadio;
