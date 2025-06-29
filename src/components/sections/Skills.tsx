import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "React / Next.js", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Vue.js / Nuxt.js", level: 85 },
        { name: "Tailwind CSS", level: 92 },
        { name: "HTML5 / CSS3", level: 98 }
      ]
    },
    {
      title: "Backend Development",
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "Node.js / Express", level: 90 },
        { name: "Python / Django", level: 85 },
        { name: "PHP / Laravel", level: 88 },
        { name: "REST / GraphQL APIs", level: 92 },
        { name: "Microservices", level: 80 }
      ]
    },
    {
      title: "Database & Cloud",
      color: "from-emerald-500 to-teal-500",
      skills: [
        { name: "PostgreSQL / MySQL", level: 88 },
        { name: "MongoDB", level: 85 },
        { name: "Redis", level: 82 },
        { name: "AWS / Google Cloud", level: 78 },
        { name: "Docker / Kubernetes", level: 75 }
      ]
    },
    {
      title: "Tools & Others",
      color: "from-orange-500 to-red-500",
      skills: [
        { name: "Git / GitHub", level: 95 },
        { name: "Jest / Testing", level: 85 },
        { name: "CI/CD", level: 80 },
        { name: "Figma / Design", level: 75 },
        { name: "Agile / Scrum", level: 90 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              My <span className="text-blue-600">Skills</span>
            </h2>
            <p className="text-xl text-gray-600">
              Teknologi dan tools yang saya kuasai untuk membangun solusi digital yang berkualitas
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div 
                key={categoryIndex}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className={`inline-block bg-gradient-to-r ${category.color} text-white px-4 py-2 rounded-lg mb-6`}>
                  <h3 className="text-lg font-semibold">{category.title}</h3>
                </div>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="skill-item">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-700 font-medium">{skill.name}</span>
                        <span className="text-gray-500 text-sm">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className={`bg-gradient-to-r ${category.color} h-2 rounded-full transition-all duration-1000 ease-out`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
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