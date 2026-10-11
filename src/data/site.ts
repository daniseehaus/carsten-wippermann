export const kontakt = {
  name: 'Carsten Wippermann',
  strasse: 'Insingdorferstraße 23',
  ort: '49326 Melle',
  telefon: [
    { anzeige: '05428 / 890', href: 'tel:+495428890' },
    { anzeige: '0160 5618662', href: 'tel:+491605618662' },
  ],
  email: 'carsten.wippermann@osnanet.de',
};

export const slogan = 'Kreativität setzt ein, wenn das Material nach Umformung verlangt.';

export type Kategorie = {
  slug: string;
  titel: string;
  kurz: string;
  text: string[];
  titelbild: string;
};

// Reihenfolge = Reihenfolge auf der Galerie-Seite.
// Der Ordner src/assets/galerie/<slug>/ enthält die Bilder.
export const kategorien: Kategorie[] = [
  {
    slug: 'lichtobjekte',
    titel: 'Lichtobjekte',
    kurz: 'Metall, Glas, Spiegel und Licht',
    titelbild: 'Im Blick   Kupfer   54 x 104 cm',
    text: [
      'Seine Installationen stellen kunstvolle Verbindungen zwischen Metall, Glas, Spiegel und Licht her. Geometrische Formen, Figuren, Masken und Linien, die in die Bleche eingesägt oder eingeschnitten sind, werden zum Teil mit farbigem Antikglas hinterlegt. Ihre besondere Leuchtkraft gewinnen die Metallobjekte durch diskrete Beleuchtung, die sie dezent und auch geheimnisvoll erstrahlen lässt.',
      'Die Oberflächen der Bleche sind geschliffen, mit Säure behandelt oder eloxiert. In den Bildobjekten finden sich in Form und Farbe Anklänge an die Moderne und den Suprematismus. Weitere Themen seiner Arbeiten sind von räumlicher und musikalischer Herkunft und zeigen damit die Bandbreite Wippermanns.',
    ],
  },
  {
    slug: 'besteckkunst',
    titel: 'Besteckkunst',
    kurz: 'Geben Sie den Löffel ab.',
    titelbild: 'Kolibripärchen',
    text: [
      'Geben Sie den Löffel ab. Wiederbelebung von versilbertem Besteck aus Omas Wohnzimmerschrank.',
      'Die Tierfiguren sind zum Teil in menschlichen Posen und in der tierischen Anatomie angepasster Gestalt gearbeitet, hauptsächlich aus versilbertem Besteck gelötet. Auch Scheren, Brillen, Schlüssel und andere metallische Kleinteile finden in ihrer Form zu Körperteilen der Tierfiguren.',
    ],
  },
  {
    slug: 'plastiken',
    titel: 'Plastiken',
    kurz: 'Eisenschrott und andere Materialien',
    titelbild: 'Wächter   Stahl   h 280 cm',
    text: [
      'Ein vielfältiger Materialmix in experimenteller Zusammenführung, aus dem die Figuren, Stelen und Plastiken gefertigt sind. Metalle, Glas, Holz, Stein und Beton finden auf unterschiedliche Weise zusammen.',
      'Die Figuren erscheinen im Naturraum und erhalten ihre Beständigkeit durch die Widerstandskraft ihrer selbst. Die Auswahl der Materialien und Techniken unterstreicht die experimentelle Offenheit des Künstlers.',
    ],
  },
];

// Neueste zuerst.
export const ausstellungen: { jahr: number; titel: string; ort: string }[] = [
  { jahr: 2022, titel: 'Besteckkunst', ort: 'Landart Festival, Minden-Lübbecke' },
  { jahr: 2022, titel: 'Ein Dorf wird Kunst: Besteckkunst', ort: 'Suttorf' },
  { jahr: 2019, titel: 'Ein Dorf wird Kunst: Besteckkunst', ort: 'Suttorf' },
  { jahr: 2017, titel: 'Ein Dorf wird Kunst: Plastiken', ort: 'Suttorf' },
  { jahr: 2016, titel: 'Plastiken', ort: 'Nordhof, Spenge' },
  { jahr: 2015, titel: 'Plastiken', ort: 'Nordhof, Spenge' },
  { jahr: 2015, titel: 'Ein Dorf wird Kunst: Metall-Glas-Licht', ort: 'Suttorf' },
  { jahr: 2013, titel: 'Ein Dorf wird Kunst: Plastiken', ort: 'Suttorf' },
  { jahr: 2013, titel: 'Metall-Glas-Licht-Kunst', ort: 'Kulturnacht, Osnabrück' },
  { jahr: 2012, titel: 'Kunstträume', ort: 'Weberei Delius, Spenge' },
  { jahr: 2011, titel: 'Ein Dorf wird Kunst: Metall-Glas-Licht', ort: 'Suttorf' },
  { jahr: 2010, titel: 'Metall-Glas-Licht-Kunst', ort: 'Landart Festival, Minden-Lübbecke' },
  { jahr: 2010, titel: 'Kunstträume', ort: 'Weberei Delius, Spenge' },
  { jahr: 2009, titel: 'Frauenkopf', ort: 'Kunstgalerie Finess, Spenge' },
  { jahr: 2007, titel: 'Metall-Glas-Licht-Kunst', ort: 'Landesturnschule, Melle' },
  { jahr: 2006, titel: 'Kunstmaschine', ort: 'Niedersachsentag, Melle' },
  { jahr: 2005, titel: 'Optische Stimulationen', ort: 'Kunst Aufwärts, Osnabrück' },
  { jahr: 2004, titel: 'Poesie im Wind', ort: 'Landart Festival, Minden-Lübbecke' },
  { jahr: 2003, titel: 'Magische Leuchtkunst', ort: 'Niedermehnen' },
  { jahr: 2003, titel: 'Objekte und Plastiken', ort: 'Sparkassen Kunst Galerie, Melle' },
  { jahr: 2003, titel: 'Lichtkunst', ort: 'Kulturwerkstatt, Melle-Buer' },
  { jahr: 2002, titel: 'Leuchtkunst', ort: 'im Pelmke, Hagen' },
  { jahr: 2002, titel: 'Magische Masken', ort: 'Markendorf' },
  { jahr: 2000, titel: 'Leuchtende Kunst', ort: 'Westhoyel, Melle' },
  { jahr: 1999, titel: 'Blech und Glas: Lichtkunstausstellung', ort: 'Abseits, Melle' },
];
