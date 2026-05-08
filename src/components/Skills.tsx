import { motion } from 'motion/react';

const skills = [
  { name: "Algebraic Geometry", level: 95 },
  { name: "Number Theory", level: 90 },
  { name: "LaTeX / Publishing", level: 100 },
  { name: "Python / SageMath", level: 85 },
  { name: "Undergraduate Teaching", level: 90 },
  { name: "Curriculum Design", level: 80 },
];

export default function Skills() {
  return (
    <section id="skills" className="py-16 px-8 md:px-12 lg:px-24 section-bg">
      <div className="section-title">
        <h2>Teaching & Expertise</h2>
        <p className="text-[#4b4949]">
          My approach to education combines classical mathematical theory with modern computational tools, ensuring students gain both conceptual depth and practical skills.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 mt-8">
        {skills.map((skill, idx) => (
          <div key={idx} className="flex flex-col gap-2">
            <div className="flex justify-between text-xs font-bold font-heading text-brand-primary uppercase">
              <span>{skill.name}</span>
              <span>{skill.level}%</span>
            </div>
            <div className="w-full h-3 bg-[#dce8f8] overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="h-full bg-brand-accent"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
