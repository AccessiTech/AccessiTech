import { Helmet } from 'react-helmet';
import { getMetaData } from '../../settings/getMetaData';

export interface MetaDataProps {
  title: string;
  description: string;
  canonical: string;
  type?: string;
  image?: string;
  imageAlt?: string;
  siteName?: string;
  twitterCreator?: string;
}

export const Metadata = (props: MetaDataProps) => {
  const metaData = Object.entries(getMetaData(props)).map(([key, value]) => {
    switch (key) {
      case 'title':
        return <title key={key}>{value}</title>;
      case 'canonical':
        return <link key={key} rel="canonical" href={value} />;
      default:
        return <meta key={key} name={key} content={value} />;
    }
  });
  if (typeof document === 'undefined') {
    return <div>{metaData}</div>;
  }

  return <Helmet>{metaData}</Helmet>;
};

export default Metadata;
