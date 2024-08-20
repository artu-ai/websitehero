import React from 'react';
import { Button } from "./ui/button";
import { buttonVariants } from "./ui/button";
import { HeroCards } from "./HeroCards";

export const Hero = () => {
  return (
    <section className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10">
      <div className="text-center lg:text-start space-y-6">
        <main className="text-5xl md:text-6xl font-bold">
          <h1 className="inline">
            <span className="inline text-primary">
              Artu:
            </span>{" "}
            Asistente 
          </h1>{" "}
          Regulatorio{" "}
          <h2 className="inline">
            <span className="inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] text-transparent bg-clip-text">
              Impulsado por IA
            </span>{" "}
          </h2>
        </main>

        <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
        Pregunta cualquier duda regulatoria y automatiza el seguimiento de leyes y regulaciones en México con Artu, tu asistente inteligente para todo tema regulatorio en el país.
        </p>

        <div className="space-y-4 md:space-y-0 md:space-x-4">
          <a href="https://calendly.com/juanpabloramirez-004/30min" target="_blank" rel="noopener noreferrer">
            <Button className="w-full md:w-1/3">Solicitar Demo</Button>
          </a>

          <a
            rel="noreferrer noopener"
            href="https://app.artu.ai/"
            target="_blank"
            className={`w-full md:w-1/3 ${buttonVariants({
              variant: "outline",
            })}`}
          >
            Ingresar
          </a>
        </div>
      </div>

      {/* Hero cards sections */}
      <div className="z-10">
        <HeroCards />
      </div>

      {/* Shadow effect */}
      <div className="shadow"></div>
    </section>
  );
};