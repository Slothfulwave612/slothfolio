import { ExperienceItemProps } from '@/components/main/ExperienceSection';

export const getExperiences = function (): ExperienceItemProps[] {
  return [
    {
      experienceTitle: 'Data Scientist',
      experienceDescription: [
        { type: 'descriptionClass', content: '➲ System Architecture and Development:' },
        {
          type: 'descriptionItem', content: 'Contributed to the architecture and technical development of an integrated project management platform, significantly enhancing client organization transparency and standardization.'
        },
        { type: 'descriptionItem', content: 'Automated backend data pipelines using Python on Azure DevOps, significantly reducing manual effort and improving data accuracy.' },
        { type: 'descriptionItem', content: 'Designed and built efficient frontend applications using Power Apps, resulting in an 88% reduction in CRUD operation execution time.' },

        { type: 'descriptionClass', content: '➲ Data Pipeline Optimization:' },
        { type: 'descriptionItem', content: 'Developed and implemented backend data pipelines using SQL and Pandas on Azure DevOps, streamlining data management and processing tasks. Additionally, achieved a 90% reduction in processing time for critical operations through SQL and Pandas optimizations.' },
        { type: 'descriptionItem', content: 'Enhanced data accuracy and efficiency through the automation of key processes.' },

        { type: 'descriptionClass', content: '➲ Stakeholder Engagement:' },
        { type: 'descriptionItem', content: 'Collaborated closely with stakeholders to identify operational pain points, leading to the creation of targeted, impactful solutions.' },

        { type: 'descriptionClass', content: '➲ Data Visualization and Reporting:' },
        { type: 'descriptionItem', content: 'Created a Python Dash web application for visualizing beer fermentation data, facilitating more informed decisions for brewery stakeholders.' },
        { type: 'descriptionItem', content: 'Consolidated unstructured data to create a reporting dataset in Qlik Sense that enables stakeholders to analyze consumer behaviors and service performance.' },

        { type: 'descriptionClass', content: '➲ Documentation and Workflow Management:' },
        { type: 'descriptionItem', content: 'Documented data model diagrams and pipeline workflows using Draw.io, establishing a clear and efficient data management process.' },
        { type: 'descriptionItem', content: 'Utilized spreadsheet-based data dictionaries to maintain organization and clarity across projects.' },
        { type: 'descriptionItem', content: 'Employed Azure DevOps for comprehensive sprint planning, enhancing project tracking and team coordination.' },
        { type: 'descriptionItem', content: 'Utilized the Kanban framework in Trello for task management, streamlining workflow, and improving task completion efficiency.' },

        { type: 'descriptionClass', content: '➲ Skills: Python, Microsoft SQL Server, Microsoft Power Apps, Microsoft Power BI, Azure DevOps, Microsoft Excel, Stakeholder Engagement' },
      ],
      experienceOrg: {
        name: 'Networth Corp',
        link: 'https://www.networth-corp.com/',
        websiteDisplayName: 'networth-corp.com',
      },
      experienceStatus: {
        startAt: 'July, 2021',
        endAt: 'Present',
      },
    },
  ];
};


// export const getExperiences = function (): ExperienceItemProps[] {
//   return [
//     {
//       experienceTitle: 'Data Scientist',
//       experienceDescription: [
//         'asdasddas',
//         'Contributed to the architecture and technical development of an integrated project management platform, significantly enhancing client organization transparency and standardization.',
//         'Automated backend data pipelines using Python on Azure DevOps, significantly reducing manual effort and improving data accuracy.',
//         'Designed and built efficient frontend applications using Power Apps, resulting in an 88% reduction in CRUD operation execution time.',
//       ],
//       experienceOrg: {
//         name: 'Networth Corp',
//         link: 'https://www.networth-corp.com/',
//         websiteDisplayName: 'networth-corp.com',
//       },
//       experienceStatus: {
//         startAt: 'July, 2021',
//         endAt: 'Present',
//       },
//     },
//     // {
//     //   experienceTitle: 'Product Design Contributor',
//     //   experienceDescription: [
//     //     'Started contributing as a design contributor and contributed to AsyncAPI website project using ReactJS and TailwindCSS.',
//     //     'Working on auditing existing components created using TailwindCSS support; Fixed UX for components, improved layouts for upcoming features.',
//     //     'Tools I work with during contribution: Figma, Git/GitHub, Slack, Netlify, Storybook, React, TailwindCSS, NextJS, Javascript.',
//     //   ],
//     //   experienceOrg: {
//     //     name: 'AsyncAPI Initiative',
//     //     link: 'https://asyncapi.com',
//     //     websiteDisplayName: 'asyncapi.com',
//     //   },
//     //   experienceStatus: {
//     //     startAt: 'Jan, 2022',
//     //     endAt: 'Sept 2022',
//     //   },
//     // },
//   ];
// };
