import Image, { StaticImageData } from "next/image";

interface CardProps {
  title: string;
  image: string | StaticImageData;
  text: string;
}

const Card = ({ title, image, text }: CardProps) => {
  return (
    <div className="flex flex-col  w-[300px] shadow-lg rounded-xl py-[32px] px-[16px] gap-[40px] m-[25px] sm:flex sm:justify-between sm:px-[32px] sm:gap-[50px] sm:h-[550px] sm:w-[auto]">
      <Image
        src={image as string}
        alt="card image"
        className="rounded-sm border border-primary-orange-normal"
      />
      <h3 className="font-poppins text-[24px] font-medium capitalize text-secondary-brown-dark text-center ">
        {title}
      </h3>
      <p className="font-poppins text-[18px] capitalize text-justify text-primary-orange-dark-active">
        {text}
      </p>
    </div>
  );
};

export default Card;
