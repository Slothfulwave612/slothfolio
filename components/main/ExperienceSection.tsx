import { getExperiences } from '@/lib/experiences';
import { cn } from '@/lib/utils';
import Section from '../layout/Section';
import LinkText from '../ui/LinkText';

interface ExperienceItemProps extends React.HTMLAttributes<HTMLDivElement> {
  experienceTitle?: React.ReactNode | string;
  experienceDescription?: Array<{ type?: string; content: string }>;
  experienceOrg?: {
    name?: React.ReactNode | string;
    link?: React.ReactNode | string;
    websiteDisplayName?: React.ReactNode | string;
  };
  experienceStatus?:
  | 'current'
  | {
    startAt?: React.ReactNode | string;
    endAt?: React.ReactNode | string;
  };
}

const ExperienceSection: React.FunctionComponent = () => {
  return (
    <Section
      className="experience-section grid grid-cols-1 justify-start gap-4"
      id="experience">
      <h2 className="about-heading leading-snug font-medium text-base text-zinc-900">
        {'Work Experience'}
      </h2>
      <Section className="experience-item-list-wrapper mt-4 grid grid-cols-1 justify-start gap-8">
        {getExperiences()?.map(
          (experience: ExperienceItemProps, experienceIndex: number) => (
            <ExperienceItem {...experience} key={experienceIndex} />
          ),
        )}
      </Section>
    </Section>
  );
};

const ExperienceItem: React.FunctionComponent<ExperienceItemProps> = ({
  experienceTitle,
  experienceDescription,
  experienceOrg,
  experienceStatus,
  className,
  ...attr
}) => {
  return (
    <div
      className={cn(
        'experience-item border-l-2 pl-4 hover:border-orange-300 cursor-default transition-all',
        className,
      )}
      {...attr}>
      <div className="flex flex-row items-start justify-between max-md:flex-col max-md:justify-start max-md:gap-2 max-sm:w-[320px]">
        <span>
          <h3 className="experience-title font-normal text-zinc-900 capitalize w-[46ch] max-md:w-[30ch]">
            {experienceTitle + ', ' + experienceOrg?.name}
          </h3>
          <p className="experience-org-details-wrapper text-sm flex flex-row items-center justify-start gap-1.5">
            {'@'}
            {typeof experienceOrg?.link === 'string' ? (
              <LinkText
                className="font-normal text-sm"
                href={experienceOrg?.link}
                target={'_blank'}>
                {experienceOrg?.websiteDisplayName}
              </LinkText>
            ) : (
              <span className="font-normal text-sm">
                {experienceOrg?.websiteDisplayName}
              </span>
            )}
          </p>
        </span>
        <p className="experience-status font-normal text-zinc-500 text-sm">
          {typeof experienceStatus === 'string' &&
            experienceStatus === 'current' &&
            experienceStatus}
          {typeof experienceStatus === 'object' && (
            <span className="experience-status-duration-wrapper">
              {experienceStatus?.startAt + ' - ' + experienceStatus?.endAt}
            </span>
          )}
        </p>
      </div>
      <ul className="experience-description-list-content-wrapper mt-4 flex flex-col items-start justify-start gap-2">
        {experienceDescription?.map(
          (descriptionItem, descriptionIndex) => (
            <li
              className="font-normal text-zinc-500 text-sm list-outside"
              key={descriptionIndex}>
              {descriptionItem.type === 'descriptionClass' ? (
                <div className="descriptionClass">
                  <span className="font-normal">{descriptionItem.content}</span>
                </div>
              ) : (
                <div className="descriptionItem">
                  <ul className="list-disc list-inside pl-4">
                    <li>{descriptionItem.content}</li>
                  </ul>
                </div>
              )}
            </li>
          ),
        )}
      </ul>
    </div>
  );
};

export default ExperienceSection;
export type { ExperienceItemProps };