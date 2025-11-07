"use client";
import React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

interface ButtonProps {
  title?: string;
  icon?: React.ElementType;
  onClick?: () => void;
  className?: string;
  variant?: "primary" | "secondary";
  asChild?: boolean;
  children?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  title,
  icon: Icon,
  onClick,
  className,
  variant = "primary",
  asChild = false,
  children,
}) => {
  const Comp = asChild ? Slot : "button";

  const variants: Record<string, string> = {
    primary:
      "bg-[#1C1C1A] text-white hover:bg-[#2A2A28] transition-all duration-200",
    secondary:
      "bg-gray-100 text-black hover:bg-gray-200 transition-all duration-200",
  };

  return (
    <Comp
      onClick={onClick}
      className={cn(
        "flex items-center justify-center gap-5 rounded-lg px-3 py-2 font-medium",
        variants[variant],
        className
      )}
    >
      {title && <span>{title}</span>}
      {Icon && (
        <span className="bg-[#2C2C29] rounded-sm p-1 flex items-center justify-center">
          <Icon className="w-4 h-4 text-white" />
        </span>
      )}
      {children}
    </Comp>
  );
};

export default Button;
