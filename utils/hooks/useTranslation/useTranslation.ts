import * as translations from './translations';
import { useState } from 'react';

export default function useTranslation() {
  // TODO: move from state to localStorage
  const [language, setLanguage] = useState('en');
  const [fallbackLanguage, setFallbackLanguage] = useState('en');

  const translate = (key: string): string => {
    const keys = key.split('.');

    return (
      getNestedTranslation(language, keys) ??
      getNestedTranslation(fallbackLanguage, keys) ??
      key
    );
  };

  return {
    language,
    setLanguage,
    fallbackLanguage,
    setFallbackLanguage,
    t: translate,
  };
}

function getNestedTranslation(language: string, keys: string[]): string {
  console.log(
    '%c 🔭: functiongetNestedTranslation -> keys ',
    'font-size:16px;background-color:#8ae7d8;color:black;',
    keys
  );
  console.log(
    '%c 🥢: functiongetNestedTranslation -> language ',
    'font-size:16px;background-color:#2ee857;color:black;',
    language
  );
  const data: { [key: string]: any } = translations;
  console.log(
    '%c 🍗: functiongetNestedTranslation -> translations ',
    'font-size:16px;background-color:#e8fbba;color:black;',
    translations
  );

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-member-access
  const x = keys.reduce((obj, key) => obj?.[key], data[language]);
  console.log(
    '%c 3️⃣: functiongetNestedTranslation -> x ',
    'font-size:16px;background-color:#73727e;color:white;',
    x
  );

  // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
  return 'Log In'; // keys.reduce((obj, key) => obj?.[key], data[language]).toString();
}
