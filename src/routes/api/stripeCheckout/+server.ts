import type { RequestHandler } from "./$types";
import Stripe from 'stripe'
import "dotenv/config"


const stripe = new Stripe(process.env.SECRET_STRIPE_KEY as string, {
    apiVersion: "2024-04-10"
})


// POST /stripeCheckout data: items

// return -> url created by Stripe for our user to use

export const POST: RequestHandler = async ({ request }) => {

    const data = await request.json()
    const items = data.items



    let lineItems: any = []

    items.forEach((item: any) => {
        lineItems.push({ price: item.id, quantity: item.quantity })
    });

    const session = await stripe.checkout.sessions.create({
        line_items: lineItems,
        mode: 'payment',
        success_url: "http://localhost:5175/success",
        cancel_url: "http://localhost:5175/cancel"
    })
    return new Response(
        JSON.stringify({ url: session.url }), // fronted will get this url to redirect
        {
            status: 200,
            headers: { 'content-type': 'application/json' }
        }

    )
}