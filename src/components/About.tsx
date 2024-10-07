import NumberTicker from "./magicui/NumberTicker"; // Importando NumberTicker desde la ruta correcta
import HeroVideoDialog from './magicui/hero-video-dialog'; // Importing HeroVideoDialog to replace iframe
import TextRevealByWord from "./magicui/text-reveal";
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

export const About = () => {
  return (
    <section id="about" className="container py-24 sm:py-32">
      <motion.div
        className="bg-muted/50 border rounded-lg py-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12 items-center">
          <motion.div
            className="w-full md:w-1/2 flex items-center justify-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <HeroVideoDialog
              videoSrc="https://www.youtube.com/embed/ZlQjoLlA-z0"
              thumbnailSrc="https://img.youtube.com/vi/ZlQjoLlA-z0/maxresdefault.jpg"
              thumbnailAlt="Artu Overview Video"
              animationStyle="from-center"
              className="w-full h-full rounded-lg"
            />
          </motion.div>
          <motion.div
            className="bg-green-0 flex flex-col justify-between w-full md:w-1/2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          >
            <div className="pb-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                  Acerca de{" "}
                </span>
                Artu
              </h2>
              <p className="text-xl text-muted-foreground mt-4">
                Artu es un software de IA que automatiza el monitoreo de regulaciones y actúa como un chat GPT especializado en temas regulatorios. Además de nuestros productos preconfigurados de monitoreo y asistencia, también desarrollamos soluciones personalizadas para automatizar cualquier proceso de compliance. Somos expertos en crear herramientas de compliance con IA, ayudando a las empresas a reducir costos, evitar multas y agilizar sus operaciones.
              </p>
            </div>
            <div className="flex justify-between mt-6">
              <motion.div
                className="text-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeInUp}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
              >
                <p className="text-4xl font-bold">
                  <NumberTicker value={3} delay={0.5} className="inline-block" />
                  X
                </p>
                <p className="text-base">Mayor cobertura</p>
              </motion.div>
              <motion.div
                className="text-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeInUp}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
              >
                <p className="text-4xl font-bold">
                  <NumberTicker value={70} delay={0.5} className="inline-block" />%
                </p>
                <p className="text-base">Mayor productividad</p>
              </motion.div>
              <motion.div
                className="text-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeInUp}
                transition={{ duration: 0.8, ease: "easeOut", delay: 1.0 }}
              >
                <p className="text-4xl font-bold">
                  <NumberTicker value={24} delay={0.5} className="inline-block" />/7
                </p>
                <p className="text-base">Monitoreo continuo</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};
