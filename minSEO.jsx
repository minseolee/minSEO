import Head from 'next/head';

const MinSEO = ({
  title, keywords, description, ogTitle, ogDescription, ogImage, ogUrl, indexing,
}) => (
  <Head>
    <title>{title}</title>
    <meta name="keywords" content={keywords} />
    <meta name="description" content={description} />
    <meta property="og:type" content="website" />
    <meta property="og:title" content={ogTitle} />
    <meta property="og:description" content={ogDescription} />
    <meta property="og:image" content={ogImage} />
    <meta property="og:url" content={ogUrl} />
    <meta name="robots" content={indexing} />
  </Head>
);

export default MinSEO;
