const educationData = [
  {
    level: "SD",
    name: "SDN Contoh 1 Kota Anda",
    year: "2006 - 2012",
  },
  {
    level: "SMP",
    name: "SMPN Contoh 2 Kota Anda",
    year: "2012 - 2015",
  },
  {
    level: "SMA",
    name: "SMAN Contoh 3 Kota Anda",
    year: "2015 - 2018",
  },
  {
    level: "Universitas",
    name: "Universitas Ubudiyah Indonesia",
    year: "2021 - 2025",
  },
];

const Education = () => {
  return (
    <section id="education" className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-purple-700 dark:text-purple-300">
          Pendidikan
        </h2>
        <div className="max-w-2xl mx-auto space-y-6">
          {educationData.map((edu, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-gray-900 rounded-lg shadow p-6 flex flex-col md:flex-row md:items-center md:justify-between"
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
    </section>
  );
};

export default Education;
