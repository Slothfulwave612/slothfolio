import ViewContainer from '@/components/layout/ViewContainer';
import ContactSection from '@/components/main/ContactSection';
import ExperienceSection from '@/components/main/ExperienceSection';
import Header from '@/components/main/Header';
import HeroSection from '@/components/main/HeroSection';
import ProjectSection from '@/components/main/ProjectSection';
import MetaHead from '@/components/seo/MetaHead';

const MainView: React.FunctionComponent = () => {
  return (
    <>
      <MetaHead />
      <div className="main-view-container">
        <ViewContainer className="grid grid-cols-1 items-start justify-start gap-12">
          <HeroSection />
        </ViewContainer>
        <ViewContainer className="grid grid-cols-1 items-start justify-start gap-12">
          <ContactSection />
          <ExperienceSection />
          <ProjectSection />
          <div style={{ textAlign: 'center', marginBottom: '0' }}>
            <p style={{ fontSize: '12px', color: '#9B9B9B' }}>
              Website template and code inspired by{' '}
              <a
                href="https://github.com/yashsehgal/personal-website"
                target="_blank"
                style={{ textDecoration: 'underline', color: '#9B9B9B' }}
              >
                yashsehgal
              </a>{' '}
            </p>
          </div>
        </ViewContainer>
      </div>
    </>
  );
};

export default MainView;
