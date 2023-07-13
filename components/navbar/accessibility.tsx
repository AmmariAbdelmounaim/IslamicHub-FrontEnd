import { useRouter } from "next/navigation";
import BorderButton from "../button/BorderButton";
import FillButton from "../button/FillButton";

const Accessibility = () => {
  const router = useRouter();
  return (
    <div className="flex gap-[32px] ">
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
    </div>
  );
};

export default Accessibility;
