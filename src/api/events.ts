
import type { EventItem } from "../types/event";

const API_URL = import.meta.env.VITE_API_URL?.replace(/\/+$/, "");

export const fetchEvents = async (
  signal?: AbortSignal
): Promise<EventItem[]> => {
  if (!API_URL) {
    throw new Error(
      "Lisa API aadress .env faili muutujale VITE_API_URL."
    );
  }

  let response: Response;

  try {
    response = await fetch(`${API_URL}/api/events`, {
      signal,
    });
  } catch (error) {
    if (signal?.aborted) throw error;

throw new Error(
  "API-ga ei saanud ühendust. Kontrolli aadressi ja kas API töötab.",
  { cause: error }
);
  }

  if (!response.ok) {
    throw new Error(`API vastas veaga (${response.status}).`);
  }

  return (await response.json()) as EventItem[];
};



export class EventNotFoundError extends Error {
  constructor() {
    super("Sündmust ei leitud.");
    this.name = "EventNotFoundError";
  }
}

export const fetchEvent = async (
  id: number,
  signal?: AbortSignal
): Promise<EventItem> => {
  if (!API_URL) {
    throw new Error(
      "Lisa API aadress .env faili muutujale VITE_API_URL."
    );
  }

  let response: Response;

  try {
    response = await fetch(`${API_URL}/api/events/${id}`, {
      signal,
    });
  } catch (error) {
    if (signal?.aborted) throw error;

    throw new Error(
      "API-ga ei saanud ühendust. Kontrolli, kas API töötab.",
      { cause: error }
    );
  }

  if (response.status === 404) {
    throw new EventNotFoundError();
  }

  if (!response.ok) {
    throw new Error(
      `Sündmuse laadimine ebaõnnestus (${response.status}).`
    );
  }

  return (await response.json()) as EventItem;
};