import { LinkData } from './PageHeader.data';
import { Routes } from 'common/routes';
import { TranslationFunction } from 'utils/hooks';

export const getLinks = (t: TranslationFunction): LinkData[] => [
  {
    link: Routes.Admin,
    label: t('header.admin'),
  },
  {
    link: Routes.Resume,
    label: t('header.resume'),
  },
];
