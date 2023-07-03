import Link from "next/link";
import Logo from "../logo";

const Footer = () => {
  return (
    <div className="bg-secondary-brown-light-active pl-[20px] pt-[10px] h-[281px] sm:pl-[100px]">
      <Logo />
      <div className="flex flex-col">
        <Link
          className="no-underline mt-[30px] font-poppins text-[18px] text-primary-orange-darker capitalize hover:cursor-pointer hover:text-primary-orange-dark-hover "
          href="#"
        >
          about us
        </Link>

        <Link
          className="no-underline font-poppins text-[18px] text-primary-orange-darker capitalize hover:cursor-pointer hover:text-primary-orange-dark-hover "
          href="#"
        >
          services
        </Link>
        <Link
          className="no-underline font-poppins text-[18px] text-primary-orange-darker capitalize hover:cursor-pointer hover:text-primary-orange-dark-hover inline-block"
          href="#"
        >
          faq
        </Link>
      </div>
    </div>
  );
};

export default Footer;
