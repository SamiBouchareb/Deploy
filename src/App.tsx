import { useState, useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { MenuSection } from './components/Menu/MenuSection';
import { AboutSection } from './components/About/AboutSection';
import { Footer } from './components/Footer/Footer';
import { TestimonialsSection } from './components/Testimonials/TestimonialsSection';
import { SustainabilitySection } from './components/Sustainability/SustainabilitySection';
import { CartProvider } from './context/CartContext';
import { Cart } from './components/Cart/Cart';
import { LoadingAnimation } from './components/LoadingAnimation/LoadingAnimation';
import { ScrollReveal } from './components/ScrollReveal/ScrollReveal';
import { AnimatePresence } from 'framer-motion';
import type { MenuItem } from './types';

// Sample menu data
const menuItems: MenuItem[] = [
  {
    id: '1',
    name: 'Quinoa Power Bowl',
    description: 'Fresh quinoa bowl with roasted vegetables, avocado, and tahini dressing',
    price: 12.99,
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&w=800&q=75',
    category: 'lunch',
    nutritionalInfo: {
      calories: 450,
      protein: 15,
      carbs: 65,
      fat: 20
    },
    dietaryInfo: {
      isVegetarian: true,
      isVegan: true,
      isGlutenFree: true
    }
  },
  {
    id: '2',
    name: 'Acai Breakfast Bowl',
    description: 'Acai smoothie bowl topped with granola, fresh fruits, and honey',
    price: 9.99,
    image: 'https://images.unsplash.com/photo-1590301157890-4810ed352733?auto=format&w=800&q=75',
    category: 'breakfast',
    nutritionalInfo: {
      calories: 380,
      protein: 8,
      carbs: 70,
      fat: 12
    },
    dietaryInfo: {
      isVegetarian: true,
      isVegan: false,
      isGlutenFree: true
    }
  },
  {
    id: '3',
    name: 'Green Goddess Smoothie',
    description: 'Spinach, banana, mango, and coconut water smoothie',
    price: 6.99,
    image: 'https://images.unsplash.com/photo-1638176066666-ffb2f013c7dd?auto=format&w=800&q=75',
    category: 'beverages',
    nutritionalInfo: {
      calories: 220,
      protein: 5,
      carbs: 45,
      fat: 3
    },
    dietaryInfo: {
      isVegetarian: true,
      isVegan: true,
      isGlutenFree: true
    }
  },
  {
    id: '4',
    name: 'Grilled Chicken Salad',
    description: 'Mixed greens with grilled chicken, avocado, and balsamic dressing',
    price: 14.99,
    image: 'https://images.unsplash.com/photo-1546069901-d5bfd2cbfb1f?auto=format&w=800&q=75',
    category: 'lunch',
    nutritionalInfo: {
      calories: 380,
      protein: 32,
      carbs: 20,
      fat: 22
    },
    dietaryInfo: {
      isVegetarian: false,
      isVegan: false,
      isGlutenFree: true
    }
  },
  {
    id: '5',
    name: 'Energy Bites',
    description: 'Dates and nuts energy bites with chocolate chips',
    price: 4.99,
    image: 'https://images.unsplash.com/photo-1604423043492-41b0d4da9507?auto=format&w=800&q=75',
    category: 'snacks',
    nutritionalInfo: {
      calories: 180,
      protein: 6,
      carbs: 25,
      fat: 9
    },
    dietaryInfo: {
      isVegetarian: true,
      isVegan: true,
      isGlutenFree: true
    }
  },
  {
    id: '6',
    name: 'Teriyaki Tofu Bowl',
    description: 'Brown rice bowl with teriyaki tofu and steamed vegetables',
    price: 13.99,
    image: 'https://images.unsplash.com/photo-1546069901-5ec6a79120b0?auto=format&w=800&q=75',
    category: 'dinner',
    nutritionalInfo: {
      calories: 420,
      protein: 18,
      carbs: 60,
      fat: 16
    },
    dietaryInfo: {
      isVegetarian: true,
      isVegan: true,
      isGlutenFree: true
    }
  }
];

export function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <CartProvider>
      <AnimatePresence mode="wait">
        {isLoading ? (
          <LoadingAnimation key="loading" />
        ) : (
          <div className="min-h-screen bg-white">
            <Navigation />
            <div id="home">
              <Hero />
            </div>
            <ScrollReveal width="100%">
              <div id="menu">
                <MenuSection items={menuItems} />
              </div>
            </ScrollReveal>
            <ScrollReveal width="100%">
              <div id="about">
                <AboutSection />
              </div>
            </ScrollReveal>
            <ScrollReveal width="100%">
              <div id="testimonials">
                <TestimonialsSection />
              </div>
            </ScrollReveal>
            <ScrollReveal width="100%">
              <div id="sustainability">
                <SustainabilitySection />
              </div>
            </ScrollReveal>
            <ScrollReveal width="100%">
              <Footer />
            </ScrollReveal>
            <Cart />
          </div>
        )}
      </AnimatePresence>
    </CartProvider>
  );
}