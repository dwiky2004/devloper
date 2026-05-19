import { motion } from 'framer-motion';

export default function About() {
  const stats = [
    {
      label: 'Years of Experience',
      value: '5+',
      description: 'Building modern web applications',
    },
    {
      label: 'Projects Completed',
      value: '50+',
      description: 'Delivering scalable solutions',
    },
    {
      label: 'Happy Clients',
      value: '30+',
      description: 'Worldwide satisfaction',
    }
  ];

  return (
    <section id="about" className="py-24 bg-slate-50 dark:bg-slate-900/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-bold tracking-widest text-accent-cyan uppercase mb-3">
            About Me
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold font-poppins text-slate-800 dark:text-slate-100">
            A Passionate Developer Crafting <br className="hidden md:block" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent-cyan to-accent-purple">Digital Experiences</span>
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              Hello! I'm kyxen, a highly motivated Full Stack Web Developer with a strong focus on creating clean, elegant, and highly functional websites. I blend creative design with technical expertise to build scalable solutions that solve real-world problems.
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              Over the years, I've had the privilege of working with a diverse range of clients, from small startups to established enterprises, helping them establish a strong online presence. I am constantly learning and adapting to the ever-evolving landscape of web development technologies.
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              When I'm not coding, you can find me exploring new UI design trends, contributing to open-source projects, or enjoying a good cup of coffee while reading a tech blog.
            </p>

            <div className="pt-6">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-primary-blue dark:text-accent-cyan font-semibold hover:gap-4 transition-all"
              >
                Let's discuss your next project
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`p-8 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-md transition-shadow ${index === 2 ? 'sm:col-span-2' : ''}`}
              >
                <div className="text-4xl md:text-5xl font-bold font-poppins text-slate-800 dark:text-slate-100 mb-2">
                  {stat.value}
                </div>
                <div className="text-lg font-semibold text-accent-cyan mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-slate-500 dark:text-slate-400">
                  {stat.description}
                </div>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}