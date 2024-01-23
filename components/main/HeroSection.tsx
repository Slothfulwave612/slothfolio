import Image from 'next/image';
import Section from '../layout/Section';
import Button from '../ui/Button';
import LinkText from '../ui/LinkText';
import Callout from './Callout';
import Header from './Header';

const HeroSection: React.FunctionComponent = () => {
  return (
    <main className="hero-section" id="hero">
      <Header />
      <Section>
        <h2 className="about-heading leading-snug font-medium text-base text-zinc-900">
          {'About Me'}
        </h2>
        <div className="about-content-wrapper leading-6 text-sm font-normal text-zinc-500 mt-4">
          <p>
            {
              'Hey! I am a Data Professional and Developer. I currently work at Networth Corp as a Data Scientist, where our focus is on solving business challenges through data-driven solutions.'
            }
          </p>
          <br></br>
          <p className="text-base text-gray-2000">
            {'Skills'}
          </p>
          <p>{'➲ Python Scripting & Automation: Numpy, Pandas, SciPy, Statsmodels, Matplotlib, Seaborn, Plotly, Scikit-Learn'}</p>
          {/* <p>{'➲ Other Programming Languages: C, C++, R'}</p> */}
          <p>{'➲ Azure DevOps: Managing Repos, Deploying CI/CD Pipelines, Sprint Planning'}</p>
          <p>{'➲ Frontend: Python Dash, Python Streamlit, Microsoft Power Apps, Microsoft Power BI, HTML, CSS'}</p>
          <p>{'➲ Database: Fundamentals of Database Engineering, Microsoft SQL Server, PostgreSQL, PyODBC'}</p>
          <p>{'➲ Statistical Analysis, Data Mining & Maching Learning'}</p>
          <p>{'➲ Others: Version Control (Git/GitHub), Microsoft Excel, draw.io (UML Diagrams/Flowcharts), Trello (Kanban Framework)'}</p>
          <p>{'➲ Soft Skills: Problem Solver, Critical Thinker, Contributor/Team Player, Effective Communicator, Coachable & Adaptable'}</p>
        </div>

        {/* <Callout className="mt-4">
          <p>
            {
              'I am currently open for full-time engineering roles, which involves user interface and experience design, frontend engineering as the core.'
            }
          </p>
          <p className="mt-2 mb-4">
            {
              'A collaborative team of engineers and designers, who are building great products. Interested in working together? Feel free to schedule a meet!'
            }
          </p>
          <div className="flex flex-row items-center justify-start gap-4">
            <Button onClick={() => window.open('https://cal.com/')}>
              {'Schedule a meet / cal.com'}
            </Button>
            <LinkText
              href={'/resume'}
              className="text-zinc-600 font-medium text-sm">
              {'Resume'}
            </LinkText>
          </div>
        </Callout> */}
      </Section>
    </main>
  );
};

export default HeroSection;