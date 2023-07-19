const SliderButton = ({
  toggleSubscriptionType,
  subscriptionType,
}: {
  toggleSubscriptionType: (type: string) => void;
  subscriptionType: string;
}) => {
  const Active =
    "flex items-center justify-center w-[196px] h-[50px] rounded-[10px] border-[1px] border-secondary-brown-light-active bg-secondary-brown-light shadow-primary-brown font-poppins font-semibold capitalize text-secondary-brown-darker text-[16px] ";
  const Inactive =
    "flex items-center justify-center w-[196px] h-[50px] font-poppins font-semibold bg-none text-[16px] text-[#362a1c33] ";

  return (
    <div className="flex items-center  rounded-[10px] border-[1px] border-secondary-brown-light-active bg-secondary-brown-light-hover p-[1px] ">
      <button
        onClick={() => toggleSubscriptionType("monthly")}
        className={`${subscriptionType === "monthly" ? Active : Inactive}`}
      >
        Monthly
      </button>
      <button
        onClick={() => toggleSubscriptionType("yearly")}
        className={`${subscriptionType === "yearly" ? Active : Inactive}`}
      >
        Yearly
      </button>
    </div>
  );
};
export default SliderButton;
