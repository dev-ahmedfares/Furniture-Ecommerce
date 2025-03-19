"use client";

import * as React from "react";
import { EyeIcon, EyeOffIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  FloatingInput,
  FloatingLabel,
  InputProps,
} from "../ui/floating-label-input";

interface IPasswordInputProps extends InputProps {
  customStyle?:string,
  idHtml?:string
}

const PasswordInput = React.forwardRef<HTMLInputElement, IPasswordInputProps>(
  ({ className,customStyle,idHtml="passwordId", ...props }, ref) => {
    const [showPassword, setShowPassword] = React.useState(false);
    const disabled =
      props.value === "" || props.value === undefined || props.disabled;

    return (
      <div className="relative">
        
        <FloatingInput
		
          id={idHtml}
          type={showPassword ? "text" : "password"}
          className={cn(
            "hide-password-toggle pr-10",
            "rounded-none border-x-0 border-t-0 text-darkBlack_light100 shadow-none !border-b-1 border-black dark:border-light-100   focus-visible:ring-0"
          ,className)}
          ref={ref}
          {...props}
        />
        <FloatingLabel htmlFor={idHtml}>
          Password <span className="text-lg text-red-100">*</span>
        </FloatingLabel>
        
        <Button
          type="button"
          variant="ghost"
          size="sm"
          className={`absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent `}
          onClick={() => setShowPassword((prev) => !prev)}
          disabled={disabled}
        >
          {showPassword && !disabled ? (
            <EyeIcon className={`h-4 w-4 text-darkBlack_light100 ${customStyle}`} aria-hidden="true" />
          ) : (
            <EyeOffIcon className={`h-4 w-4 text-darkBlack_light100 ${customStyle}`} aria-hidden="true" />
          )}
          <span className="sr-only">
            {showPassword ? "Hide password" : "Show password"}
          </span>
        </Button>

        {/* hides browsers password toggles */}
        <style>{`
					.hide-password-toggle::-ms-reveal,
					.hide-password-toggle::-ms-clear {
						visibility: hidden;
						pointer-events: none;
						display: none;
					}
				`}</style>
      </div>
    );
  }
);
PasswordInput.displayName = "PasswordInput";

export { PasswordInput };
