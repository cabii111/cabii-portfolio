import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Projects() {

  const projects = [
    {
      title: "QuickByte App",
      image: "/web1.jpg",
      description: "Food preorder mobile app UI/UX design.",
      link: "/quickbyte"
    },

    {
      title: "Aazhi Meen",
      image: "/web2.jpg",
      description: "Fresh fish preorder mobile app experience.",
      link: "/aazhimeen"
    },

    {
      title: "Case Study Coming Soon",
      image: "/web3.jpg",
      description: "New premium UX experience currently in progress.",
      link: "#"
    },

    {
      title: "Launching Soon",
      image: "/web4.jpg",
      description: "Next generation product experience coming soon.",
      link: "#"
    },
  ];

  return (
    <div className="section fade-up" id="uiux">

      <h2 className="section-title">
        UI/UX Designs
      </h2>

      <div className="grid">

        {projects.map((project, index) => (

          <motion.div
            className="project-card"
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >

            <img src={project.image} alt="" />

            <div className="card-overlay">

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <Link to={project.link} className="view-btn">
  View Project
</Link>

            </div>

          </motion.div>

        ))}

      </div>

    </div>
  );
}

export default Projects;