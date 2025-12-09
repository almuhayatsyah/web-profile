import { Code, Lightbulb, Target, Users } from "lucide-react";
import { motion } from "framer-motion";

const About = () => {
  const highlights = [
    {
      icon: <Code className="text-blue-600" size={24} />,
      title: "Mengutamakan Kualitas",
      description: "Memastikan setiap website berjalan lancar, cepat, dan minim error.",
    },
    {
      icon: <Lightbulb className="text-purple-600" size={24} />,
      title: "Solusi Efektif",
      description: "Menganalisis kebutuhan Anda dan memberikan solusi teknis yang tepat.",
    },
    {
      icon: <Target className="text-emerald-600" size={24} />,
      title: "Fokus Pada Hasil",
      description: "Berkomitmen menyelesaikan project sesuai target dan ekspektasi Anda.",
    },
    {
      icon: <Users className="text-orange-600" size={24} />,
      title: "Mudah Berkolaborasi",
      description: "Dapat bekerja sama dengan baik dan komunikatif dalam setiap tahap pengerjaan.",
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
              Saya adalah pengembang web yang berdedikasi menciptakan solusi digital yang bermanfaat.
              Pengalaman saya mencakup pembuatan berbagai jenis sistem, mulai dari aplikasi manajemen 
              untuk perusahaan, website organisasi, hingga peta digital interaktif. 
              Saya menangani seluruh proses pembuatan website, mulai dari tampilan yang menarik (desain)
              hingga sistem di balik layar yang canggih, memastikan semuanya berjalan optimal untuk Anda.
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
                Beberapa project yang pernah saya kerjakan meliputi sistem manajemen pelanggan (CRM),
                website profil organisasi, sistem informasi geografis (peta digital), serta visualisasi data.
                Setiap project saya kerjakan dengan mengutamakan kemudahan penggunaan, keamanan data,
                dan tampilan modern yang nyaman dilihat di berbagai perangkat (HP maupun Laptop).
              </p>

              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Saya terbiasa bekerja secara profesional dan transparan. Saya menggunakan
                alat bantu kerja modern untuk memastikan project berjalan rapi, serta selalu
                menjaga komunikasi yang baik agar hasil akhir sesuai dengan apa yang Anda bayangkan.
              </p>

              <div className="pt-4">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  Mengapa Memilih Saya?
                </h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    Berpengalaman membuat berbagai sistem website yang kompleks dari nol
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    Mampu menangani teknis rumit (database, server) agar Anda tidak perlu pusing
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    Komunikatif, mudah diajak diskusi, dan responsif
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    Selalu mengikuti tren teknologi terbaru untuk hasil terbaik
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
