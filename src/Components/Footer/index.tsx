import React from 'react';

const Footer = () => {
  return (
    <footer className="absolute bottom-0 left-0 right-0 bg-gray-800 text-white text-center py-4">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} Christopher Lim Chin
      </p>
    </footer>
  );
};

export default Footer;