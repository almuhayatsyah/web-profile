import { ArrowDown, Github, Linkedin, Mail, Phone } from "lucide-react";
import profileImg from "../../asset/img/profile.jpg";
import pdf from "../../asset/pdf/cv.pdf";
import ReactTypingEffect from 'react-typing-effect';

const Hero = () => {
  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-900 relative overflow-hidden pt-28 md:pt-0"
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
          <h1 className="text-2xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
           Website Developer & Data Visualization{" "}
            <ReactTypingEffect
              text={["Almuhayatsyah"]}
              className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block mt-2"
              speed={100}
              eraseSpeed={50}
              eraseDelay={2000}
              typingDelay={500}
            />
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            Membantu Anda mewujudkan ide menjadi website yang menarik dan fungsional. 
            Saya menggabungkan desain kreatif dengan teknologi terkini untuk solusi digital yang 
            tepat sasaran bagi bisnis maupun kebutuhan pribadi Anda.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:scale-105 transform transition-all duration-200">
              <a href="#portfolio">View My Work</a>
            </button>

            <a
              href={pdf}
              download
              className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full font-semibold hover:border-blue-600 hover:text-blue-600 transition-all duration-200 text-center"
            >
              Download CV
            </a>
          </div>

          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/almuhayatsyah"
              className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl hover:scale-110 transform transition-all duration-200 text-gray-700 dark:text-gray-200 hover:text-blue-600"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/al-muhayatsyah-7817b1290/"
              className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl hover:scale-110 transform transition-all duration-200 text-gray-700 dark:text-gray-200 hover:text-blue-600"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:almuhayats@gmail.com"
              className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl hover:scale-110 transform transition-all duration-200 text-gray-700 dark:text-gray-200 hover:text-blue-600"
            >
              <Mail size={24} />
            </a>
            <a
              href="https://wa.me/6281324312332"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl hover:scale-110 transform transition-all duration-200 text-gray-600 dark:text-green-400 hover:text-green-700"
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
