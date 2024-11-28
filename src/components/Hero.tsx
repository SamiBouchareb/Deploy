import { ArrowRight } from 'lucide-react';
import { memo } from 'react';

export const Hero = memo(function Hero() {
  return (
    <div className="relative min-h-[90vh] flex items-center pt-20 pb-10">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1920&q=80"
          alt="Fresh healthy food"
          loading="lazy"
          fetchPriority="high"
          decoding="async"
          className="w-full h-full object-cover brightness-50 will-change-transform"
          sizes="100vw"
        />
      </div>
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl text-white">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 md:mb-6">
            Fresh. Healthy. <span className="text-green-400">Fast.</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-6 md:mb-8">
            Experience the perfect blend of convenience and nutrition with our chef-crafted,
            health-conscious meals made from locally-sourced ingredients.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              className="bg-green-800 hover:bg-green-900 text-white px-6 sm:px-8 py-3 rounded-full flex items-center justify-center gap-2 transition-transform hover:scale-105 will-change-transform text-sm sm:text-base"
            >
              Order Now <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
            <button 
              className="border-2 border-white hover:bg-white hover:text-black text-white px-6 sm:px-8 py-3 rounded-full transition-transform hover:scale-105 will-change-transform text-sm sm:text-base"
            >
              View Menu
            </button>
          </div>
        </div>
      </div>
    </div>
  );
});