import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      await emailjs.send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message
        },
        'YOUR_PUBLIC_KEY'
      );
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Contact Me</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center mb-4">
                <Mail className="h-6 w-6 text-blue-600 mr-2" />
                <span className="text-gray-600">email@example.com</span>
              </div>
              <div className="flex items-center mb-4">
                <Phone className="h-6 w-6 text-blue-600 mr-2" />
                <span className="text-gray-600">+1 (123) 456-7890</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-6 w-6 text-blue-600 mr-2" />
                <span className="text-gray-600">City, Country</span>
              </div>
            </div>
            
            <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-6">
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              
              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 flex items-center justify-center"
              >
                <Send className="h-5 w-5 mr-2" />
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </button>
              
              {status === 'success' && (
                <p className="mt-4 text-green-600">Message sent successfully!</p>
              )}
              {status === 'error' && (
                <p className="mt-4 text-red-600">Failed to send message. Please try again.</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;