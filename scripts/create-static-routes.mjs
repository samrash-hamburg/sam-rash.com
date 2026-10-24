import { mkdir, readFile, writeFile } from "node:fs/promises";

const dist = new URL("../dist/", import.meta.url);
const indexHtml = await readFile(new URL("index.html", dist), "utf8");
const pages = [
  { route: "artist-profile", de: ["Artist Profile | SΛM RΛSH", "Biografie, Sound und Pressekit von SΛM RΛSH. House, Techno und Organic House mit orientalischen Einflüssen."], en: ["Artist Profile | SΛM RΛSH", "Biography, sound and press kit of SΛM RΛSH. House, techno and organic house with Orient influences."] },
  { route: "epk", de: ["Electronic Press Kit | SΛM RΛSH", "Musik, Kurzprofil und Booking-Kontakt für Veranstalter und Presse."], en: ["Electronic Press Kit | SΛM RΛSH", "Music, short bio and booking details for promoters and press."] },
  { route: "impressum", de: ["Impressum | SΛM RΛSH", "Impressum und Anbieterangaben der Website SΛM RΛSH."], en: ["Legal Notice | SΛM RΛSH", "Legal notice and provider details for the SΛM RΛSH website."] },
  { route: "datenschutz", de: ["Datenschutz | SΛM RΛSH", "Informationen zur Verarbeitung personenbezogener Daten auf der Website SΛM RΛSH."], en: ["Privacy Policy | SΛM RΛSH", "Information about personal data processing on the SΛM RΛSH website."] },
];

const render = (language, title, description) => indexHtml
  .replace('<html lang="de">', `<html lang="${language}">`)
  .replace(/<title>[^<]*<\/title>/, `<title>${title}</title>`)
  .replace(/(<meta name="description" content=")[^"]*(" \/>)/, `$1${description}$2`)
  .replace(/(<meta property="og:title" content=")[^"]*(" \/>)/, `$1${title}$2`)
  .replace(/(<meta property="og:description" content=")[^"]*(" \/>)/, `$1${description}$2`)
  .replace(/(<meta name="twitter:title" content=")[^"]*(" \/>)/, `$1${title}$2`)
  .replace(/(<meta name="twitter:description" content=")[^"]*(" \/>)/, `$1${description}$2`);

const englishHome = new URL("en/", dist);
await mkdir(englishHome, { recursive: true });
await writeFile(new URL("index.html", englishHome), render("en", "SΛM RΛSH | Electronic Music & Booking", "SΛM RΛSH: electronic music, latest mixes and booking information."));

for (const page of pages) {
  for (const language of ["de", "en"]) {
    const directory = new URL(`${language === "en" ? "en/" : ""}${page.route}/`, dist);
    await mkdir(directory, { recursive: true });
    const [title, description] = page[language];
    await writeFile(new URL("index.html", directory), render(language, title, description));
  }
}
