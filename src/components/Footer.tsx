import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm">© 2024 Your Name. All rights reserved.</p>
          </div>
          <div className="flex space-x-6">
            <a href="https://github.com/yourusername" className="hover:text-blue-400">
              <Github className="h-6 w-6" />
            </a>
            <a href="https://linkedin.com/in/yourusername" className="hover:text-blue-400">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="mailto:your.email@example.com" className="hover:text-blue-400">
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;