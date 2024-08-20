import { Statistics } from "./Statistics";

export const About = () => {
  return (
    <section id="about" className="container py-24 sm:py-32">
      <div className="bg-muted/50 border rounded-lg py-12">
        <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12 items-center">
          <div className="w-full md:w-1/2">
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/ZlQjoLlA-z0"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="object-contain rounded-lg"
            ></iframe>
          </div>
          <div className="bg-green-0 flex flex-col justify-between w-full md:w-1/2">
            <div className="pb-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                  Acerca de{" "}
                </span>
                Artu
              </h2>
              <p className="text-xl text-muted-foreground mt-4">
                Artu es un software de IA que automatiza el monitoreo de regulaciones y actúa como un chat GPT especializado en temas regulatorios . Proporciona actualizaciones en tiempo real sobre posibles riesgos y oportunidades, con resúmenes detallados y concretos. Con Artu, las empresas pueden ahorrar costos de monitoreo, reducir multas por incumplimiento y agilizar sus operaciones.
              </p>
            </div>
            <div className="flex justify-between mt-6">
              <div className="text-center">
                <p className="text-4xl font-bold">3X</p>
                <p className="text-base">Mayor cobertura</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold">70%</p>
                <p className="text-base">Mayor productividad</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold">24/7</p>
                <p className="text-base">Monitoreo continuo</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
