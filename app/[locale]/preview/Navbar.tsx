// components/Navbar.tsx
import Link from "next/link";
import Image from "next/image";
import FillButton from "../../../components/button/FillButton";
import { useAppSelector } from "../../../redux/store";
const Navbar = () => {
  const { userInfo } = useAppSelector((state) => state.auth);
  return (
    <div
      className={`absolute top-0 right-0 left-0 flex px-[100px] 
          "bg-primary-orange-dark-50-opacity"
      }  justify-between items-center z-50`}
      style={{
        backgroundColor: `${userInfo?.centerDTO.headerFooterDTO.headerBGColor}`,
      }}
    >
      <div className="h-[57px] w-[112px]">
        <Image
          src={`${
            userInfo?.centerDTO.headerFooterDTO.largeLogo ?? "/mockLogo.svg"
          }`}
          alt="mock logo for islamic center"
          width={112}
          height={57}
        />
      </div>
      <ul className="h-full gap-[33px] py-[22px] flex  items-center ">
        {" "}
        {userInfo?.centerDTO.headerFooterDTO.headerPrayerTime && (
          <li>
            <Link
              className={`no-underline  transition-all
              text-secondary-brown-light
              font-poppins capitalize text-[20px] `}
              style={{
                color: `${userInfo.centerDTO.headerFooterDTO.headerTextColor}`,
              }}
              href="#"
            >
              Prayer time
            </Link>
          </li>
        )}
        {userInfo?.centerDTO.headerFooterDTO.headerAboutUs && (
          <li>
            <Link
              className={`no-underline  transition-all ${
                userInfo.centerDTO.headerFooterDTO.headerTextColor ??
                "text-secondary-brown-light"
              } font-poppins capitalize text-[20px] `}
              style={{
                color: `${userInfo.centerDTO.headerFooterDTO.headerTextColor}`,
              }}
              href="#"
            >
              About us
            </Link>
          </li>
        )}
        {userInfo?.centerDTO.headerFooterDTO.headerOurServices && (
          <li>
            <Link
              className={`no-underline  transition-all ${
                userInfo.centerDTO.headerFooterDTO.headerTextColor ??
                "text-secondary-brown-light"
              } font-poppins capitalize text-[20px] `}
              style={{
                color: `${userInfo.centerDTO.headerFooterDTO.headerTextColor}`,
              }}
              href="#"
            >
              Our services
            </Link>
          </li>
        )}
        {userInfo?.centerDTO.headerFooterDTO.headerOurEvents && (
          <li>
            <Link
              className={`no-underline  transition-all ${
                userInfo.centerDTO.headerFooterDTO.headerTextColor ??
                "text-secondary-brown-light"
              } font-poppins capitalize text-[20px] `}
              style={{
                color: `${userInfo.centerDTO.headerFooterDTO.headerTextColor}`,
              }}
              href="#"
            >
              Our Events
            </Link>
          </li>
        )}
        {userInfo?.centerDTO.headerFooterDTO.headerContanctUs && (
          <li>
            <Link
              className={`no-underline  transition-all ${
                userInfo.centerDTO.headerFooterDTO.headerTextColor ??
                "text-secondary-brown-light"
              } font-poppins capitalize text-[20px] `}
              style={{
                color: `${userInfo.centerDTO.headerFooterDTO.headerTextColor}`,
              }}
              href="#"
            >
              Contact Us
            </Link>
          </li>
        )}
        {userInfo?.centerDTO.headerFooterDTO.headerTestimonials && (
          <li>
            <Link
              className={`no-underline  transition-all ${
                userInfo.centerDTO.headerFooterDTO.headerTextColor ??
                "text-secondary-brown-light"
              } font-poppins capitalize text-[20px] `}
              style={{
                color: `${userInfo.centerDTO.headerFooterDTO.headerTextColor}`,
              }}
              href="#"
            >
              Testimonials
            </Link>
          </li>
        )}
      </ul>
      <FillButton>donation</FillButton>
    </div>
  );
};

export default Navbar;
