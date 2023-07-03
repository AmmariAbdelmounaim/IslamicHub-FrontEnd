import NavLinks from "./navLinks";
import Logo from "../logo";
import Accessibility from "./accessibility";
import { useMediaQuery } from "react-responsive";
import { DeviceSize } from "../responsive";
import MobileNavLinks from "./mobileNavLinks";
import { HOME } from "../../routes";
import dynamic from "next/dynamic";
import Link from "next/link";

const Navbar = () => {
  const isMobile = useMediaQuery({ maxWidth: DeviceSize.tablet });

  return (
    <div
      className="sm:w-full sm:h-[100px] flex sm:items-center  
        px-[20px] py-[16px]  sm:px-[100px] sm:py-[8px]"
    >
      <div className="flex ">
        <Link href={HOME}>
          <Logo />
        </Link>
      </div>
      <div className="flex grow justify-center">
        {!isMobile && <NavLinks />}
      </div>

      <div className="flex ">
        {!isMobile ? <Accessibility /> : <MobileNavLinks />}
      </div>
    </div>
  );
};

export default dynamic(() => Promise.resolve(Navbar), { ssr: false });
