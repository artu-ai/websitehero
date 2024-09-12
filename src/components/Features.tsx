import React, { useState } from 'react';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { ClipboardList, Sliders, Activity, Bell } from "lucide-react";

// Información del monitoreo continuo
const monitoringSteps = [
  {
    step: "Creación",
    description: (
      <>
        Las empresas crean <span style={{ color: "#16A6E9" }}>monitores personalizados</span> para seguir temas generales o específicos. Responden tres preguntas sobre su compañía y tienen una conversación con nuestro bot sobre lo que desean monitorear.
      </>
    ),
    icon: <ClipboardList size={20} />,
  },
  {
    step: "Modelo",
    description: (
      <>
        Con la <span style={{ color: "#16A6E9" }}>información proporcionada</span>, creamos un modelo de Machine Learning adaptado a cada monitor. Este modelo detecta <span style={{ color: "#16A6E9" }}>riesgos</span> y oportunidades en sitios oficiales de comunicación de iniciativas a nivel federal del gobierno (DOF, CNBV, Conamer...).
      </>
    ),
    icon: <Sliders size={20} />,
  },
  {
    step: "Monitoreo",
    description: (
      <>
        Nuestro sistema monitorea continuamente las <span style={{ color: "#16A6E9" }}>regulaciones y leyes</span> las 24 horas, todos los días, asegurando que no se pierda ninguna actualización relevante.
      </>
    ),
    icon: <Activity size={20} />,
  },
  {
    step: "Notificaciones",
    description: (
      <>
        Cada vez que se encuentre algo relevante, se les notificará por correo electrónico, incluyendo un <span style={{ color: "#16A6E9" }}>resumen rápido</span> sobre por qué podría ser importante para ustedes.
      </>
    ),
    icon: <Bell size={20} />,
  },
];

// Componente para la carta dinámica de Monitoreo Continuo
const MonitoringCard = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const handleNextStep = () => {
    setCurrentStep((prevStep) => (prevStep + 1) % monitoringSteps.length);
  };

  return (
    <Card>
      {/* Constant Header for "Monitoreo Automatizado" */}
      <CardHeader>
        <h2 className="text-xl font-bold text-[#16A6E9]">Monitoreo Automatizado</h2>
      </CardHeader>

      {/* Chevron de pasos */}
      <div className="flex justify-center my-4 gap-2"> {/* Center aligned, adjusted gap */}
        {monitoringSteps.map((step, index) => (
          <div
            key={index}
            className={`flex items-center gap-2 text-sm px-4 py-2 rounded-full cursor-pointer transition-all duration-300 ${
              index === currentStep ? "bg-[#16A6E9] text-white" : "bg-gray-200 text-gray-500"
            }`}
          >
            {step.icon}
            <span>{index + 1}. {step.step}</span>
          </div>
        ))}
      </div>

      <CardContent>
        <p>{monitoringSteps[currentStep].description}</p>
      </CardContent>

      <CardFooter>
        <button className="bg-gray-300 p-2 rounded" onClick={handleNextStep}>
          Siguiente Paso
        </button>
      </CardFooter>
    </Card>
  );
};

// Conversación del asistente inteligente, con interfaz de chat visual
const conversationSteps = [
  { role: "bot", text: "Soy un asistente de inteligencia artificial experto en regulación financiera." },
  { role: "user", text: "El me contesta cualquier pregunta regulatoria de manera concisa y al punto." },
  { role: "bot", text: "También te digo de dónde saco la información para que sepas que es precisa." },
  { role: "user", text: "Artu es lo mejor que me ha pasado." },
];

// Componente para la carta de Asistente Inteligente con interfaz de chat
const AssistantCard = () => {
  const [currentMessage, setCurrentMessage] = useState(0);

  const handleNextMessage = () => {
    setCurrentMessage((prevMessage) => (prevMessage + 1) % conversationSteps.length);
  };

  return (
    <Card>
      <CardHeader>
        <h2 className="text-xl font-bold">Asistente Inteligente</h2>
      </CardHeader>
      <CardContent>
        <div className="chat-interface" style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '8px' }}>
          {conversationSteps.slice(0, currentMessage + 1).map((message, index) => (
            <div
              key={index}
              style={{
                display: 'flex',
                justifyContent: message.role === "user" ? 'flex-end' : 'flex-start',
                marginBottom: '10px'
              }}
            >
              <div
                style={{
                  maxWidth: '60%',
                  backgroundColor: message.role === "user" ? '#16A6E9' : '#f1f1f1',
                  color: message.role === "user" ? '#fff' : '#000',
                  padding: '10px',
                  borderRadius: '20px',
                  textAlign: 'left'
                }}
              >
                {message.text}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <button className="bg-gray-300 p-2 rounded" onClick={handleNextMessage}>
          Ver siguiente mensaje
        </button>
      </CardFooter>
    </Card>
  );
};

// Componente principal para renderizar ambas cartas
export const Features = () => {
  return (
    <section
      id="features"
      className="container py-24 sm:py-32 space-y-8"
    >
      <h2 className="text-3xl lg:text-4xl font-bold md:text-center">
        Principales {" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Características
        </span>
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Monitoreo Continuo */}
        <MonitoringCard />
        
        {/* Asistente Inteligente */}
        <AssistantCard />
      </div>
    </section>
  );
};
