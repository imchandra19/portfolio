import React from 'react';
import { publications } from '../data/publications';
import { ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const Publications = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Publications</h1>
        
        <div className="space-y-6">
          {publications.map((pub, index) => (
            <motion.div
              key={pub.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg p-6"
            >
              <h2 className="text-xl font-bold text-gray-900 mb-2">{pub.title}</h2>
              <p className="text-gray-600 mb-2">
                {pub.authors.join(', ')}
              </p>
              <p className="text-sm text-gray-500 mb-4">
                {pub.journal} ({pub.year})
              </p>
              <p className="text-gray-600 mb-4">{pub.abstract}</p>
              <div className="flex space-x-4">
                {pub.doi && (
                  <a
                    href={`https://doi.org/${pub.doi}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 hover:text-blue-700"
                  >
                    DOI <ExternalLink className="ml-1 h-4 w-4" />
                  </a>
                )}
                {pub.url && (
                  <a
                    href={pub.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 hover:text-blue-700"
                  >
                    View Publication <ExternalLink className="ml-1 h-4 w-4" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Publications;