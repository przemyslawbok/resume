import { Routes } from 'common/routes';

export const getLinks = (t) => [
  // Example of how to add a new link to the header
  {
    link: Routes.Admin,
    label: t('header.admin'),
  },
  {
    link: Routes.Resume,
    label: t('header.resume'),
  },
];
