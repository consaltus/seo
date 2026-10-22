import { SITE_URL } from '../config/site';
import { defaultLang, languages, routes, ui, type Lang, type RouteKey, type UIKey } from './ui';

export function getLangFromUrl(url: URL): Lang {
  const [, first] = url.pathname.split('/');
  return first in languages ? (first as Lang) : defaultLang;
}

export function useTranslations(lang: Lang) {
  return (key: UIKey) => ui[lang][key] ?? ui[defaultLang][key];
}

/** Relativer Pfad für eine Route in einer Sprache, immer mit Slash am Ende. */
export function localizedPath(key: RouteKey, lang: Lang): string {
  const slug = routes[key][lang];
  const prefix = lang === defaultLang ? '' : `/${lang}`;
  return `${prefix}/${slug ? `${slug}/` : ''}`;
}

export function absoluteUrl(path: string): string {
  return new URL(path, SITE_URL).href;
}

/** hreflang-Alternativen für eine Route: de, en und x-default (= de). */
export function alternatesFor(key: RouteKey) {
  const list = (Object.keys(languages) as Lang[]).map((lang) => ({
    hreflang: lang,
    href: absoluteUrl(localizedPath(key, lang)),
  }));
  list.push({ hreflang: 'x-default', href: absoluteUrl(localizedPath(key, defaultLang)) });
  return list;
}
