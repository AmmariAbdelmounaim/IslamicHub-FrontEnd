import BorderButton from "../button/BorderButton";
import FillButton from "../button/FillButton";

const Accessibility = () => {
  return (
    <div className="flex gap-[32px] ">
      <BorderButton additionalStyle="px-[40px] py-[10px]">Log In</BorderButton>
      <FillButton additionalStye="px-[40px] py-[10px]">Sign Up</FillButton>
    </div>
  );
};

export default Accessibility;
