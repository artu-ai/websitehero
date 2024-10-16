import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "./ui/badge";
import { ThumbsUp, ThumbsDown, Tag } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardFooter,
} from "@/components/ui/card";
import { ResponsivePie } from "@nivo/pie";
import { BorderBeam } from "@/components/magicui/border-beam";

const primaryColor = getComputedStyle(document.documentElement).getPropertyValue('--color-primary') || "#1ab6db"; // Fallback color

export const HeroCards = () => {
  const [currentChatIndex, setCurrentChatIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(true); // Start with the answer shown
  const [iconClicked, setIconClicked] = useState([false, false]);

  const handleChatClick = () => {
    setShowAnswer(!showAnswer);
    if (!showAnswer) {
      setShowAnswer(true);
    } else {
      setCurrentChatIndex((prevIndex) => (prevIndex + 1) % 2);
      setShowAnswer(false);
    }
  };

  const handleIconClick = (index: number) => {
    const newIconClicked = [...iconClicked];
    newIconClicked[index] = !newIconClicked[index];
    setIconClicked(newIconClicked);
  };

  return (
    <div className="hidden lg:grid grid-cols-2 gap-6 grid-rows-2 mt-4"> {/* Reduced margin-top from mt-12 to mt-4 */}
      {/* First row: Artu Chat and Iniciativas este Mes */}
      <div className="row-start-1">
        {/* Chat Card */}
        <Card className="w-full h-full relative">
          <BorderBeam colorFrom={primaryColor} colorTo="#1a85db" /> {/* Updated BorderBeam with primary color */}
          <CardHeader>
            <div className="text-lg font-bold">Artu Chat</div>
            <div className="text-gray-400 text-xs mb-2">Haz clic para interactuar</div>
          </CardHeader>
          <CardContent>
            <div
              onClick={handleChatClick}
              className="rounded-lg p-3 cursor-pointer text-sm bg-[#16A6E9] text-white mb-2"
              style={{ width: 'auto', maxWidth: '300px' }}
            >
              Quiero lanzar una tarjeta de crédito. ¿Qué regulaciones debo considerar?
            </div>
            {showAnswer && (
              <div className="rounded-lg p-3 text-sm bg-gray-300 text-black mb-2" style={{ width: 'auto', maxWidth: '300px' }}>
                Debes cumplir con las normativas del Banco de México, la CNBV, y la Ley de Instituciones de Crédito...
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      <div className="row-start-1">
        {/* Pie Chart Card */}
        <Card className="w-full h-full relative">
          <BorderBeam colorFrom={primaryColor} colorTo="#1a85db" /> {/* Updated BorderBeam with primary color */}
          <CardHeader className="w-full h-full p-4">
            <div className="text-center text-lg font-bold mb-2">Iniciativas este Mes</div>
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

      {/* Second row: Gratis! and Resolución que modifica */}
      <div className="row-start-2">
        {/* Pricing Card */}
        <Card className="w-full relative">
          <BorderBeam colorFrom={primaryColor} colorTo="#1a85db" /> {/* Updated BorderBeam with primary color */}
          <CardHeader>
            <div className="text-left">
              <span className="font-bold text-lg">Gratis!</span>
              <Badge variant="secondary" className="text-sm text-primary ml-2">Promoción</Badge>
            </div>
            <div className="text-left">
              <span className="text-3xl font-bold">$0</span>
              <span className="text-muted-foreground"> /month</span>
            </div>
          </CardHeader>

          <CardContent className="text-left">
            Empieza un trial gratis por 1 mes y prueba por ti mismo las capacidades de Artu.
            <Button 
              className="w-full mt-4 text-left"
              onClick={() => window.open("https://calendly.com/juanpabloramirez-004/30min", "_blank")}
            >
              Iniciar prueba gratuita
            </Button>
          </CardContent>
        </Card>
      </div>

      <div className="row-start-2">
        {/* Service Card */}
        <Card className="w-full relative">
          <BorderBeam colorFrom={primaryColor} colorTo="#1a85db" /> {/* Updated BorderBeam with primary color */}
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <div className="text-lg font-bold">Resolución que modifica a las instituciones de crédito.</div>
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
              onClick={() => handleIconClick(0)}
            />
            <ThumbsDown 
              className={`w-4 h-4 cursor-pointer ${iconClicked[1] ? "fill-current text-black" : "text-gray-500"}`} 
              onClick={() => handleIconClick(1)}
            />
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};
