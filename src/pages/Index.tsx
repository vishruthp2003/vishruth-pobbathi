import { useEffect } from "react";
import Navbar from "../components/Layout/Navbar";
import Footer from "../components/Layout/Footer";
import HeroSection from "../components/Sections/HeroSection";
import AboutSection from "../components/Sections/AboutSection";
import SkillsSection from "../components/Sections/SkillsSection";
import ProjectsSection from "../components/Sections/ProjectsSection";
import ExperienceSection from "../components/Sections/ExperienceSection";
import EducationSection from "../components/Sections/EducationSection";
import ContactSection from "../components/Sections/ContactSection";
import AwardsSection from "../components/Sections/AwardsSection";
import { ArrowUp } from "lucide-react";
import { Tooltip, TooltipProvider, TooltipTrigger, TooltipContent } from "../components/ui/tooltip";

const Index = () => {
  // Scroll animation effect for elements
  useEffect(() => {
    // Initialize intersection observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe all elements with animate-on-scroll class
    document.querySelectorAll(".animate-on-scroll").forEach((element) => {
      observer.observe(element);
    });

    return () => {
      document.querySelectorAll(".animate-on-scroll").forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, []);

  // Helper effect for cursor glow
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const cursor = document.querySelector(".cursor-glow") as HTMLElement;
      if (cursor) {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Back to Top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen animated-gradient-bg relative">
      {/* Cursor glow effect */}
      <div className="cursor-glow fixed w-[150px] h-[150px] rounded-full bg-gradient-to-r from-magenta/20 to-violet/20 filter blur-xl pointer-events-none -translate-x-1/2 -translate-y-1/2 z-10"></div>
      
      <Navbar />
      
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <EducationSection />
        <AwardsSection />
        <ContactSection />
      </main>

      {/* Bouncing Back to Top Button (fixed position, bottom right) */}
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <button
              onClick={scrollToTop}
              aria-label="Back to Top"
              className="fixed bottom-7 right-7 z-50 w-12 h-12 rounded-full bg-gradient-to-r from-magenta to-violet shadow-lg flex items-center justify-center animate-bounce transition-shadow hover:shadow-[0_0_25px_10px_rgba(217,70,239,0.3)] border-2 border-white/10"
            >
              <ArrowUp className="w-6 h-6 text-white" />
            </button>
          </TooltipTrigger>
          <TooltipContent>
            Back to Top
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <Footer />
    </div>
  );
};
export default Index;
