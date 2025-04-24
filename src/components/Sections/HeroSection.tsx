
import { useState, useEffect } from "react";
import { ArrowRight, FileText, Mail } from "lucide-react";
import { Tooltip, TooltipProvider, TooltipTrigger, TooltipContent } from "../ui/tooltip";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative animated-gradient-bg overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-magenta/20 filter blur-3xl animate-pulse" style={{ animationDuration: '10s' }}></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 rounded-full bg-violet/20 filter blur-3xl animate-pulse" style={{ animationDuration: '15s' }}></div>
        <div className="absolute top-1/3 right-1/3 w-96 h-96 rounded-full bg-golden/10 filter blur-3xl animate-pulse" style={{ animationDuration: '12s' }}></div>
      </div>
      <TooltipProvider>
        <div className="container mx-auto px-4 z-10 pt-24 flex flex-col items-center justify-center">
          <div className={`w-full max-w-3xl flex flex-col items-center justify-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <p className="text-lg md:text-xl font-medium text-magenta mb-2 text-center">
              Hello, I&apos;m
            </p>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center">
              Vishruth Pobbathi
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-magenta to-violet text-center">
              Information Science Engineer &amp; Full Stack Developer
            </h2>
            <p className="text-lg text-white/80 mb-2 max-w-2xl text-center">
              Specialized in Web Development, Generative AI, and UI/UX Design.
            </p>
            <br />
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center mb-2">
              <Tooltip>
                <TooltipTrigger asChild>
                  <a
                    href="/lovable-uploads/Vishruth_P.pdf"
                    className="btn-shadow px-6 py-3 rounded-lg font-medium bg-gradient-to-r from-magenta to-violet text-white flex items-center justify-center group transition-shadow hover:shadow-[0_0_20px_5px_rgba(217,70,239,0.25)]"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FileText className="mr-2 w-5 h-5" />
                    Download Resume
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  Download Resume
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <a
                    href="mailto:vishruthp2003@gmail.com"
                    className="btn-shadow px-6 py-3 rounded-lg font-medium bg-transparent border border-white/20 text-white hover:bg-white/5 transition-colors flex items-center justify-center group"
                  >
                    Contact Me
                    <Mail className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  Contact Me
                </TooltipContent>
              </Tooltip>
            </div>
          </div>
        </div>
      </TooltipProvider>
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <div className="text-white/60 text-sm mb-2">Scroll Down</div>
      </div>
    </section>
  );
};

export default HeroSection;
