import React from 'react';

export default function About() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300" id="about">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-16 text-gray-900 dark:text-white transition-colors duration-300">
          About Me
        </h2>
        <div className="max-w-3xl mx-auto text-gray-600 dark:text-gray-300 leading-relaxed space-y-6 transition-colors duration-300">
          <p>
            I'm a passionate frontend developer and UI/UX designer with a keen eye for creating beautiful, 
            functional interfaces. With expertise in React and modern JavaScript, I transform complex problems 
            into elegant solutions that users love.
          </p>
          <p>
            When I'm not coding, you'll find me solving DSA problems, exploring new design trends, or 
            contributing to open-source projects. I believe in writing clean, maintainable code and creating 
            intuitive user experiences.
          </p>
        </div>
      </div>
    </section>
  );
}