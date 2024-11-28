import { useState, useEffect, useCallback, useMemo, memo } from 'react';
import { MenuItem } from '../../types';
import { Filter, ShoppingBag, Leaf, Wheat, Salad } from 'lucide-react';
import { useCart } from '../../context/CartContext';

interface MenuSectionProps {
  items: MenuItem[];
}

type Category = 'all' | MenuItem['category'];

const MenuCard = memo(function MenuCard({ item }: { item: MenuItem }) {
  const { dispatch } = useCart();

  const handleAddToCart = () => {
    dispatch({ type: 'ADD_ITEM', payload: item });
  };

  return (
    <div className="flex-shrink-0 w-[300px] bg-white rounded-xl shadow-lg overflow-hidden transform transition-all hover:scale-105 will-change-transform">
      <div className="relative h-48 overflow-hidden">
        <img
          src={`${item.image}?auto=format&fit=crop&w=400&q=80`}
          alt={item.name}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover transition-transform hover:scale-110"
          sizes="(max-width: 768px) 100vw, 400px"
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-md">
          <span className="text-green-800 font-bold">${item.price.toFixed(2)}</span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
        <p className="text-gray-600 text-sm mb-4">{item.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {item.dietaryInfo.isVegetarian && (
            <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full flex items-center gap-1">
              <Leaf className="w-3 h-3" /> Vegetarian
            </span>
          )}
          {item.dietaryInfo.isVegan && (
            <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full flex items-center gap-1">
              <Salad className="w-3 h-3" /> Vegan
            </span>
          )}
          {item.dietaryInfo.isGlutenFree && (
            <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full flex items-center gap-1">
              <Wheat className="w-3 h-3" /> Gluten Free
            </span>
          )}
        </div>

        <div className="border-t pt-4">
          <div className="grid grid-cols-3 gap-2 text-xs text-gray-500 mb-4">
            <div className="text-center">
              <div className="font-semibold">{item.nutritionalInfo.calories}</div>
              <div>calories</div>
            </div>
            <div className="text-center">
              <div className="font-semibold">{item.nutritionalInfo.protein}g</div>
              <div>protein</div>
            </div>
            <div className="text-center">
              <div className="font-semibold">{item.nutritionalInfo.carbs}g</div>
              <div>carbs</div>
            </div>
          </div>
        </div>

        <button 
          onClick={handleAddToCart}
          className="w-full bg-green-800 text-white py-2 rounded-full hover:bg-green-700 transition-colors flex items-center justify-center gap-2 group"
        >
          <ShoppingBag className="w-4 h-4 transform group-hover:scale-110 transition-transform" />
          Add to Order
        </button>
      </div>
    </div>
  );
});

export const MenuSection = memo(function MenuSection({ items }: MenuSectionProps) {
  const [filters, setFilters] = useState({
    vegetarian: false,
    vegan: false,
    glutenFree: false
  });

  const [selectedCategory, setSelectedCategory] = useState<Category>('all');
  
  const categories = useMemo(() => 
    ['all', ...new Set(items.map(item => item.category))] as Category[],
    [items]
  );

  const filteredItems = useMemo(() => 
    items.filter(item => {
      if (selectedCategory !== 'all' && item.category !== selectedCategory) return false;
      if (filters.vegetarian && !item.dietaryInfo.isVegetarian) return false;
      if (filters.vegan && !item.dietaryInfo.isVegan) return false;
      if (filters.glutenFree && !item.dietaryInfo.isGlutenFree) return false;
      return true;
    }),
    [items, selectedCategory, filters]
  );

  const duplicatedItems = useMemo(() => 
    [...filteredItems, ...filteredItems, ...filteredItems],
    [filteredItems]
  );

  const handleFilterChange = useCallback((filterKey: keyof typeof filters) => {
    setFilters(prev => ({
      ...prev,
      [filterKey]: !prev[filterKey]
    }));
  }, []);

  useEffect(() => {
    const scrollContainer = document.querySelector('.menu-scroll-container');
    if (!scrollContainer || filteredItems.length === 0) return;

    const scrollWidth = scrollContainer.scrollWidth;
    const speed = scrollWidth / 50;

    const stylesheet = document.createElement('style');
    stylesheet.textContent = `
      @keyframes scroll {
        0% { transform: translateX(0); }
        100% { transform: translateX(-33.33%); }
      }
    `;
    document.head.appendChild(stylesheet);

    return () => {
      document.head.removeChild(stylesheet);
    };
  }, [filteredItems]);

  return (
    <section id="menu" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Our Menu</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our selection of healthy, delicious meals prepared with fresh ingredients
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full text-sm transition-all transform hover:scale-105 ${
                selectedCategory === category
                  ? 'bg-green-800 text-white shadow-lg'
                  : 'bg-white border border-gray-200 hover:border-green-800 hover:shadow'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        <div className="flex items-center justify-center gap-4 mb-12">
          <Filter className="w-5 h-5 text-gray-500" />
          <div className="flex gap-4">
            {Object.entries(filters).map(([key, value]) => (
              <button
                key={key}
                onClick={() => handleFilterChange(key as keyof typeof filters)}
                className={`px-4 py-2 rounded-full text-sm transition-all transform hover:scale-105 ${
                  value
                    ? 'bg-green-800 text-white shadow-md'
                    : 'bg-white border border-gray-200 hover:border-green-800 hover:shadow'
                }`}
              >
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className="overflow-hidden">
          <div 
            className="menu-scroll-container flex gap-8 py-4"
            style={{
              animation: filteredItems.length > 0 ? 'scroll 60s linear infinite' : 'none',
              width: 'fit-content'
            }}
          >
            {duplicatedItems.map((item, index) => (
              <MenuCard key={`${item.id}-${index}`} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});