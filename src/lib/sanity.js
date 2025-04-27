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

return await client.fetch(query);
}

export async function getProduct(slug) {
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

return await client.fetch(query, { slug });
}

export async function getCategories() {
const query = `*[_type == "category"] | order(title asc) {
_id,
title,
slug,
description
}`;

return await client.fetch(query);
}

export async function getRelatedProducts(productId, categoryId, limit = 4) {
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

return await client.fetch(query, { productId, categoryId });
}

export async function getSiteSettings() {
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
}

export async function createOrder(orderData) {
return await client.create({
_type: 'order',
...orderData
});
}

export async function getOrders() {
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
}

export async function updateOrderStatus(orderId, status) {
return await client.patch(orderId)
.set({
status,
updatedAt: new Date().toISOString()
})
.commit();
}