// src/lib/stripe.js
import Stripe from 'stripe';
import { createOrder } from './sanity';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function createCheckoutSession(cart, customerInfo) {
  try {
    // Create a Stripe checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      line_items: cart.map(item => ({
        price_data: {
          currency: 'usd',
          product_data: {
            name: item.title,
            images: [item.image]
          },
          unit_amount: Math.round(item.price * 100) // Stripe uses cents
        },
        quantity: item.quantity
      })),
      shipping_address_collection: {
        allowed_countries: ['US', 'CA', 'UK'] // Adjust as needed
      },
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/confirmation?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/cart`,
      customer_email: customerInfo.email
    });
    
    // Create an order in Sanity (with pending status)
    const orderId = `HC-${Date.now()}`;
    
    const orderData = {
      orderId,
      customer: {
        _type: 'reference',
        _ref: await getOrCreateCustomer(customerInfo)
      },
      items: cart.map(item => ({
        product: {
          _type: 'reference',
          _ref: item._id
        },
        quantity: item.quantity,
        price: item.price
      })),
      total: cart.reduce((total, item) => total + item.price * item.quantity, 0),
      status: 'pending',
      shippingAddress: {
        name: `${customerInfo.firstName} ${customerInfo.lastName}`,
        line1: customerInfo.address,
        line2: customerInfo.apartment || '',
        city: customerInfo.city,
        state: customerInfo.state,
        postalCode: customerInfo.zipCode,
        country: customerInfo.country
      },
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    
    const order = await createOrder(orderData);
    
    return {
      success: true,
      sessionId: session.id,
      orderId
    };
  } catch (error) {
    console.error('Error creating checkout session:', error);
    return {
      success: false,
      error: error.message
    };
  }
}

// This function will create a new customer or find an existing one in Sanity
async function getOrCreateCustomer(customerInfo) {
  // Implementation will depend on your specific Sanity setup
  // This is a placeholder
  return 'existing-or-new-customer-id';
}