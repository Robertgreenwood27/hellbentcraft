// src/sanity/schemaTypes/product.js
export default {
    name: 'product',
    title: 'Products',
    type: 'document',
    fields: [
      { 
        name: 'title', 
        title: 'Title', 
        type: 'string', 
        validation: Rule => Rule.required() 
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: { source: 'title', maxLength: 96 },
        validation: Rule => Rule.required()
      },
      { 
        name: 'price', 
        title: 'Price', 
        type: 'number', 
        validation: Rule => Rule.required().precision(2).positive() 
      },
      { 
        name: 'description', 
        title: 'Description', 
        type: 'array', 
        of: [{ type: 'block' }] 
      },
      {
        name: 'images',
        title: 'Images',
        type: 'array',
        of: [
          {
            type: 'image',
            options: { hotspot: true },
            fields: [{ name: 'alt', title: 'Alt Text', type: 'string' }]
          }
        ],
        validation: Rule => Rule.required().min(1)
      },
      { 
        name: 'stock', 
        title: 'Stock', 
        type: 'number', 
        validation: Rule => Rule.required().integer().min(0) 
      },
      { 
        name: 'dimensions', 
        title: 'Dimensions', 
        type: 'string' 
      },
      { 
        name: 'materials', 
        title: 'Materials', 
        type: 'string' 
      },
      { 
        name: 'featured', 
        title: 'Featured', 
        type: 'boolean', 
        initialValue: false 
      },
      { 
        name: 'categories', 
        title: 'Categories', 
        type: 'array', 
        of: [{ type: 'reference', to: [{ type: 'category' }] }] 
      }
    ],
    preview: {
      select: { 
        title: 'title', 
        subtitle: 'price', 
        media: 'images[0]' 
      },
      prepare({ title, subtitle, media }) {
        return { 
          title, 
          subtitle: `$${subtitle}`, 
          media 
        };
      }
    }
  }