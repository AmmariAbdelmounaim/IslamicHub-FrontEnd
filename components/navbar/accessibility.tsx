import { useRouter } from "next/navigation";
import BorderButton from "../button/BorderButton";
import FillButton from "../button/FillButton";
import LangSwitcher from "../button/LangSwitcher";

const Accessibility = () => {
  const router = useRouter();
  return (
    <div className="flex gap-[20px] ">
      <BorderButton
        additionalStyle="px-[40px] py-[10px]"
        onClick={() => {
          router.push("/authentication/login");
        }}
      >
        Log In
      </BorderButton>
      <FillButton
        additionalStyle="px-[40px] py-[10px]"
        onClick={() => {
          router.push("/authentication/signup");
        }}
      >
        Sign Up
      </FillButton>
      <LangSwitcher />
    </div>
  );
};

export default Accessibility;
