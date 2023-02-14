/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import translations from './translations';
import {
  TranslationFunction,
  TranslationKey,
  TranslationLanguage,
} from './types';
import { useState } from 'react';

export const useTranslation = (): [
  TranslationFunction,
  TranslationLanguage,
  (lang: TranslationLanguage) => void
] => {
  // TODO: move from state to localStorage
  const [language, setLanguage] = useState<TranslationLanguage>('pl');

  const t: TranslationFunction = (key: string) =>
    key.split('.').reduce((acc: TranslationKey | string, cur: string) => {
      if (acc && typeof acc === 'object' && acc[cur]) {
        return acc[cur];
      }
      return key;
    }, translations[language]) as string;

  return [t, language, setLanguage];
};
