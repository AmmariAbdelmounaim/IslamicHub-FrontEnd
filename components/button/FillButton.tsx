import React from "react";

interface ButtonWithBorderProps extends React.HTMLProps<HTMLButtonElement> {
  children?: React.ReactNode;
  additionalStyle: string;
}

const FillButton: React.FC<ButtonWithBorderProps> = ({
  additionalStyle,
  children,
}) => {
  const className = `rounded-full py-[16px] px-[56px]  bg-primary-orange-normal capitalize bg-primary-orange-normal font-poppins text-[18px] text text-primary-orange-light leading-none ${additionalStyle} hover:bg-primary-orange-normal-hover`;
  return <button className={className}>{children}</button>;
};

export default FillButton;
