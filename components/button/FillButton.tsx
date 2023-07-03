import React from "react";

interface ButtonWithBorderProps extends React.HTMLProps<HTMLButtonElement> {
  children?: React.ReactNode;
  additionalStye: string;
}

const FillButton: React.FC<ButtonWithBorderProps> = ({
  additionalStye,
  children,
}) => {
  const className = `rounded-full bg-primary-orange-normal bg-primary-orange-normal font-poppins text-[18px] text text-primary-orange-light leading-none ${additionalStye} hover:bg-primary-orange-normal-hover`;
  return <button className={className}>{children}</button>;
};

export default FillButton;
