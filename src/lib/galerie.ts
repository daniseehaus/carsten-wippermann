import type { ImageMetadata } from 'astro';
import { getImage } from 'astro:assets';

// Alle Galeriebilder. Ein neuer Ordner unter src/assets/galerie/ ist automatisch dabei.
const dateien = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/galerie/*/*.{jpg,jpeg,JPG,JPEG,png,webp}',
  { eager: true },
);

export type Bild = {
  name: string;
  titel: string;
  details: string;
  bild: ImageMetadata;
};

// Kamera-Dateinamen tragen keinen Titel.
const OHNE_TITEL = /^(DSC|IMG|ERT|P\d{6,}|\d{6,})/i;

// Dateinamen-Konvention: "Titel   Material   Maße" (Teile durch zwei oder mehr
// Leerzeichen getrennt). "Titel 2" oder "Titel 2-neu" sind weitere Ansichten.
function beschriften(name: string) {
  if (OHNE_TITEL.test(name)) return { titel: '', details: '', haupt: false };
  const teile = name
    .split(/\s{2,}/)
    .map((t) => t.trim())
    .filter((t) => t.length > 1);
  const titel = teile[0]
    .replace(/[-_ ]neu$/i, '')
    .replace(/\.\d+$/, '')
    .replace(/(?<!von)\s+\d+$/, '')
    .replace(/(?<=[a-zäöüß])\d+$/, '')
    .trim();
  return { titel, details: teile.slice(1).join(' · '), haupt: teile.length > 1 };
}

const schluessel = (titel: string) => titel.toLowerCase().replace(/[^a-zäöüß]/g, '');
const sortierer = new Intl.Collator('de', { numeric: true, sensitivity: 'base' });

export function bilderVon(kategorie: string): Bild[] {
  const liste = Object.entries(dateien)
    .filter(([pfad]) => pfad.split('/').at(-2) === kategorie)
    .map(([pfad, modul]) => {
      const name = pfad.split('/').at(-1)!.replace(/\.[^.]+$/, '').normalize('NFC');
      return { name, bild: modul.default, ...beschriften(name) };
    });

  // Ansichten desselben Werks stehen zusammen, das beschriftete Hauptbild zuerst.
  // Bilder ohne Titel kommen ans Ende.
  return liste
    .sort((a, b) => {
      if (!a.titel !== !b.titel) return a.titel ? -1 : 1;
      const k = sortierer.compare(schluessel(a.titel), schluessel(b.titel));
      if (k !== 0) return k;
      if (a.haupt !== b.haupt) return a.haupt ? -1 : 1;
      return sortierer.compare(a.name, b.name);
    })
    .map(({ haupt, ...rest }) => rest);
}

export function bildNamens(kategorie: string, name: string): ImageMetadata {
  const treffer = bilderVon(kategorie).find((b) => b.name === name);
  if (!treffer) throw new Error(`Bild "${name}" fehlt in src/assets/galerie/${kategorie}/`);
  return treffer.bild;
}

export async function fuerGalerie(bilder: Bild[]) {
  return Promise.all(
    bilder.map(async (b) => {
      const vorschau = await getImage({ src: b.bild, width: 720, format: 'webp', quality: 78 });
      const gross = await getImage({ src: b.bild, width: 2000, format: 'webp', quality: 85 });
      return {
        ...b,
        vorschau: vorschau.src,
        gross: gross.src,
        breite: Number(gross.attributes.width ?? b.bild.width),
        hoehe: Number(gross.attributes.height ?? b.bild.height),
      };
    }),
  );
}
