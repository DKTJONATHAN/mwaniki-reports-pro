import { Helmet } from 'react-helmet-async'

function SEOHead({ title, description, keywords, image }) {
  return (
    <Helmet>
      <title>{title} | Mwaniki's Report</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Jonathan Mwaniki" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image || '/images/Jonathan-Mwaniki-logo.png'} />
      <meta property="og:url" content="https://jonathanmwaniki.co.ke" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="@maestropuns" />
    </Helmet>
  )
}

export default SEOHead