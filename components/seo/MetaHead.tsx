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
  description = 'Hey! I\'m a data professional and developer. Currently, I am working with the Data Science and AI engineering team at Networth Corp. Here, I have extensively contributed to a diverse set of roles and responsibilities which includes process engineering, data infrastructure engineering, and frontend development. Prior to this, I have also been a part of developing and delivering user-friendly open-source visualization tools particularly catering to the domain of sports analytics.',
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
      <meta property="og:url" content="https://slothfulwave612.vercel.app/" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta
        property="og:image"
        content={
          embedSource === 'default'
            ? '/media/icon.ico'
            : embedSource?.og
        }
      />

      <meta
        property="twitter:card"
        content={
          embedSource === 'default'
            ? '/media/icon.ico'
            : embedSource?.twitter
        }
      />
      <meta property="twitter:url" content="https://twitter.com/slothfulwave612" />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta
        property="twitter:image"
        content={
          embedSource === 'default'
            ? '/media/icon.ico'
            : embedSource?.twitter
        }
      />
    </Head>
  );
};

export default MetaHead;
