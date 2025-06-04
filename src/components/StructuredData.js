import { Helmet } from 'react-helmet-async'

const StructuredData = ({ projects = [], skills = [] }) => {
  // Create structured data for projects
  const projectsStructuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Ziad Ahmad's Projects",
    "description": "Portfolio of full stack development projects",
    "itemListElement": projects.map((project, index) => ({
      "@type": "CreativeWork",
      "position": index + 1,
      "name": project.title,
      "description": project.description,
      "image": project.image,
      "url": `https://ziad.us/project/${project.id}`,
      "author": {
        "@type": "Person",
        "name": "Ziad Ahmad"
      },
      "keywords": project.tags?.join(", "),
      "dateCreated": project.year || "2024",
      "programmingLanguage": project.technologies?.map(tech => tech.name) || project.tags
    }))
  }

  // Create structured data for skills/technologies
  const skillsStructuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Ziad Ahmad's Technical Skills",
    "description": "Full stack development skills and technologies",
    "itemListElement": skills.map((skill, index) => ({
      "@type": "Thing",
      "position": index + 1,
      "name": skill.name,
      "description": skill.description || `${skill.name} development experience`,
      "additionalProperty": {
        "@type": "PropertyValue",
        "name": "proficiencyLevel",
        "value": skill.level || "Advanced"
      }
    }))
  }

  return (
    <Helmet>
      {projects.length > 0 && (
        <script type="application/ld+json">
          {JSON.stringify(projectsStructuredData)}
        </script>
      )}
      {skills.length > 0 && (
        <script type="application/ld+json">
          {JSON.stringify(skillsStructuredData)}
        </script>
      )}
    </Helmet>
  )
}

export default StructuredData 