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
              'Hey! I\'m a data professional and developer. Currently, I am working with the Data Science and AI engineering team at Networth Corp. Here, I have extensively contributed to a diverse set of roles and responsibilities which includes process engineering, data infrastructure engineering, and frontend development. Prior to this, I have also been a part of developing and delivering user-friendly open-source visualization tools particularly catering to the domain of sports analytics.'
            }
          </p>
          <br></br>
          <p className="text-base text-gray-2000">
            {'Skills'}
          </p>
          <p>{'➲ Python: Numpy, Pandas, Dask, Polars, SciPy, Statsmodels, Matplotlib, Seaborn, Plotly, Dash, Scikit-Learn'}</p>
          <p>{'➲ Database: MySQL, Microsoft SQL Server, PostgreSQL, PyODBC MongoDB'}</p>
          <p>{'➲ Microsoft Azure: Azure DevOps, Azure Repos, Azure Pipelines, Azure Functions, Databricks, Azure Data Factory, ADLS'}</p>
          <p>{'➲ Frontend: Python Dash, Python Streamlit, Microsoft Power Platform (Power BI, Power Apps, Power Automate)'}</p>
          <p>{'➲ Statistical Analysis, Data Mining & Maching Learning'}</p>
          <p>{'➲ Others: Version Control (Git/GitHub), Microsoft Excel, draw.io (UML Diagrams/Flowcharts), Trello (Kanban Framework)'}</p>
          <p>{'➲ IDEs: Jupyter Notebooks, VS Code, PyCharm, and Spyder'}</p>
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