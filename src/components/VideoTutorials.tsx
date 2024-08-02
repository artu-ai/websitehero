import React from 'react';

const videoThumbnails = [
  { name: "Crear una Cuenta", link: "https://www.loom.com/share/f24ac91a0cf04ef68cdfcaa6a7b266b8?sid=d34f8396-3615-49d6-8c18-a246e67e26f5" },
  { name: "Uso del Dashboard", link: "https://www.loom.com/share/af74d7223e9e4db79b685b5e002933ca?sid=270edcd8-019f-467b-9310-87144cb599ec" },
  { name: "Crear Gráficas en Analítica", link: "https://www.loom.com/share/3d1c8fc21e1d426f9a71cdcc88c0d4bb?sid=9cf61b97-e125-4bf3-8a44-8d3b6dceebb8" },
  { name: "Entrenamiento del Monitor", link: "https://www.loom.com/share/31d2599932a14e289a435b61dda5163c?sid=ad5255cd-902a-4bdf-a20f-dd35bc787c95" },
  { name: "Uso del Chat", link: "https://www.loom.com/share/15b65bf6c84846deb94981ae3d1313b5?sid=9603ae05-ac0d-4fbc-bf7b-b2edd0eaf1ca" },
  { name: "Generación de Reportes", link: "https://www.loom.com/share/5edb366bacb04da1827ac390c316daf6?sid=7b815b4b-e21b-4e5c-a661-285ea7fb6cf1" },
  { name: "Configuración", link: "https://www.loom.com/share/8d12fa7abaf644ccaf8aa098e384d97f?sid=8ebd8952-d453-47e5-9b38-ca47cd3b82c2" },
];

const VideoTutorials = () => {
  return (
    <section id="tutorials" className="container text-center py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold ">
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
        Videos Tutoriales
        </span>{" "}
        para usar Artu
      </h2>
      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-black">
      ¡Descubre cómo sacar el máximo provecho de nuestras herramientas con nuestros videos tutoriales! Aprende de manera fácil y rápida con nuestras guías paso a paso.
      </p>
      
      <div className="flex justify-center mb-8">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/IqJtTGdK8jE" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {videoThumbnails.slice(0, 3).map(({ name, link }) => (
          <a
            key={name}
            href={link}
            className="bg-muted/50 hover:bg-muted text-primary py-8 px-4 rounded-md shadow-md transition-all duration-300 flex items-center justify-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="text-center text-primary font-bold text-xl">{name}</p>
          </a>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
        {videoThumbnails.slice(3).map(({ name, link }) => (
          <a
            key={name}
            href={link}
            className="bg-muted/50 hover:bg-muted text-primary py-8 px-4 rounded-md shadow-md transition-all duration-300 flex items-center justify-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="text-center text-primary font-bold text-xl">{name}</p>
          </a>
        ))}
      </div>
    </section>
  );
};

export default VideoTutorials;
