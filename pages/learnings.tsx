import React, { useState, useEffect } from 'react';
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
  accessURL: string;
  accessString: string;
  details: {
    title: string;
    linkURL: string;
    description: string;
  };
  category?: Array<
    'design' | 'accessibility' | 'ui/ux' | 'data-visualization' | 'full-stack'
  >;
}

const LearningsView: React.FunctionComponent = () => {
  const [loadingImages, setLoadingImages] = useState(true);

  const visibleLearnings = getLearnings();

  useEffect(() => {
    setLoadingImages(true);
  }, []); // Run only once when the component mounts

  const handleImageLoad = () => {
    setLoadingImages(false);
  };

  return (
    <>
      <MetaHead
        title="Learnings | Anmol Durgapal"
        description="My learnings while doing engineering and design in the form of video logs"
      />
      <div className="learnings-view-container">
        <ViewContainer className={'my-16'}>
          <Header />
          <Section>
            <h2 className="about-heading leading-snug font-medium text-base text-zinc-900">
              {'My Data Visualization Work 🎨'}
            </h2>
            <div className="learnings-content-container mt-10 grid grid-cols-1 gap-6">
              {visibleLearnings.map((learning, index) => (
                <div
                  className={cn(
                    'rounded-xl bg-white overflow-hidden',
                    'max-lg:grid max-lg:w-fit',
                  )}
                  key={index}
                >
                  <a
                    href={learning.linkURL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {loadingImages && (
                      <div className="placeholder-image"></div>
                    )}
                    <img
                      src={learning.imageURL}
                      alt="Description of the image"
                      className={`max-lg:w-full object-cover bg-zinc-200 ${loadingImages ? 'loading-image' : ''
                        }`}
                      onLoad={handleImageLoad}
                      loading="lazy"
                    />
                  </a>
                  <div className="learning-details-wrapper p-4">
                    <h2 className="font-medium text-xl tracking-tight leading-snug max-lg:text-lg max-lg:w-[24ch]">
                      <a
                        href={learning.details.linkURL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline hover:text-blue-700"
                      >
                        {learning.details.title}
                      </a>
                    </h2>
                    <p className="text-zinc-500 mt-2">
                      {learning.details.description}
                    </p>
                    {
                      <Tag className="mt-2">
                        <a
                          href={learning.accessURL}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {learning.accessString}
                        </a>
                      </Tag>
                    }
                  </div>
                </div>
              ))}
            </div>
          </Section>
        </ViewContainer>
      </div>
      <style jsx>{`
        .loading-image {
          position: relative;
          width: 100%;
          height: 0;
          padding-top: 75%;
          background-color: #f3f3f3;
        }
      `}</style>
    </>
  );
};

export default LearningsView;
export type { LearningItemProps };
