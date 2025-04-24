import { useState, useEffect } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { 
  Github, 
  Linkedin, 
  Instagram, 
  ArrowUp
} from "lucide-react";

const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

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
    
    const section = document.getElementById("contact");
    if (section) observer.observe(section);
    
    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: "", email: "", message: "" });
      
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden bg-darkPurple/50">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-violet/10 filter blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 rounded-full bg-magenta/10 filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Contact <span className="bg-clip-text text-transparent bg-gradient-to-r from-magenta to-violet">Me</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div 
            className={`transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="bg-gradient-to-br from-darkPurple/60 to-secondaryPurple/10 backdrop-blur-md border border-white/10 p-8 rounded-xl hover-glow">
              <h3 className="text-2xl font-semibold mb-6 text-white">Get In Touch</h3>
              <p className="text-white/70 mb-8">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white/5 flex items-center justify-center mr-4">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-white">Email</h4>
                    <a 
                      href="mailto:vishruthp2003@@gmail.com" 
                      className="text-white hover:text-white/80 transition-colors"
                    >
                      vishruthp2003@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white/5 flex items-center justify-center mr-4">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-white">Location</h4>
                    <p className="text-white">
                      Bangalore, Karnataka, India
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <h4 className="text-lg font-medium mb-4">Connect With Me</h4>
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
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
