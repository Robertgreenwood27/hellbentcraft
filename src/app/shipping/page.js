// src/app/shipping/page.js
export default function Shipping() {
    return (
      <div className="min-h-screen bg-black text-gray-200 pt-24">
        <div className="max-w-4xl mx-auto px-4 py-12">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-serif text-purple-300">
              Shipping & Returns
            </h1>
            <p className="text-lg max-w-2xl mx-auto text-gray-300">
              Information about our shipping methods, delivery times, and our return policy.
            </p>
          </div>
          
          {/* Shipping Information */}
          <div className="bg-gray-900 rounded-lg p-8 border border-gray-800 mb-12">
            <h2 className="text-2xl font-bold mb-6 font-serif text-purple-300">
              Shipping Information
            </h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Processing Times</h3>
                <p className="text-gray-400">
                  All orders are processed within 1-3 business days. If there&apos;s a delay with your order, 
                  we&apos;ll contact you via email. Please note that custom pieces require additional production time 
                  that will be communicated during the ordering process.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-2">Shipping Methods & Delivery Times</h3>
                <div className="border-t border-gray-800 pt-4">
                  <table className="w-full">
                    <thead className="text-left">
                      <tr>
                        <th className="pb-2 text-purple-400">Shipping Method</th>
                        <th className="pb-2 text-purple-400">Estimated Delivery</th>
                        <th className="pb-2 text-purple-400">Cost</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-800">
                      <tr>
                        <td className="py-3">Standard Shipping (US)</td>
                        <td className="py-3">3-5 business days</td>
                        <td className="py-3">$5.99</td>
                      </tr>
                      <tr>
                        <td className="py-3">Express Shipping (US)</td>
                        <td className="py-3">1-2 business days</td>
                        <td className="py-3">$12.99</td>
                      </tr>
                      <tr>
                        <td className="py-3">International Shipping</td>
                        <td className="py-3">7-14 business days</td>
                        <td className="py-3">$15.99 - $29.99</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-gray-400 mt-4">
                  Delivery times are estimates and not guaranteed. Delays may occur due to customs 
                  clearance for international shipments or other circumstances beyond our control.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-2">Tracking Your Order</h3>
                <p className="text-gray-400">
                  Once your order ships, you&apos;ll receive a confirmation email with tracking information. 
                  You can also view your order status by logging into your account on our website.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-2">International Orders</h3>
                <p className="text-gray-400">
                  Please be aware that international orders may be subject to import duties, taxes, and 
                  customs clearance fees. These charges are the responsibility of the recipient and are 
                  not included in our shipping fees. Check with your local customs office for more information.
                </p>
              </div>
            </div>
          </div>
          
          {/* Returns Policy */}
          <div className="bg-gray-900 rounded-lg p-8 border border-gray-800 mb-12">
            <h2 className="text-2xl font-bold mb-6 font-serif text-purple-300">
              Returns & Exchanges
            </h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Return Policy</h3>
                <p className="text-gray-400">
                  We accept returns within 14 days of delivery for items in their original condition. 
                  To be eligible for a return, your item must be unused, in the same condition that you 
                  received it, and in its original packaging.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-2">Non-Returnable Items</h3>
                <ul className="list-disc pl-5 text-gray-400 space-y-1">
                  <li>Custom or personalized pieces</li>
                  <li>Sale items</li>
                  <li>Items marked as "Final Sale"</li>
                  <li>Items that have been worn, damaged, or altered</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-2">Return Process</h3>
                <ol className="list-decimal pl-5 text-gray-400 space-y-1">
                  <li>Contact us at zatanna@hellbentcraft.com to initiate a return</li>
                  <li>Include your order number and reason for return</li>
                  <li>We&apos;ll provide a return shipping address and instructions</li>
                  <li>Ship your item back to us with tracking information</li>
                  <li>Once received and inspected, we&apos;ll process your refund</li>
                </ol>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-2">Refunds</h3>
                <p className="text-gray-400">
                  Refunds will be issued to the original payment method. Processing time for refunds 
                  may take up to 7 business days, depending on your payment provider. Shipping costs 
                  are non-refundable.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-2">Exchanges</h3>
                <p className="text-gray-400">
                  If you&apos;d like to exchange an item for a different size or variant, please contact us to 
                  arrange the exchange. Availability of exchange items cannot be guaranteed.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-2">Damaged or Defective Items</h3>
                <p className="text-gray-400">
                  If you receive a damaged or defective item, please contact us within 48 hours of delivery 
                  with photos of the damage. We&apos;ll arrange for a replacement or refund at our discretion.
                </p>
              </div>
            </div>
          </div>
          
          {/* Contact Information */}
          <div className="bg-gray-900 rounded-lg p-8 border border-gray-800">
            <h2 className="text-2xl font-bold mb-6 font-serif text-purple-300 text-center">
              Questions About Shipping or Returns?
            </h2>
            
            <p className="text-center text-gray-300 mb-6">
              If you have any questions about our shipping methods or return policy, 
              please don&apos;t hesitate to contact us.
            </p>
            
            <div className="text-center">
              <a 
                href="/contact" 
                className="inline-block bg-purple-800 hover:bg-purple-700 text-white px-8 py-3 rounded-md font-medium transition-colors border border-purple-600"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }