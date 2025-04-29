// src/sanity/schemaTypes/index.js
// Using CommonJS require for compatibility
const product = require('./product');
const category = require('./category');
const order = require('./order');
const customer = require('./customer');
const siteSettings = require('./siteSettings');

exports.schemaTypes = [
  product,
  category,
  order,
  customer,
  siteSettings,
];