import Image, { StaticImageData } from "next/image";
import FillButton from "../button/FillButton";

interface CardProps {
  title: string;
  image: string | StaticImageData;
  text: string;
  onSubmit?: () => void;
}

const CardWithButton = ({ title, image, text, onSubmit }: CardProps) => {
  return (
    <div className="flex flex-col border  shadow-sm border-primary-orange-normal rounded-xl py-[32px] px-[40px] gap-[40px] w-[300px] sm:w-[335px] ">
      <Image
        src={image as string}
        alt="card image"
        className="rounded-sm border border-primary-orange-normal"
      />
      <h3 className="font-poppins text-[20px] font-medium capitalize text-secondary-brown-dark text-center ">
        {title}
      </h3>
      <p className="font-poppins text-[18px] capitalize text-justify text-primary-orange-dark-active">
        {text}
      </p>
      <FillButton
        additionalStyle="px-[54px] py-[13px] capitalize"
        onSubmit={onSubmit}
      >
        start now
      </FillButton>
    </div>
  );
};

export default CardWithButton;
