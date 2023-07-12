import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  additionalStyle?: string;
  variant: "fill" | "border";
}

const Button: React.FC<ButtonProps> = ({
  additionalStyle = "",
  children,
  variant,
  ...props
}) => {
  const baseStyle = "rounded-full font-poppins text-[18px] leading-none";
  let colorStyle = "";

  switch (variant) {
    case "fill":
      colorStyle =
        "py-[16px] px-[56px] bg-primary-orange-normal text-primary-orange-light hover:bg-primary-orange-normal-hover";
      break;
    case "border":
      colorStyle =
        "border border-1 border-primary-orange-normal text-primary-orange-darker hover:text-primary-orange-dark-hover";
      break;
    default:
      colorStyle =
        "py-[16px] px-[56px] bg-primary-orange-normal text-primary-orange-light hover:bg-primary-orange-normal-hover";
      break;
  }

  const className = `${baseStyle} ${colorStyle} ${additionalStyle}`;

  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
};

export default Button;
