import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: "awbzyb2j",
  dataset: "production",
  useCdn: true,
  apiVersion: "2024-01-01",
});

const builder = imageUrlBuilder(client);

export function urlFor(source) {
  return builder.image(source);
}

export const fetchPromotions = async () => {
  try {
    const data = await client.fetch('*[_type == "promotions"][0]');
    return data;
  } catch (error) {
    console.error("Error fetching promotions:", error);
    return null;
  }
};

export const fetchWhatsAppConfig = async () => {
  try {
    const data = await client.fetch('*[_type == "whatsapp"][0]');
    return data;
  } catch (error) {
    console.error("Error fetching WhatsApp config:", error);
    return null;
  }
};

export const fetchFlyerConfig = async () => {
  try {
    const data = await client.fetch('*[_type == "flyer"][0]');
    return data;
  } catch (error) {
    console.error("Error fetching flyer config:", error);
    return null;
  }
};
