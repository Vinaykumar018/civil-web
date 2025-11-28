import React from 'react';

const Projects = () => {
  // Data for Plant and Machinery
  const machinery = [
    { name: "Welding Rectifier / IGBT 500Amp M/C", quantity: "15 nos." },
    { name: "Mig Welding Machine IGBT M/C 500 Amp", quantity: "05 nos." },
    { name: "Welding Machine 200 to 300 Amp", quantity: "07 nos." },
    { name: "Mother oven", quantity: "04 nos." },
    { name: "Portable oven", quantity: "10 nos." },
    { name: "Magnetic Core Drill Machine 60mm", quantity: "02 nos." },
    { name: "PUG Cutting Set", quantity: "05 nos." },
    { name: "Hand Cutting Set", quantity: "05 nos." },
    { name: "Grinding M/c AG7 / 5", quantity: "08 nos." },
    { name: "Chopsaw M/c", quantity: "03 nos." }
  ];

  // Data for Ongoing Projects with Image and Status enhancement
  const ongoingProjects = [
    {
      name: "Simplex Infra Panki Power House",
      type: "TG, MILL BUNKER, Un FOPH, CUPO, Kanwar Enterprises (P) Ltd. - Fly ash Silo and Stair case",
      image: "/images/14.jpg", // Placeholder for /images/12.jpg
      status: "In Progress"
    },
    {
      name: "L&T Jamnagar – Reliance Giga Factory",
      type: "PV Solar Project - Construction Support",
      image: "/images/12.jpg",
      status: "Ongoing"
    },
    {
      name: "Gwalior Railway Station",
      type: "DECK SHEET WORK", 
      image: "/images/8.jpg", // Placeholder for /images/8.jpg
      status: "Ongoing"
    },
    {
      name: "Gwalior Airport",
      type: "SKY LIGHT & FALSE CEILING WORK",
      image: "/images/9.jpg", // Placeholder for /images/9.jpg
      status: "Completion Phase"
    }
  ];

  // Helper function to determine status badge color
  const getStatusClasses = (status) => {
    switch (status) {
      case "In Progress":
      case "Ongoing":
        return "bg-yellow-100 text-yellow-800";
      case "Completion Phase":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <section id="projects" className="py-16 md:py-24 bg-white relative overflow-hidden font-sans">
      
      {/* Subtle Background Accent */}
      <div className="absolute inset-0 bg-blue-50/50 opacity-30 z-0"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          
          {/* Header Section */}
          <div className="text-center mb-16 max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
              Our Projects & Assets
            </h2>
            <p className="text-xl text-gray-600">
              Showcasing the infrastructure we are building and the high-tech machinery that makes it possible.
            </p>
          </div>

          {/* Ongoing Projects Section */}
          <div className="mb-20">
            <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              Active Projects
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {ongoingProjects.map((project, index) => (
                <div key={index} className="bg-gray-50 rounded-xl shadow-lg border border-gray-200 overflow-hidden group">
                  <div className="relative overflow-hidden">
                    {/* Project Image */}
                    <img 
                      src={project.image} 
                      alt={project.name} 
                      className="w-full h-56 object-cover transition duration-500 group-hover:scale-105"
                      // Fallback for image loading error
                      onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/600x400/000000/ffffff?text=Project+Image" }}
                    />
                    
                    {/* Status Badge */}
                    <span className={`absolute top-4 right-4 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full ${getStatusClasses(project.status)}`}>
                      {project.status}
                    </span>
                  </div>
                  
                  <div className="p-6">
                    <h4 className="text-2xl font-semibold mb-2 text-blue-700">
                      {project.name}
                    </h4>
                    <p className="text-gray-500 text-sm italic mb-3">
                        {project.type}
                    </p>
                    <p className="text-gray-700 leading-relaxed text-sm">
                      Detailed description of the construction scope and client requirements.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Plant and Machinery Section */}
          <div>
            <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              Plant and Machinery Assets
            </h3>
            <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
                A selection of our essential, high-performance equipment ensuring precision and efficiency on site.
            </p>
            
            <div className="bg-gray-100 rounded-xl shadow-inner p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
                {machinery.map((item, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-gray-200 last:border-b-0">
                    <div className="flex items-center space-x-2">
                        <span className="text-blue-500 font-bold">⚙️</span>
                        <span className="text-gray-700 font-medium">{item.name}</span>
                    </div>
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-md">
                      {item.quantity}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Projects;