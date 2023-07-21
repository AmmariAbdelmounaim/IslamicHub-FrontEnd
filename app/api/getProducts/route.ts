import Stripe from "stripe";
import { NextResponse } from "next/server";

export async function GET() {
  const stripe = new Stripe(
    process.env.STRIPE_SECRET_KEY as string,
    {} as Stripe.StripeConfig
  );
  const pattern = /subs/i;

  const pricesResponse = await stripe.prices.list();
  const subscription = pricesResponse.data.filter((item) =>
    pattern.test(item.nickname as string)
  );

  return NextResponse.json(subscription.reverse());
}
