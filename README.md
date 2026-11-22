# Events Portal – SSG

Haapsalu Retro-filmiõhtute staatiliselt eelrenderdatud portaal React Router Framework Mode'iga.

## Käivitamine

1. `npm install`
2. Loo `.env` fail ja määra `VITE_API_URL` töötava API algusaadressiks.
3. `npm run build`
4. `npm run worker:dev -- --port 8789`

## Kontrollid

- `npm run lint`
- `npm run typecheck`
- `npm run build`

## Eelrenderdamine

`react-router.config.ts` kasutab `ssr: false` ja `prerender()` funktsiooni.

Build küsib API-st sündmuste ID-d ja loob nende põhjal HTML-failid.

Näide: `build/client/sundmused/7/index.html`

## Avaldamine

`npx wrangler deploy`

Puuduvad staatilised lehed tagastavad HTTP 404.

## Kasutatav API

Kõik kolm rakendust kasutavad sama Cloudflare Workersi API-t.

**API aadress:**
https://events-api.serdnatanne.workers.dev

**Sündmuste loend:**
https://events-api.serdnatanne.workers.dev/api/events

**Näide – Alien (ID 7):**
https://events-api.serdnatanne.workers.dev/api/events/7

### Keskkonnamuutuja

Loo projekti juurkausta `.env` fail järgmise sisuga:

`VITE_API_URL=https://events-api.serdnatanne.workers.dev`

`.env` faili ei lisata GitHubi.

