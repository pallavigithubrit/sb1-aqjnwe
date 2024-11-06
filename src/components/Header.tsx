import React from 'react';
import { Github, Linkedin, Mail, ChevronDown, Moon, Sun } from 'lucide-react';

interface HeaderProps {
  isDark: boolean;
  toggleDark: () => void;
}

export default function Header({ isDark, toggleDark }: HeaderProps) {
  return (
    <header className="min-h-screen relative flex items-center justify-center bg-gradient-to-br from-indigo-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <button
        onClick={toggleDark}
        className="absolute top-8 right-8 p-2 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300"
        aria-label="Toggle dark mode"
      >
        {isDark ? (
          <Sun className="w-6 h-6 text-yellow-500" />
        ) : (
          <Moon className="w-6 h-6 text-gray-600" />
        )}
      </button>
      
      <div className="container mx-auto px-6 py-32 text-center">
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full opacity-50 group-hover:opacity-100 blur transition duration-300" />
          <img
            src="https://res.cloudinary.com/dnvrt9xu1/image/upload/v1730868379/xajfuxcussz2sfzplm40.jpg"
            alt="Pallavi"
            className="relative w-32 h-32 rounded-full mx-auto mb-8 object-cover shadow-lg ring-4 ring-white dark:ring-gray-800"
          />
        </div>
        <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
          Hello, I'm Pallavi Sahni
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 transition-colors duration-300">
          Frontend Developer | DSA Enthusiast | UI/UX Designer
        </p>
        <div className="flex justify-center gap-4">
          {[
            { icon: <Github className="w-6 h-6" />, href: "https://github.com/pallavigithubrit" },
            { icon: <Linkedin className="w-6 h-6" />, href: "https://www.linkedin.com/in/pallavi-sahni-ba6255259/" },
            { icon: <Mail className="w-6 h-6" />, href: "https://myaccount.google.com/?hl=en_GB&utm_source=OGB&utm_medium=act&gar=WzEyMF0" }
          ].map((social, index) => (
            <a
              key={index}
              href={social.href}
              className="p-2 text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transform hover:scale-110 transition-all duration-300"
            >
              {social.icon}
            </a>
          ))}
        </div>
        <ChevronDown className="w-6 h-6 absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-gray-400 dark:text-gray-500" />
      </div>
    </header>
  );
}