import React from 'react';
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Check } from "lucide-react";
import { ThumbsUp, ThumbsDown, Tag } from "lucide-react";
"use client";
import { ResponsivePie } from "@nivo/pie";

const primaryColor = getComputedStyle(document.documentElement).getPropertyValue('--color-primary') || "#1ab6db"; // Fallback color

const data = [
  {
    id: "PRD",
    label: "PRD",
    value: 146,
    color: "hsl(266, 70%, 50%)",
  },
  {
    id: "PRI",
    label: "PRI",
    value: 351,
    color: "hsl(8, 70%, 50%)",
  },
  {
    id: "PAN",
    label: "PAN",
    value: 199,
    color: "hsl(43, 70%, 50%)",
  },
  {
    id: "Morena",
    label: "Morena",
    value: 425,
    color: "hsl(242, 70%, 50%)",
  },
  {
    id: "PT",
    label: "PT",
    value: 415,
    color: "hsl(169, 70%, 50%)",
  },
];

function PieChart(props: any) {
  return (
    <div {...props} style={{ height: "100%", width: "100%" }}>
      <ResponsivePie
        data={data}
        margin={{ top: 40, right: 80, bottom: 40, left: 80 }} // Adjusted bottom margin
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
        defs={[
          {
            id: "dots",
            type: "patternDots",
            background: "inherit",
            color: "rgba(255, 255, 255, 0.3)",
            size: 4,
            padding: 1,
            stagger: true,
          },
          {
            id: "lines",
            type: "patternLines",
            background: "inherit",
            color: "rgba(255, 255, 255, 0.3)",
            rotation: -45,
            lineWidth: 6,
            spacing: 10,
          },
        ]}
        fill={[
          {
            match: {
              id: "PAN",
            },
            id: "dots",
          },
          {
            match: {
              id: "PRI",
            },
            id: "dots",
          },
          {
            match: {
              id: "PRD",
            },
            id: "dots",
          },
          {
            match: {
              id: "Morena",
            },
            id: "dots",
          },
          {
            match: {
              id: "PT",
            },
            id: "lines",
          },
        ]}
      />
    </div>
  );
}

export const HeroCards = () => {
  const [iconClicked, setIconClicked] = useState([false, false, false]);
  const [showTagOptions, setShowTagOptions] = useState(false);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const handleIconClick = (index: number) => {
    const newIconClicked = [...iconClicked];
    newIconClicked[index] = !newIconClicked[index];
    setIconClicked(newIconClicked);
  };

  const handleTagClick = () => {
    setShowTagOptions(!showTagOptions);
  };

  const handleTagOptionClick = (tag: string) => {
    if (!selectedTags.includes(tag)) {
      setSelectedTags([...selectedTags, tag]);
    }
    setShowTagOptions(false);
  };

  return (
    <div className="hidden lg:flex flex-row flex-wrap gap-8 relative w-[700px] h-[500px]">
      {/* Testimonial */}
      <Card className="absolute w-[340px] -top-[15px] drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-lg">Leyes Aprobadas</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">+40</div>
          <p className="text-xs text-gray-500 dark:text-gray-400">+15% desde el último mes</p>
        </CardContent>
      </Card>

      {/* Pie Chart Card */}
      <Card className="absolute right-[20px] top-4 w-80 h-64 flex flex-col justify-center items-center drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="w-full h-full p-4">
          <div className="text-center text-lg font-bold mb-2">Iniciativas este Mes</div>
          <PieChart />
        </CardHeader>
      </Card>

      {/* Pricing */}
      <Card className="absolute top-[150px] left-[50px] w-72 drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader>
          <CardTitle className="flex item-center justify-between">
            Gratis!
            <Badge variant="secondary" className="text-sm text-primary">
              Promoción
            </Badge>
          </CardTitle>
          <div>
            <span className="text-3xl font-bold">$0</span>
            <span className="text-muted-foreground"> /month</span>
          </div>

          <CardDescription>
          Empieza un trial gratis por 1 mes y prueba por ti mismo las capacidades de Artu. No necesitas poner tarjeta, solo crea una cuenta y disfruta de la magia de Artu.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <Button 
            className="w-full"
            onClick={() => window.open("https://calendly.com/juanpabloramirez-004/30min ", "_blank")}
          >
            Iniciar prueba gratuita
          </Button>
        </CardContent>

        <hr className="w-4/5 m-auto mb-4" />

        <CardFooter className="flex">
          <div className="space-y-4">
            {["1 mes", "Oferta limitada"].map(
              (benefit: string) => (
                <span key={benefit} className="flex">
                  <Check className="text-green-500" />{" "}
                  <h3 className="ml-2">{benefit}</h3>
                </span>
              )
            )}
          </div>
        </CardFooter>
      </Card>

      {/* Service */}
      <Card className="absolute w-[350px] right-[-10px] top-[300px] drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-lg font-bold">	Resolución que modifica a las instituciones de crédito.</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-md">El Congreso aprobó una reforma a la Ley de Instituciones de Crédito que ahora exige a los bancos aumentar su capital mínimo y ofrecer mayor transparencia en los contratos de crédito. Esto significa que las instituciones financieras deberán ser más claras en sus términos y condiciones, y los clientes podrían ver un aumento en los requisitos para obtener un préstamo.</p>
          <div className="flex flex-wrap gap-2 mt-2">
            <Badge variant="outline">Banco Central</Badge>
            <Badge variant="outline">Reforma</Badge>
            <Badge variant="outline">Fintech</Badge>
            {selectedTags.map((tag) => (
              <Badge key={tag} variant="outline">{tag}</Badge>
            ))}
          </div>
        </CardContent>
        {showTagOptions && (
          <div className="absolute right-4 bottom-12 bg-white dark:bg-gray-800 p-2 rounded shadow-lg">
            <div className="cursor-pointer p-1" onClick={() => handleTagOptionClick("Importante")}>Importante</div>
            <div className="cursor-pointer p-1" onClick={() => handleTagOptionClick("Crítico")}>Crítico</div>
            <div className="cursor-pointer p-1" onClick={() => handleTagOptionClick("Seguir")}>Seguir</div>
          </div>
        )}
        <CardFooter className="flex justify-end gap-4">
          <Tag 
            className={`w-4 h-4 cursor-pointer ${showTagOptions ? "fill-current text-black dark:text-white" : "text-gray-500 dark:text-gray-400"}`} 
            onClick={handleTagClick}
          />
          <ThumbsUp 
            className={`w-4 h-4 cursor-pointer ${iconClicked[1] ? "fill-current text-black dark:text-white" : "text-gray-500 dark:text-gray-400"}`} 
            onClick={() => handleIconClick(1)}
          />
          <ThumbsDown 
            className={`w-4 h-4 cursor-pointer ${iconClicked[2] ? "fill-current text-black dark:text-white" : "text-gray-500 dark:text-gray-400"}`} 
            onClick={() => handleIconClick(2)}
          />
        </CardFooter>
      </Card>
    </div>
  );
};
