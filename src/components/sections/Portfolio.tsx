import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Platform e-commerce lengkap dengan payment gateway, inventory management, dan admin dashboard yang comprehensive.",
      image: "https://images.pexels.com/photos/34577/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800",
      tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
      category: "Web Application",
      featured: true
    },
    {
      title: "Task Management App",
      description: "Aplikasi manajemen tugas dengan real-time collaboration, notifications, dan reporting dashboard.",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["Vue.js", "Express", "MongoDB", "Socket.io"],
      category: "Productivity",
      featured: true
    },
    {
      title: "Restaurant POS System",
      description: "Sistem point of sale untuk restoran dengan menu management, order tracking, dan sales analytics.",
      image: "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["Next.js", "Python", "MySQL", "Redis"],
      category: "Business Solution",
      featured: false
    },
    {
      title: "Learning Management System",
      description: "Platform pembelajaran online dengan video streaming, quiz engine, dan progress tracking.",
      image: "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["React", "Django", "PostgreSQL", "AWS"],
      category: "Education",
      featured: false
    },
    {
      title: "Social Media Dashboard",
      description: "Dashboard analytics untuk mengelola multiple social media accounts dengan scheduling dan reporting.",
      image: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["Angular", "Laravel", "MySQL", "Redis"],
      category: "Analytics",
      featured: false
    },
    {
      title: "IoT Monitoring App",
      description: "Aplikasi monitoring perangkat IoT dengan real-time data visualization dan alert system.",
      image: "https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["React", "Node.js", "InfluxDB", "MQTT"],
      category: "IoT Solution",
      featured: true
    }
  ];

  const [filter, setFilter] = React.useState('all');
  const categories = ['all', 'Web Application', 'Productivity', 'Business Solution', 'Education', 'Analytics', 'IoT Solution'];
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              My <span className="text-blue-600">Portfolio</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Beberapa project yang telah saya kerjakan dengan berbagai teknologi dan industri
            </p>

            {/* Filter buttons */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setFilter(category)}
                  className={`px-4 py-2 rounded-full font-medium transition-all duration-200 ${
                    filter === category
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category === 'all' ? 'All Projects' : category}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div 
                key={index}
                className={`group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${
                  project.featured ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  {project.featured && (
                    <div className="absolute top-4 left-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </div>
                  )}
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex space-x-4">
                      <button className="bg-white text-gray-900 p-3 rounded-full hover:bg-gray-100 transition-colors">
                        <ExternalLink size={20} />
                      </button>
                      <button className="bg-white text-gray-900 p-3 rounded-full hover:bg-gray-100 transition-colors">
                        <Github size={20} />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="mb-2">
                    <span className="text-blue-600 text-sm font-medium">{project.category}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;