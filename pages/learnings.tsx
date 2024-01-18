import Section from '@/components/layout/Section';
import ViewContainer from '@/components/layout/ViewContainer';
import Header from '@/components/main/Header';
import MetaHead from '@/components/seo/MetaHead';
import Tag from '@/components/ui/Tag';
import { getLearnings } from '@/lib/learnings';
import { cn } from '@/lib/utils';

interface LearningItemProps extends React.HTMLAttributes<HTMLDivElement> {
  imageURL: string;
  linkURL: string;
  details: {
    title: string;
    linkURL: string;
    description: string;
  };
  category?: Array<
    'design' | 'accessibilty' | 'ui/ux' | 'data-visualization' | 'full-stack'
  >;
}

const LearningsView: React.FunctionComponent = () => {
  return (
    <>
      <MetaHead
        title="Learnings | Anmol Durgapal"
        description="My learnings while doing engineering and design in form of video logs"
      // embedSource={{
      //   twitter:
      //     '',
      //   linkedin:
      //     '',
      //   og: '',
      // }}
      />
      <div className="learnings-view-container">
        <ViewContainer className={'my-16'}>
          <Header />
          <Section>
            <h2 className="about-heading leading-snug font-medium text-base text-zinc-900">
              {'My Data Visualization Work 🎨'}
            </h2>
            <div className="learnings-content-container mt-10 grid grid-cols-1 gap-6">
              {getLearnings()?.map((learning, index) => {
                return (
                  <div
                    className={cn(
                      'rounded-xl bg-white overflow-hidden',
                      'flex flex-row items-start justify-start',
                      'max-lg:grid max-lg:w-fit',
                    )}
                    key={index}>
                    <a
                      href={learning.linkURL}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={learning.imageURL}
                        alt="Description of the image"
                        className="w-[300px] h-[200px] max-lg:w-full bg-zinc-200"
                        loading="lazy"
                      />
                    </a>
                    <div className="learning-details-wrapper p-4">
                      <h2 className="font-medium text-xl tracking-tight leading-snug max-lg:text-lg max-lg:w-[24ch]">
                        <a href={learning.details.linkURL} target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-700">
                          {learning.details.title}
                        </a>
                      </h2>
                      <p className="text-zinc-500 mt-2">
                        {learning.details.description}
                      </p>
                      {!index && <Tag className="mt-2">Latest</Tag>}
                    </div>
                  </div>
                );
              })}
            </div>
          </Section>
        </ViewContainer>
      </div>
    </>
  );
};

export default LearningsView;
export type { LearningItemProps };

/*
https://twitter.com/slothfulwave612/status/1624444305418113027/photo/1 - 0
https://twitter.com/slothfulwave612/status/1483447207022202881/photo/1 - 2
https://twitter.com/slothfulwave612/status/1416459775563292674/photo/1 - 3
4
7
8
9
10.0, 10, 11 - Johan Cruyff
https://twitter.com/slothfulwave612/status/1409438954047246336/photo/1 - 5
https://twitter.com/slothfulwave612/status/1398682584184352770 - .. 12
https://twitter.com/slothfulwave612/status/1398366872878215168/photo/1 - 14
https://twitter.com/slothfulwave612/status/1394681828041056256/photo/1 - 15
https://twitter.com/slothfulwave612/status/1393954514810458120/photo/1 - 16
https://twitter.com/slothfulwave612/status/1393917592675311616/photo/1 - 17 18
https://twitter.com/slothfulwave612/status/1392553652787707905/photo/1 - 19
https://twitter.com/slothfulwave612/status/1392893492171444225/photo/1 - 20
https://twitter.com/slothfulwave612/status/1392450387152572419/photo/1 - 21
https://twitter.com/slothfulwave612/status/1392173213661024257/photo/1 - 26
https://twitter.com/slothfulwave612/status/1387117022031450116/photo/1 - 27
https://twitter.com/slothfulwave612/status/1386682250326990851/photo/1 - 28
https://twitter.com/slothfulwave612/status/1385993686928936961/photo/1 - 29
https://twitter.com/slothfulwave612/status/1380238360036442113/photo/1 - 30
31, 32, 33, 34, 35, 36 - FCB Defense
https://twitter.com/slothfulwave612/status/1376607122075623425/photo/1 - 37, 38
https://twitter.com/slothfulwave612/status/1350797618775900161/photo/1 - 37.0
https://twitter.com/slothfulwave612/status/1350182105393741825/photo/1 - 37.1
https://twitter.com/slothfulwave612/status/1347617576633786368/photo/1 - 37.2
https://twitter.com/slothfulwave612/status/1334828389471903750/photo/1 - 37.3
https://twitter.com/slothfulwave612/status/1302687395867844609 - 37.4
https://twitter.com/slothfulwave612/status/1302688119955681280/photo/1 - 37.5
https://twitter.com/slothfulwave612/status/1292894678346428416/photo/2 - 37.7
https://twitter.com/slothfulwave612/status/1290289702478548992/photo/2 - 37.8
https://twitter.com/slothfulwave612/status/1287368857309474819/photo/1 - 37.9
https://twitter.com/slothfulwave612/status/1279776802878050304/photo/1 - 37.10
https://twitter.com/slothfulwave612/status/1269975783189041153/photo/3 - 37.11

*/