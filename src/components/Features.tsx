import React, { useState, useEffect, useRef } from 'react';
import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card";
import { AnimatedBeamMultipleOutputDemo } from './AnimatedBeamMultipleOutputDemo';
import { motion } from 'framer-motion';

// Variantes de animación
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

// Componente para la carta de Monitoreo Automatizado
const MonitoringCard = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeInUp}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
    >
      <Card>
        <CardHeader>
          <h2 className="text-xl font-bold text-[#16A6E9]">Monitoreo Automatizado</h2>
        </CardHeader>
        <CardContent>
          <div style={{ display: 'block', marginTop: '-10px', marginBottom: '10px' }}>
            <AnimatedBeamMultipleOutputDemo />
          </div>
          <p className="font-medium">
            El feature de monitoreo de <span className="font-bold text-[#16A6E9]">Artu</span> permite a las empresas financieras en México
            automatizar la vigilancia de <span className="font-bold text-[#16A6E9]">regulaciones gubernamentales</span> a nivel federal. El sistema escanea en tiempo real fuentes
            como el <span className="font-bold text-[#16A6E9]">Diario Oficial de la Federación</span> (DOF) y otras publicaciones relevantes, ofreciendo
            <span className="font-bold text-[#16A6E9]"> alertas inmediatas</span> cuando se publican nuevas normativas, iniciativas o comunicaciones importantes.
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
};

// Nueva conversación para el Asistente Inteligente
const conversationSteps = [
  { role: "user", text: "Hola, ¿qué puedes hacer?" },
  { role: "bot", text: "Hola, soy un agente experto en regulación financiera en México. Estoy aquí para ayudarte con consultas sobre leyes y normativas financieras. ¿En qué puedo asistirte?" },
  { role: "user", text: "Quiero lanzar un producto de pagos aquí en México pero aliarme con China. ¿Qué tipo de entidad debería constituir?" },
  { role: "bot", text: `Para lanzar un producto de pagos en México con una entidad china, te sugiero constituir una **Institución de Fondos de Pago Electrónico (IFPE)**, regulada por la **Ley Fintech**. Las IFPE permiten emitir, administrar y transferir fondos de pago electrónico, lo que las hace ideales para productos de pagos. Además, la **Ley de Inversión Extranjera** permite hasta el 100% de inversión extranjera en estas entidades. **Ley Fintech**: *Art. 2, Fracción IV*, define a las IFPE como instituciones que resguardan y transmiten fondos de pago electrónico. **Ley de Inversión Extranjera**: *Art. 7* permite hasta 100% de inversión extranjera en sociedades mexicanas, salvo excepciones.` },
  { role: "user", text: "¿Podrías proporcionarme exactamente lo que dice el Artículo 7 de la Ley de Inversión Extranjera?" },
  { role: "bot", text: `Claro, el **Artículo 7** de la **Ley de Inversión Extranjera** establece:\n\n*"La inversión extranjera podrá participar en cualquier proporción en el capital social de sociedades mexicanas, excepto en las actividades económicas y sociedades que se señalan en el artículo 6 de esta Ley."*\n\nEsto significa que, salvo en actividades expresamente reservadas, la inversión extranjera puede participar hasta en un 100% en sociedades mexicanas, lo cual facilita tu alianza con la entidad china.` },
  { role: "user", text: "Muchas gracias por tu ayuda." },
  { role: "bot", text: "Con gusto. Si necesitas más información o asesoría sobre regulaciones financieras en México, estoy a tu disposición." }
];

// Componente para la carta de Asistente Inteligente con secuencia de mensajes en bucle y desplazamiento
const AssistantCard = () => {
  const [currentMessage, setCurrentMessage] = useState(0);
  const chatRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessage((prevMessage) => {
        if (prevMessage < conversationSteps.length - 1) {
          return prevMessage + 1;
        } else {
          return 0; // Reinicia la conversación después de que termina.
        }
      });
    }, 4000); // 4 segundos por mensaje

    return () => clearInterval(interval);
  }, []);

  // Efecto para desplazarse al final de la conversación cuando se actualiza el mensaje
  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [currentMessage]);

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeInUp}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
    >
      <Card>
        <CardHeader>
          <h2 className="text-xl font-bold">Asistente Inteligente</h2>
        </CardHeader>
        <CardContent>
          <div
            className="chat-interface p-2"
            ref={chatRef}
            style={{
              borderRadius: '8px',
              height: '600px', // Altura fija
              overflowY: 'auto', // Habilita el scroll cuando el contenido sobrepasa el tamaño
              position: 'relative',
            }}
          >
            {conversationSteps.slice(0, currentMessage + 1).map((message, index) => (
              <div
                key={index}
                style={{
                  display: 'flex',
                  justifyContent: message.role === "user" ? 'flex-end' : 'flex-start',
                  marginBottom: '10px',
                }}
              >
                <div
                  style={{
                    maxWidth: '60%',
                    backgroundColor: message.role === "user" ? '#16A6E9' : '#f1f1f1',
                    color: message.role === "user" ? '#fff' : '#000',
                    padding: '10px',
                    borderRadius: '20px',
                    textAlign: 'left',
                    whiteSpace: 'pre-wrap',
                  }}
                >
                  {message.text}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

// Componente principal para renderizar ambas cartas
export const Features = () => {
  return (
    <section
      id="features"
      className="container py-24 sm:py-32 space-y-8"
    >
      <motion.h2
        className="text-3xl lg:text-4xl font-bold md:text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Principales{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Características
        </span>
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Monitoreo Continuo */}
        <MonitoringCard />

        {/* Asistente Inteligente */}
        <AssistantCard />
      </div>
    </section>
  );
};
