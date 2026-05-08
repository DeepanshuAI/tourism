import { create } from 'zustand';

// Expanded Mock Data
const initialDestinations = [
  { id: '1', title: 'Radhanagar Beach Escape', location: 'Havelock Island, Andaman', price: 18000, rating: 4.9, image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80', category: 'Beach', description: 'Relax on Asia\'s finest beach — crystal-clear turquoise waters and pristine white sands at Radhanagar.' },
  { id: '2', title: 'Neil Island Serenity', location: 'Neil Island, Andaman', price: 14000, rating: 4.8, image: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=800&q=80', category: 'Beach', description: 'Discover tranquil coral reefs, lush greenery, and untouched beaches on the peaceful Neil Island.' },
  { id: '3', title: 'Port Blair Heritage Tour', location: 'Port Blair, Andaman', price: 9500, rating: 4.7, image: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f11?auto=format&fit=crop&w=800&q=80', category: 'City', description: 'Explore the historic Cellular Jail, Ross Island ruins, and vibrant local markets of Port Blair.' },
  { id: '4', title: 'Baratang Island Adventure', location: 'Baratang, Andaman', price: 12000, rating: 4.9, image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80', category: 'Adventure', description: 'Cruise through dense mangroves, visit limestone caves, and witness natural mud volcanoes.' }
];

const initialHotels = [
  { id: 'h1', name: 'Barefoot at Havelock', location: 'Havelock Island, Andaman', pricePerNight: 12500, rating: 4.9, image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80', amenities: ['Beach Access', 'Spa', 'Free WiFi', 'Restaurant'] },
  { id: 'h2', name: 'Symphony Palms Beach Resort', location: 'Havelock Island, Andaman', pricePerNight: 8800, rating: 4.8, image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80', amenities: ['Pool', 'Ocean View', 'Breakfast Included', 'Water Sports'] },
  { id: 'h3', name: 'SeaShell Port Blair', location: 'Port Blair, Andaman', pricePerNight: 6500, rating: 4.7, image: 'https://images.unsplash.com/photo-1542314831-c6a4d14d8373?auto=format&fit=crop&w=800&q=80', amenities: ['Rooftop Pool', 'Gym', 'Free WiFi', 'Bar'] },
  { id: 'h4', name: 'Munjoh Ocean Resort', location: 'Neil Island, Andaman', pricePerNight: 9200, rating: 4.9, image: 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=800&q=80', amenities: ['Private Beach', 'Infinity Pool', 'Snorkelling', 'Room Service'] }
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
