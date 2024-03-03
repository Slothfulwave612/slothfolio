import Image from 'next/image';
import Section from '../layout/Section';
import { motion } from 'framer-motion';

const Header: React.FunctionComponent = () => {
  const initialSrc = '/media/profile.jpg';
  const fullResolutionSrc = '/media/profile.jpg';

  const handleImageClick = () => {
    window.open(fullResolutionSrc, '_blank');
  };

  return (
    <Section className="flex flex-row items-center justify-start gap-4 mt-8 max-sm:flex-col max-md:flex-col items-center">
      <motion.div
        className="profile-icon-wrapper relative w-fit h-fit"
        whileHover={{ scale: 1.1 }}
        transition={{ type: 'spring', stiffness: 400, damping: 10 }}
      >
        <div onClick={handleImageClick}>
          <Image
            src={initialSrc}
            alt="anmol-profile"
            width={'200'}
            height={'200'}
            className="rounded-full transition-all"
            priority
          />
        </div>
      </motion.div>
      <div>
        <h1 className="welcome-text leading-snug font-semibold text-2xl text-zinc-900">
          {'🦥 Anmol Durgapal'}
        </h1>
        <div className="leading-snug font-normal text-base text-zinc-500 mt-2">
          <p>
            {'A data professional and developer crafting action-oriented solutions.'}
          </p>
        </div>
        <div className="flex gap-4 mt-4">
          {/* Email */}
          <a href="mailto:anmoldurgapal1@gmail.com" target="_blank" rel="noopener noreferrer">
            <motion.img
              src="https://cdn-icons-png.flaticon.com/128/552/552486.png"
              alt="email-icon"
              whileHover={{ scale: 1.2 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              style={{ width: '33px', height: '33px' }}
            />
          </a>
          {/* Resume */}
          <a href="/utils/Resume - Anmol Durgapal.pdf" target="_blank" rel="noopener noreferrer">
            <motion.img
              src="https://cdn-icons-png.flaticon.com/128/3135/3135731.png"
              alt="resume-icon"
              whileHover={{ scale: 1.2 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              style={{ width: '33px', height: '33px' }}
            />
          </a>
          {/* Github */}
          <a href="https://github.com/slothfulwave612" target="_blank" rel="noopener noreferrer">
            <motion.img
              src="https://cdn-icons-png.flaticon.com/128/2111/2111432.png"
              alt="github-icon"
              whileHover={{ scale: 1.2 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              style={{ width: '33px', height: '33px' }}
            />
          </a>
          {/* Linkedin */}
          <a href="https://www.linkedin.com/in/anmol-durgapal/" target="_blank" rel="noopener noreferrer">
            <motion.img
              src="https://cdn-icons-png.flaticon.com/128/145/145807.png"
              alt="linkedin-icon"
              whileHover={{ scale: 1.2 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              style={{ width: '33px', height: '33px' }}
            />
          </a>
          {/* Twitter */}
          <a href="https://twitter.com/slothfulwave612" target="_blank" rel="noopener noreferrer">
            <motion.img
              src="https://cdn-icons-png.flaticon.com/128/733/733579.png"
              alt="twitter-icon"
              whileHover={{ scale: 1.2 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              style={{ width: '33px', height: '33px' }}
            />
          </a>
          {/* Spotify */}
          <a href="https://open.spotify.com/user/317cd7rjbrgdgtdpgsb5lny5kzby?si=41acc562fe054551" target="_blank" rel="noopener noreferrer">
            <motion.img
              src="https://cdn-icons-png.flaticon.com/128/2111/2111624.png"
              alt="spotify-icon"
              whileHover={{ scale: 1.2 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              style={{ width: '33px', height: '33px' }}
            />
          </a>
        </div>
      </div>
    </Section>
  );
};

export default Header;
