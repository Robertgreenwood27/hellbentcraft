// src/sanity/schemaTypes/customer.js
export default {
    name: 'customer',
    title: 'Customers',
    type: 'document',
    fields: [
      { 
        name: 'name', 
        title: 'Full Name', 
        type: 'string', 
        validation: Rule => Rule.required() 
      },
      { 
        name: 'email', 
        title: 'Email', 
        type: 'string', 
        validation: Rule => Rule.required().email() 
      },
      { 
        name: 'phone', 
        title: 'Phone Number', 
        type: 'string' 
      },
      {
        name: 'addresses',
        title: 'Addresses',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              { name: 'name', title: 'Full Name', type: 'string' },
              { name: 'line1', title: 'Address Line 1', type: 'string' },
              { name: 'line2', title: 'Address Line 2', type: 'string' },
              { name: 'city', title: 'City', type: 'string' },
              { name: 'state', title: 'State/Province', type: 'string' },
              { name: 'postalCode', title: 'Postal Code', type: 'string' },
              { name: 'country', title: 'Country', type: 'string' },
              { name: 'isDefault', title: 'Default Address', type: 'boolean' }
            ]
          }
        ]
      },
      { 
        name: 'notes', 
        title: 'Customer Notes', 
        type: 'text' 
      }
    ]
  }