import type { ReactNode } from "react";
import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";

import { ThemeProvider } from "../src/context/ThemeProvider";
import "../src/index.css";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="et">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <Outlet />
    </ThemeProvider>
  );
}

export function ErrorBoundary({ error }: { error: unknown }) {
  const message = isRouteErrorResponse(error)
    ? error.status === 404
      ? "Lehte ei leitud."
      : "Lehe laadimine ebaõnnestus."
    : "Lehe laadimisel tekkis viga.";

  return (
    <main>
      <h1>{message}</h1>
      <p role="alert">Palun proovi hiljem uuesti.</p>
      <a href="/">Tagasi sündmuste kavasse</a>
    </main>
  );
}

// Näidatakse /admin esmasel avamisel, kuni clientLoader andmed toob.
export function HydrateFallback() {
  return (
    <main className="app__main">
      <p role="status">Laen…</p>
    </main>
  );
}
