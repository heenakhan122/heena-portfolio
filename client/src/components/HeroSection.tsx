import { useEffect } from "react";

interface HeroSectionProps {
  visible: boolean;
  onComplete: () => void;
  onNavClick: (targetId: string) => void;
}

export default function HeroSection({ visible, onComplete, onNavClick }: HeroSectionProps) {
  useEffect(() => {
    if (visible) {
      const timer = setTimeout(onComplete, 1200);
      return () => clearTimeout(timer);
    }
  }, [visible, onComplete]);

  if (!visible) return null;

  return (
    <section id="hero" className="mb-12">
      <div className="border-l-4 border-terminal-green pl-4 mb-8">
        <div className="text-terminal-green text-lg mb-2">// About Me</div>
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          <span className="text-terminal-white">Hello, I'm </span>
          <span className="text-terminal-green">Heena Khan</span>
        </h1>
        <p className="text-xl md:text-2xl text-terminal-white mb-6">
          CS Student | AI Enthusiast | UX Developer
        </p>
        <p className="text-terminal-gray text-lg mb-8">
          Stanford CS student passionate about AI and data-driven solutions.<br/>
          Building technology that improves user experiences and solves real-world problems.
        </p>
        
        {/* Professional workspace image */}
        <div className="mb-8 border border-terminal-gray rounded">
          <img 
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400" 
            alt="Professional developer workspace" 
            className="w-full h-64 object-cover rounded" 
          />
        </div>

        <div className="flex gap-4 flex-wrap">
          <button 
            onClick={() => onNavClick('projects')}
            className="bg-terminal-green text-terminal-bg px-4 py-2 hover:bg-terminal-yellow transition-colors"
          >
            cd projects/
          </button>
          <button 
            onClick={() => onNavClick('contact')}
            className="border border-terminal-green text-terminal-green px-4 py-2 hover:bg-terminal-green hover:text-terminal-bg transition-colors"
          >
            ./contact.sh
          </button>
        </div>
      </div>
    </section>
  );
}
