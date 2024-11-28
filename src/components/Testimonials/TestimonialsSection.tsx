import { Star } from 'lucide-react';

interface Testimonial {
  name: string;
  rating: number;
  date: string;
  comment: string;
  image: string;
  verified: boolean;
}

const testimonials: Testimonial[] = [
  {
    name: "Sarah M.",
    rating: 5,
    date: "2 days ago",
    comment: "Best healthy fast food in Hamburg! The Buddha Bowl is incredible, and the staff is always friendly. Love how they source everything locally! 🌱",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    verified: true
  },
  {
    name: "Marcus K.",
    rating: 5,
    date: "1 week ago",
    comment: "Finally a fast food place where I don't feel guilty after eating! The green smoothies are amazing, and the delivery is always super quick. 🚀",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    verified: true
  },
  {
    name: "Elena R.",
    rating: 5,
    date: "3 days ago",
    comment: "The quinoa power bowl changed my lunch routine forever! Love the eco-friendly packaging too. This is the future of fast food! 🌍",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    verified: true
  },
  {
    name: "Thomas H.",
    rating: 5,
    date: "2 weeks ago",
    comment: "Perfect post-workout meals! High protein options and the portion sizes are great. The mobile app makes ordering so convenient. 💪",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
    verified: true
  },
  {
    name: "Laura B.",
    rating: 5,
    date: "5 days ago",
    comment: "Love their seasonal menu items! The autumn harvest bowl was incredible. Also appreciate their commitment to zero waste. ♻️",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
    verified: true
  },
  {
    name: "David W.",
    rating: 5,
    date: "1 month ago",
    comment: "The variety of vegan options is impressive! Their cashew cheese sauce is better than the real thing. A game-changer! 🌱",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    verified: true
  },
  {
    name: "Sophie K.",
    rating: 5,
    date: "4 days ago",
    comment: "Such a breath of fresh air in Hamburg's food scene! The staff really knows their stuff about nutrition. Love the weekly specials! ⭐",
    image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb",
    verified: true
  },
  {
    name: "Michael R.",
    rating: 5,
    date: "2 weeks ago",
    comment: "Best lunch spot near the office! The rewards program is great, and I love how they support local farmers. Win-win! 🏆",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
    verified: true
  }
];

// Duplicate testimonials for smooth infinite scroll
const extendedTestimonials = [...testimonials, ...testimonials];

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-green-50 overflow-hidden">
      <div className="container mx-auto px-4 mb-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-800 to-green-600 bg-clip-text text-transparent">
            What Our Customers Say
          </h2>
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <span className="text-xl font-semibold text-gray-800">4.9</span>
            <span className="text-gray-600">on Google Reviews</span>
          </div>
          <p className="text-xl text-gray-600">
            Join thousands of happy customers who have discovered a better way to eat on the go
          </p>
        </div>
      </div>

      {/* Infinite Scroll Container */}
      <div className="relative w-full">
        {/* Gradient Overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-white to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-white to-transparent z-10"></div>

        {/* Scrolling Content */}
        <div className="flex animate-scroll">
          {extendedTestimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex-none w-[400px] mx-4"
            >
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start gap-4 mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold">{testimonial.name}</h3>
                      {testimonial.verified && (
                        <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                          Verified
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 text-yellow-400 fill-yellow-400"
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-500">{testimonial.date}</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed">{testimonial.comment}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
