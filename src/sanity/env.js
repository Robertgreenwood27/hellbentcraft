// src/sanity/env.js
// Using CommonJS exports for configuration compatibility

exports.apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-04-27';
exports.dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';
exports.projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;

// This is the "standard" client that doesn't use a CDN cache
exports.useCdn = false;