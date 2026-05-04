import { create } from 'zustand';

const initialDestinations = [
  { id: '1', title: 'Radhanagar Beach', location: 'Havelock Island, Andaman', price: 800, rating: 4.9, image: 'https://images.unsplash.com/photo-1589394815804-964ce0ff96f8?auto=format&fit=crop&w=800&q=80', category: 'Beach', description: 'Consistently ranked among the best beaches in Asia, known for its pristine white sand and crystal clear waters.' },
  { id: '2', title: 'Cellular Jail', location: 'Port Blair, Andaman', price: 150, rating: 4.8, image: 'https://images.unsplash.com/photo-1621245032822-7f722a4fc2c5?auto=format&fit=crop&w=800&q=80', category: 'Heritage', description: 'A colonial prison that serves as a poignant national memorial to the Indian freedom struggle.' },
  { id: '3', title: 'Elephant Beach', location: 'Havelock Island, Andaman', price: 400, rating: 4.7, image: 'https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?auto=format&fit=crop&w=800&q=80', category: 'Beach', description: 'Famous for its vibrant coral reefs and exciting water sports like snorkeling and sea walking.' },
  { id: '4', title: 'Ross Island', location: 'South Andaman', price: 300, rating: 4.6, image: 'https://images.unsplash.com/photo-1625736639536-e0ce1df03ab3?auto=format&fit=crop&w=800&q=80', category: 'Heritage', description: 'Explore the hauntingly beautiful ruins of the former British administrative headquarters.' }
];

const initialHotels = [
  { id: 'h1', name: 'Taj Exotica Resort & Spa', location: 'Radhanagar Beach, Havelock', pricePerNight: 450, rating: 4.9, image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80', amenities: ['Olympic Pool', 'Spa', 'Private Beach', 'Fine Dining'] },
  { id: 'h2', name: 'Barefoot at Havelock', location: 'Beach No. 7, Havelock Island', pricePerNight: 280, rating: 4.8, image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=80', amenities: ['Eco-friendly', 'Yoga Center', 'Scuba Center'] },
  { id: 'h3', name: 'Sea Shell Resort', location: 'Govind Nagar Beach, Havelock', pricePerNight: 200, rating: 4.7, image: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=800&q=80', amenities: ['Ocean View', 'Bar', 'Live Music', 'Pool'] },
  { id: 'h4', name: 'Symphony Samudra', location: 'Chidiya Tapu, Port Blair', pricePerNight: 180, rating: 4.6, image: 'https://images.unsplash.com/photo-1542314831-c6a4d14d8373?auto=format&fit=crop&w=800&q=80', amenities: ['Sunset View', 'Infinity Pool', 'Spa'] }
];

const initialExperiences = [
  { id: 'e1', title: 'Scuba Diving Adventure', location: 'Neil Island, Andaman', price: 85, duration: '4 hours', rating: 4.9, image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80' },
  { id: 'e2', title: 'Mangrove Kayaking', location: 'Havelock Island, Andaman', price: 45, duration: '2.5 hours', rating: 4.8, image: 'https://images.unsplash.com/photo-1527668752968-14dc70a27c95?auto=format&fit=crop&w=800&q=80' },
  { id: 'e3', title: 'Underwater Sea Walk', location: 'North Bay Island, Andaman', price: 55, duration: '2 hours', rating: 4.7, image: 'https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?auto=format&fit=crop&w=800&q=80' },
  { id: 'e4', title: 'Cellular Jail Light & Sound Show', location: 'Port Blair, Andaman', price: 15, duration: '1 hour', rating: 4.8, image: 'https://images.unsplash.com/photo-1528164344705-47542853e501?auto=format&fit=crop&w=800&q=80' }
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
