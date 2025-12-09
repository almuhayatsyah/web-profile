import { Figma, BarChart2, Search } from "lucide-react";
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
import posUmkm from "../../asset/img/sistem pos umkm.jpg";

const Portfolio = () => {
  const projects = [
    {
      title: "Costumer Relationship Management (CRM)",
      category: "Website",
      description: "Aplikasi manajemen untuk pelanggan prioritas PLN UID Aceh. Memudahkan pencatatan interaksi, masukan pelanggan, dan menyediakan laporan otomatis. Membantu tim dalam memantau layanan dan mengambil keputusan lebih cepat.",
      image: crm,
      tech: ["Bootstrap 5", "Vite", "React", "Laravel 12", "MySQL"],
      featured: true,
      link: "https://github.com/almuhayatsyah/CRM-PLN-PAE-ACEH",
    },
    {
      title: "CMS BEM FST",
      category: "Website",
      description: "Website resmi untuk Badan Eksekutif Mahasiswa. Memudahkan pengurus untuk menyebarkan berita, agenda kegiatan, dan galeri foto terkini agar mahasiswa selalu mendapatkan informasi terbaru.",
      image: bem,
      tech: ["CodeIgniter 4", "MySQL", "Bootstrap 5"],
      featured: true,
      link: "https://github.com/almuhayatsyah/WEB-BEM-FST-BUDIYAH",
    },
    {
      title: "GIS (Geographic Information System) Siswa Kurang Mampu",
      category: "Website",
      description: "Peta digital interaktif untuk melihat persebaran siswa kurang mampu. Membantu pihak sekolah dan dinas terkait dalam menyalurkan bantuan pendidikan agar lebih tepat sasaran berdasarkan lokasi tempat tinggal siswa.",
      image: gis,
      tech: ["CodeIgniter 4", "Bootstrap 5", "MySQL"],
      featured: true,
      link: "https://github.com/almuhayatsyah/GIS-SMAN4-ABDYA",
    },
    {
      title: "Web Portfolio",
      category: "Website",
      description: "Website pribadi saya yang menampilkan karya dan pengalaman profesional. Dibuat dengan desain yang bersih dan cepat diakses, sebagai contoh kualitas website yang bisa saya bangun untuk Anda.",
      image: portfolio,
      tech: ["React", "TailwindCSS"],
      featured: true,
      link: "https://github.com/almuhayatsyah/web-profile",
    },
    {
      title: "Mabel Kanto",
      category: "Website",
      description: "Website profil perusahaan untuk Mabel Kanto. Menampilkan layanan dan hasil karya perusahaan dengan desain yang elegan untuk meningkatkan citra profesional di mata klien.",
      image: mabelkanto,
      tech: ["React", "TailwindCSS"],
      featured: true,
      link: "https://web-profile-kanto-mabel.vercel.app/",
    },

    {
      title: "Redesain UI/UX Sigupai Jek",
      category: "Design-UI/UX",
      description: "Konsep tampilan baru untuk aplikasi Sigupai Jek. Fokus pada kemudahan penggunaan agar pengguna dapat memesan layanan ojek online dengan lebih cepat dan nyaman.",
      image: redesain,
      tech: ["Figma"],
      featured: true,
      link: "https://www.figma.com/proto/your-project-link",
    },
    {
      title: "Raoseco Bubur Jongkong",
      category: "Website",
      description: "Menu digital online untuk usaha kuliner Raoseco. Pelanggan dapat melihat foto makanan yang menarik dan daftar menu dengan mudah melalui HP mereka.",
      image: bubur,
      tech: ["React", "TailwindCSS"],
      featured: true,
      link: "https://raoseco-bubur-jongkong.vercel.app/",
    },
    {
      title: "UI/UX Mobile App PMI Aceh",
      category: "Design-UI/UX",
      description: "Desain aplikasi HP untuk memudahkan pendonor darah. Membantu pengguna menemukan jadwal donor, lokasi terdekat, dan mencatat riwayat donor mereka.",
      image: pmi,
      tech: ["Figma"],
      featured: true,
      link: "https://www.figma.com/proto/your-pmi-project-link",
    },
    {
      title: "Dashboard Data Sosial Ekonomi",
      category: "Data Visualization",
      description: "Tampilan grafik data yang mudah dibaca untuk memantau kondisi sosial ekonomi. Mengubah data angka yang rumit menjadi grafik yang mudah dipahami untuk pengambilan keputusan.",
      image: visualisasi,
      tech: ["Looker Studio", "Excel", "Google Sheets"],
      featured: true,
      link: "https://lookerstudio.google.com/reporting/your-report-link",
    },
    {
      title: "Dashboard HRGS",
      category: "Data Visualization", 
      description: "Laporan visual interaktif untuk data HRGS. Membantu manajemen melihat tren dan ringkasan data penting dalam bentuk grafik yang rapi dan update.",
      image: hrgsdasbor,
      tech: ["Looker Studio", "Excel", "Google Sheets"],
      featured: true,
      link: "https://lookerstudio.google.com/reporting/your-report-link",
    },
    {
      title: "Sistem POS dan Stock Barang",
      category: "Website",
      description: "Sistem POS dan Stock Barang untuk UMKM. Membantu pengelolaan penjualan dan stok dengan mudah dan cepat.",
      image: posUmkm,
      tech: ["Laravel 12", "MySQL", "Bootstrap 5"],
      featured: true,
      link: "",
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
      return <Figma size={16} />;
    }
    if (category === "Data Visualization" || tech.includes("Looker Studio")) {
      return <BarChart2 size={16} />;
    }
    return <Search size={16} />;
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
                className="bg-gray-900 text-white dark:bg-white dark:text-gray-900 px-6 py-3 rounded-full hover:opacity-90 transition-colors flex items-center gap-2 font-medium"
              >
                <span>Telusuri Project</span>
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
                        className="bg-white text-gray-900 px-6 py-3 rounded-full hover:bg-gray-100 transition-colors font-medium text-sm flex items-center gap-2"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <span>Telusuri</span>
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
