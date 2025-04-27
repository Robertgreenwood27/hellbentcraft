import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    {
      name: 'product',
      title: 'Products',
      type: 'document',
      fields: [
        { name: 'title', title: 'Title', type: 'string', validation: Rule => Rule.required() },
        {
          name: 'slug',
          title: 'Slug',
          type: 'slug',
          options: { source: 'title', maxLength: 96 },
          validation: Rule => Rule.required()
        },
        { name: 'price', title: 'Price', type: 'number', validation: Rule => Rule.required().precision(2).positive() },
        { name: 'description', title: 'Description', type: 'array', of: [{ type: 'block' }] },
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
        { name: 'stock', title: 'Stock', type: 'number', validation: Rule => Rule.required().integer().min(0) },
        { name: 'dimensions', title: 'Dimensions', type: 'string' },
        { name: 'materials', title: 'Materials', type: 'string' },
        { name: 'featured', title: 'Featured', type: 'boolean', initialValue: false },
        { name: 'categories', title: 'Categories', type: 'array', of: [{ type: 'reference', to: [{ type: 'category' }] }] }
      ],
      preview: {
        select: { title: 'title', subtitle: 'price', media: 'images.0' },
        prepare({ title, subtitle, media }) {
          return { title, subtitle: `$${subtitle}`, media };
        }
      }
    },
    {
      name: 'category',
      title: 'Categories',
      type: 'document',
      fields: [
        { name: 'title', title: 'Title', type: 'string', validation: Rule => Rule.required() },
        {
          name: 'slug',
          title: 'Slug',
          type: 'slug',
          options: { source: 'title', maxLength: 96 },
          validation: Rule => Rule.required()
        },
        { name: 'description', title: 'Description', type: 'text' }
      ]
    },
    {
      name: 'order',
      title: 'Orders',
      type: 'document',
      fields: [
        { name: 'orderId', title: 'Order ID', type: 'string', validation: Rule => Rule.required() },
        { name: 'customer', title: 'Customer', type: 'reference', to: [{ type: 'customer' }], validation: Rule => Rule.required() },
        {
          name: 'items',
          title: 'Items',
          type: 'array',
          of: [
            {
              name: 'orderItem',
              title: 'Order Item',
              type: 'object',
              fields: [
                { name: 'product', title: 'Product', type: 'reference', to: [{ type: 'product' }], validation: Rule => Rule.required() },
                { name: 'quantity', title: 'Quantity', type: 'number', validation: Rule => Rule.required().integer().positive() },
                { name: 'price', title: 'Price at Time of Purchase', type: 'number', validation: Rule => Rule.required().precision(2).positive() }
              ],
              validation: Rule => Rule.required().min(1)
            }
          ]
        },
        { name: 'total', title: 'Total Amount', type: 'number', validation: Rule => Rule.required().precision(2).positive() },
        {
          name: 'status',
          title: 'Order Status',
          type: 'string',
          options: { list: [
            { title: 'Pending', value: 'pending' },
            { title: 'Processing', value: 'processing' },
            { title: 'Shipped', value: 'shipped' },
            { title: 'Delivered', value: 'delivered' },
            { title: 'Cancelled', value: 'cancelled' }
          ]},
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
        { name: 'trackingNumber', title: 'Tracking Number', type: 'string' },
        { name: 'notes', title: 'Order Notes', type: 'text' },
        { name: 'createdAt', title: 'Created At', type: 'datetime', initialValue: () => new Date().toISOString() },
        { name: 'updatedAt', title: 'Updated At', type: 'datetime', initialValue: () => new Date().toISOString() }
      ]
    },
    {
      name: 'customer',
      title: 'Customers',
      type: 'document',
      fields: [
        { name: 'name', title: 'Full Name', type: 'string', validation: Rule => Rule.required() },
        { name: 'email', title: 'Email', type: 'string', validation: Rule => Rule.required().email() },
        { name: 'phone', title: 'Phone Number', type: 'string' },
        {
          name: 'addresses',
          title: 'Addresses',
          type: 'array',
          of: [
            {
              name: 'address',
              title: 'Address',
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
              ],
              validation: Rule => Rule.required().min(1)
            }
          ]
        },
        { name: 'orders', title: 'Orders', type: 'array', of: [{ type: 'reference', to: [{ type: 'order' }] }], validation: Rule => Rule.unique() },
        { name: 'notes', title: 'Customer Notes', type: 'text' }
      ]
    },
    {
      name: 'siteSettings',
      title: 'Site Settings',
      type: 'document',
      fields: [
        { name: 'title', title: 'Site Title', type: 'string' },
        { name: 'description', title: 'Site Description', type: 'text' },
        { name: 'logo', title: 'Logo', type: 'image', options: { hotspot: true } },
        { name: 'heroImage', title: 'Hero Background Image', type: 'image', options: { hotspot: true } },
        { name: 'aboutImage', title: 'About Section Image', type: 'image', options: { hotspot: true } },
        { name: 'aboutText', title: 'About Text', type: 'array', of: [{ type: 'block' }] },
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
        { name: 'contactEmail', title: 'Contact Email', type: 'string', validation: Rule => Rule.required().email() },
        { name: 'shippingInfo', title: 'Shipping Information', type: 'array', of: [{ type: 'block' }], validation: Rule => Rule.required() },
        { name: 'returnPolicy', title: 'Return Policy', type: 'array', of: [{ type: 'block' }], validation: Rule => Rule.required() }
      ]
    }
  ])
});
