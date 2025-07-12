import { Github, Linkedin, Mail, MapPin, Phone, Instagram } from "lucide-react";

import { motion } from "framer-motion";
// ...existing code...

const Contact = () => {
  // Form dan handler dihapus karena tidak digunakan lagi

  const contactInfo = [
    {
      icon: <Mail className="text-blue-600" size={24} />,
      title: "Email",
      details: "almuhayats@gmail.com",
      link: "mailto:almuhayats@gmail.com",
    },
    {
      icon: <Phone className="text-green-600" size={24} />,
      title: "Phone",
      details: "+62-8132-4312-332",
      link: "tel:+6281324312332",
    },
    {
      icon: <MapPin className="text-red-600" size={24} />,
      title: "Location",
      details: "Aceh, Indonesia",
      link: "https://www.google.com/maps/place/AK+KUPI/@5.5914628,95.362062,750m/data=!3m2!1e3!4b1!4m6!3m5!1s0x30403706d114f735:0x43a28f0099e6a083!8m2!3d5.5914628!4d95.3646369!16s%2Fg%2F11y4lvd0s5?entry=ttu&g_ep=EgoyMDI1MDYyMy4yIKXMDSoASAFQAw%3D%3D",
    },
  ];

  const socialLinks = [
    {
      icon: <Github size={24} />,
      name: "GitHub",
      link: "https://github.com",
      color: "hover:text-gray-900",
    },
    {
      icon: <Linkedin size={24} />,
      name: "LinkedIn",
      link: "https://linkedin.com",
      color: "hover:text-blue-600",
    },
    {
      icon: <Instagram size={24} />, // perbaiki di sini
      name: "Instagram",
      link: "https://instagram.com/almuhayatsyah_",
      color: "hover:text-blue-400",
    },
  ];

  return (
    <motion.section
      id="contact"
      className="py-20 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-900"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Get In <span className="text-blue-600">Touch</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Mari berkolaborasi dan wujudkan ide digital Anda menjadi kenyataan
            </p>
          </motion.div>

          <div className="max-w-xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                Contact Information
              </h3>
              <div className="space-y-6 mb-8">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.link}
                    className="flex items-center p-4 bg-gray-50 dark:bg-gray-900 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="mr-4">{info.icon}</div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">
                        {info.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300">
                        {info.details}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 text-center">
                  Follow Me
                </h4>
                <div className="flex justify-center space-x-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.link}
                      className={`p-3 bg-gray-50 dark:bg-gray-900 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-gray-600 dark:text-gray-300 ${social.color}`}
                      title={social.name}
                      whileHover={{ scale: 1.15, rotate: 8 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
