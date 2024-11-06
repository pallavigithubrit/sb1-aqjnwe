import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Header isDark={isDark} toggleDark={() => setIsDark(!isDark)} />
      <About />
      <Skills />
      <Projects />
      <Contact />
      
      <footer className="py-8 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="container mx-auto px-6 text-center text-gray-600 dark:text-gray-400">
          <p>© 2024 Pallavi. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;