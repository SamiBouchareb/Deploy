import React, { useState } from 'react';
import { Send } from 'lucide-react';

export function NewsletterForm() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    setEmail('');
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4 sm:mt-0">
      <div className="flex flex-col sm:flex-row gap-4">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-green-800"
          required
        />
        <button
          type="submit"
          className="bg-green-800 text-white px-6 py-2 rounded-full hover:bg-green-900 transition-colors flex items-center justify-center gap-2"
        >
          Subscribe <Send className="w-4 h-4" />
        </button>
      </div>
    </form>
  );
}