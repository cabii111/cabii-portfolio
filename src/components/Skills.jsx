import { motion } from "framer-motion";

function Skills() {

  const skills = [
    { name: "Figma" },
    { name: "Photoshop" },
    { name: "Illustrator" },
    { name: "After Effects" },
    { name: "Premiere Pro" },
    { name: "Canva" },
    { name: "AI Workflow" }
  ];

  return (

    <section className="skills-section fade-up">

      <h2 className="section-title">
        My Skills
      </h2>

      <div className="skills-grid">

        {skills.map((skill, index) => (

          <motion.div
            className="skill-card"
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >

            <h3>{skill.name}</h3>

          </motion.div>

        ))}

      </div>

    </section>

  );
}

export default Skills;