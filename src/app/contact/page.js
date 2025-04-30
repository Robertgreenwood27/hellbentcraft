// src/app/contact/page.js
'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'general',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState(null);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // This would be replaced with actual form submission logic
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitMessage({
        type: 'success',
        text: 'Your message has been sent. We\'ll get back to you as soon as possible.'
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: 'general',
        message: ''
      });
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitMessage(null);
      }, 5000);
    }, 1500);
  };
  
  return (
    <div className="min-h-screen bg-black text-gray-200 pt-24">
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 font-serif text-purple-300">
            Contact Us
          </h1>
          <p className="text-lg max-w-2xl mx-auto text-gray-300">
            Have questions about your order or interested in a custom piece? 
            We&apos;re here to help with all your dark and gothic needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Contact Information */}
          <div className="md:col-span-1">
            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800 h-full">
              <h2 className="text-2xl font-bold mb-6 font-serif text-purple-300">
                Get in Touch
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Email</h3>
                  <a 
                    href="mailto:zatanna@hellbentcraft.com" 
                    className="text-purple-400 hover:text-purple-300"
                  >
                    zatanna@hellbentcraft.com
                  </a>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2">Order Issues</h3>
                  <p className="text-gray-400">
                    Please include your order number and detailed information about your concern.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2">Custom Requests</h3>
                  <p className="text-gray-400">
                    Tell us about your vision, budget, and timeframe for custom items.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2">Response Time</h3>
                  <p className="text-gray-400">
                    We typically respond to all inquiries within 1-2 business days.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="md:col-span-2">
            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
              <h2 className="text-2xl font-bold mb-6 font-serif text-purple-300">
                Send a Message
              </h2>
              
              {submitMessage && (
                <div className={`p-4 mb-6 rounded-md ${
                  submitMessage.type === 'success' 
                    ? 'bg-green-900/50 border border-green-700 text-green-200' 
                    : 'bg-red-900/50 border border-red-700 text-red-200'
                }`}>
                  {submitMessage.text}
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block mb-2">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 focus:border-purple-500 focus:outline-none"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 focus:border-purple-500 focus:outline-none"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block mb-2">Subject</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 focus:border-purple-500 focus:outline-none"
                  >
                    <option value="general">General Inquiry</option>
                    <option value="order">Order Issue</option>
                    <option value="custom">Custom Request</option>
                    <option value="wholesale">Wholesale Inquiry</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    required
                    className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 focus:border-purple-500 focus:outline-none"
                  ></textarea>
                </div>
                
                <div className="text-right">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-purple-800 hover:bg-purple-700 text-white px-6 py-3 rounded-md font-medium transition-colors border border-purple-600 flex items-center ml-auto"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      'Send Message'
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        
        {/* FAQ Section */}
        <div className="bg-gray-900 rounded-lg p-6 border border-gray-800 mb-12">
          <h2 className="text-2xl font-bold mb-6 font-serif text-purple-300 text-center">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">How do I track my order?</h3>
              <p className="text-gray-400">
                Once your order ships, you&apos;ll receive a confirmation email with tracking information. 
                You can also check your order status in your account dashboard.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">What&apos;s your return policy?</h3>
              <p className="text-gray-400">
                We accept returns within 14 days of delivery for items in their original condition. 
                Custom pieces are non-returnable. Please view our <Link href="/shipping" className="text-purple-400 hover:text-purple-300">shipping and returns</Link> page for details.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">Do you offer custom designs?</h3>
              <p className="text-gray-400">
                Yes! We love creating custom pieces. Please contact us with your ideas, and we&apos;ll discuss 
                possibilities, pricing, and timeframes for your unique creation.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">How long does shipping take?</h3>
              <p className="text-gray-400">
                Standard shipping within the US takes 3-5 business days. International shipping varies by location, 
                typically 7-14 business days. Custom pieces have separate production timeframes that we&apos;ll discuss during ordering.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}