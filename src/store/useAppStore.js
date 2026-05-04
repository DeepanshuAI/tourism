import { create } from 'zustand';

// Expanded Mock Data
const initialDestinations = [
  { id: '1', title: 'Bali Getaway', location: 'Indonesia', price: 1200, rating: 4.9, image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80', category: 'Beach', description: 'Experience the beautiful beaches and culture of Bali. Perfect for a relaxing getaway.' },
  { id: '2', title: 'Swiss Alps Adventure', location: 'Switzerland', price: 2500, rating: 4.8, image: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=800&q=80', category: 'Mountain', description: 'Skiing, snowboarding, and breathtaking views in the heart of the Swiss Alps.' },
  { id: '3', title: 'Tokyo City Lights', location: 'Japan', price: 1800, rating: 4.7, image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=800&q=80', category: 'City', description: 'Immerse yourself in the bustling city life, culture, and amazing food of Tokyo.' },
  { id: '4', title: 'Santorini Sunset', location: 'Greece', price: 1500, rating: 4.9, image: 'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?auto=format&fit=crop&w=800&q=80', category: 'Beach', description: 'Stunning sunsets, white-washed buildings, and the beautiful Aegean sea.' }
];

const initialHotels = [
  { id: 'h1', name: 'The Ritz-Carlton, Kyoto', location: 'Kyoto, Japan', pricePerNight: 850, rating: 4.9, image: 'https://images.unsplash.com/photo-1542314831-c6a4d14d8373?auto=format&fit=crop&w=800&q=80', amenities: ['Spa', 'Pool', 'Free WiFi', 'Restaurant'] },
  { id: 'h2', name: 'Alila Villas Uluwatu', location: 'Bali, Indonesia', pricePerNight: 600, rating: 4.8, image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80', amenities: ['Private Pool', 'Ocean View', 'Breakfast Included'] },
  { id: 'h3', name: 'The Chedi Andermatt', location: 'Andermatt, Switzerland', pricePerNight: 950, rating: 4.9, image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80', amenities: ['Ski Access', 'Spa', 'Fireplace', 'Gym'] },
  { id: 'h4', name: 'Katikies Hotel', location: 'Santorini, Greece', pricePerNight: 720, rating: 4.9, image: 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=800&q=80', amenities: ['Infinity Pool', 'Sea View', 'Room Service'] }
];

const initialExperiences = [
  { id: 'e1', title: 'Mount Batur Sunrise Trek', location: 'Bali, Indonesia', price: 45, duration: '6 hours', rating: 4.8, image: 'https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?auto=format&fit=crop&w=800&q=80' },
  { id: 'e2', title: 'Traditional Tea Ceremony', location: 'Kyoto, Japan', price: 60, duration: '2 hours', rating: 4.9, image: 'https://images.unsplash.com/photo-1528164344705-47542853e501?auto=format&fit=crop&w=800&q=80' },
  { id: 'e3', title: 'Jungfraujoch Train Journey', location: 'Interlaken, Switzerland', price: 210, duration: '8 hours', rating: 4.9, image: 'https://images.unsplash.com/photo-1527668752968-14dc70a27c95?auto=format&fit=crop&w=800&q=80' },
  { id: 'e4', title: 'Santorini Catamaran Cruise', location: 'Santorini, Greece', price: 150, duration: '5 hours', rating: 4.8, image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80' }
];

export const useAppStore = create((set) => ({
  user: null,
  theme: 'light',
  destinations: initialDestinations,
  hotels: initialHotels,
  experiences: initialExperiences,
  wishlist: [],
  bookings: [],

  // Actions
  setUser: (user) => set({ user }),
  logout: () => set({ user: null }),
  
  toggleTheme: () => set((state) => {
    const newTheme = state.theme === 'light' ? 'dark' : 'light';
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    return { theme: newTheme };
  }),

  toggleWishlist: (id) => set((state) => {
    const exists = state.wishlist.includes(id);
    if (exists) {
      return { wishlist: state.wishlist.filter(itemId => itemId !== id) };
    } else {
      return { wishlist: [...state.wishlist, id] };
    }
  }),

  addBooking: (booking) => set((state) => ({
    bookings: [...state.bookings, { ...booking, id: Date.now().toString() }]
  }))
}));
