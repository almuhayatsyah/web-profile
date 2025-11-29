import { Github, Figma, BarChart2 } from "lucide-react";
import { useState } from "react";
import bem from "../../asset/img/bem.jpg";
import bubur from "../../asset/img/bubur-jongkong.jpg";
import crm from "../../asset/img/crm.jpg";
import gis from "../../asset/img/gis.jpg";
import mabelkanto from "../../asset/img/mabel-kanto.png";
import pmi from "../../asset/img/pmi.jpg";
import portfolio from "../../asset/img/portfolio.png";
import redesain from "../../asset/img/redesain.jpg";
import visualisasi from "../../asset/img/visualisasi.png";
import hrgsdasbor from "../../asset/img/hrgsdasbor.jpg";

const Portfolio = () => {
  const projects = [
    {
      title: "Costumer Relationship Management (CRM)",
      category: "Website",
      description:
        "Sistem CRM Prioritas PLN UID Aceh adalah platform manajemen pelanggan prioritas yang komprehensif. Dilengkapi fitur pencatatan interaksi, feedback layanan, notifikasi otomatis, serta dashboard analitik. Mendukung ekspor data (PDF & Excel), kontrol akses berbasis role (RBAC), dan integrasi pemantauan daya pelanggan.",
      image: crm,
      tech: ["Bootstrap 5", "Vite", "React", "Laravel 12", "MySQL"],
      featured: true,
      link: "https://github.com/almuhayatsyah/CRM-PLN-PAE-ACEH",
    },
    {
      title: "CMS BEM FST",
      category: "Website",
      description:
        "Portal resmi Badan Eksekutif Mahasiswa Fakultas Sains dan Teknologi Universitas Ubudiyah Indonesia. Menampilkan manajemen konten berita, agenda, dan galeri kegiatan dengan CMS (Content Management System) yang user-friendly.",
      image: bem,
      tech: ["CodeIgniter 4", "MySQL", "Bootstrap 5"],
      featured: true,
      link: "https://github.com/almuhayatsyah/WEB-BEM-FST-BUDIYAH",
    },
    {
      title: "GIS (Geographic Information System) Siswa Kurang Mampu",
      category: "Website",
      description:
        "Sistem Informasi Geografis (SIG) untuk pemetaan persebaran siswa kurang mampu. Memudahkan visualisasi data spasial, analisis bantuan pendidikan, dan pengambilan keputusan berbasis lokasi dengan peta interaktif.",
      image: gis,
      tech: ["CodeIgniter 4", "Bootstrap 5", "MySQL"],
      featured: true,
      link: "https://github.com/almuhayatsyah/GIS-SMAN4-ABDYA",
    },
    {
      title: "Web Portfolio",
      category: "Website",
      description:
        "Website portfolio pribadi yang menampilkan project, pengalaman, dan skill saya sebagai web developer. Dibangun dengan desain modern, responsif, dan mudah dikembangkan.",
      image: portfolio,
      tech: ["React", "TailwindCSS"],
      featured: true,
      link: "https://github.com/almuhayatsyah/web-profile",
    },
    {
      title: "Mabel Kanto",
      category: "Website",
      description:
        "Company Profile untuk Mabel Kanto, dirancang untuk membangun kehadiran digital yang profesional, menampilkan layanan, dan portofolio perusahaan dengan desain elegan.",
      image: mabelkanto,
      tech: ["React", "TailwindCSS"],
      featured: true,
      link: "https://web-profile-kanto-mabel.vercel.app/",
    },

    {
      title: "Redesain UI/UX Sigupai Jek",
      category: "Design-UI/UX",
      description:
        "Perancangan ulang antarmuka aplikasi Sigupai Jek (ABDYA) dengan pendekatan User-Centered Design. Fokus pada modernisasi tampilan dan peningkatan usability agar lebih relevan dengan tren desain aplikasi on-demand terkini.",
      image: redesain,
      tech: ["Figma"],
      featured: true,
      link: "https://www.figma.com/proto/your-project-link",
    },
    {
      title: "Raoseco Bubur Jongkong",
      category: "Website",
      description:
        "Katalog menu digital untuk UMKM Raoseco Bubur Jongkong. Menampilkan varian produk dengan fotografi yang menggugah selera dan antarmuka yang responsif untuk meningkatkan engagement pelanggan.",
      image: bubur,
      tech: ["React", "TailwindCSS"],
      featured: true,
      link: "https://raoseco-bubur-jongkong.vercel.app/",
    },
    {
      title: "UI/UX Mobile App PMI Aceh",
      category: "Design-UI/UX",
      description:
        "Desain antarmuka aplikasi mobile untuk Donor Darah PMI Aceh Barat Daya. Dirancang untuk mempermudah pendonor dalam mengakses jadwal, lokasi, dan riwayat donor darah.",
      image: pmi,
      tech: ["Figma"],
      featured: true,
      link: "https://www.figma.com/proto/your-pmi-project-link",
    },
    {
      title: "Dashboard Data Sosial Ekonomi",
      category: "Data Visualization",
      description:
        "Dashboard interaktif untuk visualisasi data sosial ekonomi menggunakan Looker Studio. Mengubah data mentah menjadi wawasan yang mudah dipahami melalui grafik dinamis untuk mendukung pengambilan keputusan strategis.",
      image: visualisasi,
      tech: ["Looker Studio", "Excel", "Google Sheets"],
      featured: true,
      link: "https://lookerstudio.google.com/reporting/your-report-link",
    },
    {
      title: "Dashboard HRGS",
      category: "Data Visualization", 
      description:
        "Dashboard interaktif untuk visualisasi data HRGS menggunakan Looker Studio. Mengubah data mentah menjadi wawasan yang mudah dipahami melalui grafik dinamis untuk mendukung pengambilan keputusan strategis.",
      image: hrgsdasbor,
      tech: ["Looker Studio", "Excel", "Google Sheets"],
      featured: true,
      link: "https://lookerstudio.google.com/reporting/your-report-link",
    },
  ];

  // Filter state
  const [activeCategory, setActiveCategory] = useState("Semua");
  const categories = ["Semua", "Design-UI/UX", "Website", "Data Visualization"];
  const filteredProjects =
    activeCategory === "Semua"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  // Modal state
  const [selectedProject, setSelectedProject] = useState<
    null | (typeof projects)[0]
  >(null);

  const getProjectIcon = (category: string, tech: string[]) => {
    if (category === "Design-UI/UX" || tech.includes("Figma")) {
      return <Figma size={20} />;
    }
    if (category === "Data Visualization" || tech.includes("Looker Studio")) {
      return <BarChart2 size={20} />;
    }
    return <Github size={20} />;
  };

  return (
    <section id="portfolio" className="py-20 bg-white dark:bg-gray-900">
      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl max-w-lg w-full p-6 relative">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 text-2xl"
              onClick={() => setSelectedProject(null)}
              aria-label="Close"
            >
              &times;
            </button>
            <img
              src={selectedProject.image}
              alt={`Detail Project ${selectedProject.title}`}
              className="w-full max-h-80 sm:max-h-96 object-contain rounded-lg mb-4"
              loading="lazy"
            />
            <h3 className="text-2xl font-bold mb-2 dark:text-white">{selectedProject.title}</h3>
            <div className="flex flex-wrap gap-2 mb-3">
              {selectedProject.tech.map((tech, idx) => (
                <span
                  key={idx}
                  className="bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
            <p className="text-gray-700 dark:text-gray-300 mb-4">{selectedProject.description}</p>
            <div className="flex space-x-4">
              <a
                href={selectedProject.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-gray-900 p-3 rounded-full hover:bg-gray-100 transition-colors border border-gray-200 shadow-sm"
              >
                {getProjectIcon(selectedProject.category, selectedProject.tech)}
              </a>
            </div>
          </div>
        </div>
      )}
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              My <span className="text-blue-600">Portfolio</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Beberapa project yang telah saya kerjakan dengan berbagai
              teknologi dan industri
            </p>
            <div className="flex flex-wrap gap-4 justify-center mb-8">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2 rounded-full font-semibold border transition-colors duration-200
                    ${
                      activeCategory === cat
                        ? "bg-blue-600 text-white border-blue-600"
                        : "bg-white text-blue-600 border-blue-600 dark:bg-gray-800 dark:text-blue-400 dark:border-blue-400"
                    }
                  `}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className={`group relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${
                  project.featured ? "md:col-span-2 lg:col-span-1" : ""
                }`}
                onClick={() => setSelectedProject(project)}
                style={{ cursor: "pointer" }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={`Portfolio ${project.title} - Almuhayatsyah Web Developer`}
                    className="w-full max-h-48 sm:max-h-56 object-contain group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                    width="400"
                    height="300"
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
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white text-gray-900 p-3 rounded-full hover:bg-gray-100 transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        {getProjectIcon(project.category, project.tech)}
                      </a>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  {/* Category removed */}
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm"
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
