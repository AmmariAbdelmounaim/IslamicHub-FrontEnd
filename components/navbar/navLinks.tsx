import Link from "next/link";

const NavLinks = () => {
  return (
    <div className="h-full flex justify-center ">
      <ul className=" m-0 p-0 flex h-full gap-x-[33px]">
        <li className="h-full text-primary-orange-darker font-poppins capitalize text-[18px]">
          <Link
            className="no-underline text-primary-orange-darker text-[18px] transition-all hover:text-primary-orange-dark-hover "
            href="#"
          >
            about us
          </Link>
        </li>
        <li className="h-full text-primary-orange-darker font-poppins capitalize text-[18px]">
          <Link
            className="no-underline text-primary-orange-darker text-[18px] transition-all hover:text-primary-orange-dark-hover"
            href="#"
          >
            services
          </Link>
        </li>
        <li className="h-full text-primary-orange-darker font-poppins capitalize text-[18px] ">
          <Link
            className="no-underline text-primary-orange-darker text-[18px] transition-all hover:text-primary-orange-dark-hover"
            href="#"
          >
            faq
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default NavLinks;
