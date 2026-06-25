import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { translations, type Lang, type Dict } from './translations';

interface LanguageContextValue {
  lang: Lang;
  setLang: (l: Lang) => void;
  toggle: () => void;
  t: Dict;
  dir: 'ltr' | 'rtl';
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

const STORAGE_KEY = 'hadad-lang';

const detectInitial = (): Lang => {
  if (typeof window === 'undefined') return 'en';
  const stored = window.localStorage.getItem(STORAGE_KEY) as Lang | null;
  if (stored === 'en' || stored === 'he') return stored;
  const langs = [navigator.language, ...(navigator.languages || [])];
  for (const l of langs) {
    if (l && l.toLowerCase().startsWith('he')) return 'he';
  }
  return 'en';
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLangState] = useState<Lang>(detectInitial);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'he' ? 'rtl' : 'ltr';
    try { window.localStorage.setItem(STORAGE_KEY, lang); } catch {}
  }, [lang]);

  const setLang = (l: Lang) => setLangState(l);
  const toggle = () => setLangState((p) => (p === 'en' ? 'he' : 'en'));

  return (
    <LanguageContext.Provider
      value={{ lang, setLang, toggle, t: translations[lang], dir: lang === 'he' ? 'rtl' : 'ltr' }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLang = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLang must be used within LanguageProvider');
  return ctx;
};