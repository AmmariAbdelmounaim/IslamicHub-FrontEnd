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
    "rounded-full py-[16px] px-[56px] capitalize font-poppins text-[18px] leading-none";
  const colorStyle =
    "bg-primary-orange-normal text-primary-orange-light hover:bg-primary-orange-normal-hover";
  const className = `${baseStyle} ${colorStyle} ${additionalStyle}`;

  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
};

export default FillButton;
