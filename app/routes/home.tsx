import { useLoaderData } from "react-router";
import type { Route } from "./+types/home";

import { fetchEvents } from "../../src/api/events";
import { EventPortal } from "../../src/components/EventPortal";

export const loader = async ({ request }: Route.LoaderArgs) => {
  return {
    events: await fetchEvents(request.signal),
  };
};

export default function Home() {
  const { events } = useLoaderData<typeof loader>();

  const title = "Sündmuste kava | Haapsalu Retro-filmiõhtud";
  const description =
    "Vaata Haapsalu Filmiklubi retro-filmiõhtute kava.";

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />

      <EventPortal events={events} />
    </>
  );
}
