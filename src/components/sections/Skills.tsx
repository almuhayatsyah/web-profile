const Skills = () => {
  const skillCategories = [
    {
      title: "Backend & Database",
      color: "from-blue-500 to-purple-500",
      skills: [
        { name: "PHP", level: 90 },
        { name: "Laravel", level: 85 },
        { name: "CodeIgniter", level: 80 },
        { name: "REST API", level: 80 },
        { name: "OOP & MVC", level: 85 },
        { name: "MySQL", level: 85 },
        { name: "Database Design", level: 80 },
        { name: "Query Optimization", level: 75 },
      ],
    },
    {
      title: "Frontend & UI/UX",
      color: "from-purple-500 to-blue-500",
      skills: [
        { name: "React", level: 85 },
        { name: "JavaScript", level: 85 },
        { name: "HTML5 / CSS3", level: 90 },
        { name: "Bootstrap", level: 85 },
        { name: "Tailwind CSS", level: 80 },
        { name: "Figma", level: 80 },
        { name: "UI/UX Design", level: 80 },
      ],
    },
    {
      title: "Data Visualization & Tools",
      color: "from-green-400 to-blue-400",
      skills: [
        { name: "Looker Studio", level: 80 },
        { name: "Google Sheets", level: 80 },
        { name: "Excel", level: 80 },
      ],
    },
    {
      title: "Collaboration & Workflow",
      color: "from-blue-400 to-purple-400",
      skills: [
        { name: "Git / GitHub", level: 85 },
        { name: "Postman", level: 80 },
        { name: "Linux Basic", level: 75 },
        { name: "Agile / Scrum", level: 80 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              My <span className="text-blue-600">Skills</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Teknologi dan tools yang saya kuasai untuk membangun solusi
              digital yang berkualitas
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={categoryIndex}
                className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div
                  className={`inline-block bg-gradient-to-r ${category.color} text-white px-4 py-2 rounded-lg mb-6`}
                >
                  <h3 className="text-lg font-semibold">{category.title}</h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="skill-item">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-700 dark:text-gray-300 font-medium">
                          {skill.name}
                        </span>
                      </div>
                      {/* Progress bar dihapus, hanya nama skill */}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
