import { create } from 'zustand';

// Expanded Mock Data
const initialDestinations = [
  { id: '1', title: 'Radhanagar Beach Escape', location: 'Havelock Island, Andaman', price: 18000, rating: 4.9, image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80', category: 'Beach', description: 'Relax on Asia\'s finest beach — crystal-clear turquoise waters and pristine white sands at Radhanagar.' },
  { id: '2', title: 'Neil Island Serenity', location: 'Neil Island, Andaman', price: 14000, rating: 4.8, image: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=800&q=80', category: 'Beach', description: 'Discover tranquil coral reefs, lush greenery, and untouched beaches on the peaceful Neil Island.' },
  { id: '3', title: 'Port Blair Heritage Tour', location: 'Port Blair, Andaman', price: 9500, rating: 4.7, image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/32/06/e1/90/caption.jpg?w=500&h=400&s=1', category: 'City', description: 'Explore the historic Cellular Jail, Ross Island ruins, and vibrant local markets of Port Blair.' },
  { id: '4', title: 'Baratang Island Adventure', location: 'Baratang, Andaman', price: 12000, rating: 4.9, image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80', category: 'Adventure', description: 'Cruise through dense mangroves, visit limestone caves, and witness natural mud volcanoes.' },
  { id: '5', title: 'Elephant Beach Snorkelling', location: 'Havelock Island, Andaman', price: 7500, rating: 4.8, image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&w=800&q=80', category: 'Adventure', description: 'Dive into vibrant coral gardens teeming with exotic marine life at the famous Elephant Beach.' },
  { id: '6', title: 'Ross Island Day Trip', location: 'Port Blair, Andaman', price: 5500, rating: 4.6, image: 'https://images.unsplash.com/photo-1586348943529-beaae6c28db9?auto=format&fit=crop&w=800&q=80', category: 'Heritage', description: 'Explore the hauntingly beautiful ruins of the former British colonial headquarters on Ross Island.' },
  { id: '7', title: 'Long Island Wilderness', location: 'Long Island, Andaman', price: 16000, rating: 4.7, image: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=800&q=80', category: 'Beach', description: 'Experience solitude and pristine nature at Lalaji Bay, reachable only by boat through breathtaking waters.' },
  { id: '8', title: 'North Bay Island Coral Safari', location: 'North Bay, Andaman', price: 8000, rating: 4.8, image: 'https://andamanprernatour.com/wp-content/uploads/2022/08/North-Bay-Island.jpg', category: 'Adventure', description: 'Walk on the sea floor with a helmet dive or try glass-bottom boat rides over stunning coral reefs.' }
];

const initialHotels = [
  { id: 'h1', name: 'Barefoot at Havelock', location: 'Havelock Island, Andaman', pricePerNight: 12500, rating: 4.9, image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80', amenities: ['Beach Access', 'Spa', 'Free WiFi', 'Restaurant'] },
  { id: 'h2', name: 'Symphony Palms Beach Resort', location: 'Havelock Island, Andaman', pricePerNight: 8800, rating: 4.8, image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80', amenities: ['Pool', 'Ocean View', 'Breakfast Included', 'Water Sports'] },
  { id: 'h3', name: 'SeaShell Port Blair', location: 'Port Blair, Andaman', pricePerNight: 6500, rating: 4.7, image: 'https://images.unsplash.com/photo-1542314831-c6a4d14d8373?auto=format&fit=crop&w=800&q=80', amenities: ['Rooftop Pool', 'Gym', 'Free WiFi', 'Bar'] },
  { id: 'h4', name: 'Munjoh Ocean Resort', location: 'Neil Island, Andaman', pricePerNight: 9200, rating: 4.9, image: 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=800&q=80', amenities: ['Private Beach', 'Infinity Pool', 'Snorkelling', 'Room Service'] },
  { id: 'h5', name: 'Coral Reef Resort', location: 'Havelock Island, Andaman', pricePerNight: 7200, rating: 4.7, image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=80', amenities: ['Beachfront', 'Scuba Diving', 'Kayaking', 'Restaurant'] },
  { id: 'h6', name: 'Fortune Resort Bay Island', location: 'Port Blair, Andaman', pricePerNight: 5800, rating: 4.6, image: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=800&q=80', amenities: ['Sea View', 'Pool', 'Multi-cuisine Restaurant', 'Free WiFi'] },
  { id: 'h7', name: 'TSG Emerald View Resort', location: 'Port Blair, Andaman', pricePerNight: 4900, rating: 4.5, image: 'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=800&q=80', amenities: ['City View', 'Conference Hall', 'Gym', 'Parking'] },
  { id: 'h8', name: 'Pristine Beach Resort', location: 'Neil Island, Andaman', pricePerNight: 6800, rating: 4.8, image: 'https://images.unsplash.com/photo-1615880484746-a134be9a6ecf?auto=format&fit=crop&w=800&q=80', amenities: ['Private Beach', 'Sunset View', 'Yoga Deck', 'Snorkelling'] }
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
