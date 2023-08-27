import { ComponentPropsWithoutRef, LegacyRef, forwardRef } from "react";
import { twMerge } from "tailwind-merge";

interface InputProps extends ComponentPropsWithoutRef<"input"> {
  label?: string;
  error?: boolean;
  errorMessage?: string;
}

function Input(
  { label, className, error, errorMessage, ...props }: InputProps,
  ref: LegacyRef<HTMLInputElement> | undefined
) {
  const inputClassName = twMerge(
    className,
    "rounded-lg border border-gray-400 p-2 text-sm font-normal text-primaryLight placeholder-black placeholder-opacity-50 outline-none transition-all",
    error ? "border-red-500" : "focus:ring-1 focus:ring-primary"
  );

  return (
    <div className="flex w-full flex-col">
      {label && <label htmlFor={label}>{label}</label>}
      <input id={label} ref={ref} className={inputClassName} {...props} />
      {error && errorMessage && (
        <span className="mt-1 text-xs text-red-500">{errorMessage}</span>
      )}
    </div>
  );
}

export default forwardRef(Input);
