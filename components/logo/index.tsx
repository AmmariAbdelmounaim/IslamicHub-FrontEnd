import Image from "next/image";

const Logo = () => {
  return (
    <div className="flex items-center">
      <div className="w-[71px] h-[71px]">
        <Image
          className="w-full h-full"
          src="IslamicHub.svg"
          alt="Islamic Hub Logo"
          width={71}
          height={71}
        />
      </div>
    </div>
  );
};
export default Logo;
