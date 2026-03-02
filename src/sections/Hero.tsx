import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="hero" className="min-h-[calc(100vh-80px)] flex items-center justify-center relative overflow-hidden">
      {/* Background Subtle Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-accent-purple/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-accent-cyan/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-primary-blue/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-center md:text-left"
        >
          <h2 className="text-xl md:text-2xl font-medium text-slate-500 dark:text-slate-400 mb-4 tracking-wide uppercase">
            Hello, I'm
          </h2>
          <h1 className="text-5xl md:text-7xl font-bold font-poppins text-primary-dark dark:text-primary-light mb-6 tracking-tight">
            John Doe
          </h1>
          
          <div className="text-2xl md:text-4xl font-semibold mb-6 h-12 flex items-center justify-center md:justify-start">
            <span className="text-slate-600 dark:text-slate-300 mr-2">I am a</span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent-cyan to-accent-purple font-poppins">
              <Typewriter
                words={['Full Stack Web Developer', 'UI/UX Enthusiast', 'Freelancer']}
                loop={true}
                cursor
                cursorStyle='_'
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </span>
          </div>

          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-10 max-w-2xl mx-auto md:mx-0 leading-relaxed">
            Building Scalable & Modern Web Experiences. I specialize in crafting elegant, high-performance applications with seamless user interfaces.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
            <a 
              href="#projects" 
              className="px-8 py-3 rounded-full bg-primary-dark text-white dark:bg-primary-light dark:text-primary-dark font-semibold hover:scale-105 transition-transform duration-300 shadow-xl"
            >
              View Projects
            </a>
            <a 
              href="#contact" 
              className="px-8 py-3 rounded-full border-2 border-primary-dark text-primary-dark dark:border-primary-light dark:text-primary-light font-semibold hover:bg-primary-dark hover:text-white dark:hover:bg-primary-light dark:hover:text-primary-dark transition-all duration-300 shadow-md"
            >
              Hire Me
            </a>
          </div>
        </motion.div>

        {/* Image/Avatar */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 flex justify-center md:justify-end relative"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            {/* Decorative background shape */}
            <div className="absolute inset-0 bg-gradient-to-tr from-accent-cyan to-accent-purple rounded-full blur-2xl opacity-20 dark:opacity-40 animate-pulse"></div>
            
            {/* Avatar Container with float animation */}
            <div className="relative w-full h-full rounded-full border-4 border-white dark:border-slate-800 shadow-2xl overflow-hidden animate-float bg-slate-200 dark:bg-slate-700 flex items-center justify-center">
              {/* Fallback avatar if no image provided */}
              <svg className="w-3/4 h-3/4 text-slate-400 dark:text-slate-500 mt-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
              {/* Actual Image (Uncomment and add image source) */}
              {/* <img src="/avatar.png" alt="John Doe" className="w-full h-full object-cover" /> */}
            </div>
            
            {/* Floating Badges */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="absolute -bottom-6 -left-6 bg-white dark:bg-slate-800 p-4 rounded-xl shadow-lg border border-slate-100 dark:border-slate-700 backdrop-blur-sm"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center">
                  <span className="text-xl">🚀</span>
                </div>
                <div>
                  <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">Projects</p>
                  <p className="text-lg font-bold text-slate-800 dark:text-slate-200">50+</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="absolute -top-6 -right-6 bg-white dark:bg-slate-800 p-4 rounded-xl shadow-lg border border-slate-100 dark:border-slate-700 backdrop-blur-sm"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center">
                  <span className="text-xl">⭐</span>
                </div>
                <div>
                  <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">Experience</p>
                  <p className="text-lg font-bold text-slate-800 dark:text-slate-200">5+ Years</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}