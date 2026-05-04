import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CreditCard, CheckCircle, ArrowLeft } from 'lucide-react';
import { useAppStore } from '../store/useAppStore';
import { Button } from '../components/ui/Button';

export const BookingPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { destinations, addBooking } = useAppStore();
  const destination = destinations.find(d => d.id === id);
  
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!destination) {
    return <div>Destination not found</div>;
  }

  const handleBooking = (e) => {
    e.preventDefault();
    setIsProcessing(true);
    // Mock API call
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
      addBooking({
        destinationId: destination.id,
        title: destination.title,
        date: new Date().toISOString(),
        price: destination.price,
        status: 'Confirmed'
      });
      setTimeout(() => navigate('/dashboard'), 2000);
    }, 2000);
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-28 pb-24 bg-slate-50 dark:bg-slate-950"
    >
      <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center text-slate-500 hover:text-primary-600 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" /> Back
        </button>

        {isSuccess ? (
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="glass-card p-12 text-center"
          >
            <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Booking Confirmed!</h2>
            <p className="text-slate-500 dark:text-slate-400 mb-8">Your trip to {destination.title} has been successfully booked. Redirecting to your dashboard...</p>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">Checkout</h2>
              <form onSubmit={handleBooking} className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Contact Information</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <input required type="text" placeholder="First Name" className="w-full p-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl focus:ring-2 focus:ring-primary-500 outline-none text-slate-900 dark:text-white" />
                    <input required type="text" placeholder="Last Name" className="w-full p-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl focus:ring-2 focus:ring-primary-500 outline-none text-slate-900 dark:text-white" />
                  </div>
                  <input required type="email" placeholder="Email Address" className="w-full p-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl focus:ring-2 focus:ring-primary-500 outline-none text-slate-900 dark:text-white" />
                </div>

                <div className="space-y-4 pt-6 border-t border-slate-200 dark:border-slate-800">
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white flex items-center">
                    <CreditCard className="w-5 h-5 mr-2" /> Payment Details
                  </h3>
                  <input required type="text" placeholder="Card Number" className="w-full p-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl focus:ring-2 focus:ring-primary-500 outline-none text-slate-900 dark:text-white" />
                  <div className="grid grid-cols-2 gap-4">
                    <input required type="text" placeholder="MM/YY" className="w-full p-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl focus:ring-2 focus:ring-primary-500 outline-none text-slate-900 dark:text-white" />
                    <input required type="text" placeholder="CVC" className="w-full p-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl focus:ring-2 focus:ring-primary-500 outline-none text-slate-900 dark:text-white" />
                  </div>
                </div>

                <Button type="submit" variant="primary" size="lg" className="w-full mt-8" isLoading={isProcessing}>
                  Confirm & Pay ${destination.price}
                </Button>
              </form>
            </div>

            {/* Summary */}
            <div>
              <div className="glass-card p-6 sticky top-28">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-6">Booking Summary</h3>
                <div className="flex items-start space-x-4 mb-6 pb-6 border-b border-slate-200 dark:border-slate-800">
                  <img src={destination.image} alt={destination.title} className="w-24 h-24 object-cover rounded-xl" />
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white">{destination.title}</h4>
                    <p className="text-sm text-slate-500">{destination.location}</p>
                    <p className="text-sm font-medium mt-2 text-primary-600 dark:text-primary-400">1 Guest • 5 Days</p>
                  </div>
                </div>
                
                <div className="space-y-3 text-slate-600 dark:text-slate-400">
                  <div className="flex justify-between">
                    <span>${destination.price} x 1 person</span>
                    <span>${destination.price}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Service fee</span>
                    <span>$0.00</span>
                  </div>
                </div>
                
                <div className="flex justify-between items-center mt-6 pt-6 border-t border-slate-200 dark:border-slate-800 font-bold text-lg text-slate-900 dark:text-white">
                  <span>Total (USD)</span>
                  <span>${destination.price}</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};
