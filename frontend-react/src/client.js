/* eslint-disable no-undef */
import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url"; // Ensure this import is correct

export const client = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID, // Replace 'process.env' with 'import.meta.env'
  dataset: "production",
  apiVersion: "2023-12-01", // Current date for API version
  useCdn: true,
  token: import.meta.env.VITE_SANITY_TOKEN,
});

const builder = imageUrlBuilder(client); // Correct initialization
export const urlFor = (source) => builder.image(source);
