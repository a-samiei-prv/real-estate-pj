import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="w-full py-4 bg-white border-b">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img 
            src="/public/assets/images/placeholder.jpg" 
            alt="Sankou Group"
            className="h-8"
          />
        </Link>

        <div className="flex items-center space-x-1">
          <Link
            to="/"
            className="px-4 py-2 rounded-full bg-black text-white text-sm"
          >
            Home
          </Link>
          <Link
            to="/buy"
            className="px-4 py-2 rounded-full text-gray-600 hover:text-gray-900 text-sm"
          >
            ...
          </Link>
          <Link
            to="/rent"
            className="px-4 py-2 rounded-full text-gray-600 hover:text-gray-900 text-sm"
          >
            ...
          </Link>
          <Link
            to="/short-term"
            className="px-4 py-2 rounded-full text-gray-600 hover:text-gray-900 text-sm"
          >
            ...
          </Link>
          <Link
            to="/blog"
            className="px-4 py-2 rounded-full text-gray-600 hover:text-gray-900 text-sm"
          >
            ...
          </Link>
          <Link
            to="/about"
            className="px-4 py-2 rounded-full text-gray-600 hover:text-gray-900 text-sm"
          >
            About
          </Link>
        </div>

        <div className="flex items-center space-x-3">
          {/* <Link
            to="/start"
            className="px-5 py-2 rounded-full border border-[#FF4400] text-[#FF4400] text-sm hover:bg-[#FF4400] hover:text-white transition-colors"
          >
            Start here
          </Link> */}
          <Link
            to="/account"
            className="flex items-center space-x-2 text-sm text-gray-600 hover:text-gray-900"
          >
            <span>My account</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;