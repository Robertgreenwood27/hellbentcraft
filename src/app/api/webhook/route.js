// src/app/api/webhook/route.js
import { NextResponse } from 'next/server';
import Stripe from 'stripe';
import { updateOrderStatus } from '@/lib/sanity';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;

export async function POST(request) {
  const payload = await request.text();
  const signature = request.headers.get('stripe-signature');
  
  let event;
  
  try {
    event = stripe.webhooks.constructEvent(payload, signature, endpointSecret);
  } catch (err) {
    console.error('Webhook signature verification failed:', err.message);
    return NextResponse.json({ error: 'Webhook signature verification failed' }, { status: 400 });
  }
  
  // Handle the event
  switch (event.type) {
    case 'checkout.session.completed':
      const session = event.data.object;
      
      // Update order status in Sanity
      // In a real implementation, you would store the order ID with the Stripe
      // In a real implementation, you would store the order ID with the Stripe session metadata
      // For now, we'll use a mock function to find the order
      try {
        const orderId = await findOrderByStripeSession(session.id);
        if (orderId) {
          await updateOrderStatus(orderId, 'processing');
        }
      } catch (err) {
        console.error('Error updating order status:', err);
      }
      break;
    
    // Handle other events as needed
    default:
      console.log(`Unhandled event type: ${event.type}`);
  }
  
  return NextResponse.json({ received: true });
}

// Mock function to find an order by Stripe session
// In a real implementation, you would store this association in your database
async function findOrderByStripeSession(sessionId) {
  // Implementation depends on your specific setup
  return 'some-order-id';
}