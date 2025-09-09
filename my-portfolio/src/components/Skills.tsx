
type Skill = {
  name: string;
  icon: string;
};

const skills: Skill[] = [
  { name: "HTML", icon: "/src/assets/img/html.svg" },
  { name: "CSS", icon: "/src/assets/img/css.svg" },
  { name: "TailwindCSS", icon: "/src/assets/img/tailwind.svg" },
  { name: "React", icon: "/src/assets/img/react.svg" },
  { name: "Vue", icon: "/src/assets/img/vue.svg" },
  { name: "JavaScript", icon: "/src/assets/img/js.svg" },
  { name: "TypeScript", icon: "/src/assets/img/ts.svg" },
  { name: "Git", icon: "/src/assets/img/git.svg" },
];

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-7xl px-4 py-20 md:py-28">
      <h2 className="font-heading text-3xl md:text-4xl font-bold text-ink">
           YETENEKLER
          </h2>
<hr className="w-64 mt-2 text-shadow-yellow-600"/>
      <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="flex flex-col items-center justify-center rounded-2xl border border-white/10 
                       bg-white/[0.03] p-6 shadow-md hover:bg-white/[0.3] transition"
          >
            <img
              src={skill.icon}
              alt={skill.name}
              className="h-12 w-12 object-contain mb-3"
            />
            <span className="text-gray-100 font-medium">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
