import { useState } from "react";
import MenuToggle from "./menuToggle";
import Logo from "../logo";
import BorderButton from "../button/BorderButton";
import FillButton from "../button/FillButton";
import { RevealLR } from "../animations/RevealLR";
import { Reveal } from "../animations/Reveal";
import Link from "next/link";

const MobileNavLinks = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className={"h-full flex items-center relative"}>
      <MenuToggle isOpen={isOpen} toggle={() => setOpen(!isOpen)} />

      {isOpen && (
        <div
          className="fixed inset-0  backdrop-blur-md z-10 cursor-pointer"
          onClick={() => setOpen(!isOpen)}
        ></div>
      )}
      <ul
        className={`mt-[-67px]  w-4/6 flex flex-col items-center h-full bg-primary-orange-light fixed ${
          isOpen ? "right-0" : "right-[-100%]"
        }
            top-[67px] z-30 transition-all ease-in-out duration-500`}
      >
        <li className="mt-[48px] mb-[38px] ">
          <Logo />
        </li>
        <li className="mt-[22px] mb-[33px] font-poppins capitalize leading-none text-[22px] w-full text-center">
          <RevealLR>
            <Link
              className="no-underline text-primary-orange-darker transition-all  hover:text-primary-orange-dark-hover "
              href="#"
            >
              about us
            </Link>
          </RevealLR>
        </li>

        <li className="mb-[33px] font-poppins capitalize leading-none text-[22px]  w-full text-center">
          <RevealLR>
            <Link
              className="no-underline text-primary-orange-darker  transition-all  hover:text-primary-orange-dark-hover"
              href="#"
            >
              Services
            </Link>
          </RevealLR>
        </li>
        <li className="mb-[22px] pb-[22px] font-poppins capitalize leading-none text-[22px]  w-full text-center">
          <RevealLR>
            <Link
              className="no-underline text-primary-orange-darker  transition-all hover:text-primary-orange-dark-hover"
              href="#"
            >
              Faq
            </Link>
          </RevealLR>
        </li>
        <Reveal>
          <div className="flex flex-col items-center gap-[24px] h-[200px]">
            <BorderButton additionalStyle="px-[40px] py-[16px] w-[100%]">
              Log In
            </BorderButton>
            <FillButton additionalStyle="px-[40px] py-[16px] w-[100%]">
              Sign Up
            </FillButton>
          </div>
        </Reveal>
      </ul>
    </div>
  );
};

export default MobileNavLinks;
