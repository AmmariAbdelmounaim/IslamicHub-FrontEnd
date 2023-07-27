"use client";
import { useEffect, useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { useRouter } from "next/navigation";
import { logout } from "../../redux/features/authSlice";
import { User } from "../../types/types";

const CmsHeader = () => {
  const [userInfo, setUserInfo] = useState<User>(null);
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [toggleUserDropdown, setToggleUserDropDown] = useState<boolean>(false);

  const buttonRef = useRef<HTMLButtonElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const data = localStorage.getItem("userInfo");
    if (data) {
      setUserInfo(JSON.parse(data));
    }

    function handleClickOutside(event: MouseEvent) {
      if (
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node) &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setToggleUserDropDown(false);
      }
    }

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [buttonRef, dropdownRef]);

  return (
    <nav className="flex items-center justify-between  p-[10px] pb-[24px]  border-b-[1px] border-b-secondary-brown-normal-30-opacity bg-primary-orange-light">
      <h1 className="font-sourceSerif text-center text-[28px] font-semibold capitalize">
        Welcome back {userInfo?.firstname} !
      </h1>
      <button
        className="rounded-full p-[10px] bg-transparent border-solid border-[2px] border-primary-orange-normal w-[64px] h-[64px] flex items-center justify-center font-poppins uppercase text-[20px] font-semibold text-secondary-brown-darker hover:bg-primary-orange-light-hover"
        onClick={() => {
          setToggleUserDropDown(!toggleUserDropdown);
        }}
        ref={buttonRef}
      >
        {" "}
        {userInfo?.firstname ? userInfo.firstname.charAt(0) : ""}
        {userInfo?.lastname ? userInfo.firstname.charAt(0) : ""}
      </button>
      <div
        className={`z-50  ${
          toggleUserDropdown ? "fixed top-[70px] right-[12px]" : "hidden"
        }   my-4 text-base list-none bg-primary-orange-light divide-y divide-primary-orange-normal-hover rounded shadow border-[2px] border-solid border-primary-orange-normal-hover font-poppins `}
        ref={dropdownRef}
      >
        <div className="px-4 py-3" role="none">
          <p className="text-sm text-gray-900  capitalize " role="none">
            {userInfo?.firstname} {userInfo?.lastname}
          </p>
          <p
            className="text-sm font-medium text-gray-900 truncate "
            role="none"
          >
            {userInfo?.email}
          </p>
        </div>
        <ul className="py-1" role="none">
          <li>
            <button
              className="w-full flex items-start px-4 py-2 text-sm text-gray-700 hover:bg-primary-orange-light-hover   "
              onClick={() => {}}
            >
              Dashboard
            </button>
          </li>
          <li>
            <button
              className="w-full flex items-start px-4 py-2 text-sm text-gray-700 hover:bg-primary-orange-light-hover   "
              onClick={() => {}}
            >
              Settings
            </button>
          </li>
          <li>
            <button
              className="w-full flex items-start px-4 py-2 text-sm text-gray-700 hover:bg-primary-orange-light-hover   "
              onClick={() => {}}
            >
              Earnings
            </button>
          </li>
          <li>
            <button
              className="w-full flex items-start px-4 py-2 text-sm text-gray-700 hover:bg-primary-orange-light-hover "
              onClick={() => {
                dispatch(logout());
                router.push("/authentication/login");
              }}
            >
              Sign out
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default CmsHeader;
