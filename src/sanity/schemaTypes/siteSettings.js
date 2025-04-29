// src/sanity/schemaTypes/siteSettings.js
export default {
    name: 'siteSettings',
    title: 'Site Settings',
    type: 'document',
    fields: [
      { 
        name: 'title', 
        title: 'Site Title', 
        type: 'string' 
      },
      { 
        name: 'description', 
        title: 'Site Description', 
        type: 'text' 
      },
      { 
        name: 'logo', 
        title: 'Logo', 
        type: 'image', 
        options: { hotspot: true } 
      },
      { 
        name: 'heroImage', 
        title: 'Hero Background Image', 
        type: 'image', 
        options: { hotspot: true } 
      },
      { 
        name: 'aboutImage', 
        title: 'About Section Image', 
        type: 'image', 
        options: { hotspot: true } 
      },
      { 
        name: 'aboutText', 
        title: 'About Text', 
        type: 'array', 
        of: [{ type: 'block' }] 
      },
      {
        name: 'social',
        title: 'Social Media',
        type: 'object',
        fields: [
          { name: 'instagram', title: 'Instagram', type: 'url' },
          { name: 'twitter', title: 'Twitter', type: 'url' },
          { name: 'facebook', title: 'Facebook', type: 'url' },
          { name: 'etsy', title: 'Etsy', type: 'url' }
        ]
      },
      { 
        name: 'contactEmail', 
        title: 'Contact Email', 
        type: 'string', 
        validation: Rule => Rule.required().email() 
      },
      { 
        name: 'shippingInfo', 
        title: 'Shipping Information', 
        type: 'array', 
        of: [{ type: 'block' }]
      },
      { 
        name: 'returnPolicy', 
        title: 'Return Policy', 
        type: 'array', 
        of: [{ type: 'block' }]
      }
    ]
  }