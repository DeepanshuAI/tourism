import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { useAppStore } from '../store/useAppStore';
import { DestinationCard } from '../components/ui/DestinationCard';
import { Button } from '../components/ui/Button';

export const ExplorePage = () => {
  const { destinations } = useAppStore();
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState(location.state?.searchQuery || '');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Beach', 'Mountain', 'City', 'Adventure'];

  const filteredDestinations = destinations.filter(dest => {
    const matchesSearch = dest.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          dest.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || dest.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-28 pb-24 bg-slate-50 dark:bg-slate-950 transition-colors duration-300"
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Explore Destinations</h1>
          <p className="text-slate-500 dark:text-slate-400 max-w-2xl">Find your perfect getaway from our curated list of amazing places around the world.</p>
        </div>

        {/* Filters and Search */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search destinations..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 text-slate-900 dark:text-white shadow-sm"
            />
          </div>

          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 hide-scrollbar">
            <Filter className="w-5 h-5 text-slate-400 mr-2 flex-shrink-0" />
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap transition-colors ${
                  selectedCategory === category 
                    ? 'bg-primary-600 text-white shadow-md' 
                    : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50 dark:bg-slate-900 dark:text-slate-300 dark:border-slate-800 dark:hover:bg-slate-800'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Results Grid */}
        {filteredDestinations.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredDestinations.map(dest => (
              <DestinationCard key={dest.id} destination={dest} />
            ))}
          </div>
        ) : (
          <div className="text-center py-24">
            <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-2">No destinations found</h3>
            <p className="text-slate-500 dark:text-slate-400 mb-6">Try adjusting your search or filters.</p>
            <Button variant="outline" onClick={() => { setSearchTerm(''); setSelectedCategory('All'); }}>Clear Filters</Button>
          </div>
        )}
      </div>
    </motion.div>
  );
};
