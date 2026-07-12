import { ComponentPropsWithoutRef, ElementType } from "react";

type Variant = "primary" | "secondary";

type ButtonProps<T extends ElementType> = {
  as?: T;
  variant?: Variant;
  className?: string;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "className">;

const base =
  "inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold transition-colors disabled:cursor-not-allowed disabled:opacity-50";

const variants: Record<Variant, string> = {
  primary:
    "bg-brand-600 text-white hover:bg-brand-700 active:bg-brand-800",
  secondary:
    "border border-border bg-transparent text-text hover:bg-bg-subtle",
};

export function Button<T extends ElementType = "button">({
  as,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps<T>) {
  const Component = as || "button";
  return (
    <Component
      className={`${base} ${variants[variant]} ${className}`}
      {...props}
    />
  );
}
