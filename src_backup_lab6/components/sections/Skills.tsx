export default function Skills() {
  const skills = [
    { name: "React", level: 95 },
    { name: "TypeScript", level: 90 },
    { name: "Node.js", level: 85 },
    { name: "Tailwind CSS", level: 98 },
    { name: "Vite", level: 92 },
    { name: "Git", level: 88 },
  ];

  return (
    <section id="skills" className="py-20 lg:py-32 flex flex-col items-center">
      <h2 className="text-4xl font-black text-gray-900 dark:text-white mb-12 text-center tracking-tighter">
        <span className="text-blue-600">Yetenekler</span> ve Teknolojik Deneyim
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-4xl">
        {skills.map((skill) => (
          <div 
            key={skill.name} 
            className="p-6 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-3xl shadow-sm text-center transform transition-transform hover:scale-105"
          >
            <span className="text-3xl mb-4 block">🚀</span>
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">{skill.name}</h3>
            <div className="w-full h-1.5 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
              <div 
                className="h-full bg-blue-600 rounded-full" 
                style={{ width: `${skill.level}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
