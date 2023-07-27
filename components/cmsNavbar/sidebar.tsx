import Image from "next/image";
import { INavItemCms, NavListCms } from "../../helpers/consts";
import Link from "next/link";
import { ReactSVG } from "react-svg";
import { usePathname } from "next/navigation";

export const CsmSidebar = ({
  isCollapsed,
  onToggle,
}: {
  isCollapsed: boolean;
  onToggle: () => void;
}) => {
  const pathname = usePathname();

  return (
    <div
      className={`h-screen w-full flex flex-col py-[32px] gap-[56px] bg-secondary-brown-light-active transition-all duration-300 `}
    >
      <div className="flex justify-between px-[16px]">
        {!isCollapsed && (
          <Link href="/">
            <Image
              src={"/IslamicHub.svg"}
              alt="islamic hub logo"
              width={60}
              height={60}
            />
          </Link>
        )}

        <button onClick={onToggle}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
          >
            <path
              d="M4 8H28M4 16H28M4 24H28"
              stroke="#362A1C"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
      <div>
        <ul
          className={`flex flex-col gap-[24px] ${
            isCollapsed ? "items-center" : ""
          }`}
        >
          {NavListCms.map((item: INavItemCms) => (
            <li key={item.title}>
              <Link
                href={item.path}
                className={`group flex gap-[10px]  px-[16px] py-[8px] ${
                  pathname === item.path ? "bg-[#CE7D39]" : ""
                } hover:bg-[#CE7D39] active:bg-[#CE7D39] justify-${
                  isCollapsed ? "center" : "start"
                }`}
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
                {!isCollapsed && (
                  <p
                    className={`font-poppins capitalize font-[18px] text-secondary-brown-darker ${
                      pathname === item.path && "text-white"
                    } group-hover:text-white`}
                  >
                    {item.title}
                  </p>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default CsmSidebar;
