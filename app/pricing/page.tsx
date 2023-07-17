"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import PricingCard from "../../components/Card/pricingCard";
import Navbar from "../../components/navbar";
import FillButton from "../../components/button/FillButton";

interface Recurring {
  aggregate_usage: string | null;
  interval: string;
  interval_count: number;
  trial_period_days: number | null;
  usage_type: string;
}

export interface Price {
  active: boolean;
  billing_scheme: string;
  created: number;
  currency: string;
  custom_unit_amount: number | null;
  id: string;
  livemode: boolean;
  lookup_key: string | null;
  metadata: Record<string, unknown>;
  nickname: string;
  object: string;
  product: string;
  recurring: Recurring;
  tax_behavior: string;
  tiers_mode: string | null;
  transform_quantity: number | null;
  type: string;
  unit_amount: number;
  unit_amount_decimal: string;
}

export default function PricingPage() {
  const [subscriptionType, setSubscriptionType] = useState("monthly");

  const toggleSubscriptionType = () => {
    setSubscriptionType(subscriptionType === "monthly" ? "yearly" : "monthly");
  };

  const [prices, setPrices] = useState<Price[]>([]);

  useEffect(() => {
    fetchPrices();
  }, []);

  const fetchPrices = async () => {
    const { data } = await axios.get("/api/getProducts");
    setPrices(data);
    console.log(data);
  };

  return (
    <>
      <Navbar />

      <div className="py-[40px] px-[100px] flex flex-col gap-[40px] items-center">
        <h1 className="font-sourceSerif text-[24px] text-center text-primary-brown-darker font-semibold capitalize sm:text-[28px] ">
          Choose a plan that is right for your center
        </h1>
        <FillButton
          onClick={toggleSubscriptionType}
          additionalStyle="w-[400px] "
        >
          Switch to {subscriptionType === "monthly" ? "Yearly" : "Monthly"}{" "}
          Subscription
        </FillButton>
        <div className="flex flex-col sm:flex-row gap-[50px] justify-center items-center">
          {subscriptionType === "monthly" ? (
            <>
              {prices &&
                prices.map((price) => {
                  if (price.nickname.startsWith("Monthly")) {
                    return (
                      <PricingCard
                        offer={price}
                        key={price.id}
                        monthly={true}
                        title={price.nickname.split(" ")[1]}
                        description="For Islamic centers"
                        price={price.unit_amount / 100}
                        features={["Customized landing page"]}
                      />
                    );
                  }
                  return null;
                })}
            </>
          ) : (
            <>
              {prices &&
                prices.map((price) => {
                  if (price.nickname.startsWith("Yearly")) {
                    return (
                      <PricingCard
                        offer={price}
                        key={price.id}
                        monthly={true}
                        title={price.nickname.split(" ")[1]}
                        description="For Islamic centers"
                        price={price.unit_amount / 100 / 12}
                        features={["Customized landing page"]}
                      />
                    );
                  }
                  return null;
                })}
            </>
          )}
        </div>
      </div>
    </>
  );
}
