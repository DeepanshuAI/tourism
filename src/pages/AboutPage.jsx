import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Users, Shield } from 'lucide-react';

export const AboutPage = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-28 pb-24 bg-white dark:bg-slate-950 transition-colors duration-300"
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">About Wanderlust</h1>
          <p className="text-lg text-slate-500 dark:text-slate-400">
            We believe that travel is the ultimate catalyst for personal growth and global understanding. 
            Our mission is to make experiencing the world accessible, seamless, and unforgettable.
          </p>
        </div>

        <div className="relative h-96 rounded-3xl overflow-hidden mb-24">
          <img 
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1600&q=80" 
            alt="Our Team" 
            className="w-full h-full object-cover"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto bg-primary-100 dark:bg-primary-900/50 rounded-full flex items-center justify-center mb-6 text-primary-600 dark:text-primary-400">
              <Globe className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Global Reach</h3>
            <p className="text-slate-500 dark:text-slate-400">We partner with local experts in over 100 countries to bring you authentic experiences.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 mx-auto bg-primary-100 dark:bg-primary-900/50 rounded-full flex items-center justify-center mb-6 text-primary-600 dark:text-primary-400">
              <Shield className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Trusted Platform</h3>
            <p className="text-slate-500 dark:text-slate-400">Secure bookings, verified reviews, and 24/7 support to guarantee your peace of mind.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 mx-auto bg-primary-100 dark:bg-primary-900/50 rounded-full flex items-center justify-center mb-6 text-primary-600 dark:text-primary-400">
              <Users className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Community First</h3>
            <p className="text-slate-500 dark:text-slate-400">Join millions of travelers sharing their stories, tips, and recommendations.</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
