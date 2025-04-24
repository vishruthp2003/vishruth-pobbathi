
import { useState, useEffect, useRef } from "react";

type SkillCategory = {
  title: string;
  skills: { name: string; icon: string }[];
};

const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    const section = document.getElementById("skills");
    if (section) observer.observe(section);
    
    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const skillCategories: SkillCategory[] = [
    {
      title: "Programming Languages",
      skills: [
        { 
          name: "C++", 
          icon: "https://assets-global.website-files.com/6047a9e35e5dc54ac86ddd90/63065002ce321b529d375e07_2e261bcd.png" 
        },
        { 
          name: "Java", 
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" 
        },
        { 
          name: "C", 
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" 
        },
        { 
          name: "JavaScript", 
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" 
        },
      ]
    },
    {
      title: "Frontend Development",
      skills: [
        { 
          name: "HTML", 
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" 
        },
        { 
          name: "CSS", 
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" 
        },
        { 
          name: "JavaScript", 
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" 
        },
        { 
          name: "TailWind CSS", 
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" 
        },
        { 
          name: "Bootstrap", 
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" 
        },
        { 
          name: "React", 
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" 
        },
      ]
    },
    {
      title: "Backend Development",
      skills: [
        { 
          name: "NodeJS", 
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" 
        },
        { 
          name: "Express", 
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" 
        },
      ]
    },
    {
      title: "Databases",
      skills: [
        { 
          name: "SQL", 
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" 
        },
        { 
          name: "MySQL", 
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg" 
        },
        { 
          name: "MongoDB", 
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" 
        },
      ]
    },
    {
      title: "Version Control & Collaboration",
      skills: [
        { 
          name: "Git", 
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" 
        },
        { 
          name: "GitHub", 
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" 
        },
      ]
    },
  ];

  // Auto-scrolling functionality
  useEffect(() => {
    const intervals: number[] = [];
    
    containerRefs.current.forEach((container, index) => {
      if (container) {
        // Set up auto-scrolling
        intervals.push(
          window.setInterval(() => {
            if (container.scrollWidth > container.clientWidth) {
              const maxScroll = container.scrollWidth - container.clientWidth;
              // If we're near the end, quickly reset to the beginning
              if (container.scrollLeft >= maxScroll - 10) {
                container.scrollTo({ left: 0, behavior: 'auto' });
              } else {
                container.scrollBy({ left: 1, behavior: 'auto' });
              }
            }
          }, 30)
        );
      }
    });
    
    return () => {
      intervals.forEach(interval => clearInterval(interval));
    };
  }, [isVisible]);

  return (
    <section id="skills" className="py-20 relative overflow-hidden bg-darkPurple/50">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-violet/10 filter blur-3xl"></div>
        <div className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full bg-magenta/10 filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="bg-clip-text text-transparent bg-gradient-to-r from-magenta to-violet">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-magenta to-violet mx-auto rounded-full"></div>
          <p className="text-white/70 mt-4 max-w-2xl mx-auto">
            A comprehensive set of technical skills and tools I've mastered throughout my journey
          </p>
        </div>
        
        <div className={`space-y-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {skillCategories.map((category, categoryIndex) => (
            <div key={category.title} className="mb-10">
              <h3 className="text-xl font-semibold mb-5 text-white">
                {category.title}
              </h3>
              
              <div 
                ref={el => containerRefs.current[categoryIndex] = el}
                className="flex space-x-4 overflow-x-auto py-4 px-2 no-scrollbar"
              >
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skill.name} 
                    className={`flex-shrink-0 bg-gradient-to-br from-darkPurple/60 to-secondaryPurple/10 backdrop-blur-md border border-white/10 p-5 rounded-xl w-32 flex flex-col items-center justify-center transition-all duration-500 hover-glow hover:-translate-y-1 animate-delay-${(skillIndex % 5) * 100}`}
                    style={{ 
                      animationDelay: `${skillIndex * 100}ms`,
                      boxShadow: '0 4px 20px rgba(139, 92, 246, 0.15)'
                    }}
                  >
                    <div className="w-12 h-12 mb-3 relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-magenta/20 to-violet/20 rounded-full filter blur-sm"></div>
                      <img 
                        src={skill.icon} 
                        alt={skill.name} 
                        className="w-full h-full object-contain relative z-10"
                      />
                    </div>
                    <p className="text-sm font-medium text-center">{skill.name}</p>
                  </div>
                ))}
                
                {/* Add duplicates to create continuous scroll effect */}
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={`${skill.name}-dup`} 
                    className={`flex-shrink-0 bg-gradient-to-br from-darkPurple/60 to-secondaryPurple/10 backdrop-blur-md border border-white/10 p-5 rounded-xl w-32 flex flex-col items-center justify-center transition-all duration-500 hover-glow hover:-translate-y-1`}
                    style={{ 
                      animationDelay: `${skillIndex * 100}ms`,
                      boxShadow: '0 4px 20px rgba(139, 92, 246, 0.15)'
                    }}
                  >
                    <div className="w-12 h-12 mb-3 relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-magenta/20 to-violet/20 rounded-full filter blur-sm"></div>
                      <img 
                        src={skill.icon} 
                        alt={skill.name} 
                        className="w-full h-full object-contain relative z-10"
                      />
                    </div>
                    <p className="text-sm font-medium text-center">{skill.name}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
