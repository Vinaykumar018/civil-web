import React from 'react';

const Philosophy = () => {
  const philosophyPoints = [
    {
      icon: "⚖️",
      title: "Integrity & Trust",
      description: "We build roads with unwavering integrity, ensuring transparency, ethical practices, and full compliance in every transaction."
    },
    {
      icon: "🚀",
      title: "Innovation & Technology",
      description: "By blending cutting-edge technology with traditional expertise, we create resilient infrastructure that connects communities efficiently."
    },
    {
      icon: "🏆",
      title: "Quality & Durability",
      description: "Quality is non-negotiable. We adhere to the highest benchmarks, ensuring the durability and long-term reliability of every structure we deliver."
    },
    {
      icon: "🌳",
      title: "Sustainability Focus",
      description: "Sustainability is inherent in our approach. We commit to eco-friendly methods and materials for a positive, long-term impact on the environment."
    }
  ];

  return (
    <section id="philosophy" className="py-16 md:py-24 bg-gray-50 relative overflow-hidden font-sans">
      
      {/* Subtle Background Accent */}
      <div className="absolute inset-0 bg-blue-50/50 opacity-30 z-0"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          
          {/* Header Section */}
          <div className="text-center mb-16 max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
              Our Guiding Philosophy
            </h2>
            <p className="text-xl text-gray-600">
              The fundamental principles that govern our construction practices and client relationships.
            </p>
          </div>

          {/* Core Philosophy Quote/Summary */}
          <div className="text-center max-w-5xl mx-auto mb-16 p-8 bg-white rounded-xl shadow-xl border-t-4 border-blue-600">
            <p className="text-xl md:text-2xl text-gray-800 leading-relaxed font-medium italic">
              "At Lallan Singh, construction isn't just business—it's a responsibility toward the nation's future. We build roads with integrity, innovation, and inclusivity. Our workforce, clients, and communities are equal partners in progress."
            </p>
          </div>

          {/* Philosophy Points Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {philosophyPoints.map((point, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 transition duration-300 transform hover:shadow-2xl hover:-translate-y-1"
              >
                <div className="flex items-center space-x-3 mb-3">
                    <div className="text-3xl text-blue-600">{point.icon}</div>
                    <h3 className="text-xl font-bold text-gray-900">{point.title}</h3>
                </div>
                
                <p className="text-gray-600 leading-relaxed text-sm">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  )
}

export default Philosophy;