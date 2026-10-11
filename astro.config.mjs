import { defineConfig } from 'astro/config';

// BASE_PATH setzt der GitHub-Workflow, solange die Seite noch unter
// <konto>.github.io/<repo>/ läuft. Mit eigener Domain bleibt er leer.
const base = process.env.BASE_PATH || '/';

export default defineConfig({
  site: 'https://www.carsten-wippermann.de',
  base,
  trailingSlash: 'ignore',
  // Alte Wix-Adressen weiterleiten, damit Links und Suchergebnisse funktionieren.
  redirects: {
    '/vita-1': '/vita',
    '/contact-3': '/kontakt',
    '/lichtobjekte': '/galerie/lichtobjekte',
    '/besteckkunst': '/galerie/besteckkunst',
    '/plastiken': '/galerie/plastiken',
    '/park-galerie': '/galerie',
  },
});
