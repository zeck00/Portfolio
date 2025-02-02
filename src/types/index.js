// Project type definition
/**
 * @typedef {Object} Project
 * @property {string} id
 * @property {string} title
 * @property {string} description
 * @property {string} image
 * @property {string[]} tags
 * @property {string} [emoji]
 * @property {string} [link]
 * @property {string} [github]
 * @property {string} [duration]
 * @property {string[]} [features]
 * @property {Array<{name: string, icon?: string, description: string}>} [technologies]
 * @property {Array<{image: string, caption: string}>} [gallery]
 * @property {string[]} [challenges]
 * @property {string[]} [solutions]
 * @property {number} [teamSize]
 * @property {string} [role]
 * @property {Array<{name: string, role: string, comment: string, avatar?: string}>} [testimonials]
 */

// Experience type definition
/**
 * @typedef {Object} Experience
 * @property {string} title
 * @property {string} company
 * @property {string} period
 * @property {string} description
 * @property {string} [icon]
 * @property {string} [companyUrl]
 */

// Skill type definition
/**
 * @typedef {Object} Skill
 * @property {string} name
 * @property {number} level
 * @property {'frontend' | 'backend' | 'ai' | 'mobile'} category
 * @property {string} [emoji]
 */

// Certification type definition
/**
 * @typedef {Object} Certification
 * @property {string} name
 * @property {string} issuer
 * @property {string} date
 * @property {string} [link]
 * @property {string} [icon]
 */ 