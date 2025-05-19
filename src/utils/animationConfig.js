// Animation configuration settings
// Centralized animation durations for consistent experience

const animationConfig = {
  // Base durations (in seconds)
  duration: {
    ultraFast: 0.15,  // For micro-interactions
    fast: 0.25,       // For most UI elements
    medium: 0.4,      // For larger transitions
    slow: 0.6,        // For hero elements and major transitions
  },
  
  // Delay settings for staggered animations
  delay: {
    short: 0.05,
    medium: 0.1,
    long: 0.15,
  },
  
  // Stagger children timing
  stagger: 0.07,
  
  // Default transition settings
  transition: {
    ease: [0.25, 0.1, 0.25, 1], // cubic-bezier easing
  },
  
  // Used for infinite animations (like scroll indicators)
  infinity: {
    duration: 1.2,
  }
};

export default animationConfig; 