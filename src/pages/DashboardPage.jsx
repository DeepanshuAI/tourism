import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Heart, User, LogOut } from 'lucide-react';
import { useAppStore } from '../store/useAppStore';
import { DestinationCard } from '../components/ui/DestinationCard';
import { Button } from '../components/ui/Button';

export const DashboardPage = () => {
  const navigate = useNavigate();
  const { user, logout, bookings, wishlist, destinations } = useAppStore();

  if (!user) {
    navigate('/auth');
    return null;
  }

  const wishlistedDestinations = destinations.filter(d => wishlist.includes(d.id));

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-28 pb-24 bg-slate-50 dark:bg-slate-950 transition-colors duration-300"
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div>
            <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-2">Welcome back, {user.name}</h1>
            <p className="text-slate-500 dark:text-slate-400">Manage your bookings, wishlist, and profile here.</p>
          </div>
          <Button 
            variant="ghost" 
            onClick={() => { logout(); navigate('/'); }}
            className="mt-4 md:mt-0 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20"
          >
            <LogOut className="w-5 h-5 mr-2" />
            Logout
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-4">
            <div className="glass-card p-6">
              <div className="w-20 h-20 rounded-full bg-primary-100 dark:bg-primary-900/50 flex items-center justify-center text-primary-600 dark:text-primary-400 mx-auto mb-4">
                <User className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white text-center mb-1">{user.name}</h3>
              <p className="text-sm text-slate-500 text-center mb-6">{user.email}</p>
              
              <div className="space-y-2">
                <div className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-800 rounded-xl">
                  <span className="text-sm font-medium text-slate-600 dark:text-slate-300 flex items-center">
                    <Calendar className="w-4 h-4 mr-2" /> Bookings
                  </span>
                  <span className="font-bold text-slate-900 dark:text-white">{bookings.length}</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-800 rounded-xl">
                  <span className="text-sm font-medium text-slate-600 dark:text-slate-300 flex items-center">
                    <Heart className="w-4 h-4 mr-2" /> Wishlist
                  </span>
                  <span className="font-bold text-slate-900 dark:text-white">{wishlist.length}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-12">
            {/* Bookings */}
            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Upcoming Trips</h2>
              {bookings.length > 0 ? (
                <div className="space-y-4">
                  {bookings.map((booking) => (
                    <div key={booking.id} className="glass-card p-6 flex flex-col md:flex-row justify-between items-start md:items-center">
                      <div>
                        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{booking.title}</h3>
                        <p className="text-sm text-slate-500">Booked on: {new Date(booking.date).toLocaleDateString()}</p>
                      </div>
                      <div className="mt-4 md:mt-0 text-right">
                        <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 mb-2">
                          {booking.status}
                        </span>
                        <div className="font-bold text-slate-900 dark:text-white">₹{booking.price.toLocaleString('en-IN')}</div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="glass-card p-12 text-center">
                  <Calendar className="w-12 h-12 text-slate-300 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">No upcoming trips</h3>
                  <p className="text-slate-500 mb-6">You haven't booked any trips yet. Start exploring!</p>
                  <Button onClick={() => navigate('/explore')}>Explore Destinations</Button>
                </div>
              )}
            </section>

            {/* Wishlist */}
            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Your Wishlist</h2>
              {wishlistedDestinations.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {wishlistedDestinations.map(dest => (
                    <DestinationCard key={dest.id} destination={dest} />
                  ))}
                </div>
              ) : (
                <div className="glass-card p-12 text-center">
                  <Heart className="w-12 h-12 text-slate-300 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">Wishlist is empty</h3>
                  <p className="text-slate-500 mb-6">Save your favorite destinations to view them later.</p>
                  <Button variant="outline" onClick={() => navigate('/explore')}>Find Favorites</Button>
                </div>
              )}
            </section>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
