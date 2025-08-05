export function generateMetaTags({ title, description, keywords, image }) {
  return {
    title: `${title} | Mwaniki's Report`,
    meta: [
      { name: 'description', content: description },
      { name: 'keywords', content: keywords },
      { name: 'author', content: 'Jonathan Mwaniki' },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:image', content: image || '/images/Jonathan-Mwaniki-logo.png' },
      { property: 'og:url', content: 'https://jonathanmwaniki.co.ke' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:creator', content: '@maestropuns' },
    ],
  }
}