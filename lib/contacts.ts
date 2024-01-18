import { ContactItemProps } from '@/components/main/ContactSection';

export const getContacts = function (): ContactItemProps[] {
  return [
    {
      title: 'Email',
      link: {
        display: 'anmoldurgapal1@gmail.com',
        url: 'mailto:anmoldurgapal1@gmail.com'
      },
    },
    {
      title: 'Resume',
      link: {
        display: 'My Resume',
        url: '/resume',
      },
    },
    {
      title: 'GitHub',
      link: {
        display: '@slothfulwave612',
        url: 'https://github.com/slothfulwave612'
      },
    },
    {
      title: 'LinkedIn',
      link: {
        display: 'linkedin.com/in/anmol-durgapal',
        url: 'https://www.linkedin.com/in/anmol-durgapal/',
      },
    },
    {
      title: 'Twitter',
      link: {
        display: '@slothfulwave612',
        url: 'https://twitter.com/slothfulwave612',
      },
    },
  ];
};
