/**
 * This configuration is used for the Sanity Studio that's deployed
 * in the `/app/studio/[[...index]]/page.jsx` route
 */

// Using require instead of import for configuration file compatibility
const { defineConfig } = require('sanity');
const { visionTool } = require('@sanity/vision');
const { deskTool } = require('sanity/desk');
const { apiVersion, dataset, projectId } = require('./src/sanity/env');
const { schemaTypes } = require('./src/sanity/schemaTypes');

module.exports = defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  // Add and edit the content schema in the './sanity/schema' folder
  schema: {
    types: schemaTypes,
  },
  plugins: [
    deskTool(),
    // Vision is a tool that lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: apiVersion }),
  ],
});