import { motion } from "framer-motion";

import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="hero">

      <motion.div
  className="hero-content"
  initial={{ opacity: 0, y: 80 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{
    duration: 1,
    ease: "easeOut"
  }}
>

        <motion.h1
  initial={{ opacity: 0, x: -80 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 1 }}
>
  Designing Premium Digital Experiences
</motion.h1>

        <motion.p
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1, delay: 0.3 }}
>
          UI/UX Designer, Graphic Designer,
          Motion Visual Artist & 3D Creator
          focused on futuristic and immersive
          digital experiences.
</motion.p>
          


        <div className="hero-buttons">

          <motion.a
  href="#uiux"
  className="primary-btn"
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1, delay: 0.5 }}
>
  View Projects
</motion.a>



        </div>

      </motion.div>

      <motion.div
  className="hero-image"
  initial={{ opacity: 0, x: 80 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 1 }}
>
  <img src="/profile.png" alt="Cabii" />
</motion.div>

    </div>
  );
}

export default Hero;