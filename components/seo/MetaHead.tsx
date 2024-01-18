import Head from 'next/head';

interface MetaHeadProps extends React.MetaHTMLAttributes<HTMLMetaElement> {
  title?: string;
  description?: string;
  embedSource?:
  | 'default'
  | {
    twitter?: string;
    linkedin?: string;
    og?: string;
  };
}

const MetaHead: React.FunctionComponent<MetaHeadProps> = ({
  title = 'Anmol Durgapal',
  description = 'Hey! I am a Data Professional and Developer with a knack for tackling business challenges through action-oriented data-driven solutions. Experienced in database engineering, data processing, visualizations, and predictive modeling. Let\'s craft impactful data stories together!',
  embedSource = 'default',
  ...attr
}) => {
  return (
    <Head {...attr}>
      <title>{title}</title>
      <link rel="shortcut icon" href="/media/icon.ico" />
      <meta name="title" content="Anmol Durgapal" />
      <meta name="description" content={description} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.yashsehgal.com/" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta
        property="og:image"
        content={
          embedSource === 'default'
            ? 'https://ik.imagekit.io/eawrckp8wfi/portfolio-image-source/seo/portfolio?updatedAt=1679493727587&tr=w-1200%2Ch-630%2Cfo-auto'
            : embedSource?.og
        }
      />

      <meta
        property="twitter:card"
        content={
          embedSource === 'default'
            ? 'https://ik.imagekit.io/eawrckp8wfi/portfolio-image-source/seo/portfolio?updatedAt=1679493727587&tr=w-1200%2Ch-675%2Cfo-auto'
            : embedSource?.twitter
        }
      />
      <meta property="twitter:url" content="https://www.yashsehgal.com/" />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta
        property="twitter:image"
        content={
          embedSource === 'default'
            ? 'https://ik.imagekit.io/eawrckp8wfi/portfolio-image-source/seo/portfolio?updatedAt=1679493727587&tr=w-1200%2Ch-675%2Cfo-auto'
            : embedSource?.twitter
        }
      />
    </Head>
  );
};

export default MetaHead;
