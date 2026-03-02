import { motion } from 'framer-motion';
import { MonitorSmartphone, Server, Wrench } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: <MonitorSmartphone className="w-8 h-8 text-accent-cyan" />,
      skills: [
        { name: 'HTML', level: 95 },
        { name: 'CSS', level: 90 },
        { name: 'JavaScript', level: 85 },
        { name: 'React', level: 80 },
        { name: 'Tailwind CSS', level: 90 },
      ],
    },
    {
      title: 'Backend',
      icon: <Server className="w-8 h-8 text-accent-purple" />,
      skills: [
        { name: 'Node.js', level: 75 },
        { name: 'Express', level: 70 },
        { name: 'PHP', level: 85 },
        { name: 'Laravel', level: 80 },
        { name: 'MySQL', level: 90 },
      ],
    },
    {
      title: 'Tools & Others',
      icon: <Wrench className="w-8 h-8 text-blue-500" />,
      skills: [
        { name: 'Git', level: 95 },
        { name: 'Figma', level: 70 },
        { name: 'VS Code', level: 95 },
        { name: 'Postman', level: 80 },
        { name: 'Docker', level: 60 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 relative bg-white dark:bg-primary-dark">
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
            My Expertise
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold font-poppins text-slate-800 dark:text-slate-100 mb-6">
            Technical Skills
          </h3>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            A comprehensive overview of my technical capabilities and the tools I use to bring ideas to life.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-slate-50 dark:bg-slate-800/50 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-white dark:bg-slate-800 rounded-xl shadow-sm">
                  {category.icon}
                </div>
                <h4 className="text-xl font-bold font-poppins text-slate-800 dark:text-slate-100">
                  {category.title}
                </h4>
              </div>

              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                        {skill.name}
                      </span>
                      <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                        {skill.level}%
                      </span>
                    </div>
                    {/* Progress Bar Container */}
                    <div className="h-2 w-full bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                      {/* Animated Progress Bar */}
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 1, delay: 0.2 + (index * 0.1) + (skillIndex * 0.1), ease: "easeOut" }}
                        className={`h-full rounded-full bg-gradient-to-r ${
                          index === 0 ? 'from-cyan-400 to-blue-500' :
                          index === 1 ? 'from-purple-400 to-pink-500' :
                          'from-blue-400 to-indigo-500'
                        }`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}