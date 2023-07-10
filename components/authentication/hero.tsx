import Logo from "../logo";
export const AuthenticationHero = () => {
  return (
    <div className="flex flex-col items-center py-[48px] px-[120px] gap-[80px] justify-between ">
      <Logo
        src="/IslamicHub_logo_white.svg"
        alt="islamic hub logo"
        width={80}
        height={80}
      />
      <div className="flex flex-col gap-[64px]  max-w-[450px]">
        <h3 className="font-sourceSerif text-secondary-brown-light text-[28px] font-semibold capitalize ">
          Join us and create your customizable website today.
        </h3>
        <h4 className="font-poppins text-[20px] text-primary-orange-dark-hover capitalize font-semibold ">
          Personalize your center. Inspire, donate, flourish.
        </h4>
        <p className="text-secondary-brown-light font-poppins font-medium text-center capitalize">
          Personalize your center. Inspire, donate, flourish.
        </p>
      </div>
      <div className="flex gap-[24px] p-[16px] ">
        <Logo
          src="/facebook_logo_white.svg"
          alt="facebook logo"
          width={40}
          height={40}
        />
        <Logo
          src="/instagram_logo_white.svg"
          alt="instagram logo"
          width={40}
          height={40}
        />
        <Logo
          src="/twitter_logo_white.svg"
          alt="twitter logo"
          width={40}
          height={40}
        />
      </div>
    </div>
  );
};
