import React from "react";
interface DirectionButtonProps {
  left: boolean;
  backgroundColor?: string;
}

function DirectionButton({ left, backgroundColor }: DirectionButtonProps) {
  return (
    <div
      className={`rounded-full flex items-center justify-center hover:bg-secondary-brown-normal-hover cursor-pointer ${
        backgroundColor
          ? `bg-[${backgroundColor}] `
          : "bg-secondary-brown-normal-80-opacity"
      } w-[64px] h-[64px]`}
    >
      {left ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="46"
          height="46"
          viewBox="0 0 46 46"
          fill="none"
        >
          <g clipPath="url(#clip0_1442_1925)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M15.2185 25.0317C14.6801 24.4926 14.3777 23.7619 14.3777 23C14.3777 22.2381 14.6801 21.5074 15.2185 20.9683L26.0592 10.1238C26.5985 9.58475 27.3299 9.28199 28.0925 9.28217C28.855 9.28235 29.5863 9.58545 30.1254 10.1248C30.6645 10.6641 30.9672 11.3955 30.967 12.1581C30.9669 12.9207 30.6638 13.6519 30.1244 14.191L21.3154 23L30.1244 31.809C30.6484 32.351 30.9385 33.0771 30.9323 33.8309C30.9261 34.5847 30.6241 35.306 30.0913 35.8393C29.5585 36.3726 28.8376 36.6753 28.0838 36.6822C27.3299 36.6891 26.6036 36.3996 26.0611 35.8762L15.2166 25.0336L15.2185 25.0317Z"
              fill="#F8ECE1"
            />
          </g>
          <defs>
            <clipPath id="clip0_1442_1925">
              <rect
                width="46"
                height="46"
                fill="white"
                transform="matrix(-1 0 0 -1 46 46)"
              />
            </clipPath>
          </defs>
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="46"
          height="46"
          viewBox="0 0 46 46"
          fill="none"
        >
          <g clip-path="url(#clip0_1442_1919)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M30.7817 20.9683C31.3201 21.5074 31.6225 22.2381 31.6225 23C31.6225 23.7619 31.3201 24.4926 30.7817 25.0317L19.9411 35.8762C19.4017 36.4153 18.6703 36.718 17.9078 36.7178C17.1452 36.7177 16.4139 36.4146 15.8749 35.8752C15.3358 35.3359 15.033 34.6045 15.0332 33.8419C15.0334 33.0793 15.3365 32.3481 15.8758 31.809L24.6848 23L15.8758 14.191C15.3519 13.649 15.0617 12.9229 15.0679 12.1691C15.0741 11.4153 15.3761 10.694 15.9089 10.1607C16.4417 9.62744 17.1627 9.32474 17.9165 9.31784C18.6703 9.31094 19.3967 9.60038 19.9392 10.1238L30.7837 20.9664L30.7817 20.9683Z"
              fill="#F8ECE1"
            />
          </g>
          <defs>
            <clipPath id="clip0_1442_1919">
              <rect width="46" height="46" fill="white" />
            </clipPath>
          </defs>
        </svg>
      )}
    </div>
  );
}

export default DirectionButton;
