import { Calendar, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import sertifikat from "../../asset/img/sertifikat.jpg"; // Perbaiki path gambar sertifikat

const Experience = () => {
  const experience = {
    title: "Magang - Priority Account Executive",
    company: "PT PLN UID ACEH",
    location: "Aceh, Indonesia",
    period: "Jun 2024 - Dec 2024",
    description: [
      "Magang selama 6 bulan di sub divisi Priority Account Executive.",
      "Berperan aktif dalam pengelolaan hubungan pelanggan prioritas.",
      "Mendukung tim dalam analisis kebutuhan pelanggan dan penyusunan laporan.",
      "Mengikuti pelatihan dan sertifikasi terkait layanan pelanggan.",
    ],
    tech: [
      "Customer Service",
      "Microsoft Office",
      "Teamwork",
      "looker studio",
      "Google Workspace",
      "Analisis Data",
    ],
  };

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Work <span className="text-blue-600">Experience</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Pengalaman magang saya di dunia profesional
            </p>
          </motion.div>
          <div className="relative">
            {/* Timeline line */}
            <motion.div
              className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200"
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            ></motion.div>

            <div className="relative mb-12">
              {/* Timeline dot */}
              <motion.div
                className="absolute left-6 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.4, type: "spring" }}
              ></motion.div>

              {/* Content */}
              <motion.div
                className="ml-20"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                        {experience.title}
                      </h3>
                      <h4 className="text-xl text-blue-600 font-semibold mb-2">
                        {experience.company}
                      </h4>
                    </div>
                    <div className="flex flex-col md:items-end text-gray-600 dark:text-gray-300">
                      <div className="flex items-center mb-1">
                        <Calendar size={16} className="mr-2" />
                        <span className="text-sm">{experience.period}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin size={16} className="mr-2" />
                        <span className="text-sm">{experience.location}</span>
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {experience.description.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-start text-gray-700 dark:text-gray-300"
                      >
                        <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {experience.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Sertifikat Card */}
                  {/* Sertifikat Card */}
                  <div className="mt-6">
                    <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 flex flex-col items-center shadow">
                      <a href={sertifikat} download="Sertifikat-PLN.jpg">
                        <img
                          src={sertifikat}
                          alt="Sertifikat Magang PLN"
                          className="w-full max-w-xs rounded-lg mb-2 cursor-pointer hover:opacity-80 transition"
                        />
                      </a>
                      <span className="text-sm text-gray-700 dark:text-gray-200">
                        Sertifikat Magang - PT PLN UID ACEH
                      </span>
                    </div>
                  </div>

                  {/* End Sertifikat Card */}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
