import Stripe from "stripe";
import { NextResponse, NextRequest } from "next/server";
import { Price } from "../../pricing/page";

export async function POST(request: Request) {
  const stripe = new Stripe(
    process.env.STRIPE_SECRET_KEY as string,
    {} as Stripe.StripeConfig
  );
  let data: Price = await request.json();

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: [
      {
        price_data: {
          currency: "usd",
          product: data.product,
          unit_amount: data.unit_amount,
          recurring: {
            interval: `${
              data.nickname.startsWith("Monthly") ? "month" : "year"
            }`, // 'month' | 'year'
          },
        },
        quantity: 1,
      },
    ],
    mode: "subscription",
    success_url: "http://localhost:3000/welcome",
    cancel_url: "http://localhost:3000/",
  });

  return NextResponse.json(session.url);
}
