import PricingCard from "../../components/Card/pricingCard";

export default function PricingPage() {
  return (
    <div className="py-[40px] px-[100px] flex flex-col gap-[40px] ">
      <h1 className="font-sourceSerif text-[24px] text-center text-primary-brown-darker font-semibold capitalize sm:text-[28px] ">
        choose a plan that is right for your center
      </h1>
      <div className="flex flex-col sm:flex-row gap-[50px] justify-center items-center">
        <PricingCard
          title="starter"
          description="for islamic centers "
          price={12}
          features={["customized landing page"]}
        />
        <PricingCard
          title="pro"
          description="for islamic centers "
          price={12}
          features={["customized landing page", "receive donations"]}
        />
      </div>
    </div>
  );
}
