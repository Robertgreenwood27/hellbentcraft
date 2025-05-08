// src/lib/fonts.js
import { Geist, Geist_Mono } from "next/font/google";
import { Creepster } from "next/font/google";

// Define the Geist fonts
export const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Define the Creepster font
export const creepster = Creepster({
  variable: "--font-creepster",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});