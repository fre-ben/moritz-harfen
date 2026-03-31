import de from "./de.json";
import en from "./en.json";

const translations = { de, en } as const;

export type Lang = "de" | "en";

export function getLangFromUrl(url: URL): Lang {
  const [, first] = url.pathname.split("/");
  if (first === "en") return "en";
  return "de";
}

export function useTranslations(lang: Lang) {
  return function t(key: string): string {
    const parts = key.split(".");
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let value: any = translations[lang];
    for (const part of parts) {
      value = value?.[part];
    }
    if (typeof value === "string") return value;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let fallback: any = translations["de"];
    for (const part of parts) {
      fallback = fallback?.[part];
    }
    return typeof fallback === "string" ? fallback : key;
  };
}

export function localizedUrl(lang: Lang, path: string): string {
  if (lang === "en") {
    return `/en${path.startsWith("/") ? path : "/" + path}`;
  }
  return path.startsWith("/") ? path : "/" + path;
}
