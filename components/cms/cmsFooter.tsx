import Image from "next/image";
import Link from "next/link";
import React from "react";

interface CmsCustomFooterProps {
  logo?: string;
  facebook?: string;
  instagram?: string;
  twitter?: string;
  threads?: string;
  email?: string;
  phoneNumber?: string;
  backgroundColor?: string;
  textColor?: string;
}

function CmsCustomFooter({
  logo,
  facebook,
  instagram,
  twitter,
  threads,
  email,
  phoneNumber,
  backgroundColor,
  textColor,
}: CmsCustomFooterProps) {
  return (
    <div
      className="px-[100px] py-[64px] flex flex-col gap-[24px] w-full "
      style={{
        backgroundColor: `${
          backgroundColor ? backgroundColor : "rgba(72, 44, 20, 0.50)"
        }`,
      }}
    >
      <div className="flex items-center justify-center">
        <Image
          src={logo ? logo : "/mockLogo.svg"}
          alt={"islamic center logo"}
          height={100}
          width={200}
        />
      </div>
      <div className="flex flex-col gap-[32px] items-center">
        <div className="flex justify-center items-center gap-[24px]">
          {threads && (
            <Link href={threads}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
              >
                <g clipPath="url(#clip0_929_4383)">
                  <path
                    d="M17.743 11.3081C17.639 11.2586 17.534 11.2113 17.428 11.1661C17.243 7.75206 15.378 5.79806 12.246 5.77806H12.204C10.33 5.77806 8.77303 6.57806 7.81403 8.03306L9.53603 9.21406C10.252 8.12706 11.376 7.89506 12.205 7.89506H12.233C13.264 7.90206 14.043 8.20206 14.546 8.78706C14.913 9.21206 15.158 9.80106 15.279 10.5431C14.3009 10.3842 13.3079 10.3363 12.319 10.4001C9.34203 10.5721 7.42703 12.3081 7.55603 14.7211C7.62103 15.9451 8.23102 16.9981 9.27303 17.6861C10.153 18.2681 11.288 18.5521 12.468 18.4881C14.025 18.4021 15.246 17.8081 16.098 16.7221C16.746 15.8971 17.155 14.8281 17.336 13.4811C18.078 13.9291 18.628 14.5181 18.932 15.2261C19.449 16.4311 19.479 18.4101 17.864 20.0231C16.449 21.4371 14.748 22.0481 12.178 22.0671C9.32703 22.0471 7.17003 21.1321 5.76803 19.3501C4.45503 17.6801 3.77703 15.2701 3.75203 12.1851C3.77703 9.10006 4.45503 6.68906 5.76803 5.02006C7.17003 3.23806 9.32603 2.32406 12.178 2.30306C15.049 2.32306 17.243 3.24306 18.699 5.03306C19.413 5.91206 19.951 7.01606 20.306 8.30306L22.324 7.76506C21.894 6.18006 21.217 4.81506 20.297 3.68206C18.43 1.38506 15.7 0.209059 12.185 0.185059H12.171C8.66003 0.209059 5.96303 1.39006 4.15003 3.69506C2.53603 5.74506 1.70403 8.60006 1.67603 12.1771V12.1931C1.70403 15.7711 2.53603 18.6241 4.14903 20.6751C5.96203 22.9801 8.66103 24.1611 12.171 24.1851H12.185C15.305 24.1631 17.504 23.3461 19.315 21.5361C21.686 19.1681 21.615 16.2001 20.833 14.3781C20.273 13.0711 19.204 12.0101 17.743 11.3081ZM12.356 16.3731C11.051 16.4471 9.69603 15.8611 9.62803 14.6071C9.57803 13.6771 10.29 12.6381 12.436 12.5151C12.682 12.5001 12.923 12.4941 13.16 12.4941C13.94 12.4941 14.668 12.5691 15.331 12.7141C15.084 15.8021 13.634 16.3031 12.356 16.3731Z"
                    fill="#F5F2EE"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_929_4383">
                    <rect
                      width="24"
                      height="24"
                      fill="white"
                      transform="translate(0 0.185059)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </Link>
          )}
          {twitter && (
            <Link href={twitter}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="34"
                height="35"
                viewBox="0 0 34 35"
                fill="none"
              >
                <path
                  d="M31.8186 8.6849C30.7277 9.18073 29.5519 9.50656 28.3336 9.6624C29.5802 8.91156 30.5436 7.72156 30.9969 6.29073C29.8211 6.99906 28.5177 7.4949 27.1436 7.77823C26.0244 6.5599 24.4519 5.85156 22.6669 5.85156C19.3377 5.85156 16.6177 8.57156 16.6177 11.9291C16.6177 12.4107 16.6744 12.8782 16.7736 13.3174C11.7302 13.0624 7.23939 10.6399 4.25022 6.97073C3.72605 7.86323 3.42855 8.91156 3.42855 10.0166C3.42855 12.1274 4.49105 13.9974 6.13438 15.0599C5.12855 15.0599 4.19355 14.7766 3.37189 14.3516V14.3941C3.37189 17.3407 5.46855 19.8057 8.24522 20.3582C7.35375 20.6022 6.41785 20.6361 5.51105 20.4574C5.89583 21.6651 6.6494 22.7218 7.66582 23.479C8.68225 24.2363 9.91044 24.656 11.1777 24.6791C9.02953 26.3797 6.36671 27.2989 3.62688 27.2857C3.14522 27.2857 2.66355 27.2574 2.18188 27.2007C4.87355 28.9291 8.07522 29.9349 11.5036 29.9349C22.6669 29.9349 28.8011 20.6699 28.8011 12.6374C28.8011 12.3682 28.8011 12.1132 28.7869 11.8441C29.9769 10.9941 30.9969 9.9174 31.8186 8.6849Z"
                  fill="#F5F2EE"
                />
              </svg>
            </Link>
          )}
          {instagram && (
            <Link href={instagram}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="29"
                height="30"
                viewBox="0 0 29 30"
                fill="none"
              >
                <path
                  d="M14.5013 11.5599C13.5399 11.5599 12.6179 11.9418 11.938 12.6216C11.2582 13.3015 10.8763 14.2235 10.8763 15.1849C10.8763 16.1463 11.2582 17.0683 11.938 17.7482C12.6179 18.428 13.5399 18.8099 14.5013 18.8099C15.4627 18.8099 16.3847 18.428 17.0646 17.7482C17.7444 17.0683 18.1263 16.1463 18.1263 15.1849C18.1263 14.2235 17.7444 13.3015 17.0646 12.6216C16.3847 11.9418 15.4627 11.5599 14.5013 11.5599ZM14.5013 9.14323C16.1037 9.14323 17.6404 9.77976 18.7734 10.9128C19.9064 12.0458 20.543 13.5825 20.543 15.1849C20.543 16.7872 19.9064 18.324 18.7734 19.457C17.6404 20.59 16.1037 21.2266 14.5013 21.2266C12.899 21.2266 11.3622 20.59 10.2292 19.457C9.09617 18.324 8.45963 16.7872 8.45963 15.1849C8.45963 13.5825 9.09617 12.0458 10.2292 10.9128C11.3622 9.77976 12.899 9.14323 14.5013 9.14323ZM22.3555 8.84115C22.3555 9.24173 22.1963 9.62591 21.9131 9.90917C21.6298 10.1924 21.2456 10.3516 20.8451 10.3516C20.4445 10.3516 20.0603 10.1924 19.777 9.90917C19.4938 9.62591 19.3346 9.24173 19.3346 8.84115C19.3346 8.44056 19.4938 8.05638 19.777 7.77312C20.0603 7.48986 20.4445 7.33073 20.8451 7.33073C21.2456 7.33073 21.6298 7.48986 21.9131 7.77312C22.1963 8.05638 22.3555 8.44056 22.3555 8.84115ZM14.5013 5.51823C11.5119 5.51823 11.0237 5.52669 9.63293 5.58831C8.68559 5.63302 8.05001 5.7599 7.46034 5.98948C6.96688 6.17065 6.52076 6.46105 6.15534 6.83894C5.77714 7.20434 5.48635 7.65043 5.30468 8.14394C5.07509 8.73602 4.94822 9.3704 4.90472 10.3165C4.84189 11.6505 4.83343 12.1169 4.83343 15.1849C4.83343 18.1755 4.84189 18.6625 4.90351 20.0533C4.94822 20.9994 5.07509 21.6362 5.30347 22.2246C5.50889 22.7503 5.75055 23.1285 6.15172 23.5296C6.55893 23.9356 6.93714 24.1785 7.45672 24.3791C8.05364 24.6099 8.68922 24.738 9.63172 24.7815C10.9657 24.8443 11.4321 24.8516 14.5001 24.8516C17.4907 24.8516 17.9777 24.8431 19.3685 24.7815C20.3134 24.7368 20.949 24.6099 21.5398 24.3815C22.0329 24.1995 22.4788 23.9092 22.8448 23.5321C23.2521 23.1261 23.4949 22.7479 23.6955 22.2271C23.9251 21.6326 24.0532 20.997 24.0967 20.0521C24.1595 18.7193 24.1668 18.2516 24.1668 15.1849C24.1668 12.1955 24.1583 11.7073 24.0967 10.3165C24.052 9.3716 23.9239 8.7336 23.6955 8.14394C23.5134 7.65096 23.2231 7.20504 22.8461 6.83894C22.4808 6.46054 22.0347 6.16972 21.5411 5.98827C20.949 5.75869 20.3134 5.63181 19.3685 5.58831C18.0357 5.52548 17.5705 5.51823 14.5013 5.51823ZM14.5013 3.10156C17.7843 3.10156 18.194 3.11365 19.4833 3.17406C20.7689 3.23448 21.6462 3.43627 22.4159 3.73594C23.2134 4.04285 23.8852 4.45852 24.5571 5.12915C25.1715 5.73319 25.6469 6.46386 25.9503 7.27031C26.2487 8.04002 26.4517 8.91727 26.5121 10.2041C26.5689 11.4922 26.5846 11.9019 26.5846 15.1849C26.5846 18.4679 26.5726 18.8776 26.5121 20.1656C26.4517 21.4525 26.2487 22.3286 25.9503 23.0995C25.6478 23.9064 25.1722 24.6372 24.5571 25.2406C23.9528 25.8549 23.2222 26.3303 22.4159 26.6339C21.6462 26.9323 20.7689 27.1353 19.4833 27.1957C18.194 27.2525 17.7843 27.2682 14.5013 27.2682C11.2183 27.2682 10.8086 27.2561 9.51934 27.1957C8.23368 27.1353 7.35764 26.9323 6.58672 26.6339C5.77995 26.3311 5.04915 25.8556 4.44555 25.2406C3.83103 24.6367 3.35559 23.906 3.05234 23.0995C2.75268 22.3298 2.55089 21.4525 2.49047 20.1656C2.43247 18.8776 2.41797 18.4679 2.41797 15.1849C2.41797 11.9019 2.43005 11.4922 2.49047 10.2041C2.55089 8.91606 2.75268 8.04123 3.05234 7.27031C3.35471 6.46336 3.83027 5.73249 4.44555 5.12915C5.04932 4.51438 5.78007 4.0389 6.58672 3.73594C7.35643 3.43627 8.23247 3.23448 9.51934 3.17406C10.8086 3.11727 11.2183 3.10156 14.5013 3.10156Z"
                  fill="#F5F2EE"
                />
              </svg>
            </Link>
          )}
          {facebook && (
            <Link href={facebook}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="29"
                height="30"
                viewBox="0 0 29 30"
                fill="none"
              >
                <path
                  d="M26.5833 15.1849C26.5833 8.5149 21.17 3.10156 14.5 3.10156C7.82996 3.10156 2.41663 8.5149 2.41663 15.1849C2.41663 21.0332 6.57329 25.9028 12.0833 27.0266V18.8099H9.66663V15.1849H12.0833V12.1641C12.0833 9.83198 13.9804 7.9349 16.3125 7.9349H19.3333V11.5599H16.9166C16.252 11.5599 15.7083 12.1036 15.7083 12.7682V15.1849H19.3333V18.8099H15.7083V27.2078C21.8104 26.6036 26.5833 21.4561 26.5833 15.1849Z"
                  fill="#F5F2EE"
                />
              </svg>
            </Link>
          )}
        </div>
        <div
          className="flex justify-between w-[650px]"
          style={{
            color: `${textColor ? textColor : "#F5F2EE"}`,
          }}
        >
          <p className="font-poppins text-[18px]">
            Email: {email ? email : "youremail@gmail.com"}
          </p>
          <p className="font-poppins text-[18px]">
            Call Anytime: {phoneNumber ? phoneNumber : "+1676790645"}
          </p>
        </div>
      </div>
    </div>
  );
}

export default CmsCustomFooter;
