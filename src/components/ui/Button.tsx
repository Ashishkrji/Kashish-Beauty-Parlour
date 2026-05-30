import React from "react";
import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        ref={ref}
        className={cn(
          "inline-flex font-poppins font-semibold items-center justify-center rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
          {
            "bg-primary text-white hover:bg-[#631830]": variant === "primary",
            "bg-secondary text-dark hover:bg-[#c29b2b]": variant === "secondary",
            "border border-primary text-primary hover:bg-accent": variant === "outline",
            "hover:bg-accent hover:text-primary": variant === "ghost",
            "h-9 px-4 text-sm": size === "sm",
            "h-11 px-8 text-base": size === "md",
            "h-14 px-10 text-lg": size === "lg",
          },
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";
