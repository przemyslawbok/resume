export interface TranslationKey {
  [key: string]: any;
}

export interface TranslationObject {
  [key: string]: TranslationKey;
}

export interface TranslationFunction {
  (key: string): string;
}

export interface LanguageFunction {
  (): string;
}

export interface SetLanguageFunction {
  (lang: string): void;
}

export interface TranslationHookResult {
  t: TranslationFunction;
  language: LanguageFunction;
  setLanguage: SetLanguageFunction;
}

export type TranslationLanguage = 'en' | 'pl';
