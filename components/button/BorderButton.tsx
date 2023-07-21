import React from "react";

interface ButtonWithBorderProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  additionalStyle: string;
}

const BorderButton: React.FC<ButtonWithBorderProps> = ({
  additionalStyle,
  children,
  ...props
}) => {
  const className = `border border-1 border-primary-orange-normal rounded-full  font-poppins text-[18px] font-medium text-primary-orange-darker leading-none ${additionalStyle} hover:text-primary-orange-dark-hover `;
  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
};

export default BorderButton;
