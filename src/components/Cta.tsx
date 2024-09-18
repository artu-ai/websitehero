import React from 'react';
import { Button } from "./ui/button";
import AnimatedShinyText from './magicui/animated-shiny-text';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

export const Cta = () => {
  return (
    <section
      id="cta"
      className="bg-muted/50 py-16 my-24 sm:my-32"
    >
      <div className="container lg:grid lg:grid-cols-2 place-items-center">
        <div className="lg:col-start-1">
          <motion.h2
            className="text-3xl md:text-4xl font-bold "
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Automatiza el
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              {" "}
              Monitoreo Regulatorio{" "}
            </span>
            con Artu
          </motion.h2>
          <motion.p
            className="text-muted-foreground text-xl mt-4 mb-8 lg:mb-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            Empodera tu negocio con información impulsada por IA y notificaciones en tiempo real. Asegura el cumplimiento de tu empresa.
          </motion.p>
        </div>

        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 lg:col-start-2">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          >
            <Button 
              className="w-full md:w-auto"
              onClick={() => window.open("https://calendly.com/juanpabloramirez-004/30min", "_blank")}
            >
              <AnimatedShinyText className="text-lg font-medium">
                Solicitar una Demostración
              </AnimatedShinyText>
            </Button>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
          >
            <Button
              variant="outline"
              className="w-full md:w-auto"
              onClick={() => window.open("https://wa.me/16463210085", "_blank")}
            >
              Contáctanos
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
