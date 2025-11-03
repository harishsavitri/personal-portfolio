import { useState, useEffect } from 'react';
import { Sidebar } from './components/Sidebar';
import { ProfileSection } from './components/ProfileSection';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ProjectsSection } from './components/ProjectsSection';
import { CertificationsSection } from './components/CertificationsSection';
import { ContactSection } from './components/ContactSection';

function App() {
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'skills', 'experience', 'projects', 'certifications', 'contact'];

      for (const section of sections) {
        const element = document.getElementById(`section-${section}`);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <div className="flex">
        <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />
        <main className="flex-1 ml-64">
          <ProfileSection />

          <section id="section-about" className="section-container">
            <div className="w-full px-8">
              <AboutSection />
            </div>
          </section>

          <section id="section-skills" className="section-container">
            <div className="w-full px-8">
              <SkillsSection />
            </div>
          </section>

          <section id="section-experience" className="section-container">
            <div className="w-full px-8">
              <ExperienceSection />
            </div>
          </section>

          <section id="section-projects" className="section-container">
            <div className="w-full px-8">
              <ProjectsSection />
            </div>
          </section>

          <section id="section-certifications" className="section-container">
            <div className="w-full px-8">
              <CertificationsSection />
            </div>
          </section>

          <section id="section-contact" className="section-container">
            <div className="w-full px-8">
              <ContactSection />
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
