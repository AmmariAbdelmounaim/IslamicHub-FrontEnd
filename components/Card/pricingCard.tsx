import FillButton from "../button/FillButton";

interface PricingCardProps {
  title: string;
  description: string;
  price: number;
  features: string[];
}
const PricingCard = ({
  title,
  description,
  price,
  features,
}: PricingCardProps) => {
  return (
    <div className="py-[48px] px-[24px] flex flex-col gap-[32px] w-[310px]  rounded-lg border border-primary-orange-light-active bg-secondary-brown-light shadow-[1px_4px_16px_0px_rgba(122,105,100,0.05)]  ">
      <h3 className="font-poppins text-[24px] text-center text-secondary-brown-darker font-medium capitalize">
        {title}
      </h3>
      <p className="font-poppins text-[16px] text-center text-secondary-brown-normal font-medium capitalize">
        {description}
      </p>
      <h1 className="font-sourceSerif text-[36px] text-center text-secondary-brown-normal font-semibold capitalize">
        ${price}
        <sub className="text-[16px]">/Month</sub>
      </h1>
      <FillButton additionalStyle="px-[40px] py-[12px]" type="button">
        Purchase
      </FillButton>

      {features.map((feature, index = 1) => (
        <div key={index++} className="flex gap-[8px] align-center ">
          <div className="flex flex-col justify-center items-center pt-[4px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <g clipPath="url(#clip0_762_1488)">
                <path
                  fill="#362A1C"
                  d="M9 10.192l-3.5-3.5a.984.984 0 00-1.4 0 .984.984 0 000 1.4l4.19 4.19c.39.39 1.02.39 1.41 0l10.6-10.59a.984.984 0 000-1.4.986.986 0 00-1.4 0l-9.9 9.9z"
                ></path>
              </g>
              <defs>
                <clipPath id="clip0_762_1488">
                  <path fill="#fff" d="M0 0H24V24H0z"></path>
                </clipPath>
              </defs>
            </svg>
          </div>
          <h3 className="font-poppins  text-[16px] font-medium capitalize">
            {feature}
          </h3>
        </div>
      ))}
    </div>
  );
};

export default PricingCard;
