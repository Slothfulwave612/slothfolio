import { ExperienceItemProps } from '@/components/main/ExperienceSection';

export const getExperiences = function (): ExperienceItemProps[] {
  return [
    {
      experienceTitle: 'Data Scientist',
      experienceDescription: [
        { type: 'descriptionClass', content: '➲ Stakeholder Engagement:' },
        { type: 'descriptionItem', content: 'Collaborated closely with stakeholders to identify operational pain-points, leading to targeted and impactful solutions.' },

        { type: 'descriptionClass', content: '➲ System Architecture and Development:' },
        {
          type: 'descriptionItem', content: 'Contributed to the architecture and technical development of an integrated project management platform, bringing objectivity and real-time visibility to project execution.'
        },
        { type: 'descriptionItem', content: 'Developed and implemented backend data pipelines using Python and SQL on Azure DevOps for data processing, maintenance and backups.' },
        { type: 'descriptionItem', content: 'Additionally, achieved an 82% reduction in processing time for pre-existing data pipelines by leveraging SQL and Pandas.' },
        { type: 'descriptionItem', content: 'Designed and developed efficient frontend applications using Power Apps, resulting in an 89% reduction in CRUD operation execution time.' },

        { type: 'descriptionClass', content: '➲ Data Visualization and Reporting:' },
        { type: 'descriptionItem', content: 'Constructed customized Power BI reporting views aligning with business user requirements.' },
        { type: 'descriptionItem', content: 'Developed a Python Dash web application for visualizing beer fermentation data, facilitating more informed decisions for brewery stakeholders.' },
        { type: 'descriptionItem', content: 'Consolidated unstructured data to create a reporting dataset in Qlik Sense that enables stakeholders to analyze consumer behaviors and service performance.' },

        { type: 'descriptionClass', content: '➲ Documentation and Workflow Management:' },
        { type: 'descriptionItem', content: 'Documented data model diagrams and pipeline workflows using Draw.io, establishing a clear and efficient data management process.' },
        { type: 'descriptionItem', content: 'Utilized spreadsheet-based data dictionaries to maintain organization and clarity across projects.' },
        { type: 'descriptionItem', content: 'Employed Azure DevOps for comprehensive sprint planning, enhancing project tracking and team coordination.' },
        { type: 'descriptionItem', content: 'Utilized the Kanban framework in Trello for task management, streamlining workflow, and improving task completion efficiency.' },

        { type: 'descriptionClass', content: '1 Fortune 500 Client' },
        { type: 'descriptionClass', content: '1 Industry' },
        { type: 'descriptionClass', content: '4 Projects' },
        // Projects: Analytics Management System, Beer Sensory Data Insights Platform, Beer Fermentation Data Visualizer & Consumer Behavior and Service Performance Analysis Platform
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
