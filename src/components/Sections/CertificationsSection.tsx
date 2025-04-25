import { BadgeCheck } from "lucide-react";

const certifications = [
  {
    title: "Java Full Stack Development",
    issuer: "KodNest",
    description: "Certified in core java and java frameworks such as hibernate and springboot.",
  },
  {
    title: "Web Development Bootcamp",
    issuer: "Udemy",
    description: "Specialized training in HTML5, CSS3, JavaScript and Reactjs.",
  },
  {
    title: "Frontend Development using HTML",
    issuer: "Great Learning",
    description: "Expertise in developing frontend using HTML.",
  },
];

const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-magenta to-violet">Certifications</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-magenta to-violet mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="group p-6 rounded-xl bg-gradient-to-br from-darkPurple/80 to-magenta/15 backdrop-blur-lg border border-white/10 hover-glow transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-4">
                <BadgeCheck className="w-8 h-8 text-golden" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-golden mb-2">{cert.title}</h3>
                <p className="text-white/90 font-medium">{cert.issuer}</p>
                {cert.description && (
                  <p className="text-white/70 text-sm mt-3 italic">{cert.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;

