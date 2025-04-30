// lib/sanity.js
import { createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2023-05-03',
  useCdn: process.env.NODE_ENV === 'production'
});

const builder = imageUrlBuilder(client);

export function urlFor(source) {
  return builder.image(source);
}

export async function getProducts({ featured = false, category = null, limit = 50 } = {}) {
  try {
    let query = `*[_type == "product"`;

    if (featured) {
      query += ` && featured == true`;
    }

    if (category) {
      query += ` && references(*[_type == "category" && slug.current == "${category}"]._id)`;
    }

    query += `] | order(_createdAt desc)[0...${limit}] {
      _id,
      title,
      slug,
      price,
      stock,
      "images": images[] {
        "url": asset->url,
        "alt": alt
      },
      "categories": categories[] -> {
        _id,
        title,
        slug
      }
    }`;

    const products = await client.fetch(query);
    
    // Ensure each product has valid required fields
    return products.map(product => ({
      _id: product._id || null,
      title: product.title || 'Untitled Product',
      slug: product.slug || { current: '' },
      price: typeof product.price === 'number' ? product.price : 0,
      stock: typeof product.stock === 'number' ? product.stock : 0,
      images: Array.isArray(product.images) ? product.images : [],
      categories: Array.isArray(product.categories) ? product.categories : []
    }));
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
}

export async function getProduct(slug) {
  try {
    if (!slug) {
      console.error('No slug provided to getProduct');
      return null;
    }

    const query = `*[_type == "product" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      price,
      description,
      stock,
      dimensions,
      materials,
      "images": images[] {
        "url": asset->url,
        "alt": alt
      },
      "categories": categories[] -> {
        _id,
        title,
        slug
      }
    }`;

    const product = await client.fetch(query, { slug });
    
    // If no product is found, return null
    if (!product) {
      console.warn(`No product found with slug: ${slug}`);
      return null;
    }
    
    // Ensure product has all required fields with defaults for missing data
    return {
      _id: product._id || null,
      title: product.title || 'Untitled Product',
      slug: product.slug || { current: slug },
      price: typeof product.price === 'number' ? product.price : 0,
      description: product.description || [],
      stock: typeof product.stock === 'number' ? product.stock : 0,
      dimensions: product.dimensions || null,
      materials: product.materials || null,
      images: Array.isArray(product.images) ? product.images : [],
      categories: Array.isArray(product.categories) ? product.categories : []
    };
  } catch (error) {
    console.error(`Error fetching product with slug ${slug}:`, error);
    return null;
  }
}

export async function getCategories() {
  try {
    const query = `*[_type == "category"] | order(title asc) {
      _id,
      title,
      slug,
      description
    }`;

    return await client.fetch(query);
  } catch (error) {
    console.error('Error fetching categories:', error);
    return [];
  }
}

export async function getRelatedProducts(productId, categoryId, limit = 4) {
  try {
    if (!productId || !categoryId) {
      return [];
    }
    
    const query = `*[_type == "product" && _id != $productId && references($categoryId)] | order(stock desc) [0...${limit}] {
      _id,
      title,
      slug,
      price,
      stock,
      "images": images[] {
        "url": asset->url,
        "alt": alt
      }
    }`;

    const products = await client.fetch(query, { productId, categoryId });
    
    // Ensure each product has valid required fields
    return products.map(product => ({
      _id: product._id || null,
      title: product.title || 'Untitled Product',
      slug: product.slug || { current: '' },
      price: typeof product.price === 'number' ? product.price : 0,
      stock: typeof product.stock === 'number' ? product.stock : 0,
      images: Array.isArray(product.images) ? product.images : []
    }));
  } catch (error) {
    console.error('Error fetching related products:', error);
    return [];
  }
}

export async function getSiteSettings() {
  try {
    const query = `*[_type == "siteSettings"][0] {
      title,
      description,
      "logo": logo.asset->url,
      "heroImage": heroImage.asset->url,
      "aboutImage": aboutImage.asset->url,
      aboutText,
      social,
      contactEmail,
      shippingInfo,
      returnPolicy
    }`;

    return await client.fetch(query);
  } catch (error) {
    console.error('Error fetching site settings:', error);
    return null;
  }
}

export async function createOrder(orderData) {
  try {
    return await client.create({
      _type: 'order',
      ...orderData
    });
  } catch (error) {
    console.error('Error creating order:', error);
    throw error;
  }
}

export async function getOrders() {
  try {
    const query = `*[_type == "order"] | order(createdAt desc) {
      _id,
      orderId,
      customer->{
        name,
        email
      },
      items,
      total,
      status,
      shippingAddress,
      trackingNumber,
      createdAt,
      updatedAt
    }`;

    return await client.fetch(query);
  } catch (error) {
    console.error('Error fetching orders:', error);
    return [];
  }
}

export async function updateOrderStatus(orderId, status) {
  try {
    return await client.patch(orderId)
      .set({
        status,
        updatedAt: new Date().toISOString()
      })
      .commit();
  } catch (error) {
    console.error(`Error updating order status for ${orderId}:`, error);
    throw error;
  }
}