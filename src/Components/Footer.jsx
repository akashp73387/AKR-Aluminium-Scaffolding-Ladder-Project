import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="bg-gray-900 text-white">
      <div className="mx-auto w-full max-w-screen-xl p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* About SelfLearn */}
          <div>
            <h2 className="text-lg font-semibold mb-4">About SelfLearn</h2>
            <p className="text-gray-400 text-sm">
              SelfLearn is a leading platform for online learning, providing high-quality courses and resources to help you succeed.
            </p>
            <p className="mt-3 text-gray-400 text-sm">Join us and start your journey today!</p>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
            <ul className="text-gray-400 text-sm space-y-2">
              <li><a href="#home" className="hover:text-white">Home</a></li>
              <li><a href="#services" className="hover:text-white">Courses</a></li>
              <li><a href="#about" className="hover:text-white">Blog</a></li>
              <li><a href="#contact" className="hover:text-white">Contact Us</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Support</h2>
            <ul className="text-gray-400 text-sm space-y-2">
              <li><a href="#" className="hover:text-white">Help Center</a></li>
              <li><a href="#" className="hover:text-white">FAQs</a></li>
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white">Terms of Service</a></li>
            </ul>
          </div>

          {/* Newsletter Subscription */}
          <div>
            <h2 className="text-lg font-semibold mb-4 ">Subscribe to our Newsletter</h2>
            <form className="flex flex-col sm:flex-row md:flex-col space-y-2 md:space-y-0 md:space-x-0 sm:space-x-2">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="  p-2 w-full sm:w-auto rounded bg-gray-800 border border-gray-700 text-white focus:outline-none"
              />
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:opacity-80 text-white p-2 rounded cursor-pointer w-full sm:w-auto mt-2">Subscribe</button>
            </form>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="mt-8 border-t border-gray-700 pt-4 flex flex-col sm:flex-row items-center justify-between text-center sm:text-left">
          <span className="text-gray-400 text-sm">© 2025 SelfLearn. All rights reserved.</span>
          
          {/* Social Media Icons */}
          <div className="flex space-x-5 mt-4 sm:mt-0">
            <a href="#" className="text-gray-400 hover:text-white text-xl cursor-pointer"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="text-gray-400 hover:text-white text-xl cursor-pointer"><i className="fab fa-twitter"></i></a>
            <a href="#" className="text-gray-400 hover:text-white text-xl cursor-pointer"><i className="fab fa-linkedin"></i></a>
            <a href="#" className="text-gray-400 hover:text-white text-xl cursor-pointer"><i className="fab fa-instagram"></i></a>
            <a href="#" className="text-gray-400 hover:text-white text-xl cursor-pointer"><i className="fab fa-youtube"></i></a>
          </div>
        </div>
      </div>
    </footer>
        </div>
    );
};

export default Footer;