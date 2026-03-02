import { motion } from 'framer-motion';
import { Code, Layout, Rocket, Settings } from 'lucide-react';

export default function Services() {
  const services = [
    {
      title: 'Web Development',
      description: 'Building custom, responsive, and high-performance websites using the latest technologies.',
      icon: <Code className="w-8 h-8 text-accent-cyan" />,
    },
    {
      title: 'UI/UX Implementation',
      description: 'Translating complex designs into pixel-perfect, interactive user interfaces.',
      icon: <Layout className="w-8 h-8 text-accent-purple" />,
    },
    {
      title: 'API Integration',
      description: 'Connecting your applications with third-party services and ensuring seamless data flow.',
      icon: <Rocket className="w-8 h-8 text-blue-500" />,
    },
    {
      title: 'Website Optimization',
      description: 'Improving website speed, accessibility, and SEO to boost performance and user engagement.',
      icon: <Settings className="w-8 h-8 text-emerald-500" />,
    },
  ];

  return (
    <section id="services" className="py-24 bg-white dark:bg-primary-dark relative">
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
            What I Do
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold font-poppins text-slate-800 dark:text-slate-100 mb-6">
            My Services
          </h3>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            I offer a wide range of services to help you bring your ideas to life and build scalable, modern digital products.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group p-8 bg-slate-50 dark:bg-slate-800/50 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col items-center text-center relative overflow-hidden"
            >
              {/* Decorative Background Element */}
              <div className="absolute top-0 right-0 -mr-8 -mt-8 w-24 h-24 rounded-full bg-gradient-to-br from-accent-cyan/10 to-accent-purple/10 group-hover:scale-150 transition-transform duration-500"></div>
              
              <div className="p-4 bg-white dark:bg-slate-800 rounded-xl shadow-md mb-6 relative z-10 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              
              <h4 className="text-xl font-bold font-poppins text-slate-800 dark:text-slate-100 mb-4 relative z-10">
                {service.title}
              </h4>
              
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed relative z-10">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}