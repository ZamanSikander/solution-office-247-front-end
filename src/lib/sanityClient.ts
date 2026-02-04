import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "8lftwkge",
  dataset: "production",
  apiVersion: "2024-02-01",
  useCdn: true,
  perspective: "published",
});

