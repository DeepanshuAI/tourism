import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Star, Heart, Clock } from 'lucide-react';
import { useAppStore } from '../../store/useAppStore';

export const ExperienceCard = ({ experience }) => {
  const { wishlist, toggleWishlist } = useAppStore();
  const isWishlisted = wishlist.includes(experience.id);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="glass-card overflow-hidden group cursor-pointer flex flex-col h-full"
    >
      <div className="relative h-64 overflow-hidden">
        <img 
          src={experience.image} 
          alt={experience.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-4 right-4 z-10">
          <button 
            onClick={(e) => {
              e.preventDefault();
              toggleWishlist(experience.id);
            }}
            className="p-2 rounded-full bg-white/50 backdrop-blur-md hover:bg-white transition-colors"
          >
            <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-red-500 text-red-500' : 'text-slate-700'}`} />
          </button>
        </div>
      </div>
      
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white line-clamp-1">{experience.title}</h3>
          <div className="flex items-center space-x-1 bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded-lg">
            <Star className="w-4 h-4 fill-accent-500 text-accent-500" />
            <span className="text-sm font-semibold dark:text-slate-200">{experience.rating}</span>
          </div>
        </div>
        
        <div className="flex items-center text-slate-500 dark:text-slate-400 mb-2">
          <MapPin className="w-4 h-4 mr-1" />
          <span className="text-sm">{experience.location}</span>
        </div>

        <div className="flex items-center text-slate-500 dark:text-slate-400 mb-4">
          <Clock className="w-4 h-4 mr-1" />
          <span className="text-sm">{experience.duration}</span>
        </div>
        
        <div className="mt-auto pt-4 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center">
          <div>
            <span className="text-sm text-slate-500 dark:text-slate-400">Price</span>
            <div className="text-lg font-bold text-primary-600 dark:text-primary-500">
              ${experience.price}
            </div>
          </div>
          <button className="text-sm font-semibold text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 transition-colors">
            Book Experience
          </button>
        </div>
      </div>
    </motion.div>
  );
};
