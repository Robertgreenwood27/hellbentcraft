// src/components/CheckoutForm.jsx
'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';

export default function CheckoutForm({ onSubmit, isProcessing }) {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [formStep, setFormStep] = useState(0);
  
  const nextStep = () => setFormStep(formStep + 1);
  const prevStep = () => setFormStep(formStep - 1);
  
  const submitForm = (data) => {
    onSubmit(data);
  };
  
  return (
    <form onSubmit={handleSubmit(submitForm)} className="space-y-6">
      {formStep === 0 && (
        <div className="space-y-6">
          <h2 className="text-2xl font-bold mb-6 font-serif text-purple-300">
            Contact Information
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstName" className="block mb-2">First Name</label>
              <input
                type="text"
                id="firstName"
                {...register('firstName', { required: 'First name is required' })}
                className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 focus:border-purple-500 focus:outline-none"
              />
              {errors.firstName && (
                <p className="text-red-400 text-sm mt-1">{errors.firstName.message}</p>
              )}
            </div>
            
            <div>
              <label htmlFor="lastName" className="block mb-2">Last Name</label>
              <input
                type="text"
                id="lastName"
                {...register('lastName', { required: 'Last name is required' })}
                className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 focus:border-purple-500 focus:outline-none"
              />
              {errors.lastName && (
                <p className="text-red-400 text-sm mt-1">{errors.lastName.message}</p>
              )}
            </div>
          </div>
          
          <div>
            <label htmlFor="email" className="block mb-2">Email</label>
            <input
              type="email"
              id="email"
              {...register('email', { 
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid email address'
                }
              })}
              className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 focus:border-purple-500 focus:outline-none"
            />
            {errors.email && (
              <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>
          
          <div>
            <label htmlFor="phone" className="block mb-2">Phone (optional)</label>
            <input
              type="tel"
              id="phone"
              {...register('phone')}
              className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 focus:border-purple-500 focus:outline-none"
            />
          </div>
          
          <div className="text-right">
            <button
              type="button"
              onClick={nextStep}
              className="bg-purple-800 hover:bg-purple-700 text-white px-6 py-2 rounded-md font-medium transition-colors border border-purple-600"
            >
              Continue to Shipping
            </button>
          </div>
        </div>
      )}
      
      {formStep === 1 && (
        <div className="space-y-6">
          <h2 className="text-2xl font-bold mb-6 font-serif text-purple-300">
            Shipping Address
          </h2>
          
          <div>
            <label htmlFor="address" className="block mb-2">Address</label>
            <input
              type="text"
              id="address"
              {...register('address', { required: 'Address is required' })}
              className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 focus:border-purple-500 focus:outline-none"
            />
            {errors.address && (
              <p className="text-red-400 text-sm mt-1">{errors.address.message}</p>
            )}
          </div>
          
          <div>
            <label htmlFor="apartment" className="block mb-2">Apartment, suite, etc. (optional)</label>
            <input
              type="text"
              id="apartment"
              {...register('apartment')}
              className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 focus:border-purple-500 focus:outline-none"
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label htmlFor="city" className="block mb-2">City</label>
              <input
                type="text"
                id="city"
                {...register('city', { required: 'City is required' })}
                className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 focus:border-purple-500 focus:outline-none"
              />
              {errors.city && (
                <p className="text-red-400 text-sm mt-1">{errors.city.message}</p>
              )}
            </div>
            
            <div>
              <label htmlFor="state" className="block mb-2">State/Province</label>
              <input
                type="text"
                id="state"
                {...register('state', { required: 'State/Province is required' })}
                className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 focus:border-purple-500 focus:outline-none"
              />
              {errors.state && (
                <p className="text-red-400 text-sm mt-1">{errors.state.message}</p>
              )}
            </div>
            
            <div>
              <label htmlFor="zipCode" className="block mb-2">Zip/Postal Code</label>
              <input
                type="text"
                id="zipCode"
                {...register('zipCode', { required: 'Zip/Postal code is required' })}
                className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 focus:border-purple-500 focus:outline-none"
              />
              {errors.zipCode && (
                <p className="text-red-400 text-sm mt-1">{errors.zipCode.message}</p>
              )}
            </div>
          </div>
          
          <div>
            <label htmlFor="country" className="block mb-2">Country</label>
            <select
              id="country"
              {...register('country', { required: 'Country is required' })}
              className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 focus:border-purple-500 focus:outline-none"
            >
              <option value="">Select a country</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="UK">United Kingdom</option>
              {/* Add more countries as needed */}
            </select>
            {errors.country && (
              <p className="text-red-400 text-sm mt-1">{errors.country.message}</p>
            )}
          </div>
          
          <div className="flex justify-between">
            <button
              type="button"
              onClick={prevStep}
              className="text-purple-400 hover:text-purple-300"
            >
              ← Back to Contact
            </button>
            
            <button
              type="button"
              onClick={nextStep}
              className="bg-purple-800 hover:bg-purple-700 text-white px-6 py-2 rounded-md font-medium transition-colors border border-purple-600"
            >
              Continue to Payment
            </button>
          </div>
        </div>
      )}
      
      {formStep === 2 && (
        <div className="space-y-6">
          <h2 className="text-2xl font-bold mb-6 font-serif text-purple-300">
            Payment Information
          </h2>
          
          <div>
            <label htmlFor="cardHolder" className="block mb-2">Cardholder Name</label>
            <input
              type="text"
              id="cardHolder"
              {...register('cardHolder', { required: 'Cardholder name is required' })}
              className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 focus:border-purple-500 focus:outline-none"
            />
            {errors.cardHolder && (
              <p className="text-red-400 text-sm mt-1">{errors.cardHolder.message}</p>
            )}
          </div>
          
          {/* Stripe Elements will be inserted here in a real implementation */}
          <div className="p-4 border border-gray-700 rounded-md bg-gray-800">
            <p className="text-gray-400 text-sm">
              Stripe payment form will be integrated here
            </p>
          </div>
          
          <div className="flex justify-between">
            <button
              type="button"
              onClick={prevStep}
              className="text-purple-400 hover:text-purple-300"
            >
              ← Back to Shipping
            </button>
            
            <button
              type="submit"
              disabled={isProcessing}
              className="bg-purple-800 hover:bg-purple-700 text-white px-8 py-3 rounded-md font-medium transition-colors border border-purple-600 flex items-center"
            >
              {isProcessing ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing...
                </>
              ) : (
                'Complete Order'
              )}
            </button>
          </div>
        </div>
      )}
    </form>
  );
}