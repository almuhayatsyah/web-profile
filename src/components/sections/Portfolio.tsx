import { Github } from "lucide-react";
import { useState } from "react";
import crm from "../../asset/img/crm.png";
import bem from "../../asset/img/bem.png";
import gis from "../../asset/img/gis.png";
import portfolio from "../../asset/img/portfolio.png";
import mabelkanto from "../../asset/img/mabel-kanto.png";
import redesain from "../../asset/img/redesain.png";
import visualisasi from "../../asset/img/visualisasi.png";

const Portfolio = () => {
  const projects = [
    {
      title: "Costumer Relationship Management (CRM)",
      description:
        "Sistem CRM Prioritas PLN UID Aceh adalah platform manajemen pelanggan prioritas yang dilengkapi dengan fitur pencatatan interaksi & kunjungan, feedback layanan, notifikasi otomatis, serta dashboard admin & manajer yang komprehensif. Sistem ini juga mendukung laporan dinamis, ekspor data (PDF & Excel), dan kontrol akses berbasis role (admin, staff, manajer, pelanggan), serta terintegrasi dengan sistem pemantauan pemakaian daya pelanggan secara periodik.",
      image: crm,
      tech: ["Bootstrap 5", "vite", "React", "Laravel 12", "Mysql"],
      featured: true,
      github: "https://github.com/username/crm-project",
    },
    {
      title: "CMS BEM FST",
      description:
        "Website profil resmi Badan Eksekutif Mahasiswa Fakultas Sains dan Teknologi Universitas Ubudiyah Indonesia. Menyediakan fitur manajemen konten berita, agenda, galeri, dan struktur organisasi, serta dashboard admin untuk pengelolaan data secara dinamis.",
      image: bem,
      tech: ["codeigniter 4", "mysql", "Bootstrap 5"],
      featured: true,
      github: "https://github.com/almuhayatsyah/WEB-BEM-FST-BUDIYAH",
    },
    {
      title: "GIS (Geographic Information System) Siswa Kurang Mampu",
      description:
        "Aplikasi pemetaan lokasi siswa kurang mampu berbasis web, memudahkan visualisasi dan analisis data penerima bantuan pendidikan secara geografis. Mendukung pencarian, filter data, dan integrasi peta interaktif.",
      image: gis,
      tech: ["Codeigniter 4", "Bootstrap 5", "MySQL"],
      featured: true,
      github: "https://github.com/username/gis-siswa-kurang-mampu",
    },
    {
      title: "Web Portfolio",
      description:
        "Website portfolio pribadi yang menampilkan project, pengalaman, dan skill saya sebagai web developer. Dibangun dengan desain modern, responsif, dan mudah dikembangkan.",
      image: portfolio,
      tech: ["React", "TailwindCSS"],
      featured: true,
      github: "https://github.com/almuhayatsyah/web-profile",
    },
    {
      title: "Mabel Kanto",
      description:
        "Website profil Mabel Kanto, Adalah Website Profile Company .",
      image: mabelkanto,
      tech: ["React", "TailwindCSS"],
      featured: true,
      github: "https://web-profile-kanto-mabel.vercel.app/",
    },

    {
      title: "Redesain Website Profile UKM",
      description:
        "Saya Redesain ulang Aplikasi Sigupai Jek dari ABDYA, saya membuat tampilan lebih moderen agar menyesuaikan dengan tampilan Aplikasi sekarang.",
      image: redesain,
      tech: ["Figma"],
      featured: true,
      github: "https://web-profile-kanto-mabel.vercel.app/",
    },
    {
      title: "Visualisasi Data Sosial Ekonomi",
      description:
        "visualisasi data sosial ekonomi menggunkan Looker Studio, memudahkan analisis dan interpretasi data melalui grafik interaktif. Cocok untuk presentasi data kepada pemangku kepentingan.",
      image: visualisasi,
      tech: ["Looker Studio", "Excel", "Google Sheets"],
      featured: true,
      github: "https://web-profile-kanto-mabel.vercel.app/",
    },
  ];

  // Category & filter removed
  const filteredProjects = projects;

  // Modal state
  const [selectedProject, setSelectedProject] = useState<
    null | (typeof projects)[0]
  >(null);

  return (
    <section id="portfolio" className="py-20 bg-white">
      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-xl shadow-xl max-w-lg w-full p-6 relative">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-2xl"
              onClick={() => setSelectedProject(null)}
              aria-label="Close"
            >
              &times;
            </button>
            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-2xl font-bold mb-2">{selectedProject.title}</h3>
            <div className="flex flex-wrap gap-2 mb-3">
              {selectedProject.tech.map((tech, idx) => (
                <span
                  key={idx}
                  className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
            <p className="text-gray-700 mb-4">{selectedProject.description}</p>
            <div className="flex space-x-4">
              {/* ExternalLink button bisa diarahkan ke demo jika ada */}
              {/* <a
                href={selectedProject.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-gray-900 p-3 rounded-full hover:bg-gray-100 transition-colors"
              >
                <ExternalLink size={20} />
              </a> */}
              <a
                href={selectedProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-gray-900 p-3 rounded-full hover:bg-gray-100 transition-colors"
              >
                <Github size={20} />
              </a>
            </div>
          </div>
        </div>
      )}
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              My <span className="text-blue-600">Portfolio</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Beberapa project yang telah saya kerjakan dengan berbagai
              teknologi dan industri
            </p>

            {/* Filter buttons removed */}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className={`group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${
                  project.featured ? "md:col-span-2 lg:col-span-1" : ""
                }`}
                onClick={() => setSelectedProject(project)}
                style={{ cursor: "pointer" }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  {project.featured && (
                    <div className="absolute top-5 left-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </div>
                  )}
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex space-x-4">
                      {/* ExternalLink button bisa diarahkan ke demo jika ada */}
                      {/* <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white text-gray-900 p-3 rounded-full hover:bg-gray-100 transition-colors"
                        onClick={e => e.stopPropagation()}
                      >
                        <ExternalLink size={20} />
                      </a> */}
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white text-gray-900 p-3 rounded-full hover:bg-gray-100 transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Github size={20} />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  {/* Category removed */}
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
