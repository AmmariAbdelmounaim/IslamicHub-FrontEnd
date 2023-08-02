// components/Navbar.tsx
import Link from "next/link";
import Image from "next/image";
import FillButton from "../../../components/button/FillButton";
const Navbar = () => {
  return (
    <div className="fixed top-0 right-0 left-0 flex px-[100px] bg-primary-orange-dark-50-opacity justify-between items-center z-50">
      <div>
        <Image
          src={"/mockLogo.svg"}
          alt="mock logo for islamic center"
          width={118}
          height={57}
        />
      </div>
      <ul className="h-full gap-[33px] py-[22px] flex  items-center ">
        {" "}
        {/* Ajouter la classe "flex" ici */}
        <li>
          <Link
            className="no-underline  transition-all text-secondary-brown-light font-poppins capitalize text-[20px] hover:text-secondary-brown-light-hover"
            href="#"
          >
            Prayer time
          </Link>
        </li>
        <li>
          <Link
            className="no-underline  transition-all text-secondary-brown-light font-poppins capitalize text-[20px] hover:text-secondary-brown-light-hover"
            href="#"
          >
            About us
          </Link>
        </li>
        <li>
          <Link
            className="no-underline  transition-all text-secondary-brown-light font-poppins capitalize text-[20px] hover:text-secondary-brown-light-hover"
            href="#"
          >
            Our services
          </Link>
        </li>
        <li>
          <Link
            className="no-underline  transition-all text-secondary-brown-light font-poppins capitalize text-[20px] hover:text-secondary-brown-light-hover"
            href="#"
          >
            Our Events
          </Link>
        </li>
        <li>
          <Link
            className="no-underline  transition-all text-secondary-brown-light font-poppins capitalize text-[20px] hover:text-secondary-brown-light-hover"
            href="#"
          >
            Contact Us
          </Link>
        </li>
        <li className="h-full flex items-center ml-auto">
          {" "}
          {/* Utiliser la classe "ml-auto" ici */}
        </li>
      </ul>
      <FillButton>donation</FillButton>
    </div>
  );
};

export default Navbar;
