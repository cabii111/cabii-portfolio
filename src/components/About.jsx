import { motion } from "framer-motion";

function About() {

  return (

    <section className="about-section fade-up">

      <motion.div
        className="about-content"

        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}

        transition={{ duration: 0.8 }}
      >

        <h2 className="section-title">
          About Me
        </h2>

       <p>
  I'm Cabii — a passionate UI/UX Designer
  focused on creating modern, clean,
  and user-friendly digital experiences.

  I design premium website interfaces,
  mobile app designs, creative layouts,
  and visually engaging user experiences
  with strong attention to detail.

  I also use tools like Figma, Photoshop,
  Illustrator, and AI-powered workflows
  to create faster and more effective
  design solutions.
</p>

      </motion.div>

    </section>

  );
}

export default About;