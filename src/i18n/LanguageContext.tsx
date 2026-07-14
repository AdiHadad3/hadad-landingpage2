import { createContext, useContext, useEffect, useState, ReactNode, useCallback } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { translations, type Lang, type Dict } from './translations';

interface LanguageContextValue {
  lang: Lang;
  setLang: (l: Lang) => void;
  toggle: () => void;
  t: Dict;
  dir: 'ltr' | 'rtl';
  detected: boolean;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

const STORAGE_KEY = 'hadad-lang';
const DETECTED_KEY = 'hadad-lang-detected';

const detectInitial = (): Lang => {
  if (typeof window === 'undefined') return 'en';
  const stored = window.localStorage.getItem(STORAGE_KEY) as Lang | null;
  if (stored === 'en' || stored === 'he') return stored;
  return 'en';
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLangState] = useState<Lang>(detectInitial);
  const [detected, setDetected] = useState(false);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'he' ? 'rtl' : 'ltr';
    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch {}
  }, [lang]);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const alreadyDetected = window.localStorage.getItem(DETECTED_KEY);
    if (alreadyDetected) {
      setDetected(true);
      return;
    }

    let cancelled = false;

    const detectCountry = async () => {
      try {
        const { data, error } = await supabase.functions.invoke('detect-country');
        if (cancelled) return;
        if (error || !data || typeof data.country !== 'string') return;

        if (data.country === 'IL') {
          setLangState('he');
        }

        window.localStorage.setItem(DETECTED_KEY, 'true');
        setDetected(true);
      } catch {
        // Silent fallback to English
      }
    };

    detectCountry();

    return () => {
      cancelled = true;
    };
  }, []);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    try {
      window.localStorage.setItem(DETECTED_KEY, 'true');
    } catch {}
  }, []);

  const toggle = useCallback(() => {
    setLangState((p) => {
      const next = p === 'en' ? 'he' : 'en';
      try {
        window.localStorage.setItem(DETECTED_KEY, 'true');
      } catch {}
      return next;
    });
  }, []);

  return (
    <LanguageContext.Provider
      value={{ lang, setLang, toggle, t: translations[lang], dir: lang === 'he' ? 'rtl' : 'ltr', detected }}
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
