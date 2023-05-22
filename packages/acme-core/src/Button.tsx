import * as React from "react";

export interface ButtonProps {
  children: React.ReactNode;
  className?: string;
}

export function Button({ children, className }: ButtonProps) {
  return <button className={[className].join(" ")}>{children}</button>;
}

Button.displayName = "Button";
