import React from 'react';

export default function Contact() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300" id="contact">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-16 text-gray-900 dark:text-white transition-colors duration-300">
          Get In Touch
        </h2>
        <div className="max-w-xl mx-auto">
          <form className="space-y-6">
            {[
              { id: 'name', label: 'Name', type: 'text' },
              { id: 'email', label: 'Email', type: 'email' }
            ].map((field) => (
              <div key={field.id}>
                <label
                  htmlFor={field.id}
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 transition-colors duration-300"
                >
                  {field.label}
                </label>
                <input
                  type={field.type}
                  id={field.id}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-600 dark:focus:ring-indigo-400 focus:border-transparent transition-colors duration-300"
                />
              </div>
            ))}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 transition-colors duration-300"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-600 dark:focus:ring-indigo-400 focus:border-transparent transition-colors duration-300"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 dark:hover:bg-indigo-500 transform hover:-translate-y-0.5 transition-all duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}