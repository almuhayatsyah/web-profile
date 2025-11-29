import { Rocket, Smartphone, Globe, ArrowRight } from "lucide-react";

const DigitalServices = () => {
  return (
    <section id="digital-services" className="py-20 bg-blue-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="md:w-1/2">
            <div className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-semibold mb-6">
              Layanan Khusus UMKM
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Transformasi Digital untuk <span className="text-blue-600">Bisnis Anda</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Kami membantu UMKM Go Digital dengan solusi website profesional, cepat, dan terjangkau. Tingkatkan kredibilitas dan jangkauan pasar bisnis Anda sekarang.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-white dark:bg-gray-700 rounded-lg shadow-sm text-blue-600 dark:text-blue-400">
                  <Globe size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white">Website Profesional</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Desain modern yang merepresentasikan brand Anda.</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-3 bg-white dark:bg-gray-700 rounded-lg shadow-sm text-purple-600 dark:text-purple-400">
                  <Smartphone size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white">Mobile Friendly</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Tampilan responsif di semua perangkat.</p>
                </div>
              </div>
            </div>

            <a 
              href="#" // Ganti dengan link website layanan digital Anda nantinya
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:scale-105 transform transition-all duration-200"
            >
              Kunjungi Layanan Digital khusus
              <ArrowRight size={20} />
            </a>
          </div>

          {/* Visual/Image Content */}
          <div className="md:w-1/2 relative">
            <div className="relative z-10 bg-white dark:bg-gray-900 rounded-2xl shadow-2xl p-8 border border-gray-100 dark:border-gray-700">
              <div className="flex items-center justify-between mb-8">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="text-xs text-gray-400">umkm-digital.id</div>
              </div>
              
              <div className="space-y-6">
                <div className="h-32 bg-gray-100 dark:bg-gray-800 rounded-lg w-full animate-pulse"></div>
                <div className="flex gap-4">
                  <div className="h-24 bg-blue-50 dark:bg-blue-900/20 rounded-lg w-1/2 animate-pulse"></div>
                  <div className="h-24 bg-purple-50 dark:bg-purple-900/20 rounded-lg w-1/2 animate-pulse"></div>
                </div>
                <div className="h-12 bg-gray-100 dark:bg-gray-800 rounded-lg w-3/4 animate-pulse"></div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-xl border border-gray-100 dark:border-gray-700 flex items-center gap-3 animate-bounce">
                <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded-full text-green-600 dark:text-green-400">
                  <Rocket size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Performance</p>
                  <p className="font-bold text-gray-900 dark:text-white">100% Fast</p>
                </div>
              </div>
            </div>
            
            {/* Background Decorations */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-br from-blue-200/50 to-purple-200/50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-full blur-3xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DigitalServices;
