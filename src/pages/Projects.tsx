
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ExternalLink, Github, ArrowLeft } from "lucide-react";
import Navbar from "../components/Layout/Navbar";
import Footer from "../components/Layout/Footer";

type Project = {
  id: number;
  title: string;
  date: string;
  description: string;
  fullDescription: string;
  image: string;
  technologies: string[];
  demoUrl: string;
  githubUrl: string;
  hasDemoLink?: boolean;
};

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, []);

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

  return (
    <div className="min-h-screen animated-gradient-bg">
      <Navbar />
      
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <Link 
              to="/" 
              className="inline-flex items-center text-white/70 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Home
            </Link>
          </div>
          
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              My <span className="bg-clip-text text-transparent bg-gradient-to-r from-magenta to-violet">Projects</span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-magenta to-violet mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={project.id}
                className={`bg-gradient-to-br from-darkPurple/80 to-magenta/15 backdrop-blur-lg border border-white/10 rounded-xl overflow-hidden transition-all duration-700 hover-glow ${
                  isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="relative h-48">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-darkPurple/90 to-transparent"></div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-golden">{project.title}</h3>
                  <p className="text-white/70 mb-6 text-sm line-clamp-3">{project.description}</p>
                  
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
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Projects;
