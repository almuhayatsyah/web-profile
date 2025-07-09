import { Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Senior Fullstack Developer",
      company: "Tech Innovations Inc.",
      location: "Jakarta, Indonesia",
      period: "Jan 2022 - Present",
      description: [
        "Memimpin tim development dalam membangun aplikasi web scalable untuk 100k+ users",
        "Mengimplementasikan microservices architecture yang meningkatkan performance 40%",
        "Mentoring junior developers dan melakukan code review untuk maintain code quality",
        "Berkolaborasi dengan product team untuk merancang solusi technical yang optimal",
      ],
      tech: ["React", "Node.js", "PostgreSQL", "AWS", "Docker"],
    },
    {
      title: "Fullstack Developer",
      company: "Digital Solutions Co.",
      location: "Bandung, Indonesia",
      period: "Mar 2020 - Dec 2021",
      description: [
        "Mengembangkan dan maintain 5+ aplikasi web untuk berbagai klien enterprise",
        "Membangun REST APIs yang handle 10k+ requests per minute",
        "Mengoptimasi database queries yang meningkatkan response time 50%",
        "Implementasi CI/CD pipeline yang mempercepat deployment process",
      ],
      tech: ["Vue.js", "Laravel", "MySQL", "Redis", "Jenkins"],
    },
    {
      title: "Frontend Developer",
      company: "Creative Agency Ltd.",
      location: "Surabaya, Indonesia",
      period: "Jun 2019 - Feb 2020",
      description: [
        "Mengembangkan user interface yang responsive dan user-friendly",
        "Kolaborasi dengan UI/UX designer untuk implementasi design yang pixel-perfect",
        "Optimasi website performance dan SEO yang meningkatkan traffic 30%",
        "Maintenance dan update website klien secara berkala",
      ],
      tech: ["JavaScript", "HTML/CSS", "Bootstrap", "WordPress", "Figma"],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Work <span className="text-blue-600">Experience</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Perjalanan karir saya dalam dunia software development
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200"></div>

            {experiences.map((exp, index) => (
              <div key={index} className="relative mb-12 last:mb-0">
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>

                {/* Content */}
                <div className="ml-20">
                  <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                          {exp.title}
                        </h3>
                        <h4 className="text-xl text-blue-600 font-semibold mb-2">
                          {exp.company}
                        </h4>
                      </div>
                      <div className="flex flex-col md:items-end text-gray-600 dark:text-gray-300">
                        <div className="flex items-center mb-1">
                          <Calendar size={16} className="mr-2" />
                          <span className="text-sm">{exp.period}</span>
                        </div>
                        <div className="flex items-center">
                          <MapPin size={16} className="mr-2" />
                          <span className="text-sm">{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    <ul className="space-y-2 mb-6">
                      {exp.description.map((item, itemIndex) => (
                        <li
                          key={itemIndex}
                          className="flex items-start text-gray-700 dark:text-gray-300"
                        >
                          <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                          {item}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
