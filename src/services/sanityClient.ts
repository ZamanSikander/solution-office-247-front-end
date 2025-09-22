import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "8lftwkge", // find in sanity.json or project dashboard
  dataset: "production",
  apiVersion: "2025-09-09", // use today’s date
  useCdn: true, // `true` = faster, cached reads
});
