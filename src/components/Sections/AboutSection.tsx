
import { useState, useEffect } from "react";
import { FileText } from "lucide-react";

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  
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
    
    const section = document.getElementById("about");
    if (section) observer.observe(section);
    
    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-violet/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-magenta/10 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="bg-clip-text text-transparent bg-gradient-to-r from-magenta to-violet">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-magenta to-violet mx-auto rounded-full"></div>
        </div>
        
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Profile Image */}
          <div className={`lg:w-1/3 transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-magenta/30 to-violet/30 rounded-2xl blur-xl transform rotate-6"></div>
              <div className="relative rounded-2xl overflow-hidden glass-card p-2 hover-glow">
                <img 
                  src="/lovable-uploads/9946a3c8-a125-4af3-99d5-ae8fa29b1e4a.png"
                  alt="Vishruth Pobbathi" 
                  className="rounded-xl w-full aspect-[4/5] object-cover"
                />
                <div className="absolute bottom-2 left-2 right-2 glass-card p-2 rounded-lg">
                  <p className="text-magenta font-medium">Vishruth Pobbathi</p>
                  <p className="text-magenta text-sm font-medium">Information Science Engineer & Full Stack Developer</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* About Content */}
          <div className={`lg:w-2/3 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <h3 className="text-2xl font-semibold mb-4">
            </h3>
            
            <p className="text-white/80 mb-6 text-lg leading-relaxed">
            I'm a final-year Information Science Engineering student at SEACET. My expertise lies in Web Development, Generative AI, and UI/UX Design. I have interned at Sain Solutions, where I contributed to the development of "MJTutorials", an online tutoring platform. 
            </p>
            
            <p className="text-white/80 mb-8 text-lg leading-relaxed">
            I’m proud to have ranked Institution Rank 3 for solving DSA problems on GeeksforGeeks. Additionally, I built a project titled "Smart Drug Label Analyzer", which earned the Best Paper Award at the IEEE National Conference Pravartana.

            </p>
            <p className="text-white/80 mb-8 text-lg leading-relaxed">
            I also post web development content on Instagram (@skillsetcoder), where I’ve grown a community of over 18,000 followers. I’m always eager to collaborate with startups & explore opportunities that combine creativity & technical innovation.
            </p>
            <p className="text-white/80 mb-8 text-lg leading-relaxed">
            Let’s connect and create something extraordinary!
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a 
                href="#contact" 
                className="btn-shadow px-6 py-3 rounded-lg font-medium bg-gradient-to-r from-magenta to-violet text-white flex items-center justify-center"
              >
                Contact Me
              </a>
              <a 
                href="/lovable-uploads/Vishruth_P.pdf"
                className="btn-shadow px-6 py-3 rounded-lg font-medium bg-transparent border border-white/20 text-white hover:bg-white/5 transition-colors flex items-center justify-center"
                target="_blank"
                rel="noopener noreferrer"
                download
              >
                <FileText className="mr-2 w-5 h-5" />
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
