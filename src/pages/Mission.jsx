import React from 'react';

const MissionVision = () => {
  // Vision items (What we strive to achieve - the long-term goal)
  const visionItems = [
    {
      icon: "🥇",
      title: "Quality Excellence",
      description: "Build durable roads and infrastructure that meet the highest international quality standards."
    },
    {
      icon: "⏱️",
      title: "Timely Delivery",
      description: "Deliver every project on time, every time, establishing reliability as our hallmark."
    },
    {
      icon: "🤝",
      title: "Government Trust",
      description: "Remain the trusted and preferred partner for critical government infrastructure projects nationwide."
    },
    {
      icon: "🌍",
      title: "Sustainable Methods",
      description: "Utilize eco-friendly methods and materials for construction, ensuring sustainable environmental growth."
    },
    {
      icon: "💡",
      title: "Constant Innovation",
      description: "Innovate and continuously upgrade our techniques and technology for better, more efficient construction."
    }
  ];

  // Mission items (How we will achieve it - the company's purpose)
  const missionItems = [
    {
      icon: "🛣️",
      title: "Infrastructure Leadership",
      description: "To be a recognized leader in India’s road infrastructure development, driving progress and connectivity."
    },
    {
      icon: "✨",
      title: "Benchmark Setting",
      description: "To set new benchmarks in project quality, site safety, and construction innovation across the industry."
    },
    {
      icon: "🌱",
      title: "Smart Connectivity",
      description: "To enhance regional and national connectivity through sustainable and smart construction practices."
    },
    {
      icon: "⭐",
      title: "Preferred Partner",
      description: "To be the preferred partner for complex and high-value infrastructure projects for both government and private sectors."
    },
    {
      icon: "🧑‍🤝‍🧑",
      title: "Community Empowerment",
      description: "To empower communities by building reliable, future-ready road networks that support economic growth."
    }
  ];

  return (
    <section id="mission-vision" className="py-16 md:py-24 bg-white relative overflow-hidden font-sans">
      
      {/* Subtle Background Accent */}
      <div className="absolute inset-0 bg-blue-50/50 opacity-50 z-0"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-16 max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
              Our Direction
            </h2>
            <p className="text-xl text-gray-600">
              Defining the purpose (Mission) and the goals (Vision) that drive our every project.
            </p>
          </div>

          {/* Mission and Vision Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* MISSION Panel */}
            <div className="bg-blue-900 text-white p-8 md:p-12 rounded-xl shadow-2xl shadow-blue-900/40">
              <h3 className="text-4xl font-bold mb-4 border-b-2 border-blue-400 pb-3 inline-block">
                Our Mission
              </h3>
              <p className="text-blue-100 mb-8 text-lg">
                **Our Core Purpose:** How we operate and why we exist—to build, connect, and empower.
              </p>

              <div className="space-y-6">
                {missionItems.map((item, index) => (
                  <div key={index} className="flex space-x-4 items-start">
                    <div className="flex-shrink-0 text-3xl mt-1">{item.icon}</div>
                    <div>
                      <h4 className="text-xl font-semibold mb-1 text-blue-200">
                        {item.title}
                      </h4>
                      <p className="text-sm text-blue-100 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* VISION Panel */}
            <div className="bg-white p-8 md:p-12 rounded-xl shadow-2xl shadow-gray-300/50 border border-gray-100">
              <h3 className="text-4xl font-bold mb-4 text-gray-900 border-b-2 border-gray-300 pb-3 inline-block">
                Our Vision
              </h3>
              <p className="text-gray-600 mb-8 text-lg">
                **Our Long-Term Goal:** What the future looks like when we successfully execute our mission.
              </p>

              <div className="space-y-6">
                {visionItems.map((item, index) => (
                  <div key={index} className="flex space-x-4 items-start">
                    <div className="flex-shrink-0 text-3xl mt-1">{item.icon}</div>
                    <div>
                      <h4 className="text-xl font-semibold mb-1 text-gray-800">
                        {item.title}
                      </h4>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
          
          {/* Final Callout/Summary */}
          <div className="mt-16 text-center max-w-4xl mx-auto bg-gray-100 rounded-xl p-6 border-l-4 border-blue-600">
            <p className="text-lg text-gray-700 italic font-medium">
              "We don't just build roads; we build the future arteries of the nation, connecting people, products, and prosperity."
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MissionVision;