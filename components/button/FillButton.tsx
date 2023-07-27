import React from "react";

interface FillButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  additionalStyle?: string;
}

const FillButton: React.FC<FillButtonProps> = ({
  additionalStyle = "",
  children,
  ...props
}) => {
  const baseStyle =
    "rounded-full py-[16px] px-[40px] capitalize font-medium font-poppins text-[18px] leading-none flex items-center justify-center";
  const colorStyle =
    "bg-primary-orange-normal text-primary-orange-light hover:bg-primary-orange-normal-hover";
  const className = `${additionalStyle} ${baseStyle} ${colorStyle} `;

  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
};

export default FillButton;
