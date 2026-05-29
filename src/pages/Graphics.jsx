import { motion } from "framer-motion";
import { useState } from "react";

function Graphics() {

  const [selectedImage, setSelectedImage] = useState(null);

  const sections = [

  {
    title: "Poster Designs",

    images: [
      "/poster1.jpg",
      "/poster2.jpg",
      "/poster3.jpg",
      "/poster4.jpg"
    ]
  },

  {
    title: "Business Cards",

    images: [
      "/card1.jpg",
      "/card2.jpg",
      "/card3.jpg",
      "/card4.jpg"
    ]
  },

  {
    title: "Logo Designs",

    images: [
      "/logo1.jpg",
      "/logo2.jpg",
      "/logo3.jpg",
      "/logo4.jpg"
    ]
  },

  {
    title: "Banner Designs",

    images: [
      "/banner1.jpg",
      "/banner2.jpg",
      "/banner3.jpg",
      "/banner4.jpg"
    ]
  }

];

  return (

    <div className="section">

      <h2 className="section-title">
        Graphic Designs
      </h2>

      {sections.map((section, sectionIndex) => (

        <div
          className="graphics-category"
          key={sectionIndex}
        >

          <h3 className="graphics-subtitle">
            {section.title}
          </h3>

          <div className="grid">

            {section.images.map((item, index) => (

              <motion.div
                className="card"
                key={index}

                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}

                transition={{ duration: 0.5 }}

                onClick={() => setSelectedImage(item)}
              >

                <img src={item} alt="" />

              </motion.div>

            ))}

          </div>

        </div>

      ))}

      {selectedImage && (

        <div
          className="lightbox"
          onClick={() => setSelectedImage(null)}
        >

          <img
            src={selectedImage}
            alt=""
            className="lightbox-img"
          />

        </div>

      )}

    </div>

  );
}

export default Graphics;