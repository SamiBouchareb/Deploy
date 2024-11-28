import { Leaf, Recycle, Truck, Droplets } from 'lucide-react';

interface SustainabilityCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  stats: string;
}

const SustainabilityCard = ({ icon, title, description, stats }: SustainabilityCardProps) => (
  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
    <div className="flex flex-col items-center text-center">
      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
        <div className="text-green-600">{icon}</div>
      </div>
      <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="text-2xl font-bold text-green-600">{stats}</div>
    </div>
  </div>
);

export function SustainabilitySection() {
  const initiatives = [
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Local Sourcing",
      description: "Supporting local farmers and reducing food miles by sourcing ingredients within 100km radius",
      stats: "75% Local Produce"
    },
    {
      icon: <Recycle className="w-8 h-8" />,
      title: "Zero Waste",
      description: "Implementing comprehensive recycling and composting programs to minimize landfill waste",
      stats: "90% Waste Reduced"
    },
    {
      icon: <Droplets className="w-8 h-8" />,
      title: "Water Conservation",
      description: "Using advanced water-saving techniques and rainwater harvesting systems",
      stats: "2M Gallons Saved"
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Green Delivery",
      description: "Utilizing electric vehicles and optimized routes for eco-friendly delivery",
      stats: "-45% CO₂ Emissions"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Nourishing the Planet
          </h2>
          <p className="text-xl text-gray-600">
            Our commitment to sustainability goes beyond just serving healthy food.
            We're taking bold steps to protect our environment and create a better future.
          </p>
        </div>

        {/* Impact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {initiatives.map((initiative, index) => (
            <SustainabilityCard key={index} {...initiative} />
          ))}
        </div>

        {/* Featured Initiative */}
        <div className="bg-white rounded-3xl overflow-hidden shadow-xl">
          <div className="grid md:grid-cols-2">
            <div className="relative h-64 md:h-auto">
              <img
                src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80"
                alt="Sustainable farming"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="p-8 md:p-12 lg:p-16">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                Our 2024 Sustainability Pledge
              </h3>
              <p className="text-gray-600 mb-6">
                We're taking our commitment to the next level with ambitious goals:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-1 mr-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  </div>
                  <span className="text-gray-700">100% renewable energy in all our facilities</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-1 mr-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  </div>
                  <span className="text-gray-700">Eliminate single-use plastics completely</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-1 mr-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  </div>
                  <span className="text-gray-700">Carbon-neutral operations by 2025</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
