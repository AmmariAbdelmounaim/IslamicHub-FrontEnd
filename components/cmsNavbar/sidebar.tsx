import Image from "next/image";
import { INavItemCms, NavListCms } from "../../helpers/consts";
import Link from "next/link";
import { ReactSVG } from "react-svg";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export const CsmSidebar = () => {
  const pathname = usePathname();
  useEffect(() => {
    console.log(pathname);
  }, []);

  return (
    <div className="h-screen w-[280px] flex flex-col py-[32px] gap-[56px] bg-secondary-brown-light-active ">
      <div className="flex justify-start px-[16px]">
        <Link href="/">
          <Image
            src={"/IslamicHub.svg"}
            alt="islamic hub logo"
            width={60}
            height={60}
          />
        </Link>
      </div>
      <div>
        <ul className="flex flex-col gap-[24px] ">
          {NavListCms.map((item: INavItemCms) => (
            <li key={item.title}>
              <Link
                href={item.path}
                className={`group flex gap-[10px]  px-[16px] py-[8px] ${
                  pathname === item.path ? "bg-[#CE7D39]" : ""
                } hover:bg-[#CE7D39] active:bg-[#CE7D39]`}
              >
                <ReactSVG
                  src={item.icon}
                  className={`svg-icon group-hover:stroke-white group-hover:fill-white ${
                    pathname === item.path && "stroke-white fill-white"
                  }  stroke-[#362A1C] fill-[#362A1C]`}
                  beforeInjection={(svg) => {
                    svg.setAttribute("style", "width: 24px; height: 24px");
                  }}
                />

                <p
                  className={`font-poppins capitalize font-[18px] text-secondary-brown-darker ${
                    pathname === item.path && "text-white"
                  } group-hover:text-white`}
                >
                  {item.title}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default CsmSidebar;
