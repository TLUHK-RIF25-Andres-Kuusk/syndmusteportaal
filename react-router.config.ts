import type { Config } from "@react-router/dev/config";
import { loadEnv } from "vite";

const env = loadEnv("production", process.cwd(), "");
const API_URL = process.env.VITE_API_URL ?? env.VITE_API_URL;

export default {
  ssr: false,

  async prerender() {
    if (!API_URL) {
      throw new Error("VITE_API_URL puudub. Kontrolli .env faili.");
    }

    const url = `${API_URL.replace(/\/+$/, "")}/api/events`;

    let response: Response;

    try {
      response = await fetch(url);
    } catch (error) {
      throw new Error(
        `SSG build katkestatud: API pole kättesaadav (${url}).`,
        { cause: error }
      );
    }

    if (!response.ok) {
      throw new Error(
        `SSG build katkestatud: API vastas HTTP ${response.status}.`
      );
    }

    const events = (await response.json()) as Array<{ id: number }>;

    if (
      !Array.isArray(events) ||
      events.some(
        (event) =>
          !Number.isSafeInteger(event.id) || event.id <= 0
      )
    ) {
      throw new Error("API tagastas vigase sündmuste loendi.");
    }

    return [
      "/",
      "/korraldajast",
      ...events.map((event) => `/sundmused/${event.id}`),
    ];
  },
} satisfies Config;
