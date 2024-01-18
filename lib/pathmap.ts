import { PathMapProps } from '@/components/layout/Navbar';

export const getPathMap = function (): PathMapProps[] {
  return [
    {
      pathType: 'internal',
      title: '🏡 Home',
      link: '/',
      isAvailable: true,
    },
    {
      pathType: 'internal',
      title: '📈 Data Viz',
      link: '/learnings',
      isAvailable: true,
    },
    {
      pathType: 'internal',
      title: '📝 Blogs',
      link: '/blog',
      isAvailable: true,
    },
    // {
    //   pathType: 'internal',
    //   title: '📈 Data Viz',
    //   link: '/crafts',
    //   isAvailable: true,
    // },
    // {
    //   pathType: 'internal',
    //   title: 'newsletter 🌱',
    //   link: '/subscribe',
    //   isAvailable: true,
    // },
  ];
};
