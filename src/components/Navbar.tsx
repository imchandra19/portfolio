import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <NavLink to="/" className="flex items-center">
              <span className="text-xl font-bold text-gray-800">Portfolio</span>
            </NavLink>
          </div>

          {/* Desktop Menu */}
          <div className="hidden sm:flex sm:items-center">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `px-3 py-2 rounded-md text-sm font-medium ${
                  isActive ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/research"
              className={({ isActive }) =>
                `px-3 py-2 rounded-md text-sm font-medium ${
                  isActive ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'
                }`
              }
            >
              Research
            </NavLink>
            <NavLink
              to="/publications"
              className={({ isActive }) =>
                `px-3 py-2 rounded-md text-sm font-medium ${
                  isActive ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'
                }`
              }
            >
              Publications
            </NavLink>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                `px-3 py-2 rounded-md text-sm font-medium ${
                  isActive ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'
                }`
              }
            >
              Projects
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `px-3 py-2 rounded-md text-sm font-medium ${
                  isActive ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'
                }`
              }
            >
              Contact
            </NavLink>
          </div>

          {/* Mobile menu button */}
          <div className="sm:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="sm:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `block px-3 py-2 rounded-md text-base font-medium ${
                  isActive ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/research"
              className={({ isActive }) =>
                `block px-3 py-2 rounded-md text-base font-medium ${
                  isActive ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'
                }`
              }
            >
              Research
            </NavLink>
            <NavLink
              to="/publications"
              className={({ isActive }) =>
                `block px-3 py-2 rounded-md text-base font-medium ${
                  isActive ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'
                }`
              }
            >
              Publications
            </NavLink>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                `block px-3 py-2 rounded-md text-base font-medium ${
                  isActive ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'
                }`
              }
            >
              Projects
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `block px-3 py-2 rounded-md text-base font-medium ${
                  isActive ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'
                }`
              }
            >
              Contact
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;