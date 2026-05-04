import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import { useAppStore } from '../store/useAppStore';
import { ExperienceCard } from '../components/ui/ExperienceCard';

export const ExperiencesPage = () => {
  const { experiences } = useAppStore();
  const [searchTerm, setSearchTerm] = useState('');

  const filteredExperiences = experiences.filter(exp => 
    exp.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    exp.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-28 pb-24 bg-slate-50 dark:bg-slate-950 transition-colors duration-300"
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="mb-12 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">Unforgettable Experiences</h1>
          <p className="text-slate-500 dark:text-slate-400 max-w-2xl">Book tours, activities, and local experiences to make the most out of your trip.</p>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search experiences..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 text-slate-900 dark:text-white shadow-sm"
            />
          </div>
        </div>

        {filteredExperiences.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredExperiences.map(exp => (
              <ExperienceCard key={exp.id} experience={exp} />
            ))}
          </div>
        ) : (
          <div className="text-center py-24">
            <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-2">No experiences found</h3>
            <p className="text-slate-500 dark:text-slate-400">Try adjusting your search terms.</p>
          </div>
        )}
      </div>
    </motion.div>
  );
};
