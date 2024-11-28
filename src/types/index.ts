export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'breakfast' | 'lunch' | 'dinner' | 'snacks' | 'beverages';
  nutritionalInfo: {
    calories: number;
    protein: number;
    carbs: number;
    fat: number;
  };
  dietaryInfo: {
    isVegetarian: boolean;
    isVegan: boolean;
    isGlutenFree: boolean;
  };
}

export interface Location {
  id: string;
  name: string;
  address: string;
  hours: string;
  phone: string;
  coordinates: {
    lat: number;
    lng: number;
  };
}