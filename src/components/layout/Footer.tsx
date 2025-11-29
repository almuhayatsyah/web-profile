import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
                Almuhayats
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Fullstack developer yang berpengalaman membangun solusi digital
                seperti CRM, GIS, E-Learning, dan Web Profile organisasi.
                Terbiasa dengan pengembangan API, teamwork, dan teknologi
                modern.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#home"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#skills"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Skills
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href="#experience"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Experience
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Expertise</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Fullstack Web Development</li>
                <li>CRM System Development</li>
                <li>Geographic Information System (GIS)</li>
                <li>Web Portfolio</li>
                <li>API & Backend Development</li>
                <li>Team Collaboration</li>
                <li>UI/UX Implementation</li>
                <li>Database Design (MySQL, MongoDB, PostgreSQL)</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm mb-4 md:mb-0">
                © 2025 Almuhayatsyah. All rights reserved.
              </p>
              <div className="flex items-center text-gray-400 text-sm">
                <span>Made</span>
                <Heart size={16} className="mx-2 text-red-500" />
                <span>
                  made in {""}
                  <a
                    href=""
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Aceh
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
