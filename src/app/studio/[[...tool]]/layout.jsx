// src/app/studio/[[...tool]]/layout.jsx
import { metadata, viewport } from 'next-sanity/studio'

export { metadata, viewport }

export default function StudioLayout({ children }) {
  return children
}