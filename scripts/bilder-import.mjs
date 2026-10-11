// Importiert Fotos in eine Galerie: verkleinert sie auf eine webtaugliche Größe
// und legt sie unter src/assets/galerie/<kategorie>/ ab.
//
// Aufruf: npm run bilder -- "<Quellordner>" <kategorie>
// Beispiel: npm run bilder -- "~/Downloads/Neue Lichtobjekte" lichtobjekte

import { readdir, mkdir, stat } from 'node:fs/promises';
import { join, extname, basename } from 'node:path';
import sharp from 'sharp';

const MAX_KANTE = 2400;
const ERLAUBT = new Set(['.jpg', '.jpeg', '.png', '.webp', '.tif', '.tiff', '.heic']);

const [quelle, kategorie] = process.argv.slice(2);
if (!quelle || !kategorie) {
  console.error('Aufruf: npm run bilder -- "<Quellordner>" <kategorie>');
  process.exit(1);
}

const ziel = join('src/assets/galerie', kategorie);
await mkdir(ziel, { recursive: true });

const dateien = (await readdir(quelle)).filter((f) => ERLAUBT.has(extname(f).toLowerCase()));
let anzahl = 0;
for (const datei of dateien) {
  const quellPfad = join(quelle, datei);
  if (!(await stat(quellPfad)).isFile()) continue;
  const name = basename(datei, extname(datei)).normalize('NFC');
  await sharp(quellPfad)
    .rotate()
    .resize({ width: MAX_KANTE, height: MAX_KANTE, fit: 'inside', withoutEnlargement: true })
    .jpeg({ quality: 82, mozjpeg: true })
    .toFile(join(ziel, `${name}.jpg`));
  anzahl++;
  console.log(`✓ ${name}`);
}
console.log(`\n${anzahl} Bilder nach ${ziel} importiert.`);
