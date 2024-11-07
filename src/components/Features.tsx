import React, { useState } from 'react';
import { motion } from 'framer-motion';
import HeroVideoDialog from './magicui/hero-video-dialog';
import { ChevronLeft, ChevronRight, Info } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

export const Features = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showMoreInfo, setShowMoreInfo] = useState(false);

  const products = [
    {
      type: "video",
      videoSrc: "https://www.youtube.com/embed/VSBCWiMKFMc",
      thumbnailSrc: "https://res.cloudinary.com/dfmpmintr/image/upload/v1728339876/Untitled_37_tgwxa1.png",
      thumbnailAlt: "Hero Video Thumbnail 1",
      title: "Monitoreo Automatizado",
      description: "Monitoreo Automatizado ayuda a las empresas a mantenerse al día con las regulaciones automáticamente, sin la necesidad de supervisión manual."
    },
    {
      type: "video",
      videoSrc: "https://www.youtube.com/embed/Qb2oRRPvBW4",
      thumbnailSrc: "https://res.cloudinary.com/dfmpmintr/image/upload/v1728340127/Untitled-2_20_wbwxsm.png",
      thumbnailAlt: "Hero Video Thumbnail 2",
      title: "Asistente Regulatorio",
      description: "Asistente Regulatorio proporciona respuestas precisas y rápidas sobre temas regulatorios para mejorar la eficiencia y cumplimiento."
    },
    {
      type: "video",
      videoSrc: "https://www.youtube.com/embed/-n2RVlkUEWk",
      thumbnailSrc: "https://res.cloudinary.com/dfmpmintr/image/upload/v1728341893/Untitled_35_q5pcnp.png",
      title: "Automatización Personalizada",
      description: "Artu ofrece productos de compliance personalizados mediante IA, diseñados específicamente para abordar los requisitos únicos y desafíos de cumplimiento de cada cliente."
    },
    {
      type: "image",
      thumbnailSrc: "https://res.cloudinary.com/dfmpmintr/image/upload/v1730937116/Untitled_40_jln2j8.png",
      thumbnailAlt: "Fourth Product Image",
      title: "Cumplimiento de PLD gratuito para solo 3 empresas! Aplica ahora.",
      buttonText: "Aplica gratis aquí!",
      link: "https://l4j2iw0v9es.typeform.com/to/RDcyWCAR",
    }
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
    setShowMoreInfo(false);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + products.length) % products.length);
    setShowMoreInfo(false);
  };

  const handleMoreInfo = () => {
    setShowMoreInfo(!showMoreInfo);
  };

  return (
    <motion.section
      id="features"
      className="container py-24 sm:py-32 flex flex-col justify-center items-center relative overflow-hidden"
      style={{ width: '100vw' }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-center mb-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        4{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
        Productos
        </span>{" "}
        Principales
      </motion.h2>

      <motion.button
        className="absolute left-8 z-10 p-3 bg-white rounded-full shadow-md"
        onClick={handlePrev}
        style={{ marginRight: '20px' }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <ChevronLeft size={24} />
      </motion.button>

      <motion.div
        key={currentIndex}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="w-full flex flex-col items-center justify-center relative"
        style={{ maxWidth: '60vw' }}
      >
        {products[currentIndex].type === "video" ? (
          <HeroVideoDialog
            videoSrc={products[currentIndex].videoSrc}
            thumbnailSrc={products[currentIndex].thumbnailSrc}
            thumbnailAlt={products[currentIndex].thumbnailAlt}
            animationStyle="from-center"
            className="w-full h-full"
          />
        ) : (
          <div className="relative w-full h-full flex flex-col items-center">
            <img
              src={products[currentIndex].thumbnailSrc}
              alt={products[currentIndex].thumbnailAlt}
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute bottom-10 text-center">
              <a
                href={products[currentIndex].link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="mt-4 px-6 py-3 bg-primary text-white font-semibold rounded-md">
                  {products[currentIndex].buttonText}
                </button>
              </a>
            </div>
          </div>
        )}
        
        {products[currentIndex].type === "video" && (
          <>
            <button
              onClick={handleMoreInfo}
              className="absolute top-4 right-4 flex items-center text-sm text-blue-600 hover:underline bg-white p-2 rounded-full shadow-md"
            >
              <Info size={16} className="mr-1" />
            </button>
            <motion.h3 
              className="text-xl font-semibold text-center mt-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <span className="text-primary">{products[currentIndex].title.split(" ")[0]}</span>{" "}
              <span className="text-black">
                {products[currentIndex].title.split(" ").slice(1).join(" ")}
              </span>
            </motion.h3>
            {showMoreInfo && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="mt-4 p-4 bg-white rounded-lg shadow-md w-full text-center"
              >
                <p className="text-sm text-gray-700">{products[currentIndex].description}</p>
              </motion.div>
            )}
          </>
        )}
      </motion.div>

      <motion.button
        className="absolute right-8 z-10 p-3 bg-white rounded-full shadow-md"
        onClick={handleNext}
        style={{ marginLeft: '20px' }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <ChevronRight size={24} />
      </motion.button>

      <div className="absolute bottom-8 flex space-x-2">
        {products.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-gray-800' : 'bg-gray-400'}`}
          />
        ))}
      </div>
    </motion.section>
  );
};
