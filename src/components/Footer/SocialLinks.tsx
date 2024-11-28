import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

export function SocialLinks() {
  return (
    <div className="flex space-x-6">
      <a href="#" className="text-gray-300 hover:text-white transition-colors">
        <Facebook className="w-6 h-6" />
      </a>
      <a href="#" className="text-gray-300 hover:text-white transition-colors">
        <Instagram className="w-6 h-6" />
      </a>
      <a href="#" className="text-gray-300 hover:text-white transition-colors">
        <Twitter className="w-6 h-6" />
      </a>
    </div>
  );
}