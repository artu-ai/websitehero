import React, { useState } from 'react';
import { Button } from "./ui/button";
import { buttonVariants } from "./ui/button";
import { HeroCards } from "./HeroCards";
import AnimatedShinyText from './magicui/animated-shiny-text';
import TypingAnimation from './magicui/typing-animation'; // Typing animation component
import BlurFadeProps from './magicui/typing-animation'; 

export const Hero = () => {
  const [isTypingFinished, setIsTypingFinished] = useState(false);

  const handleTypingFinish = () => {
    setIsTypingFinished(true); // Trigger style changes when typing is done
  };

  // Segments of the text with the correct colors and classes
  const segments = [
    { text: "Artu", className: "text-primary" },
    { text: ": Automatiza Compliance y ", className: "text-black" },
    { text: "regulación", className: "text-primary" },
    { text: " con IA", className: "text-transparent bg-clip-text bg-gradient-to-r from-[#61DAFB] to-[#1fc0f1]" }
  ];

  return (
    <section className="container grid lg:grid-cols-2 place-items-center py-30 md:py-5 gap-10">
      <div className="text-center lg:text-start space-y-6">
        <main className="text-5xl md:text-6xl font-bold">
          {!isTypingFinished ? (
            <TypingAnimation
              segments={segments}
              onFinish={handleTypingFinish}
              duration={100}  // Adjust typing speed
            />
          ) : (
            <h1 className="inline-block">
              <span className="inline text-primary">Artu</span>
              <span className="inline">: Automatiza Compliance y </span>
              <span className="inline text-primary">
                <AnimatedShinyText className="inline text-primary">regulación</AnimatedShinyText>
              </span>
              {/* Explicit space added here */}
              <span> </span>
              <span className="inline text-transparent bg-clip-text bg-gradient-to-r from-[#61DAFB] to-[#1fc0f1]">
              con IA
              </span>
            </h1>
          )}
        </main>

        <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
        Automatiza cualquier proceso de compliance y resuelve dudas regulatorias con Artu, el software que potencia el cumplimiento en Mexico con IA.
        </p>

        <div className="space-y-4 md:space-y-0 md:space-x-4">
          <a href="https://calendly.com/juanpabloramirez-004/onboarding-artu" target="_blank" rel="noopener noreferrer">
            <Button className="w-full md:w-1/3">
              <AnimatedShinyText>Solicitar Demo</AnimatedShinyText>
            </Button>
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

      <div className="z-10">
        <HeroCards />
      </div>

      <div className="shadow"></div>
    </section>
  );
};
