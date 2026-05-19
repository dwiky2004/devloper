import { Github, Instagram, Twitter, Mail } from 'lucide-react';

const Tiktok = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
  </svg>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-50 dark:bg-primary-dark border-t border-slate-200 dark:border-slate-800 py-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
        <div className="flex space-x-6 mb-8">
          <a
            href="https://github.com/dwiky2004"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white dark:bg-slate-800 rounded-full shadow-md text-slate-600 hover:text-accent-cyan dark:text-slate-300 dark:hover:text-accent-cyan transition-all hover:-translate-y-1 hover:shadow-lg"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://www.instagram.com/ikyky_lalu?igsh=amZncjlwMGZxbjU1"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white dark:bg-slate-800 rounded-full shadow-md text-slate-600 hover:text-accent-cyan dark:text-slate-300 dark:hover:text-accent-cyan transition-all hover:-translate-y-1 hover:shadow-lg"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <a
            href="https://www.tiktok.com/@kyxen_00?_r=1&_t=ZS-96UdIQnWu5l"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white dark:bg-slate-800 rounded-full shadow-md text-slate-600 hover:text-accent-cyan dark:text-slate-300 dark:hover:text-accent-cyan transition-all hover:-translate-y-1 hover:shadow-lg"
          >
            <Tiktok className="w-5 h-5" />
          </a>
          <a
            href="https://x.com/ikkylalu"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white dark:bg-slate-800 rounded-full shadow-md text-slate-600 hover:text-accent-cyan dark:text-slate-300 dark:hover:text-accent-cyan transition-all hover:-translate-y-1 hover:shadow-lg"
          >
            <Twitter className="w-5 h-5" />
          </a>
          <a
            href="mailto:laludwiky3@gmail.com"
            className="p-3 bg-white dark:bg-slate-800 rounded-full shadow-md text-slate-600 hover:text-accent-cyan dark:text-slate-300 dark:hover:text-accent-cyan transition-all hover:-translate-y-1 hover:shadow-lg"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>

        <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">
          © {currentYear} kyxen_project. All rights reserved.
        </p>
      </div>
    </footer>
  );
}