import { create } from 'zustand';

// Mock Data for initial state
const initialDestinations = [
  {
    id: '1',
    title: 'Bali Getaway',
    location: 'Indonesia',
    price: 1200,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80',
    category: 'Beach',
    description: 'Experience the beautiful beaches and culture of Bali. Perfect for a relaxing getaway.'
  },
  {
    id: '2',
    title: 'Swiss Alps Adventure',
    location: 'Switzerland',
    price: 2500,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=800&q=80',
    category: 'Mountain',
    description: 'Skiing, snowboarding, and breathtaking views in the heart of the Swiss Alps.'
  },
  {
    id: '3',
    title: 'Tokyo City Lights',
    location: 'Japan',
    price: 1800,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=800&q=80',
    category: 'City',
    description: 'Immerse yourself in the bustling city life, culture, and amazing food of Tokyo.'
  },
  {
    id: '4',
    title: 'Santorini Sunset',
    location: 'Greece',
    price: 1500,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?auto=format&fit=crop&w=800&q=80',
    category: 'Beach',
    description: 'Stunning sunsets, white-washed buildings, and the beautiful Aegean sea.'
  },
  {
    id: '5',
    title: 'Safari Expedition',
    location: 'Kenya',
    price: 3200,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=800&q=80',
    category: 'Adventure',
    description: 'Witness the big five in their natural habitat on an unforgettable safari.'
  },
  {
    id: '6',
    title: 'Paris Romance',
    location: 'France',
    price: 1400,
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=800&q=80',
    category: 'City',
    description: 'The city of love. Visit the Eiffel Tower, the Louvre, and enjoy French cuisine.'
  }
];

export const useAppStore = create((set) => ({
  user: null, // { name: 'John Doe', email: 'john@example.com' }
  theme: 'light', // 'light' or 'dark'
  destinations: initialDestinations,
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
