import { Statistics } from "./Statistics";
const image4 = "https://res.cloudinary.com/ddaqwpvht/image/upload/v1719339835/imageswebsite-7_zojwr5.png";

export const About = () => {
  return (
    <section
      id="about"
      className="container py-24 sm:py-32"
    >
      <div className="bg-muted/50 border rounded-lg py-12">
        <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
          <img
            src={image4}
            alt="New Image"
            className="w-[300px] object-contain rounded-lg"
          />
          <div className="bg-green-0 flex flex-col justify-between">
            <div className="pb-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                  Acerca de{" "}
                </span>
                Artu
              </h2>
              <p className="text-xl text-muted-foreground mt-4">
              Artu es un software de inteligencia artificial diseñado para automatizar el seguimiento de regulaciones y leyes en México. Nuestra solución proporciona a las empresas actualizaciones en tiempo real sobre posibles riesgos y oportunidades, con resúmenes detallados y concretos. Con Artu, las empresas pueden ahorrar costos de monitoreo, reducir multas por incumplimiento y agilizar sus operaciones con información precisa y oportuna, permitiéndoles enfocarse en lo que realmente importa: el crecimiento de su negocio.
              </p>
            </div>

            <Statistics />
          </div>
        </div>
      </div>
    </section>
  );
};
