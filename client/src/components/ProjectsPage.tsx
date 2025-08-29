import { useState } from "react";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="max-w-6xl">
      <div className="mb-8">
        <h1 className="text-6xl md:text-8xl font-bold text-terminal-green mb-8">
          PROJECTS <span className="text-terminal-white">&#123;</span>
        </h1>
        
        {/* Filter Buttons */}
        <div className="mb-8 flex flex-wrap gap-2">
          {['all', 'software', 'datascience', 'design'].map(filter => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 text-sm transition-colors border ${
                activeFilter === filter 
                  ? 'bg-terminal-green text-terminal-bg border-terminal-green' 
                  : 'bg-transparent text-terminal-white border-terminal-gray hover:border-terminal-green'
              }`}
            >
              {filter === 'all' ? 'All Projects' : 
               filter === 'datascience' ? 'Data Science' :
               filter.charAt(0).toUpperCase() + filter.slice(1)}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {filteredProjects.map((project, index) => (
            <div 
              key={index}
              className="bg-terminal-gray/20 p-6 rounded border border-terminal-gray hover:border-terminal-green transition-colors group"
            >
              <div className="mb-4">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-40 object-cover rounded border border-terminal-gray group-hover:border-terminal-green transition-colors" 
                />
              </div>
              
              <h3 className="text-xl font-bold text-terminal-green mb-2">{project.title}</h3>
              <p className="text-terminal-white mb-4 leading-relaxed">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <span 
                    key={techIndex}
                    className={`text-xs px-3 py-1 rounded ${
                      techIndex % 4 === 0 ? 'bg-terminal-green text-terminal-bg' :
                      techIndex % 4 === 1 ? 'bg-terminal-blue text-terminal-bg' :
                      techIndex % 4 === 2 ? 'bg-terminal-yellow text-terminal-bg' :
                      'bg-terminal-gray text-terminal-white border border-terminal-green'
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-4">
                <a 
                  href={project.liveUrl} 
                  className="text-terminal-green hover:text-terminal-yellow transition-colors flex items-center gap-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>Live Demo</span>
                  <span>→</span>
                </a>
                <a 
                  href={project.githubUrl} 
                  className="text-terminal-blue hover:text-terminal-yellow transition-colors flex items-center gap-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>GitHub</span>
                  <span>→</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <div className="text-terminal-gray text-lg">
              No projects found for "{activeFilter}" category
            </div>
          </div>
        )}
      </div>
    </div>
  );
}