import { createClient } from "next-sanity";

const projectId = process.env.SANITY_PROJECT_ID;
const dataset = process.env.SANITY_DATASET;

export const client = createClient({
  projectId,
  dataset,
  apiVersion: "2023-03-25",
  useCdn: false,
});
