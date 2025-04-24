
import { 
  Github, 
  Linkedin, 
  Instagram, 
  Mail,
  ArrowUp
} from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="bg-darkPurple/80 backdrop-blur-md pt-10 pb-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="text-2xl font-bold mb-4 md:mb-0 bg-clip-text text-transparent bg-gradient-to-r from-magenta to-violet">
            Vishruth<span className="text-golden">.</span>
          </div>
          
          <div className="flex space-x-4">
            <a 
              href="https://github.com/vishruthp2003" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover-glow rounded-full p-2 bg-white/5 hover:bg-white/10 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5 text-white" />
            </a>
            <a 
              href="https://www.linkedin.com/in/Vishruth-p/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover-glow rounded-full p-2 bg-white/5 hover:bg-white/10 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 text-white" />
            </a>
            <a 
              href="https://www.instagram.com/skillsetcoder/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover-glow rounded-full p-2 bg-white/5 hover:bg-white/10 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5 text-white" />
            </a>
            
            <a 
              href="mailto:vishruthp2003@gmail.com" 
              className="hover-glow rounded-full p-2 bg-white/5 hover:bg-white/10 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5 text-white" />
            </a>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm mb-4 md:mb-0">
            <span className="text-golden text-base animate-pulse">&#10084;</span>
            <span className="ml-1">Made with love by Vishruth Pobbathi &copy; {new Date().getFullYear()}</span>
          </p>
          <div className="flex">
            <button 
              onClick={scrollToTop}
              className="hover-glow rounded-full p-2 bg-white/5 hover:bg-white/10 transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
