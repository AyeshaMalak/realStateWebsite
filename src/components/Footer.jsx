import React from "react";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-gray-300 py-12 relative">
      <div className="container mx-auto px-6 grid md:grid-cols-3 gap-8">
        
        {/* Column 1: Logo + Quick Description */}
        <div>
          <img
            src="https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2021/10/rh-logo.png"
            alt="Logo"
            className="mb-4"
          />
          <p className="text-gray-300">Simply #1 Real Estate Theme</p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h4 className="text-white text-xl font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white transition">Home</a></li>
            <li><a href="#" className="hover:text-white transition">List Layout</a></li>
            <li><a href="#" className="hover:text-white transition">Half Map Layout</a></li>
            <li><a href="#" className="hover:text-white transition">Grid Layout</a></li>
            <li><a href="#" className="hover:text-white transition">Blog</a></li>
            <li><a href="#" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>

        {/* Column 3: Contact Info + Tags */}
        <div>
          <h4 className="text-white text-xl font-semibold mb-4">Contact</h4>
          <p>3015 Grand Ave, Coconut Grove, Merrick Way, FL 12345</p>
          <p className="mt-2">23-456-7890</p>
          <p className="mt-2">robot@inspirythemes.com</p>

          <h4 className="text-white text-xl font-semibold mt-6 mb-2">Tags</h4>
          <div className="flex flex-wrap gap-2">
            {[
              "awareness",
              "contemporary",
              "economy",
              "living",
              "image",
              "post",
              "interior",
              "living rooms",
              "studio",
              "trendy",
            ].map((tag) => (
              <span
                key={tag}
                className="bg-blue-800 text-gray-300 px-2 py-1 rounded text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="mt-12 border-t border-blue-800 pt-6 text-center text-gray-400 text-sm">
        © 2025. All rights reserved. <br />
        Designed by Inspiry Themes
      </div>
    </footer>
  );
};

export default Footer;
