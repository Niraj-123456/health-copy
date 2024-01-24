import { ExclamationCircleIcon } from "@heroicons/react/20/solid";

type InputProps = {
  label?: string;
  type?: string;
  value?: string;
  placeholder?: string;
  hasError?: boolean;
  errorMsg?: string;
  rows?: number;
  required: boolean;
  onChange: () => void;
  onBlur: () => void;
};

const HpInputField = ({
  label,
  value,
  placeholder,
  type,
  rows,
  hasError,
  errorMsg,
  required,
  onChange,
  onBlur,
}: InputProps) => (
  <div>
    {label && (
      <label
        htmlFor="email"
        className="block text-sm font-medium leading-6 text-gray-700"
      >
        {label}
      </label>
    )}
    <div className="mt-2 relative rounded-md shadow-sm">
      {rows ? (
        <textarea
          rows={rows}
          placeholder={placeholder}
          className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 hover:ring-1 hover:ring-indigo-500 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          required={required}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
        />
      ) : (
        <input
          type={type ? type : "text"}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 hover:ring-1 hover:ring-indigo-500 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
      )}
      {hasError && (
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
          <ExclamationCircleIcon
            className="h-5 w-5 text-red-500"
            aria-hidden="true"
          />
        </div>
      )}
    </div>
    {errorMsg && hasError && (
      <p className="mt-2 text-xs text-red-600" id="email-error">
        {errorMsg}
      </p>
    )}
  </div>
);

export default HpInputField;
