import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

const Button = forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, children, disabled, type = "button", ...props }, ref) => {
  return (
    <button
      ref={ref}
      type={type}
      disabled={disabled}
      className={twMerge(
        `w-full rounded-full cursor-pointer bg-green-500 border border-transparent p-3 disabled:cursor-not-allowed disabled:opacity-50 text-black font-bold hover:opacity-75 transition`,
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
});

Button.displayName = "Button";

export default Button;
