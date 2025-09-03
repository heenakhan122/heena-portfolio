import { useState, useEffect, useRef } from "react";
import hero from "../assets/IMG_9443_1755312948262.jpg";
// Project images are in public folder
const modestFilterImage = "/modestfilter-preview.webp";
const maristanImage = "/mobile-maristan-logo.svg";
const khaistaImage = "/khaista-preview.png";
import { 
  SiPython, 
  SiTypescript, 
  SiJavascript, 
  SiReact, 
  SiNodedotjs, 
  SiHtml5, 
  SiCss3, 
  SiTailwindcss,
  SiVite,
  SiPandas,
  SiNumpy,
  SiScikitlearn,
  SiGit,
  SiGithubactions,
  SiDocker,
  SiVercel,
  SiPostgresql,
  SiSqlite,
  SiJest,
  SiEslint,
  SiPostman,
  SiFigma,
  SiCplusplus,
  SiR,
  SiExpress,
  SiOpencv
} from 'react-icons/si';
import { Database, Terminal, TestTube, BookOpen, TrendingUp, Code, Play, FileText, Cpu, Globe, Zap, Brain, ChevronLeft, ChevronRight } from 'lucide-react';

export default function ScrollingPortfolio() {
  const [activeSection, setActiveSection] = useState(0);
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);
  const [isScrolling, setIsScrolling] = useState(false);

  const sections = [
    { id: 'landing', title: '', component: LandingSection },
    { id: 'about', title: 'ABOUT', component: AboutSection },
    { id: 'skills', title: 'SKILLS', component: SkillsSection },
    { id: 'work', title: 'WORK', component: WorkSection },
    { id: 'projects', title: 'PROJECTS', component: ProjectsSection },
    { id: 'contact', title: 'CONTACT', component: ContactSection },
    { id: 'resume', title: 'RESUME', component: ResumeSection }
  ];

  const scrollToSection = (index: number) => {
    if (isScrolling) return;
    setIsScrolling(true);
    
    const targetElement = sectionRefs.current[index];
    if (targetElement) {
      targetElement.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
      setActiveSection(index);
    }
    
    setTimeout(() => setIsScrolling(false), 1000);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (isScrolling) return;
      
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      
      for (let i = sectionRefs.current.length - 1; i >= 0; i--) {
        const element = sectionRefs.current[i];
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(i);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isScrolling]);

  return (
    <div className="bg-terminal-bg">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-terminal-bg/95 backdrop-blur-sm border-b border-terminal-green">
        <div className="flex items-center justify-between p-4">
          <div className="text-terminal-green text-sm">DRAG ANYWHERE</div>
          
          <div className="flex items-center gap-6 text-sm">
            {sections.slice(1).map((section, index) => {
              const sectionIndex = index + 1;
              return (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(sectionIndex)}
                  className={`transition-colors ${
                    activeSection === sectionIndex
                      ? 'text-terminal-green'
                      : 'text-terminal-gray hover:text-terminal-white'
                  }`}
                >
                  {index}. {section.title}
                </button>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Side Navigation Dots */}
      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 flex flex-col space-y-3 z-50">
        {sections.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToSection(index)}
            className={`w-3 h-3 rounded-full border-2 transition-colors ${
              activeSection === index
                ? 'bg-terminal-green border-terminal-green'
                : 'bg-transparent border-terminal-gray hover:border-terminal-green'
            }`}
          />
        ))}
      </div>

      {/* Sections */}
      {sections.map((section, index) => {
        const SectionComponent = section.component;
        return (
          <section
            key={section.id}
            ref={(el) => (sectionRefs.current[index] = el)}
            className={index === 0 ? "min-h-screen" : "min-h-screen flex items-center justify-center"}
            id={section.id}
          >
            <SectionComponent scrollToSection={scrollToSection} />
          </section>
        );
      })}
    </div>
  );
}

// Landing Section
function LandingSection({ scrollToSection }: { scrollToSection?: (index: number) => void }) {
  return (
    <div className="relative min-h-screen flex items-center justify-center">
      <div className="max-w-4xl px-8">
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-terminal-green mb-2">
          Heena
        </h1>
        <p className="text-xl md:text-2xl text-terminal-gray mb-4 tracking-wide">
          CS @ Stanford
        </p>
        <h2 className="text-2xl md:text-3xl text-terminal-white mb-6 tracking-wide">
          CS STUDENT & SOFTWARE ENGINEERING INTERN
        </h2>
        <p className="text-terminal-gray text-lg md:text-xl max-w-2xl mb-8 leading-relaxed">
          Stanford Computer Science student specializing in Artificial Intelligence. 
          Passionate about building data platforms, web applications, and AI-powered tools 
          that solve real-world problems.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <button 
            onClick={() => scrollToSection && scrollToSection(5)} // Contact is index 5
            className="px-8 py-3 bg-terminal-green text-terminal-bg font-semibold rounded hover:bg-terminal-green/90 transition-colors"
          >
            Contact Me
          </button>
          <button 
            onClick={() => scrollToSection && scrollToSection(1)} // About is index 1
            className="px-8 py-3 border border-terminal-green text-terminal-green font-semibold rounded hover:bg-terminal-green/10 transition-colors flex items-center gap-2"
          >
            Learn More
            <span className="text-lg">→</span>
          </button>
        </div>
      </div>

      {/* Background gradient effect */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-terminal-green/20 rounded-full blur-3xl opacity-30"></div>
    </div>
  );
}

// About Section
function AboutSection({ scrollToSection }: { scrollToSection?: (index: number) => void }) {
  return (
    <div className="max-w-6xl px-8 w-full pt-16">
      <div className="mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-terminal-green mb-2">ABOUT <span className="text-terminal-green">&#123;</span></h2>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div className="space-y-6">
          <p className="text-terminal-gray text-lg leading-relaxed">
            Hi, I'm Heena—a Stanford Computer Science student on the AI track who builds software for people, 
            not just benchmarks. I've worked across the stack: a Chrome MV3 extension that filters apparel grids 
            with on-device vision, an offline-first, bilingual (Arabic/English) mental-wellness PWA, geospatial 
            dashboards for healthcare planning at Pull for Progress, and reproducible Python/R pipelines on 10k+ 
            cognitive-health records at Neurotrack.
          </p>
          
          <p className="text-terminal-gray text-lg leading-relaxed">
            I care about inclusive design, privacy-respecting tech, and performance under constraints (mobile, 
            low bandwidth). When I'm not coding, I'm a barista and a community builder at Stanford's Markaz—both 
            keep me grounded in real users.
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-terminal-green rounded-full"></div>
              <span className="text-terminal-white">Stanford University - Computer Science (AI Track)</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-terminal-green rounded-full"></div>
              <span className="text-terminal-white">Expected Graduation: December 2026/March 2027</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-terminal-green rounded-full"></div>
              <span className="text-terminal-white">Coursework: Programming Abstractions, Data Structures & Algorithms, AI, HCI Design</span>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="w-full max-w-sm">
            <div className="rounded border border-terminal-green overflow-hidden mb-4">
              <img 
                src={headshotImage} 
                alt="Heena Khan - Stanford Computer Science Student"
                className="w-full h-80 object-cover object-center"
              />
            </div>
            <div className="text-center text-terminal-white">
              <div className="font-semibold">Heena Khan</div>
              <div className="text-terminal-gray">Stanford CS Student</div>
              <div className="text-terminal-green text-sm mt-2">AI Specialization</div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 text-terminal-green text-2xl">&#125;</div>
    </div>
  );
}

// Skills Section
function SkillsSection({ scrollToSection }: { scrollToSection?: (index: number) => void }) {
  const getSkillIcon = (skill: string) => {
    const skillLower = skill.toLowerCase();
    if (skillLower.includes('python')) return <SiPython className="text-[#3776ab]" />;
    if (skillLower.includes('c++')) return <SiCplusplus className="text-[#00599C]" />;
    if (skillLower.includes('java')) return <Code className="text-[#ED8B00]" size={16} />;
    if (skillLower.includes('r') && !skillLower.includes('react')) return <SiR className="text-[#276DC3]" />;
    if (skillLower.includes('sql')) return <Database className="text-[#336791]" size={16} />;
    if (skillLower.includes('html')) return <SiHtml5 className="text-[#E34F26]" />;
    if (skillLower.includes('css')) return <SiCss3 className="text-[#1572B6]" />;
    if (skillLower.includes('javascript')) return <SiJavascript className="text-[#F7DF1E]" />;
    if (skillLower.includes('node.js')) return <SiNodedotjs className="text-[#339933]" />;
    if (skillLower.includes('react native')) return <SiReact className="text-[#61DAFB]" />;
    if (skillLower.includes('react')) return <SiReact className="text-[#61DAFB]" />;
    if (skillLower.includes('pandas')) return <SiPandas className="text-[#150458]" />;
    if (skillLower.includes('folium')) return <Globe className="text-green-500" size={16} />;
    if (skillLower.includes('opencv')) return <SiOpencv className="text-[#5C3EE8]" />;
    if (skillLower.includes('huggingface')) return <Brain className="text-yellow-500" size={16} />;
    if (skillLower.includes('d3.js')) return <FileText className="text-orange-500" size={16} />;
    if (skillLower.includes('express')) return <SiExpress className="text-white" />;
    if (skillLower.includes('git')) return <SiGit className="text-[#F05032]" />;
    if (skillLower.includes('figma')) return <SiFigma className="text-[#F24E1E]" />;
    if (skillLower.includes('chrome api')) return <Cpu className="text-[#4285F4]" size={16} />;
    if (skillLower.includes('postgresql')) return <SiPostgresql className="text-[#336791]" />;
    if (skillLower.includes('drizzle')) return <Database className="text-terminal-green" size={16} />;
    if (skillLower.includes('web speech')) return <Zap className="text-purple-500" size={16} />;
    if (skillLower.includes('service worker')) return <Cpu className="text-blue-500" size={16} />;
    if (skillLower.includes('etl') || skillLower.includes('pipeline')) return <TrendingUp className="text-terminal-green" size={16} />;
    if (skillLower.includes('computer vision') || skillLower.includes('sentiment')) return <Brain className="text-terminal-green" size={16} />;
    if (skillLower.includes('pwa') || skillLower.includes('extension') || skillLower.includes('responsive')) return <Globe className="text-terminal-green" size={16} />;
    if (skillLower.includes('rest') || skillLower.includes('authentication') || skillLower.includes('real-time')) return <Zap className="text-terminal-green" size={16} />;
    return null;
  };

  const skillCategories = [
    {
      category: 'Programming Languages',
      skills: ['Python', 'C++', 'Java', 'R', 'SQL', 'HTML/CSS', 'JavaScript', 'Node.js']
    },
    {
      category: 'Frameworks & Libraries',
      skills: ['React', 'Pandas', 'Folium', 'OpenCV']
    },
    {
      category: 'Tools & Platforms',
      skills: ['Git', 'Figma', 'HuggingFace', 'Chrome APIs']
    }
  ];

  return (
    <div className="max-w-6xl px-8 w-full pt-16">
      <div className="mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-terminal-green mb-2">SKILLS <span className="text-terminal-green">&#123;</span></h2>
      </div>

      <div className="space-y-12">
        <p className="text-terminal-gray text-lg leading-relaxed max-w-4xl">
          Core technical skills from coursework, internships, and personal projects.
        </p>

        <div className="space-y-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-terminal-green text-lg font-semibold">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="px-3 py-1.5 bg-terminal-green/10 border border-terminal-green/20 rounded-full">
                    <span className="text-terminal-gray text-sm">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 p-6 border border-terminal-green/30 rounded-lg bg-terminal-bg/50">
          <h3 className="text-terminal-green text-lg font-semibold mb-3">Current Focus</h3>
          <p className="text-terminal-gray text-sm leading-relaxed">
            Building reliable, user-first software—backend APIs, offline-first PWAs, and on-device vision. 
            Actively seeking Software Engineering internships (backend, full-stack, data platform).
          </p>
        </div>
      </div>

      <div className="mt-12 text-terminal-green text-2xl">&#125;</div>
    </div>
  );
}

// Work Section
function WorkSection({ scrollToSection }: { scrollToSection?: (index: number) => void }) {
  const experiences = [
    {
      year: '2025',
      title: 'Software Engineering Intern — Data Platform',
      company: 'Neurotrack Technologies',
      period: 'June 2025 – August 2025',
      location: 'Palo Alto, CA',
      description: 'Designed and implemented modular data-processing pipelines in Python and R to clean, structure, and analyze 10k+ cognitive assessment records, producing reproducible outputs that informed product decisions.',
      details: [
        'Preprocessed raw cognitive performance data with SQL and ETL jobs to improve data quality and support accurate performance evaluation and downstream model work.',
        'Contributed to optimization of Neurotrack\'s digital cognitive assessment used by clinicians and patients worldwide for early detection and monitoring of Alzheimer\'s disease.'
      ],
      tags: ['Python', 'R', 'SQL', 'ETL', 'Data Processing', 'Healthcare AI']
    },
    {
      year: '2024',
      title: 'Stanford Design Fellow',
      company: 'Pull for Progress',
      period: '2024 - Present',
      location: 'Palo Alto, CA',
      description: 'Built interactive web apps with HTML/CSS, JavaScript, D3.js (responsive, accessible); shipped data-stories that raised engagement and helped secure collaborations incl. Stanford Global Health Center.',
      details: [
        'Developed a geospatial deployment tool (Python, Pandas, Folium) that models healthcare-worker allocation with risk scoring + cost-effectiveness; produced an interactive map used to prioritize N regions and estimate cost per person reached.',
        'Co-created short-form video content with the Stanford Global Health Initiative highlighting Burkina Faso work; handled light scripting, filming, editing, and captions; published across Reels/YouTube/LinkedIn.'
      ],
      tags: ['Python', 'Pandas', 'Folium', 'D3.js', 'JavaScript', 'Video Production']
    },
    {
      year: '2023',
      title: 'Stanford Tech and Innovation Fellow',
      company: 'Afghanistan Women\'s Council',
      period: '2023 – 2024',
      location: 'New York, NY',
      description: 'Built and launched an e-commerce web app in React with responsive CSS Grid, enabling 100+ Afghan women artisans to showcase and sell handmade goods to global audiences.',
      details: [
        'Collaborated with the Afghanistan Women\'s Council to scope features and design the front-end architecture; prioritized low-bandwidth and accessible patterns (semantic HTML, keyboard nav, alt text).'
      ],
      tags: ['React', 'CSS Grid', 'Responsive Design', 'Accessibility', 'E-Commerce']
    }
  ];

  return (
    <div className="max-w-6xl px-8 w-full pt-16">
      <div className="mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-terminal-green mb-2">WORK <span className="text-terminal-green">&#123;</span></h2>
      </div>

      <div className="space-y-8">
        <p className="text-terminal-gray text-lg leading-relaxed max-w-4xl">
          I have had the opportunity to work on diverse projects spanning data science, web development, 
          and mobile applications. Each experience has taught me something valuable and I continuously 
          improve in my learning journey.
        </p>

        <div className="relative max-w-4xl">
          {/* Vertical Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-terminal-green"></div>
            
            {experiences.map((exp, index) => (
              <div key={index} className="relative flex items-start mb-12 last:mb-0">
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-terminal-green rounded-full border-4 border-terminal-bg z-10"></div>
                
                {/* Content */}
                <div className="ml-20 flex-1 space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-terminal-green text-xl font-semibold">{exp.title} — {exp.company}</h3>
                    <div className="text-terminal-gray text-sm">{exp.period} · {exp.location}</div>
                    <p className="text-terminal-gray text-sm leading-relaxed max-w-2xl">{exp.description}</p>
                  </div>
                  
                  {exp.details && (
                    <div className="space-y-2 max-w-2xl">
                      {exp.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-terminal-gray text-sm leading-relaxed">
                          {detail}
                        </p>
                      ))}
                    </div>
                  )}
                  
                  {exp.tags && (
                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className="px-3 py-1 bg-terminal-green/20 text-terminal-green text-sm rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-12 text-terminal-green text-2xl">&#125;</div>
    </div>
  );
}

// Projects Section
function ProjectsSection({ scrollToSection }: { scrollToSection?: (index: number) => void }) {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  
  const projects = [
    {
      title: 'ModestFilter — Chrome extension (MV3) — private beta',
      description: 'Built an MV3 Chrome extension that filters apparel grids via hybrid rules + on-device vision; Web Worker pipeline (OffscreenCanvas/ImageBitmap) for real-time sleeve/neckline/crop checks.',
      tech: ['JavaScript', 'React', 'Python', 'HuggingFace', 'OpenCV', 'Chrome APIs'],
      image: modestFilterImage
    },
    {
      title: 'Mobile Maristan',
      description: 'Built an offline-first PWA with install prompts and caching via service workers for a native-like experience. Implemented mood tracking and journaling system with sentiment analysis.',
      tech: ['React Native', 'PostgreSQL', 'Drizzle ORM', 'Express', 'Web Speech API', 'Figma'],
      image: maristanImage
    },
    {
      title: 'Khaista Boutique',
      description: 'Built and launched an e-commerce web app in React with responsive CSS Grid, enabling 100+ Afghan women artisans to showcase and sell handmade goods to global audiences.',
      tech: ['React', 'CSS Grid', 'Responsive Design', 'Accessibility', 'E-Commerce'],
      image: khaistaImage
    }
  ];

  const handlePrevious = () => {
    setCurrentProjectIndex(prev => 
      prev === 0 ? projects.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentProjectIndex(prev => 
      prev === projects.length - 1 ? 0 : prev + 1
    );
  };

  const currentProject = projects[currentProjectIndex];

  return (
    <div className="max-w-6xl px-8 w-full pt-16">
      <div className="mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-terminal-green mb-2">PROJECTS <span className="text-terminal-green">&#123;</span></h2>
      </div>

      <div className="space-y-8">
        <p className="text-terminal-gray text-lg leading-relaxed max-w-4xl">
          Selected projects showcasing my skills in AI-powered applications, data processing, and full-stack development.
        </p>

        {/* Project Carousel */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={handlePrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-terminal-bg/80 border border-terminal-green text-terminal-green hover:bg-terminal-green hover:text-terminal-bg transition-all duration-200 p-3 rounded-full backdrop-blur-sm"
            aria-label="Previous project"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-terminal-bg/80 border border-terminal-green text-terminal-green hover:bg-terminal-green hover:text-terminal-bg transition-all duration-200 p-3 rounded-full backdrop-blur-sm"
            aria-label="Next project"
          >
            <ChevronRight size={24} />
          </button>

          {/* Single Project Display */}
          <div className="mx-16">
            <div className="border border-terminal-green/30 rounded-lg overflow-hidden bg-terminal-bg/30 hover:border-terminal-green/50 transition-colors">
              <div className="grid md:grid-cols-2 gap-0">
                {/* Project Image */}
                {currentProject.image ? (
                  <div className="aspect-square md:aspect-auto w-full overflow-hidden">
                    <img 
                      src={currentProject.image} 
                      alt={currentProject.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ) : (
                  <div className="aspect-square md:aspect-auto w-full bg-terminal-green/10 flex items-center justify-center">
                    <span className="text-terminal-green text-sm">Project Image</span>
                  </div>
                )}
                
                {/* Project Info */}
                <div className="p-8 space-y-6 flex flex-col justify-center">
                  <h3 className="text-terminal-green text-2xl md:text-3xl font-semibold">{currentProject.title}</h3>
                  <p className="text-terminal-gray leading-relaxed text-lg">{currentProject.description}</p>
                  
                  <div className="flex flex-wrap gap-3">
                    {currentProject.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="px-4 py-2 bg-terminal-green/20 text-terminal-green text-sm rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Project Counter and Dots */}
          <div className="text-center mt-6">
            <span className="text-terminal-gray">
              {currentProjectIndex + 1} of {projects.length}
            </span>
            <div className="flex justify-center gap-2 mt-4">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentProjectIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentProjectIndex 
                      ? 'bg-terminal-green' 
                      : 'bg-terminal-gray hover:bg-terminal-green/50'
                  }`}
                  aria-label={`Go to project ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 text-terminal-green text-2xl">&#125;</div>
    </div>
  );
}

// Contact Section
function ContactSection({ scrollToSection }: { scrollToSection?: (index: number) => void }) {
  return (
    <div className="max-w-4xl px-8 w-full text-center pt-16">
      <div className="mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-terminal-green mb-2">CONTACT <span className="text-terminal-green">&#123;</span></h2>
      </div>

      <div className="space-y-8">
        <p className="text-terminal-gray text-lg leading-relaxed">
          Let's build reliable, accessible software that makes a meaningful impact. 
          I'm always excited to connect with teams working on challenging technical problems.
        </p>

        <div className="space-y-4">
          <div className="flex items-center justify-center gap-3">
            <span className="text-terminal-green">Email:</span>
            <a href="mailto:henakhan@stanford.edu" className="text-terminal-white hover:text-terminal-green transition-colors">
              henakhan@stanford.edu
            </a>
          </div>
          <div className="flex items-center justify-center gap-3">
            <span className="text-terminal-green">Phone:</span>
            <a href="tel:+15166131854" className="text-terminal-white hover:text-terminal-green transition-colors">
              (516) 613-1854
            </a>
          </div>
          <div className="flex items-center justify-center gap-3">
            <span className="text-terminal-green">GitHub:</span>
            <a href="https://github.com/heenakhan122" target="_blank" rel="noopener noreferrer" className="text-terminal-white hover:text-terminal-green transition-colors">
              heenakhan122
            </a>
          </div>
        </div>
      </div>

      <div className="mt-12 text-terminal-green text-2xl">&#125;</div>
    </div>
  );
}

// Resume Section
function ResumeSection({ scrollToSection }: { scrollToSection?: (index: number) => void }) {
  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/attached_assets/Heena Khan Resume (1)_1755311970265.pdf';
    link.download = 'Heena_Khan_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="max-w-4xl px-8 w-full text-center">
      <div className="mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-terminal-green mb-2">RESUME <span className="text-terminal-green">&#123;</span></h2>
      </div>

      <div className="space-y-8">
        <p className="text-terminal-gray text-lg leading-relaxed">
          Download my complete resume to learn more about my experience, 
          education, and technical skills.
        </p>

        <button 
          onClick={downloadResume}
          className="px-8 py-3 bg-terminal-green text-terminal-bg font-semibold rounded hover:bg-terminal-green/90 transition-colors"
        >
          Download Resume
        </button>
      </div>

      <div className="mt-12 text-terminal-green text-2xl">&#125;</div>
    </div>
  );
}
