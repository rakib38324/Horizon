import React, { useState } from "react";

type FormInputBoxProps = {
  label: string;
  value: string | number | null;
  name: string;
  type: "text" | "password" | "email" | "number" | "tel" | "textarea" | "date";
  idHtmlFor: string;
  inputHandler: (name: string, value: string) => void;
  placeholder?: string;
  className?: string;
  required?: boolean;
  error?: string;
};

const FormInputBox: React.FC<FormInputBoxProps> = ({
  label,
  value,
  name,
  type,
  idHtmlFor,
  inputHandler,
  placeholder = "",
  className = "",
  required = true,
  error,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const [emailError, setEmailError] = useState<string | undefined>(undefined);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regular expression for email validation

  const onChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const newValue = e.target.value;

    if (type === "email") {
      if (!emailRegex.test(newValue)) {
        setEmailError("Please enter a valid email address.");
      } else {
        setEmailError(undefined);
      }
    }

    inputHandler(name, newValue);
  };

  return (
    <div className={`${className} flex flex-col gap-1`}>
      <label
        htmlFor={idHtmlFor}
        className="text-sm font-medium text-customCream"
      >
        {label} {required && <span className="text-customRed">*</span>}
      </label>

      {type === "textarea" ? (
        <textarea
          id={idHtmlFor}
          value={value ? value.toString() : ""}
          name={name}
          required={required}
          placeholder={placeholder}
          onChange={onChangeHandler}
          rows={4}
          className="p-4 text-sm border-2 text-customCream border-[#C7C7C7] rounded-lg font-medium focus:outline-none focus:border-customRed"
        />
      ) : (
        <input
          type={type}
          id={idHtmlFor}
          value={value ? value.toString() : ""}
          name={name}
          required={required}
          placeholder={isFocused ? "" : placeholder}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onChange={onChangeHandler}
          className="px-4 py-2 text-sm text-customCream md:text-base border-2 placeholder:text-black placeholder:text-base placeholder:font-normal focus:outline-none rounded   bg-[rgba(255,255,255,1)] border-lg"
        />
      )}

      {emailError && (
        <p className="text-sm text-red-500">
          <span>{emailError}</span>
        </p>
      )}

      {error && !emailError && (
        <p className="text-sm text-red-500">
          <span>{error}</span>
        </p>
      )}
    </div>
  );
};

export default FormInputBox;
