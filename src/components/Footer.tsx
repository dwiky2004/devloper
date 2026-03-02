import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-50 dark:bg-primary-dark border-t border-slate-200 dark:border-slate-800 py-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
        <div className="flex space-x-6 mb-8">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white dark:bg-slate-800 rounded-full shadow-md text-slate-600 hover:text-accent-cyan dark:text-slate-300 dark:hover:text-accent-cyan transition-all hover:-translate-y-1 hover:shadow-lg"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white dark:bg-slate-800 rounded-full shadow-md text-slate-600 hover:text-accent-cyan dark:text-slate-300 dark:hover:text-accent-cyan transition-all hover:-translate-y-1 hover:shadow-lg"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white dark:bg-slate-800 rounded-full shadow-md text-slate-600 hover:text-accent-cyan dark:text-slate-300 dark:hover:text-accent-cyan transition-all hover:-translate-y-1 hover:shadow-lg"
          >
            <Twitter className="w-5 h-5" />
          </a>
          <a
            href="mailto:hello@example.com"
            className="p-3 bg-white dark:bg-slate-800 rounded-full shadow-md text-slate-600 hover:text-accent-cyan dark:text-slate-300 dark:hover:text-accent-cyan transition-all hover:-translate-y-1 hover:shadow-lg"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>
        
        <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">
          © {currentYear} John Doe. All rights reserved.
        </p>
      </div>
    </footer>
  );
}