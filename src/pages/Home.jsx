import { Link } from 'react-router-dom'

const Home = () => {
  const stats = [
    { number: "25+", label: "Years Experience", color: "from-blue-600 to-blue-800" },
    { number: "50+", label: "Projects Completed", color: "from-green-600 to-green-800" },
    { number: "100%", label: "Quality Focus", color: "from-amber-600 to-amber-800" },
    { number: "Govt", label: "Approved Partner", color: "from-indigo-600 to-indigo-800" }
  ]

  const projectHighlights = [
    {
      title: "Road Construction",
      description: "Highways & Expressways",
      image: "/images/1.png",
      gradient: "from-blue-500 to-blue-700"
    },
    {
      title: "Bridge Construction", 
      description: "Flyovers & Overbridges",
      image: "/images/shutterstock_108982223-1024x756.jpg",
      gradient: "from-emerald-500 to-emerald-700"
    },
    {
      title: "Infrastructure",
      description: "Public Works Development",
      image: "/images/12.jpg",
      gradient: "from-orange-500 to-orange-700"
    }
  ]

  const ongoingProjects = [
    {
      name: "Panki Power House Project",
      type: "Power Infrastructure",
      image: "/images/12.jpg",
      status: "In Progress"
    },
    {
      name: "Gwalior Railway Station",
      type: "DECK SHEET WORK", 
      image: "/images/8.jpg",
      status: "Ongoing"
    },
    {
      name: "Gwalior Airport",
      type: "SKY LIGHT & FALSE CEILING WORK",
      image: "/images/9.jpg",
      status: "Completion Phase"
    }
  ]

  const machinery = [
    {
      name: "Welding Machines",
      image: "/images/new-product-500x500.webp",
      count: "15+ Units"
    },
    {
      name: "Construction Equipment",
      image: "/images/List-of-Construction-Equipments-Civil-Engicon.jpg",
      count: "20+ Types"
    },
    {
      name: "Heavy Machinery",
      image: "/images/7.png",
      count: "10+ Units"
    },
    {
      name: "Tools & Equipment",
      image: "/images/fe7699d9456c0e5b87c8ac0f851ecdde.jpg",
      count: "50+ Items"
    }
  ]

  const trustFeatures = [
    {
      icon: "🏛️",
      title: "Government Approved",
      description: "Registered contractor for state and central government projects"
    },
    {
      icon: "⭐", 
      title: "Quality Certified",
      description: "Adherence to strict quality standards and benchmarks"
    },
    {
      icon: "⚡",
      title: "Timely Delivery",
      description: "Proven track record of on-time project completion"
    }
  ]

  return (
    <section className="min-h-screen bg-white">
      {/* Enhanced Hero Section */}
      <div className="relative bg-gradient-to-br from-white via-blue-50 to-indigo-100 text-gray-900 min-h-screen flex items-center overflow-hidden">
  
  {/* Soft Background Circles */}
  <div className="absolute inset-0">
    <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-300 rounded-full mix-blend-multiply filter blur-2xl opacity-25 animate-pulse"></div>
    <div className="absolute top-3/4 right-1/4 w-64 h-64 bg-indigo-300 rounded-full mix-blend-multiply filter blur-2xl opacity-25 animate-pulse animation-delay-2000"></div>
  </div>

  <div className="container mx-auto px-4 relative z-10">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* LEFT TEXT */}
        <div className="space-y-8">
          <div className="space-y-4">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-sm rounded-full px-6 py-3 border border-blue-200">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-blue-800 text-sm font-semibold">
                Since 1999 • Trusted Government Contractor
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-gray-900">
              Building
              <span className="block bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mt-2">
                India's Future
              </span>
            </h1>

            {/* Description */}
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed max-w-2xl">
              Lallan Singh Contractor Pvt. Ltd. — Premier infrastructure development with 
              <span className="font-semibold text-blue-700"> 25+ years </span>
              of excellence in government road & bridge projects across Uttar Pradesh.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              to="/projects"
              className="group bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3"
            >
              <span>Explore Our Projects</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>

            <Link 
              to="/contact"
              className="group border border-blue-300 bg-white hover:bg-blue-50 text-blue-700 px-8 py-4 rounded-xl font-semibold shadow hover:shadow-md transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3"
            >
              <span>Get Free Consultation</span>
              <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28l1.498 4.493-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257 4.493 1.498V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </Link>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative">
          <div className="relative group">
            <div className="absolute -inset-4 bg-blue-300 rounded-3xl blur opacity-40 group-hover:opacity-60 transition"></div>

            <div className="relative bg-white shadow-lg rounded-2xl p-3 border border-blue-100">
              <img 
                src="/images/1.png"
                alt="Construction Projects"
                className="w-full h-96 object-cover rounded-xl transform group-hover:scale-105 transition duration-700"
              />
            </div>
          </div>

          {/* Floating Badge */}
          <div className="absolute -bottom-6 -left-6 bg-blue-600 text-white rounded-2xl px-8 py-6 shadow-xl transform hover:scale-110 transition duration-300">
            <div className="text-center">
              <div className="text-2xl font-bold">25+</div>
              <div className="text-xs font-semibold">Years Excellence</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</div>


      {/* Enhanced Stats Section */}
      <div className="section-padding bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-cyan-600"></div>
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="group text-center">
                  <div className={`bg-gradient-to-br ${stat.color} text-white p-8 rounded-2xl shadow-lg transform group-hover:scale-105 transition duration-500`}>
                    <div className="text-3xl md:text-4xl font-bold mb-3">{stat.number}</div>
                    <div className="text-blue-100 font-semibold text-sm">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Project Highlights */}
      <div className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Expertise</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Specializing in government infrastructure projects with a proven track record of 
                quality, innovation, and timely delivery across Uttar Pradesh.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {projectHighlights.map((project, index) => (
                <div key={index} className="group cursor-pointer">
                  <div className="relative overflow-hidden rounded-2xl mb-6">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-700"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-0 group-hover:opacity-90 transition duration-500 flex items-end p-6`}>
                      <div className="text-white transform translate-y-4 group-hover:translate-y-0 transition duration-500">
                        <div className="text-lg font-semibold">{project.description}</div>
                      </div>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{project.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Ongoing Projects */}
      <div className="section-padding bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Current <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Projects</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Actively developing infrastructure projects that shape India's future
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {ongoingProjects.map((project, index) => (
                <div key={index} className="group bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden">
                  <div className="relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.name}
                      className="w-full h-48 object-cover transform group-hover:scale-110 transition duration-700"
                    />
                    <div className="absolute top-4 right-4">
                      <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                        {project.status}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition duration-300">
                      {project.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">{project.type}</p>
                    <Link to="/projects" className="inline-flex items-center text-green-600 font-semibold group/link">
                      <span>Project Details</span>
                      <svg className="w-4 h-4 ml-2 transform group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Machinery Section */}
      <div className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Modern <span className="bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">Equipment</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                State-of-the-art machinery ensuring quality and efficiency in every project
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {machinery.map((item, index) => (
                <div key={index} className="group text-center">
                  <div className="bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl p-6 mb-4 transform group-hover:scale-105 transition duration-500">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-full h-32 object-contain mx-auto transform group-hover:scale-110 transition duration-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <div className="text-lg font-semibold text-gray-900">{item.name}</div>
                    <div className="text-sm text-amber-600 font-medium">{item.count}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <section className="py-16 bg-white">
  <div className="container mx-auto px-4">
    <div className="max-w-6xl mx-auto">

      {/* Heading */}
      <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
               Why  <span className="bg-gradient-to-r from-pink-600 to-emerald-600 bg-clip-text text-transparent">Choose Us</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                 With 25+ years of experience and numerous successful government projects,
          we are the preferred choice for infrastructure development in Uttar Pradesh.
              </p>
            </div>

      {/* Features */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {trustFeatures.map((feature, index) => (
          <div
            key={index}
            className="text-center bg-white rounded-xl p-6 border border-gray-200 hover:border-blue-300 transition duration-300"
          >
            <div className="text-4xl mb-4 text-blue-800">
              {feature.icon}
            </div>
            <h3 className="text-lg font-semibold text-blue-900 mb-2">
              {feature.title}
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>

      {/* Button */}
      <div className="text-center mt-12">
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 px-10 py-3 rounded-lg border border-blue-800 text-blue-800 font-semibold text-base hover:bg-blue-800 hover:text-white transition-colors duration-300"
        >
          <span>Start Your Project With Us</span>
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 10V3L4 14h7v7l9-11h-7z"
            />
          </svg>
        </Link>
      </div>

    </div>
  </div>
</section>


      
    </section>
  )
}

export default Home