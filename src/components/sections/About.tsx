const educationData = [
  {
    level: "SD",
    name: "MIN 1 Aceh Barat Daya",
    year: "2008 - 2014",
  },
  {
    level: "SMP",
    name: "SMPN 1 Aceh Barat Daya",
    year: "2014 - 2017",
  },
  {
    level: "SMA",
    name: "SMAN Unggul Aceh Barat Daya",
    year: "2017 - 2020",
  },
  {
    level: "Universitas",
    name: "Universitas Ubudiyah Indonesia",
    year: "2021 - 2025",
  },
];
import { Code, Lightbulb, Target, Users } from "lucide-react";
import { motion } from "framer-motion";

const About = () => {
  const highlights = [
    {
      icon: <Code className="text-blue-600" size={24} />,
      title: "Mengutamakan Kualitas",
      description:
        "Memastikan setiap website berjalan lancar, cepat, dan minim error.",
    },
    {
      icon: <Lightbulb className="text-purple-600" size={24} />,
      title: "Solusi Efektif",
      description:
        "Menganalisis kebutuhan Anda dan memberikan solusi teknis yang tepat.",
    },
    {
      icon: <Target className="text-emerald-600" size={24} />,
      title: "Fokus Pada Hasil",
      description:
        "Berkomitmen menyelesaikan project sesuai target dan ekspektasi Anda.",
    },
    {
      icon: <Users className="text-orange-600" size={24} />,
      title: "Mudah Berkolaborasi",
      description:
        "Dapat bekerja sama dengan baik dan komunikatif dalam setiap tahap pengerjaan.",
    },
  ];

  return (
    <motion.section
      id="about"
      className="py-20 bg-white dark:bg-gray-900"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Tentang <span className="text-blue-600">Saya</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Web developer yang fokus pada pembuatan website interaktif,
              informatif, dan mudah digunakan. Berpengalaman di project
              organisasi, bisnis, dan visualisasi data.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-12 items-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="space-y-6">
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Terbiasa mengerjakan project dari desain hingga backend, baik
                individu maupun tim.
              </p>
              <div className="pt-4">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  Inti Profil
                </h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    Suka belajar dan update teknologi web
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    Kolaboratif, komunikatif, dan detail
                  </li>
                </ul>
              </div>
              <div className="pt-8">
                <h3 className="text-2xl font-semibold text-purple-700 dark:text-purple-300 mb-4">
                  Riwayat Pendidikan
                </h3>
                <div className="space-y-4">
                  {educationData.map((edu, idx) => (
                    <div
                      key={idx}
                      className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow p-4 flex flex-col md:flex-row md:items-center md:justify-between"
                    >
                      <div>
                        <div className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                          {edu.level}
                        </div>
                        <div className="text-gray-600 dark:text-gray-400">
                          {edu.name}
                        </div>
                      </div>
                      <div className="text-purple-600 dark:text-purple-300 font-medium mt-2 md:mt-0">
                        {edu.year}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <motion.div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl hover:shadow-lg transition-shadow duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                >
                  <div className="mb-4">{item.icon}</div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
