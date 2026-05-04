import React from 'react';
import { Plane, Globe, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="bg-slate-50 dark:bg-slate-950 pt-16 pb-8 border-t border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1 flex flex-col items-start">
            <Link to="/" className="flex items-center space-x-2 text-primary-600 dark:text-primary-400 mb-4">
              <Plane className="w-8 h-8" />
              <span className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">Wanderlust</span>
            </Link>
            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-6">
              Discover the world with us. We curate the best travel experiences for your next unforgettable adventure.
            </p>
            <div className="flex space-x-4 text-slate-400 dark:text-slate-500">
              <a href="#" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors"><Globe className="w-5 h-5" /></a>
              <a href="#" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors"><Mail className="w-5 h-5" /></a>
              <a href="#" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors"><Phone className="w-5 h-5" /></a>
              <a href="#" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors"><MapPin className="w-5 h-5" /></a>
            </div>
          </div>
          
          <div>
            <h4 className="text-slate-900 dark:text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-3 text-sm text-slate-500 dark:text-slate-400">
              <li><Link to="/" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">About Us</Link></li>
              <li><Link to="/" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Careers</Link></li>
              <li><Link to="/" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Press</Link></li>
              <li><Link to="/" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Blog</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-slate-900 dark:text-white font-semibold mb-4">Support</h4>
            <ul className="space-y-3 text-sm text-slate-500 dark:text-slate-400">
              <li><Link to="/" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Help Center</Link></li>
              <li><Link to="/" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Safety Information</Link></li>
              <li><Link to="/" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Cancellation Options</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-slate-900 dark:text-white font-semibold mb-4">Newsletter</h4>
            <p className="text-slate-500 dark:text-slate-400 text-sm mb-4">Subscribe to get the latest offers and travel news.</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Email address" 
                className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white px-4 py-2 rounded-l-xl focus:outline-none focus:ring-2 focus:ring-primary-500 w-full text-sm"
              />
              <button className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-r-xl transition-colors text-sm font-semibold">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500 dark:text-slate-400">
          <p>&copy; {new Date().getFullYear()} Wanderlust. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/" className="hover:text-slate-900 dark:hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/" className="hover:text-slate-900 dark:hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
