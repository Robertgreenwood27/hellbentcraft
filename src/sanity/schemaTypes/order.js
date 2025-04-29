// src/sanity/schemaTypes/order.js
export default {
    name: 'order',
    title: 'Orders',
    type: 'document',
    fields: [
      { 
        name: 'orderId', 
        title: 'Order ID', 
        type: 'string', 
        validation: Rule => Rule.required() 
      },
      { 
        name: 'customer', 
        title: 'Customer', 
        type: 'reference', 
        to: [{ type: 'customer' }], 
        validation: Rule => Rule.required() 
      },
      {
        name: 'items',
        title: 'Items',
        type: 'array',
        of: [
          {
            type: 'object',
            name: 'orderItem',
            title: 'Order Item',
            fields: [
              { 
                name: 'product', 
                title: 'Product', 
                type: 'reference', 
                to: [{ type: 'product' }], 
                validation: Rule => Rule.required() 
              },
              { 
                name: 'quantity', 
                title: 'Quantity', 
                type: 'number', 
                validation: Rule => Rule.required().integer().positive() 
              },
              { 
                name: 'price', 
                title: 'Price at Time of Purchase', 
                type: 'number', 
                validation: Rule => Rule.required().precision(2).positive() 
              }
            ]
          }
        ]
      },
      { 
        name: 'total', 
        title: 'Total Amount', 
        type: 'number', 
        validation: Rule => Rule.required().precision(2).positive() 
      },
      {
        name: 'status',
        title: 'Order Status',
        type: 'string',
        options: { 
          list: [
            { title: 'Pending', value: 'pending' },
            { title: 'Processing', value: 'processing' },
            { title: 'Shipped', value: 'shipped' },
            { title: 'Delivered', value: 'delivered' },
            { title: 'Cancelled', value: 'cancelled' }
          ]
        },
        initialValue: 'pending',
        validation: Rule => Rule.required()
      },
      {
        name: 'shippingAddress',
        title: 'Shipping Address',
        type: 'object',
        fields: [
          { name: 'name', title: 'Full Name', type: 'string' },
          { name: 'line1', title: 'Address Line 1', type: 'string' },
          { name: 'line2', title: 'Address Line 2', type: 'string' },
          { name: 'city', title: 'City', type: 'string' },
          { name: 'state', title: 'State/Province', type: 'string' },
          { name: 'postalCode', title: 'Postal Code', type: 'string' },
          { name: 'country', title: 'Country', type: 'string' }
        ]
      },
      { 
        name: 'trackingNumber', 
        title: 'Tracking Number', 
        type: 'string' 
      },
      { 
        name: 'notes', 
        title: 'Order Notes', 
        type: 'text' 
      },
      { 
        name: 'createdAt', 
        title: 'Created At', 
        type: 'datetime', 
        initialValue: () => new Date().toISOString() 
      },
      { 
        name: 'updatedAt', 
        title: 'Updated At', 
        type: 'datetime', 
        initialValue: () => new Date().toISOString() 
      }
    ]
  }