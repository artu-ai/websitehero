import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "./ui/badge";
import { ThumbsUp, ThumbsDown, Tag } from "lucide-react";
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card";
import { ResponsivePie } from "@nivo/pie";
import { BorderBeam } from "@/components/magicui/border-beam";
import "./HeroCards.css";

const primaryColor = getComputedStyle(document.documentElement).getPropertyValue('--color-primary') || "#1ab6db";

export const HeroCards = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(true); // Show both messages initially
  const [iconClicked, setIconClicked] = useState([false, false]);

  const images = [
    "https://res.cloudinary.com/dfmpmintr/image/upload/v1730852633/Untitled_39_b0bdw0.png",
    "https://res.cloudinary.com/dfmpmintr/image/upload/v1730928503/Untitled-2_22_nw7cn5.png",
    "https://res.cloudinary.com/dfmpmintr/image/upload/v1730852633/Untitled_39_b0bdw0.png",
    "https://res.cloudinary.com/dfmpmintr/image/upload/v1730928503/Untitled-3_17_hgizuz.png"
  ];
  const messages = ["Analizando identidad y transacción...", "Identidad y transacción aprobadas", "Analizando identidad y transacción...", "Alta probabilidad de lavado de dinero"];
  const icons = [
    <span className="loading-dots">.</span>,
    "✔️",
    <span className="loading-dots">.</span>,
    "❌"
  ];
  const iconColors = ["#000", "green", "#000", "red"];

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hidden lg:grid grid-cols-2 gap-6 grid-rows-2 mt-4">
      <div className="row-start-1 relative">
        <Card className="w-full h-auto relative overflow-hidden">
          <span className="open-applications-bubble">Waitlist</span>
          <BorderBeam colorFrom={primaryColor} colorTo="#1a85db" />
          <CardHeader className="pb-1">
            <div className="text-lg font-bold">Automatización PLD</div>
            <div className="text-gray-400 text-xs">KYC, Matrices y Monitoreo Transaccional</div>
          </CardHeader>
          <CardContent className="flex flex-col items-center justify-center relative p-4">
            <div className="inspection-line"></div>
            <div className="relative">
              <img 
                src={images[imageIndex]} 
                alt={messages[imageIndex]} 
                className="mt-4"
              />
              <div 
                className="absolute inset-0 flex items-center justify-center text-5xl"
                style={{ color: iconColors[imageIndex] }}
              >
                {icons[imageIndex]}
              </div>
            </div>
          </CardContent>
          <div className="text-center text-xs text-primary font-bold my-4">
            {messages[imageIndex]}
          </div>
        </Card>
      </div>

      <div className="row-start-1">
        <Card className="w-full h-full relative">
          <BorderBeam colorFrom={primaryColor} colorTo="#1a85db" />
          <CardHeader className="w-full h-full p-4">
            <div className="text-center text-lg font-bold mb-2">Visualizaciones regulatorias
</div>
            <ResponsivePie
              data={[
                { id: "PRD", label: "PRD", value: 146, color: "hsl(266, 70%, 50%)" },
                { id: "PRI", label: "PRI", value: 351, color: "hsl(8, 70%, 50%)" },
                { id: "PAN", label: "PAN", value: 199, color: "hsl(43, 70%, 50%)" },
                { id: "Morena", label: "Morena", value: 425, color: "hsl(242, 70%, 50%)" },
                { id: "PT", label: "PT", value: 415, color: "hsl(169, 70%, 50%)" },
              ]}
              margin={{ top: 40, right: 80, bottom: 40, left: 80 }}
              innerRadius={0.5}
              padAngle={0.7}
              cornerRadius={3}
              activeOuterRadiusOffset={8}
              borderWidth={1}
              borderColor={{
                from: "color",
                modifiers: [["darker", 0.2]],
              }}
              arcLinkLabelsSkipAngle={10}
              arcLinkLabelsTextColor={primaryColor}
              arcLinkLabelsThickness={2}
              arcLinkLabelsColor={{ from: "color" }}
              arcLabelsSkipAngle={10}
              arcLabelsTextColor="#333333"
            />
          </CardHeader>
        </Card>
      </div>

      <div className="row-start-2">
        <Card className="w-full h-auto relative">
          <BorderBeam colorFrom={primaryColor} colorTo="#1a85db" />
          <CardHeader>
            <div className="text-lg font-bold">Chatbot Regulatorio</div>
            <div className="text-gray-400 text-xs mb-2">Haz clic para interactuar</div>
          </CardHeader>
          <CardContent style={{ maxWidth: '300px', padding: '8px' }}>
            <div
              onClick={() => setShowAnswer(!showAnswer)}
              className="rounded-lg p-2 cursor-pointer text-sm bg-[#16A6E9] text-white mb-2"
            >
              Quiero lanzar una tarjeta de crédito. ¿Qué regulaciones debo considerar?
            </div>
            {showAnswer && (
              <div className="rounded-lg p-2 text-sm bg-gray-300 text-black mb-2">
                Debes cumplir con las normativas del Banco de México, la CNBV, y la Ley de Instituciones de Crédito...
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      <div className="row-start-2">
        <Card className="w-full relative">
          <BorderBeam colorFrom={primaryColor} colorTo="#1a85db" />
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <div className="text-lg font-bold">Monitoreo Regulatorio</div>
          </CardHeader>
          <CardContent>
            <p className="text-md">
              El Congreso aprobó una reforma a la Ley de Instituciones de Crédito que ahora exige a los bancos aumentar su capital mínimo y ofrecer mayor transparencia en los contratos de crédito...
            </p>
            <div className="flex flex-wrap gap-2 mt-2">
              <Badge variant="outline">Banco Central</Badge>
              <Badge variant="outline">Reforma</Badge>
              <Badge variant="outline">Fintech</Badge>
            </div>
          </CardContent>
          <CardFooter className="flex justify-end gap-4">
            <Tag className="w-4 h-4 cursor-pointer" />
            <ThumbsUp 
              className={`w-4 h-4 cursor-pointer ${iconClicked[0] ? "fill-current text-black" : "text-gray-500"}`} 
              onClick={() => setIconClicked([!iconClicked[0], iconClicked[1]])}
            />
            <ThumbsDown 
              className={`w-4 h-4 cursor-pointer ${iconClicked[1] ? "fill-current text-black" : "text-gray-500"}`} 
              onClick={() => setIconClicked([iconClicked[0], !iconClicked[1]])}
            />
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};
