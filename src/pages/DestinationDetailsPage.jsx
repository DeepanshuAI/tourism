import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Star, MapPin, Clock, Users, ArrowLeft, Heart } from 'lucide-react';
import { useAppStore } from '../store/useAppStore';
import { Button } from '../components/ui/Button';

export const DestinationDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { destinations, wishlist, toggleWishlist } = useAppStore();
  
  const destination = destinations.find(d => d.id === id);
  const isWishlisted = wishlist.includes(id);

  if (!destination) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Destination not found</h2>
          <Button onClick={() => navigate('/explore')}>Back to Explore</Button>
        </div>
      </div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-24 pb-24 bg-white dark:bg-slate-950 transition-colors duration-300"
    >
      <div className="container mx-auto px-6 lg:px-12">
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center text-slate-500 hover:text-primary-600 transition-colors mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" /> Back
        </button>

        {/* Image Gallery Header */}
        <div className="relative h-[50vh] min-h-[400px] rounded-3xl overflow-hidden mb-12 shadow-xl group">
          <img 
            src={destination.image} 
            alt={destination.title} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
          
          <div className="absolute bottom-0 left-0 p-8 w-full md:w-2/3">
            <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold rounded-full bg-primary-600 text-white">
              {destination.category}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{destination.title}</h1>
            <div className="flex flex-wrap items-center text-slate-200 gap-6">
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-2" />
                <span>{destination.location}</span>
              </div>
              <div className="flex items-center">
                <Star className="w-5 h-5 text-accent-500 fill-accent-500 mr-2" />
                <span>{destination.rating} / 5.0</span>
              </div>
            </div>
          </div>

          <button 
            onClick={() => toggleWishlist(destination.id)}
            className="absolute top-6 right-6 p-3 rounded-full bg-white/20 backdrop-blur-md hover:bg-white transition-colors"
          >
            <Heart className={`w-6 h-6 ${isWishlisted ? 'fill-red-500 text-red-500' : 'text-white'}`} />
          </button>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">About this destination</h2>
              <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                {destination.description} Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </section>

            <section className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { icon: <Clock />, title: 'Duration', desc: '5 Days' },
                { icon: <Users />, title: 'Group Size', desc: 'Max 12' },
                { icon: <MapPin />, title: 'Tour Type', desc: 'Guided' },
                { icon: <Star />, title: 'Reviews', desc: '128 Reviews' }
              ].map((item, idx) => (
                <div key={idx} className="glass-card p-4 text-center flex flex-col items-center justify-center">
                  <div className="text-primary-600 dark:text-primary-400 mb-2">{item.icon}</div>
                  <h4 className="text-sm font-semibold text-slate-900 dark:text-white">{item.title}</h4>
                  <p className="text-xs text-slate-500">{item.desc}</p>
                </div>
              ))}
            </section>
          </div>

          {/* Booking Widget */}
          <div className="lg:col-span-1">
            <div className="glass-card p-6 sticky top-28">
              <div className="flex justify-between items-end mb-6 pb-6 border-b border-slate-200 dark:border-slate-800">
                <div>
                  <span className="text-3xl font-bold text-primary-600 dark:text-primary-400">${destination.price}</span>
                  <span className="text-slate-500 dark:text-slate-400"> / person</span>
                </div>
                <div className="flex items-center text-sm font-semibold">
                  <Star className="w-4 h-4 text-accent-500 fill-accent-500 mr-1" />
                  {destination.rating}
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div className="p-3 border border-slate-200 dark:border-slate-700 rounded-xl">
                  <label className="text-xs text-slate-500 block mb-1">Dates</label>
                  <input type="date" className="w-full bg-transparent outline-none text-slate-900 dark:text-white" />
                </div>
                <div className="p-3 border border-slate-200 dark:border-slate-700 rounded-xl">
                  <label className="text-xs text-slate-500 block mb-1">Guests</label>
                  <select className="w-full bg-transparent outline-none text-slate-900 dark:text-white">
                    <option value="1">1 Guest</option>
                    <option value="2">2 Guests</option>
                    <option value="3">3 Guests</option>
                    <option value="4">4+ Guests</option>
                  </select>
                </div>
              </div>

              <Button 
                variant="primary" 
                size="lg" 
                className="w-full"
                onClick={() => navigate(`/book/${destination.id}`)}
              >
                Reserve Now
              </Button>
              <p className="text-center text-xs text-slate-500 mt-4">You won't be charged yet</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
