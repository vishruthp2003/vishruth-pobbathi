import { useState, useEffect } from "react";
import { School, GraduationCap } from "lucide-react";

type Education = {
  id: number;
  degree: string;
  institution: string;
  location: string;
  period: string;
  description: string;
  score: string;
};

type Awards = {
  id: number;
  title: string;
  issuer: string;
  date: string;
  description: string;
  link: string;
};

const EducationSection = () => {
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
    
    const section = document.getElementById("education");
    if (section) observer.observe(section);
    
    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const education: Education[] = [
    {
      id: 1,
      degree: "Bachelor of Engineering",
      institution: "Southeast Asian College of Engineering & Technology",
      location: "Bangalore, Karnataka, India",
      period: "2021 - 2025",
      description: "Specialized in Information Science & Engineering.",
      score:"8.2 CGPA"
    },
    {
      id: 2,
      degree: "Pre-University College",
      institution: "RK International College",
      location: "Chintamani, Karnataka, India",
      period: "2019 - 2021",
      description: "Focused on Physics, Chemistry, Mathematics & Biology.",
      score:"91%"
    },
    {
      id: 3,
      degree: "SSLC",
      institution: "Royal English Medium High School",
      location: "Chintamani, Karnataka, India",
      period: "2018 - 2019",
      description: "Focused on Science, Social Science & Mathematics.",
      score:"92%"
    }
  ];

  return (
    <section id="education" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-violet/10 filter blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 rounded-full bg-magenta/10 filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="bg-clip-text text-transparent bg-gradient-to-r from-magenta to-violet">Education</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-magenta to-violet mx-auto rounded-full"></div>
          <p className="text-white/70 mt-4 max-w-2xl mx-auto">
            My academic journey and qualifications
          </p>
        </div>
        
        <div className="relative mb-20">
          <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-magenta via-violet to-golden hidden md:block ml-6"></div>
          
          <div className="space-y-12">
            {education.map((edu, index) => (
              <div 
                key={edu.id}
                className={`relative pl-16 transition-all duration-700 ${
                  isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="absolute left-0 top-0 w-12 h-12 rounded-full bg-white/5 flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-magenta to-violet flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-white"></div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-darkPurple/60 to-secondaryPurple/10 backdrop-blur-md border border-white/10 p-6 rounded-xl hover-glow">
                  <div className="flex items-start">
                    <div className="flex-grow">
                      <h3 className="text-xl font-semibold">{edu.degree}</h3>
                      <p className="text-white/80 mb-1">{edu.institution}, {edu.location}</p>
                      <p className="text-white/60 text-sm mb-4">{edu.period}</p>
                      <p className="text-white/70">{edu.description}</p>
                      <p className="text-white/70">{edu.score}</p>

                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
