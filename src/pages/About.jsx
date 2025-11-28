import React from 'react';

const About = () => {
  const features = [
    {
      icon: "🏗️",
      title: "25+ Years Experience",
      description: "Quarter century of excellence in construction and infrastructure development"
    },
    {
      icon: "🛣️",
      title: "Government Projects",
      description: "Extensive experience working with state and central government agencies"
    },
    {
      icon: "⭐",
      title: "Quality Standards",
      description: "Adherence to strict quality benchmarks and timely project execution"
    },
    {
      icon: "🌱",
      title: "Sustainable Solutions",
      description: "Commitment to eco-friendly and sustainable construction practices"
    }
  ];

  const sectors = [
    { name: "Roads & Highways", icon: "🛣️" },
    { name: "Bridge Construction", icon: "🌉" },
    { name: "Irrigation Systems", icon: "💧" },
    { name: "Water Supply", icon: "🚰" },
    { name: "Civil Construction", icon: "🏢" },
    { name: "Infrastructure", icon: "🏗️" }
  ];

  const companyInfo = [
    { label: "Business Type", value: "Construction Services" },
    { label: "Founded", value: "1999" },
    { label: "Legal Status", value: "Private Limited" },
    { label: "GST Number", value: "09AABCL6808K1Z7" }
  ];

  return (
    // Use a simpler, subtle background for 'simplistic'
    <section id="about" className="py-16 md:py-24 bg-gray-50 relative overflow-hidden">
      
      {/* Subtle Background Accent (Less distracting than a pattern) */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100/50 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-100/50 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          
          {/* Header Section */}
          <div className="text-center mb-16 max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
              About Lallan Singh Contractor Pvt. Ltd.
            </h2>
            <p className="text-xl text-gray-600">
              Building India's infrastructure with **excellence and innovation** for over two decades.
            </p>
          </div>

          {/* --- */}

          {/* Main Content with Image (Cleaned up the styling significantly) */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center mb-20">
            
            {/* Text Content - Spanning 3/5 on large screens */}
            <div className="space-y-6 lg:col-span-3">
              <span className="inline-block bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold mb-2">
                Pioneering Since 1999
              </span>
              
              <h3 className="text-3xl font-bold text-gray-800 leading-snug">
                Trusted Partner in Infrastructure Development 
              </h3>
              
              <p className="text-gray-700 leading-relaxed text-lg">
                <strong className="text-blue-700">Lallan Singh Contractor Pvt. Ltd.</strong> is a leading road construction company with extensive experience in **government projects**. We specialize in building durable roads, highways, and bridges, consistently adhering to strict quality benchmarks.
              </p>

              <p className="text-gray-700 leading-relaxed text-lg">
                With a strong track record of **timely execution and compliance**, we have successfully completed numerous contracts for state and central government agencies. Our commitment to innovation, sustainability, and cost-effective solutions makes us a trusted partner in India's rapid infrastructure growth.
              </p>

              {/* Simple Callout/Quote - Easier on the eyes */}
              <blockquote className="border-l-4 border-blue-600 pl-4 py-2 italic text-gray-600">
                "Led by skilled professionals, we continue to contribute to the nation's connectivity and development through quality infrastructure projects."
              </blockquote>
            </div>

            {/* Image Section - Spanning 2/5 on large screens */}
            <div className="relative lg:col-span-2">
              <div className="rounded-xl overflow-hidden shadow-2xl shadow-blue-200/50 transition duration-500 hover:scale-[1.02] bg-white">
                <img 
                  src="/images/1.png" 
                  alt="Lallan Singh Contractor Projects" 
                  className="w-full h-full object-cover"
                  style={{ aspectRatio: '1/1' }}
                />
              </div>
              
              {/* Floating Stats - Larger, more impactful */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl p-5 shadow-xl border-4 border-white transform rotate-3 transition duration-500 hover:rotate-0">
                <div className="text-center">
                  <div className="text-3xl font-extrabold text-blue-700">
                    50+
                  </div>
                  <div className="text-sm font-medium text-gray-600 mt-1">
                    Major Projects Completed
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* --- */}

          {/* Features Grid (Simplified Cards) */}
          <div className="mb-20">
            <h3 className="text-3xl font-bold text-gray-800 text-center mb-8">
              Why Choose Us?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-xl p-6 transition duration-300 transform hover:shadow-lg hover:bg-blue-50 border border-gray-100 text-center"
                >
                  <div className="text-4xl mb-3 flex justify-center">{feature.icon}</div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* --- */}

          {/* Sectors of Expertise (Cleaner List Format) */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-20">
            <h3 className="text-3xl font-bold text-gray-800 text-center mb-8">
              Sectors of Expertise
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {sectors.map((sector, index) => (
                <div 
                  key={index} 
                  className="flex items-center space-x-2 bg-blue-50 text-blue-800 px-4 py-2 rounded-full font-medium text-sm transition duration-300 hover:bg-blue-100 hover:shadow-md"
                >
                  <div className="text-base">{sector.icon}</div>
                  <span>{sector.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* --- */}

          {/* Simplified Company Info (Inline Table Look) */}
          <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg p-6 border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">
              Company Snapshot
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-gray-200">
              {companyInfo.map((info, index) => (
                <div key={index} className="py-4 sm:py-0 px-4">
                  <div className="text-xs font-bold uppercase text-blue-600 mb-1 tracking-wider">
                    {info.label}
                  </div>
                  <div className="text-lg font-semibold text-gray-800 break-words">
                    {info.value}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;