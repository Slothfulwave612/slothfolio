import { LearningItemProps } from '@/pages/learnings';

export const getLearnings = function (): LearningItemProps[] {
  const learnings: LearningItemProps[] = [
    {
      imageURL:
        'https://github.com/Slothfulwave612/data/assets/33928040/78b93376-bc8e-469c-a699-06b25ffb5a93',
      linkURL:
        'https://github.com/Slothfulwave612/data/assets/33928040/78b93376-bc8e-469c-a699-06b25ffb5a93',
      details: {
        title: 'Nightingale Charts With Curved Labels',
        linkURL: 'https://twitter.com/slothfulwave612/status/1624444305418113027/photo/1',
        description:
          'Combined scripts from @NPRougier Scientific Visualization book and StackOverflow to get the functionality of curved labels around the Nightingale Chart.',
      },
      category: ['data-visualization'],
    },
  ];

  return learnings.reverse();
};
