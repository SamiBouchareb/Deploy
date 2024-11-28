import { Leaf, Truck, Heart, Users, MapPin, Clock, Sparkles } from 'lucide-react';

export function AboutSection() {
  const founders = [
    {
      name: 'Sami',
      role: 'Culinary Innovation',
      image: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5',
      quote: 'Our mission is to revolutionize fast food by making it both healthy and delicious.'
    },
    {
      name: 'Hoang',
      role: 'Sustainability Director',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7',
      quote: 'We believe in creating a sustainable future through mindful food choices.'
    },
    {
      name: 'Seid',
      role: 'Operations Manager',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
      quote: 'Efficiency meets excellence in every meal we serve.'
    },
    {
      name: 'Elzan',
      role: 'Customer Experience',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
      quote: "Every customer's smile is a testament to our dedication."
    },
    {
      name: 'Louis',
      role: 'Health & Nutrition Director',
      image: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79',
      quote: "Crafting meals that nourish both body and soul."
    },
    {
      name: 'Nico',
      role: 'Marketing & Brand Strategy',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a',
      quote: "Building a brand that resonates with health-conscious customers."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-600">
                <p className="text-lg">
                  Born in the vibrant heart of Hamburg, Dago emerged from a shared vision 
                  of five passionate individuals who believed that fast food could be 
                  both nutritious and delicious.
                </p>
                <p className="text-lg">
                  In 2024, what started as late-night conversations about revolutionizing 
                  the food industry has transformed into Hamburg&apos;s most promising healthy 
                  fast food chain.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1504674900247-0877df9cc836"
                alt="Healthy food preparation"
                className="rounded-2xl shadow-xl transform hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute -bottom-6 -left-6 bg-green-800 text-white p-4 rounded-lg shadow-lg">
                <p className="text-sm font-semibold">Founded in Hamburg</p>
                <p className="text-2xl font-bold">2024</p>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="max-w-7xl mx-auto mb-20">
          <h3 className="text-3xl font-bold text-center mb-12">Our Core Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                icon: <Heart className="w-6 h-6" />,
                title: 'Health First',
                description: 'Nutritious meals that fuel your lifestyle'
              },
              {
                icon: <Sparkles className="w-6 h-6" />,
                title: 'Quality Ingredients',
                description: 'Fresh, locally-sourced produce'
              },
              {
                icon: <Clock className="w-6 h-6" />,
                title: 'Fast Service',
                description: 'Quick preparation without compromising quality'
              },
              {
                icon: <MapPin className="w-6 h-6" />,
                title: 'Local Impact',
                description: 'Supporting Hamburg&apos;s local community'
              }
            ].map((value, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  {value.icon}
                </div>
                <h4 className="text-xl font-semibold mb-2">{value.title}</h4>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Founders Section */}
        <div className="max-w-7xl mx-auto mb-20">
          <h3 className="text-3xl font-bold text-center mb-4">Meet Our Founders</h3>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            Five friends united by a passion for healthy food and sustainable business
            practices, working together to transform Hamburg&apos;s fast food scene.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {founders.map((founder, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300"
              >
                <div className="relative h-48">
                  <img
                    src={founder.image}
                    alt={founder.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h4 className="font-bold text-lg">{founder.name}</h4>
                    <p className="text-sm opacity-90">{founder.role}</p>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-gray-600 text-sm italic">{founder.quote}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mission & Impact */}
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-white to-green-50 rounded-3xl shadow-2xl overflow-hidden">
            <div className="p-8 md:p-12">
              {/* Header */}
              <div className="text-center mb-16">
                <h3 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-800 to-green-600 bg-clip-text text-transparent">
                  Our Mission & Impact
                </h3>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Revolutionizing fast food in Hamburg through sustainable practices, 
                  community engagement, and unwavering commitment to health and quality.
                </p>
              </div>

              {/* Stats Section */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                {[
                  {
                    value: '100%',
                    label: 'Eco-Friendly Packaging',
                    description: 'All our packaging is biodegradable'
                  },
                  {
                    value: '80%',
                    label: 'Local Ingredients',
                    description: 'Sourced from Hamburg region'
                  },
                  {
                    value: '2.5T',
                    label: 'Food Saved Monthly',
                    description: 'Through our zero-waste initiative'
                  }
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow text-center group hover:-translate-y-1 transform transition-transform duration-300"
                  >
                    <div className="text-4xl font-bold text-green-800 mb-2 group-hover:scale-110 transition-transform">
                      {stat.value}
                    </div>
                    <h4 className="text-xl font-semibold mb-2">{stat.label}</h4>
                    <p className="text-gray-600">{stat.description}</p>
                  </div>
                ))}
              </div>

              {/* Impact Areas Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                <div className="space-y-8">
                  <h4 className="text-2xl font-bold mb-6">Environmental Impact</h4>
                  <div className="space-y-6">
                    {[
                      {
                        icon: <Leaf className="w-6 h-6 text-green-800" />,
                        title: 'Sustainable Sourcing',
                        description: 'Direct partnerships with organic farms, reducing transportation emissions and supporting local agriculture.'
                      },
                      {
                        icon: <Truck className="w-6 h-6 text-green-800" />,
                        title: 'Green Delivery',
                        description: 'Electric vehicle fleet for deliveries, minimizing our carbon footprint in urban areas.'
                      }
                    ].map((item, index) => (
                      <div key={index} className="flex gap-4 items-start bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                          {item.icon}
                        </div>
                        <div>
                          <h5 className="font-semibold text-lg mb-2">{item.title}</h5>
                          <p className="text-gray-600">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-8">
                  <h4 className="text-2xl font-bold mb-6">Community Impact</h4>
                  <div className="space-y-6">
                    {[
                      {
                        icon: <Users className="w-6 h-6 text-green-800" />,
                        title: 'Local Employment',
                        description: 'Creating over 50 jobs in Hamburg, with focus on youth employment and career development.'
                      },
                      {
                        icon: <Heart className="w-6 h-6 text-green-800" />,
                        title: 'Community Programs',
                        description: 'Weekly food education workshops and partnerships with local schools to promote healthy eating habits.'
                      }
                    ].map((item, index) => (
                      <div key={index} className="flex gap-4 items-start bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                          {item.icon}
                        </div>
                        <div>
                          <h5 className="font-semibold text-lg mb-2">{item.title}</h5>
                          <p className="text-gray-600">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Future Goals */}
              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <h4 className="text-2xl font-bold mb-6 text-center">Our 2024 Commitments</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    {
                      goal: 'Carbon Neutral',
                      timeline: 'By December 2024',
                      description: 'Achieving net-zero emissions through renewable energy and offset programs'
                    },
                    {
                      goal: 'Zero Food Waste',
                      timeline: 'Ongoing Initiative',
                      description: 'Implementing AI-driven inventory management and composting programs'
                    },
                    {
                      goal: 'Community Growth',
                      timeline: 'Year-round',
                      description: 'Expanding our education programs to reach 1000+ students in Hamburg'
                    }
                  ].map((item, index) => (
                    <div key={index} className="text-center p-4 rounded-xl bg-green-50 hover:bg-green-100 transition-colors">
                      <h5 className="font-bold text-lg mb-2">{item.goal}</h5>
                      <p className="text-sm text-green-800 font-semibold mb-2">{item.timeline}</p>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}