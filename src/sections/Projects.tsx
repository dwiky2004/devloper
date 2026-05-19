import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { Github, ExternalLink } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'Linktree Jualan',
      description: 'Custom linktree for business and commerce.',
      image: '/poto1.png',
      techStack: ['HTML', 'CSS'],
      liveUrl: 'https://github.com/dwiky2004/linktree',
      githubUrl: 'https://github.com/dwiky2004/linktree',
    },
    {
      title: 'Kompresi Fix',
      description: 'A data compression utility or application developed using Dart.',
      image: '/poto2.jpeg',
      techStack: ['Dart', 'Flutter'],
      liveUrl: 'https://github.com/dwiky2004/kompresi_fix',
      githubUrl: 'https://github.com/dwiky2004/kompresi_fix',
    },
    {
      title: 'Citra Digital',
      description: 'Digital image processing application built with Dart.',
      image: '/poto3.png',
      techStack: ['Dart', 'Flutter'],
      liveUrl: 'https://github.com/dwiky2004/citra-digital',
      githubUrl: 'https://github.com/dwiky2004/citra-digital',
    },
  ];

  return (
    <section id="projects" className="py-24 bg-slate-50 dark:bg-slate-900/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-bold tracking-widest text-accent-cyan uppercase mb-3">
            My Work
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold font-poppins text-slate-800 dark:text-slate-100 mb-6">
            Featured Projects
          </h3>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            A selection of some of my most recent and exciting projects, demonstrating my expertise in modern web development.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Tilt
                tiltMaxAngleX={10}
                tiltMaxAngleY={10}
                perspective={1000}
                transitionSpeed={1000}
                scale={1.02}
                className="h-full"
              >
                <div className="group relative bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg border border-slate-100 dark:border-slate-700 h-full flex flex-col">

                  {/* Image Container */}
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white/20 hover:bg-white/40 backdrop-blur-sm rounded-full text-white transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-100"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white/20 hover:bg-white/40 backdrop-blur-sm rounded-full text-white transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-150"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    </div>
                  </div>

                  {/* Content Container */}
                  <div className="p-6 flex-grow flex flex-col">
                    <h4 className="text-xl font-bold font-poppins text-slate-800 dark:text-slate-100 mb-3 group-hover:text-accent-cyan transition-colors">
                      {project.title}
                    </h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-6 flex-grow leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tech Stack Tags */}
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.techStack.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 text-xs font-medium text-slate-600 bg-slate-100 dark:text-slate-300 dark:bg-slate-700/50 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}