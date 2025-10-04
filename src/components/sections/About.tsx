import { Code, Lightbulb, Target, Users } from "lucide-react";
import { motion } from "framer-motion";

const About = () => {
  const highlights = [
    {
      icon: <Code className="text-blue-600" size={24} />,
      title: "Clean Code Advocate",
      description: "Selalu berusaha menulis kode yang rapi dan mudah dipahami.",
    },
    {
      icon: <Lightbulb className="text-purple-600" size={24} />,
      title: "Problem Solver",
      description: "Terbiasa menganalisis dan menyelesaikan masalah teknis.",
    },
    {
      icon: <Target className="text-emerald-600" size={24} />,
      title: "Goal Oriented",
      description: "Fokus pada pencapaian target dan hasil yang jelas.",
    },
    {
      icon: <Users className="text-orange-600" size={24} />,
      title: "Team Player",
      description: "Senang bekerja sama dan berkontribusi dalam tim.",
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
              About <span className="text-blue-600">Me</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Saya adalah seorang Fullstack Developer yang telah membangun
              berbagai solusi digital nyata, mulai dari sistem CRM untuk
              manajemen pelanggan prioritas PLN, website organisasi mahasiswa,
              aplikasi GIS pemetaan data sosial, hingga web portfolio pribadi
              dan project UI/UX serta data visualization. Saya terbiasa
              mengerjakan aplikasi end-to-end: mulai dari desain antarmuka,
              pengembangan backend, integrasi API, hingga deployment dan
              maintenance.
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
                Beberapa project yang saya kembangkan antara lain: CRM Prioritas
                PLN UID Aceh, CMS BEM FST, GIS Siswa Kurang Mampu, Web
                Portfolio, desain UI/UX produk, dan visualisasi data sosial
                ekonomi. Setiap project saya kerjakan dengan fokus pada
                kebutuhan pengguna, keamanan data, kemudahan maintenance, dan
                tampilan yang modern serta responsif.
              </p>

              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Saya terbiasa berkolaborasi dalam tim lintas disiplin, mengelola
                workflow dengan tools modern, serta selalu mengutamakan clean
                code dan dokumentasi yang baik. Saya juga aktif mempelajari
                teknologi baru untuk meningkatkan kualitas dan performa solusi
                yang saya bangun.
              </p>

              <div className="pt-4">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  Mengapa Memilih Saya?
                </h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    Berpengalaman membangun CRM, GIS, CMS, Web Portfolio, UI/UX,
                    dan Data Visualization dari nol
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    Menguasai pengembangan API, database, dan integrasi sistem
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    Kolaboratif, komunikatif, dan terbiasa kerja tim
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    Selalu update dengan teknologi dan best practice terbaru
                  </li>
                </ul>
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
