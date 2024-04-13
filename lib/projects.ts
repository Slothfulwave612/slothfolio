import { ProjectItemProps } from '@/components/main/ProjectSection';

export const getProjects = function (): ProjectItemProps[] {
  let projects: ProjectItemProps[] = [
    {
      projectTitle: 'Nightingale Chart Plotter',
      projectData: {
        liveURL: 'https://slothfulwave612-nightingale-charts-plotter-srcwebapp-tyj9j6.streamlit.app/',
        relatedLinks: [
          {
            label: 'GitHub',
            link: 'https://github.com/Slothfulwave612/Nightingale-Charts-Plotter',
          },
        ],
      },
      description: [
        'Developed an interactive web app using Python hosted on Streamlit server that generates nightingale charts.',
        'Engineered a user-friendly design customization feature within the application, enabling users to modify the chart layout.'
      ],
      tech: ['Streamlit', 'Matplotlib', 'Python', 'Data Visualization'],
      category: [' Data Visualization', ' UI/UX', ' Streamlit', ' Matplotlib', ' Python'],
      status: 'Personal Project',
    },

    {
      projectTitle: 'soccerplots',
      projectData: {
        documentationURL: 'https://github.com/Slothfulwave612/soccerplots/tree/master/docs',
        relatedLinks: [
          {
            label: 'GitHub',
            link: 'https://github.com/Slothfulwave612/soccerplots',
          },
        ],
      },
      description: [
        'soccerplots is a Python library for plotting radar charts and bump charts in Matplotlib.',
        'It\'s functionalities are now merged with mplsoccer.'
      ],
      tech: ['Object-Oriented Programming', 'Python', 'Matplotlib', 'Data Visualization'],
      category: [' Object-Oriented Programming', ' Python', ' Matplotlib', ' Data Visualization'],
      status: 'Open Source',
    },

    {
      projectTitle: 'mplsoccer',
      projectData: {
        documentationURL: 'https://mplsoccer.readthedocs.io/en/latest/',
        relatedLinks: [
          {
            label: 'GitHub',
            link: 'https://github.com/andrewRowlinson/mplsoccer',
          },
        ],
      },
      description: [
        'mplsoccer is a Python library for plotting soccer/football charts in Matplotlib and loading StatsBomb open-data.',
        'Inducted in Matplotlib\'s third-party-package list.',
        'The official documentation page registers 1K+ hits per month worldwide.'
      ],
      tech: ['Object-Oriented Programming', 'Python', 'Matplotlib', 'Data Visualization', 'Technical Documentation'],
      category: [' Object-Oriented Programming', ' Python', ' Matplotlib', ' Data Visualization', ' Technical Documentation'],
      status: 'Open Source',
    },
  ];

  return projects.reverse();
};
