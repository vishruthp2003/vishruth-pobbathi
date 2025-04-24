
import { ExternalLink, Github, Brain, ChartBar, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

// Only show top 3 projects on homepage
const projects = [
  {
    id: 1,
    title: 'Drug Detection App',
    description: 'A web application that identifies text from uploaded images of medicines and provides detailed information about the medicine.',
    image: '/lovable-uploads/DrugDetection.png',
    technologies: ['HTML', 'TailwindCSS', 'JavaScript', 'Gemini API', 'Web Speech API'],
    demoUrl: 'https://vishruthp2003.github.io/DrugDetection/',
    githubUrl: 'https://github.com/vishruthp2003/DrugDetection',
    hasDemoLink: true,
  },
  {
    id: 2,
    title: 'Portfolio Website',
    description: 'A personal portfolio website that showcase my education, projects, skills, certifications and achievements.',
    image: '/lovable-uploads/portfolioImage.png',
    technologies:  ['Vite','HTML', 'TailwindCSS', 'TypeScript', 'React'],
    demoUrl: 'https://my-new-portfolio-website-nmg78wmzf-vishruthp2003s-projects.vercel.app/',
    githubUrl: 'https://github.com/vishruthp2003/My-portfolio-website',
    hasDemoLink: true,
  },
  {
    id: 3,
    title: 'Tic Tac Toe Game',
    description: 'A classic two-player Tic Tac Toe game featuring a responsive design, intuitive UI, and smooth gameplay with real-time win and draw detection.',
    image: '/lovable-uploads/tictactoe.jpg',
    technologies:  ['HTML', 'CSS', 'JavaScript'],
    demoUrl: 'https://vishruthp2003.github.io/Tic-Tac-Toe/',
    githubUrl: 'https://github.com/vishruthp2003/Tic-Tac-Toe',
    hasDemoLink: true,
  },
];

const ProjectsSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    const section = document.getElementById("projects");
    if (section) observer.observe(section);
    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-violet/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-magenta/10 rounded-full filter blur-3xl"></div>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="bg-clip-text text-transparent bg-gradient-to-r from-magenta to-violet">Projects</span>
          </h2>
          </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            return (
              <div
                key={project.id}
                className={`rounded-xl overflow-hidden transition-all duration-700 hover-glow bg-gradient-to-br from-darkPurple/80 to-magenta/15 backdrop-blur-lg border border-white/10 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 120}ms` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-darkPurple/90 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-golden">{project.title}</h3>
                  <p className="text-white/70 mb-4 text-sm min-h-[48px]">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.slice(0, 4).map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 rounded-md text-xs font-medium bg-white/5"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 py-1 rounded-md text-xs font-medium bg-white/5">
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex space-x-2">
                      {project.hasDemoLink && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-shadow px-3 py-1.5 rounded-lg text-sm font-medium bg-gradient-to-r from-magenta to-violet text-white flex items-center justify-center"
                        >
                          <ExternalLink className="w-3.5 h-3.5 mr-1" /> Demo
                        </a>
                      )}
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-shadow px-3 py-1.5 rounded-lg text-sm font-medium bg-transparent border border-white/20 text-white hover:bg-white/5 transition-colors flex items-center justify-center"
                      >
                        <Github className="w-3.5 h-3.5 mr-1" /> GitHub
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="mt-12 text-center">
          <Link
            to="/projects"
            className="inline-flex items-center btn-shadow px-6 py-3 rounded-lg font-medium border border-white/20 text-white hover:bg-white/5 transition-colors group"
          >
            View All Projects
            <span className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
