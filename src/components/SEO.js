import { Helmet } from 'react-helmet-async'

const SEO = ({ 
  title = "Ziad Ahmad - Full Stack Developer & Software Engineer",
  description = "Experienced Full Stack Developer specializing in React, Node.js, and modern web technologies. View my portfolio, projects, and certifications.",
  keywords = "Ziad Ahmad, Full Stack Developer, React Developer, Node.js, JavaScript, Portfolio, Software Engineer, Web Development",
  image = "https://ziad.us/assets/logo-DwEzdnd9.png",
  url = "https://ziad.us/",
  type = "website"
}) => {
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
    </Helmet>
  )
}

export default SEO 