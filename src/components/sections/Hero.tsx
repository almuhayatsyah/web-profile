import { ArrowDown, Github, Linkedin, Mail, Phone } from "lucide-react";
import profileImg from "../../asset/img/profile.jpg";
import pdf from "../../asset/pdf/cv.pdf";

const Hero = () => {
  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-900 relative overflow-hidden pt-28 md:pt-32"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in-up flex flex-col items-center">
          <img
            src={profileImg}
            alt="Almuhayatsyah - Fullstack Web Developer Aceh Portfolio"
            className="w-36 h-36 rounded-full object-cover border-4 border-blue-400 shadow-lg mb-6"
            width="144"
            height="144"
          />
          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6 leading-tight tracking-tight">
            Hi, saya <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Almuhayatsyah</span>
            <br />Web Developer & Data Visualization Enthusiast
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            Saya seorang web developer yang suka membangun website interaktif, informatif, dan mudah digunakan. 
            Portofolio ini berisi beberapa karya dan pengalaman saya dalam pengembangan web, mulai dari aplikasi manajemen, website organisasi, hingga visualisasi data.
            <br />
            Saya percaya bahwa setiap website adalah cerminan dari pemiliknya—dan saya selalu berusaha menghadirkan hasil yang rapi, fungsional, dan relevan.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/30 hover:scale-105 transform transition-all duration-300">
              <a href="#portfolio">View My Work</a>
            </button>

            <a
              href={pdf}
              download
              className="border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm px-8 py-4 rounded-full font-semibold hover:border-blue-600 dark:hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 text-center"
            >
              Download CV
            </a>
          </div>

          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/almuhayatsyah"
              className="p-3 rounded-full bg-white/70 dark:bg-gray-800/70 backdrop-blur-md border border-gray-100 dark:border-gray-700 shadow-lg hover:shadow-xl hover:border-blue-400 dark:hover:border-blue-500 hover:scale-110 transform transition-all duration-300 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/al-muhayatsyah-7817b1290/"
              className="p-3 rounded-full bg-white/70 dark:bg-gray-800/70 backdrop-blur-md border border-gray-100 dark:border-gray-700 shadow-lg hover:shadow-xl hover:border-blue-400 dark:hover:border-blue-500 hover:scale-110 transform transition-all duration-300 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:almuhayats@gmail.com"
              className="p-3 rounded-full bg-white/70 dark:bg-gray-800/70 backdrop-blur-md border border-gray-100 dark:border-gray-700 shadow-lg hover:shadow-xl hover:border-blue-400 dark:hover:border-blue-500 hover:scale-110 transform transition-all duration-300 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
            >
              <Mail size={24} />
            </a>
            <a
              href="https://wa.me/6281324312332"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/70 dark:bg-gray-800/70 backdrop-blur-md border border-gray-100 dark:border-gray-700 shadow-lg hover:shadow-xl hover:border-green-400 dark:hover:border-green-500 hover:scale-110 transform transition-all duration-300 text-gray-600 dark:text-green-400 hover:text-green-600 dark:hover:text-green-400"
              title="WhatsApp"
            >
              <Phone size={24} />
            </a>
          </div>
        </div>

        <button
          onClick={scrollToAbout}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        >
          <ArrowDown size={32} className="text-gray-400" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
