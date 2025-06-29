import React from 'react';
import { Code, Lightbulb, Target, Users } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code className="text-blue-600" size={24} />,
      title: "Clean Code Advocate",
      description: "Menulis kode yang maintainable dan scalable"
    },
    {
      icon: <Lightbulb className="text-purple-600" size={24} />,
      title: "Problem Solver",
      description: "Menganalisis dan memecahkan masalah kompleks"
    },
    {
      icon: <Target className="text-emerald-600" size={24} />,
      title: "Goal Oriented",
      description: "Fokus pada hasil dan pencapaian objektif"
    },
    {
      icon: <Users className="text-orange-600" size={24} />,
      title: "Team Player",
      description: "Kolaborasi efektif dalam tim development"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About <span className="text-blue-600">Me</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Seorang Fullstack Developer dengan passion dalam teknologi dan inovasi
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                Dengan pengalaman lebih dari 5 tahun dalam dunia pengembangan web, saya telah berkontribusi dalam berbagai proyek mulai dari aplikasi startup hingga sistem enterprise berskala besar.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                Saya memiliki keahlian dalam mengembangkan aplikasi end-to-end, dari desain UI/UX yang user-friendly hingga implementasi backend yang robust dan scalable. Passion saya adalah menciptakan solusi digital yang tidak hanya functional, tetapi juga memberikan experience yang luar biasa bagi pengguna.
              </p>

              <div className="pt-4">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Mengapa Memilih Saya?</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    Berpengalaman dengan teknologi terkini
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    Committed terhadap kualitas dan best practices
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    Komunikasi yang baik dan professional
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    Selalu update dengan trend teknologi terbaru
                  </li>
                </ul>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {highlights.map((item, index) => (
                <div 
                  key={index}
                  className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="mb-4">{item.icon}</div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {item.description}
                  </p>
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