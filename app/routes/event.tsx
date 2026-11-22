import {
  Link,
  data,
  isRouteErrorResponse,
  useLoaderData,
  useRouteError,
} from "react-router";

import type { Route } from "./+types/event";

import {
  fetchEvent,
  EventNotFoundError,
} from "../../src/api/events";

import { EventCard } from "../../src/components/EventCard";
import { PageHeader } from "../../src/components/PageHeader";
import { ThemeToggle } from "../../src/components/ThemeToggle";
import { Footer } from "../../src/components/Footer";
import { useTheme } from "../../src/hooks/useTheme";

const NOW = Date.now();

export const loader = async ({ params, request }: Route.LoaderArgs) => {
  const id = params.id;

  if (
    !id ||
    !/^[1-9]\d*$/.test(id) ||
    !Number.isSafeInteger(Number(id))
  ) {
    throw data("Sündmust ei leitud.", { status: 404 });
  }

  try {
    return {
      event: await fetchEvent(Number(id), request.signal),
    };
  } catch (error) {
    if (error instanceof EventNotFoundError) {
      throw data("Sündmust ei leitud.", { status: 404 });
    }

    throw error;
  }
};

export default function EventRoute() {
  const { event } = useLoaderData<typeof loader>();
  const { theme } = useTheme();

  const title = `${event.title} | Haapsalu Retro-filmiõhtud`;

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={event.description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={event.description} />

      <div className={`app theme-${theme}`}>
        <header>
          <PageHeader />
          <ThemeToggle />
        </header>

        <main>
          <p><Link to="/">Tagasi kavasse</Link></p>
          <EventCard event={event} now={NOW} />
        </main>

        <Footer organization="Haapsalu Filmiklubi" />
      </div>
    </>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();
  const { theme } = useTheme();

  const notFound =
    isRouteErrorResponse(error) && error.status === 404;

  const heading = notFound
    ? "Sündmust ei leitud"
    : "Sündmuse laadimine ebaõnnestus";

  return (
    <>
      <title>{heading}</title>
      <meta name="description" content={heading} />

      <div className={`app theme-${theme}`}>
        <header>
          <PageHeader />
        </header>

        <main>
          <h2>{heading}</h2>
          <p role="alert">
            {notFound
              ? "Kontrolli sündmuse aadressi."
              : "API päring ebaõnnestus. Proovi hiljem uuesti."}
          </p>

          <Link to="/">Tagasi kavasse</Link>
        </main>

        <Footer organization="Haapsalu Filmiklubi" />
      </div>
    </>
  );
}
