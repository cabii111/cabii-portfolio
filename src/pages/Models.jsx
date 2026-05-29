import { motion } from "framer-motion";

function Models() {

  const renders = [
    "/render1.jpg",
    "/render2.jpg",
    "/render3.jpg",
    "/render4.jpg"
  ];

  return (
    <div className="section">

      <h2 className="section-title">
        3D Modeling
      </h2>

      <div className="grid">

        {renders.map((item, index) => (

          <motion.div
  className="card"
  key={index}
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>

            <img src={item} alt="" />

          </motion.div>

        ))}

      </div>

      <br />
      <br />

     <h2 className="section-title">
  Product Visualisation
</h2>

<div className="grid">

  <div className="card">
    <video autoPlay muted loop playsInline>
      <source src="/visual1.mp4" type="video/mp4" />
    </video>
  </div>

  <div className="card">
    <video autoPlay muted loop playsInline>
      <source src="/visual2.mp4" type="video/mp4" />
    </video>
  </div>

  <div className="card">
    <video autoPlay muted loop playsInline>
      <source src="/visual3.mp4" type="video/mp4" />
    </video>
  </div>

  <div className="card">
    <video autoPlay muted loop playsInline>
      <source src="/visual4.mp4" type="video/mp4" />
    </video>
  </div>

</div>

    </div>
  );
}

export default Models;