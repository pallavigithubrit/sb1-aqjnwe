import React from 'react';
import { Code2, Palette, Brain } from 'lucide-react';
import { skills } from '../data';

export default function Skills() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'code': return <Code2 className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />;
      case 'palette': return <Palette className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />;
      case 'brain': return <Brain className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />;
      default: return null;
    }
  };

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300" id="skills">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-16 text-gray-900 dark:text-white transition-colors duration-300">
          Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {skills.map((category) => (
            <div
              key={category.title}
              className="group bg-white dark:bg-gray-900 p-6 rounded-xl shadow-sm hover:shadow-md transform hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                {getIcon(category.icon)}
                <h3 className="font-semibold text-lg text-gray-900 dark:text-white transition-colors duration-300">
                  {category.title}
                </h3>
              </div>
              <ul className="space-y-2">
                {category.items.map((skill) => (
                  <li key={skill} className="text-gray-600 dark:text-gray-300 transition-colors duration-300">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}