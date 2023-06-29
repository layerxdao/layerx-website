import Head from 'next/head'

const defaultMetaTags = {
  pageTitle: 'LayerX',
  description: 'LayerX is the most trusted platform to manage digital assets on Ethereum',
  image: "/images/metadata.jpg",
  site: 'LayerX',
}

const MetaTags = (props: Partial<typeof defaultMetaTags>) => {
  const seo = { ...defaultMetaTags, ...props }

  return (
    <Head>
      <title>{seo.pageTitle}</title>

      <meta name="description" content={seo.description} />
      <meta name="image" content="/images/metadata.jpg" />
      <meta name="application-name" content={seo.site} />

      <meta property="og:title" content={seo.pageTitle} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content="/images/metadata.jpg" />

      <meta name="twitter:creator" content={seo.pageTitle} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.pageTitle} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content="/images/metadata.jpg" />
    </Head>
  )
}

export default MetaTags
