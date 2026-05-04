import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Calendar, Users, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAppStore } from '../store/useAppStore';
import { DestinationCard } from '../components/ui/DestinationCard';
import { Button } from '../components/ui/Button';

export const LandingPage = () => {
  const { destinations } = useAppStore();
  const featuredDestinations = destinations.slice(0, 3);
  const navigate = useNavigate();

  const [locationQuery, setLocationQuery] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const searchResults = destinations.filter(dest => 
    dest.title.toLowerCase().includes(locationQuery.toLowerCase()) || 
    dest.location.toLowerCase().includes(locationQuery.toLowerCase())
  );

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearch = () => {
    if (locationQuery) {
      navigate('/explore', { state: { searchQuery: locationQuery } });
    } else {
      navigate('/explore');
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen"
    >
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=2000&q=80" 
            alt="Hero Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/40 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent dark:from-slate-950" />
        </div>

        <div className="relative z-10 container mx-auto px-6 lg:px-12 flex flex-col items-center text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-6"
          >
            Discover Your Next <br /> <span className="text-primary-400">Adventure</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-200 mb-12 max-w-2xl font-medium"
          >
            Explore breathtaking destinations, create unforgettable memories, and travel with confidence. Your journey starts here.
          </motion.p>

          {/* Search Bar */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="glass-card w-full max-w-4xl p-2 flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-2 bg-white/90 dark:bg-slate-900/90 relative"
          >
            <div className="flex-1 flex items-center px-4 py-3 w-full border-b md:border-b-0 md:border-r border-slate-200 dark:border-slate-700 relative" ref={dropdownRef}>
              <MapPin className="w-5 h-5 text-slate-400 mr-3" />
              <div className="flex flex-col w-full text-left">
                <label className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Location</label>
                <input 
                  type="text" 
                  placeholder="Where are you going?" 
                  className="bg-transparent border-none outline-none text-slate-900 dark:text-white placeholder-slate-400 font-medium w-full" 
                  value={locationQuery}
                  onChange={(e) => {
                    setLocationQuery(e.target.value);
                    setShowDropdown(true);
                  }}
                  onFocus={() => setShowDropdown(true)}
                />
              </div>

              {/* Dropdown */}
              <AnimatePresence>
                {showDropdown && locationQuery && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 w-full mt-2 bg-white dark:bg-slate-900 rounded-xl shadow-xl border border-slate-100 dark:border-slate-800 overflow-hidden z-50"
                  >
                    {searchResults.length > 0 ? (
                      <div className="max-h-60 overflow-y-auto hide-scrollbar">
                        {searchResults.map(dest => (
                          <div 
                            key={dest.id}
                            className="px-4 py-3 hover:bg-slate-50 dark:hover:bg-slate-800 cursor-pointer flex items-center gap-3 transition-colors"
                            onClick={() => navigate(`/destination/${dest.id}`)}
                          >
                            <img src={dest.image} alt={dest.title} className="w-12 h-12 rounded-lg object-cover" />
                            <div>
                              <h4 className="text-sm font-semibold text-slate-900 dark:text-white">{dest.title}</h4>
                              <p className="text-xs text-slate-500 dark:text-slate-400">{dest.location}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="px-4 py-4 text-sm text-slate-500 dark:text-slate-400 text-center">
                        No destinations found.
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <div className="flex-1 flex items-center px-4 py-3 w-full border-b md:border-b-0 md:border-r border-slate-200 dark:border-slate-700">
              <Calendar className="w-5 h-5 text-slate-400 mr-3" />
              <div className="flex flex-col w-full text-left">
                <label className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Dates</label>
                <input type="text" placeholder="Add dates" className="bg-transparent border-none outline-none text-slate-900 dark:text-white placeholder-slate-400 font-medium w-full" />
              </div>
            </div>
            <div className="flex-1 flex items-center px-4 py-3 w-full">
              <Users className="w-5 h-5 text-slate-400 mr-3" />
              <div className="flex flex-col w-full text-left">
                <label className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Guests</label>
                <input type="text" placeholder="Add guests" className="bg-transparent border-none outline-none text-slate-900 dark:text-white placeholder-slate-400 font-medium w-full" />
              </div>
            </div>
            <div className="px-2 w-full md:w-auto pb-2 md:pb-0">
              <Button variant="primary" size="lg" className="w-full md:w-auto rounded-xl" onClick={handleSearch}>
                <Search className="w-5 h-5 mr-2" />
                Search
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="py-24 bg-white dark:bg-slate-950 transition-colors duration-300">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Featured Destinations</h2>
              <p className="text-slate-500 dark:text-slate-400 max-w-2xl">Hand-picked locations for your next adventure. From tropical beaches to bustling cities.</p>
            </div>
            <Button variant="outline" className="hidden md:flex">View All</Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredDestinations.map(dest => (
              <DestinationCard key={dest.id} destination={dest} />
            ))}
          </div>
          <div className="mt-8 md:hidden">
             <Button variant="outline" className="w-full">View All</Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Why Choose Wanderlust?</h2>
            <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">We provide the best service to make your travel experience seamless and enjoyable.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: 'Best Prices', desc: 'We guarantee the best prices for all our destinations with no hidden fees.', icon: '💰' },
              { title: 'Expert Guides', desc: 'Our experienced guides ensure you get the most out of your trip.', icon: '🗺️' },
              { title: '24/7 Support', desc: 'We are always here to help you, anytime, anywhere in the world.', icon: '🎧' }
            ].map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="glass-card p-8 text-center"
              >
                <div className="text-5xl mb-6">{feature.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{feature.title}</h3>
                <p className="text-slate-500 dark:text-slate-400">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};
