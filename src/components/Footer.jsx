import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white mt-10 py-4 px-6 border-t text-sm text-gray-700">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
        <p className="text-center md:text-left">
          🚨 <strong>QuickHelp</strong> is an emergency response app to alert your trusted contacts and share your live location.
        </p>
        <p className="text-center md:text-right">
          &copy; {new Date().getFullYear()} Made with ❤️ by Rishabh Kharwar
        </p>
      </div>
    </footer>
  );
};

export default Footer;
