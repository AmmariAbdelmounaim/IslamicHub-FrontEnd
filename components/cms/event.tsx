import React from "react";

export default function Event() {
  return (
    <div className="border-solid border-[2px] border-primary-orange-normal flex gap-0 rounded-[10px]">
      <div className="p-[10px] flex flex-col items-center justify-center bg-secondary-brown-light-hover rounded-tl-[10px] rounded-bl-[10px] border-r-[2px] border-r-primary-orange-normal w-[287px]">
        <p className="font-poppins text-[20px] font-semibold capitalize text-secondary-brown-darker">
          month
        </p>
        <h2 className="font-sourceSerif text-[64px] capitalize font-semibold text-secondary-brown-darker ">
          day
        </h2>
      </div>
      <div className="py-[24px] px-[32px] flex flex-col gap-[24px] ">
        <h3 className="font-sourceSerif text-[28px] font-semibold text-primary-orange-darker capitalize">
          event name
        </h3>
        <p className="font-poppins text-[18px] text-primary-orange-dark-active capitalize">
          event description
        </p>
        <div className="flex flex-col gap-[8px]">
          <div className="flex gap-[16px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M12 2C10.6868 2 9.38642 2.25866 8.17317 2.7612C6.95991 3.26375 5.85752 4.00035 4.92893 4.92893C3.05357 6.8043 2 9.34784 2 12C2 14.6522 3.05357 17.1957 4.92893 19.0711C5.85752 19.9997 6.95991 20.7362 8.17317 21.2388C9.38642 21.7413 10.6868 22 12 22C14.6522 22 17.1957 20.9464 19.0711 19.0711C20.9464 17.1957 22 14.6522 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7362 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2ZM16.2 16.2L11 13V7H12.5V12.2L17 14.9L16.2 16.2Z"
                fill="#997950"
              />
            </svg>
            <p className="font-poppins text-[20px] font-semibold  capitalize text-secondary-brown-normal">
              event name
            </p>
          </div>
          <div className="flex gap-[16px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M12 11.5C11.337 11.5 10.7011 11.2366 10.2322 10.7678C9.76339 10.2989 9.5 9.66304 9.5 9C9.5 8.33696 9.76339 7.70107 10.2322 7.23223C10.7011 6.76339 11.337 6.5 12 6.5C12.663 6.5 13.2989 6.76339 13.7678 7.23223C14.2366 7.70107 14.5 8.33696 14.5 9C14.5 9.3283 14.4353 9.65339 14.3097 9.95671C14.1841 10.26 13.9999 10.5356 13.7678 10.7678C13.5356 10.9999 13.26 11.1841 12.9567 11.3097C12.6534 11.4353 12.3283 11.5 12 11.5ZM12 2C10.1435 2 8.36301 2.7375 7.05025 4.05025C5.7375 5.36301 5 7.14348 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 7.14348 18.2625 5.36301 16.9497 4.05025C15.637 2.7375 13.8565 2 12 2Z"
                fill="#997950"
              />
            </svg>
            <p className="font-poppins text-[20px] font-semibold capitalize text-secondary-brown-normal">
              event location
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
