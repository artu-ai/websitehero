import React from 'react';
import { Button } from "./ui/button";

export const Cta = () => {
  return (
    <section
      id="cta"
      className="bg-muted/50 py-16 my-24 sm:my-32"
    >
      <div className="container lg:grid lg:grid-cols-2 place-items-center">
        <div className="lg:col-start-1">
          <h2 className="text-3xl md:text-4xl font-bold ">
            Automatiza el
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              {" "}
              Monitoreo Regulatorio{" "}
            </span>
            con Artu
          </h2>
          <p className="text-muted-foreground text-xl mt-4 mb-8 lg:mb-0">
            Empodera tu negocio con información impulsada por IA y notificaciones en tiempo real. Asegura el cumplimiento y aprovecha las oportunidades sin esfuerzo.
          </p>
        </div>

        <div className="space-y-4 lg:col-start-2">
          <Button 
            className="w-full md:mr-4 md:w-auto"
            onClick={() => window.open("https://calendly.com/juanpi-splc/30min", "_blank")}
          >
            Solicitar una Demostración
          </Button>
          <Button
            variant="outline"
            className="w-full md:w-auto"
            onClick={() => window.open("https://wa.me/16314805472", "_blank")}
          >
            Contáctanos
          </Button>
        </div>
      </div>
    </section>
  );
};
