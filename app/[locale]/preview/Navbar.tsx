// components/Navbar.tsx
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="h-full flex justify-center">
      <ul className="m-0 p-0 flex h-full gap-x-[33px] flex"> {/* Ajouter la classe "flex" ici */}
        <li className="h-full text-primary-orange-darker font-poppins capitalize text-[18px]">
          <Link
            className="no-underline text-primary-orange-darker text-[18px] transition-all hover:text-primary-orange-dark-hover"
            href="#"
          >
            Prayer time
          </Link>
        </li>
        <li className="h-full text-primary-orange-darker font-poppins capitalize text-[18px]">
          <Link
            className="no-underline text-primary-orange-darker text-[18px] transition-all hover:text-primary-orange-dark-hover"
            href="#"
          >
            About us
          </Link>
        </li>
        <li className="h-full text-primary-orange-darker font-poppins capitalize text-[18px] ">
          <Link
            className="no-underline text-primary-orange-darker text-[18px] transition-all hover:text-primary-orange-dark-hover"
            href="#"
          >
            Our services
          </Link>
        </li>
        <li className="h-full text-primary-orange-darker font-poppins capitalize text-[18px] ">
          <Link
            className="no-underline text-primary-orange-darker text-[18px] transition-all hover:text-primary-orange-dark-hover"
            href="#"
          >
            Our Events
          </Link>
        </li>
        <li className="h-full text-primary-orange-darker font-poppins capitalize text-[18px] ">
          <Link
            className="no-underline text-primary-orange-darker text-[18px] transition-all hover:text-primary-orange-dark-hover"
            href="#"
          >
            Contact Us
          </Link>
        </li>
        <li className="h-full flex items-center ml-auto"> {/* Utiliser la classe "ml-auto" ici */}
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            style={{
              display: "flex",
              padding: "12px 40px",
              alignItems: "flex-start",
              gap: "10px",
              borderRadius: "30px",
              background: "var(--primary-orange-normal, #CE7D39)"
            }}
          >
            Donation
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
