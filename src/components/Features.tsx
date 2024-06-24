import React from 'react';
import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const image1 = "https://res.cloudinary.com/ddaqwpvht/image/upload/v1719178808/imageswebsite-2_tkcftr.png";
const image2 = "https://res.cloudinary.com/ddaqwpvht/image/upload/v1719178808/imageswebsite-4_z7vnux.png";
const image3 = "https://res.cloudinary.com/ddaqwpvht/image/upload/v1719178808/imageswebsite-3_xocngr.png";

interface FeatureProps {
  title: string;
  description: string;
  image: string;
}

const features: FeatureProps[] = [
  {
    title: "Monitoreo en Tiempo Real",
    description:
      "Artu ofrece monitoreo continuo y en tiempo real de regulaciones y leyes, asegurando que tu empresa siempre esté al tanto de cualquier cambio.",
    image: image1,
  },
  {
    title: "Alertas Inteligentes",
    description:
      "Recibe notificaciones inmediatas sobre regulaciones relevantes, con resúmenes claros y concisos para facilitar la toma de decisiones.",
    image: image2,
  },
  {
    title: "Análisis y Reportes Detallados",
    description:
      "Genera reportes ejecutivos personalizados que resumen el impacto potencial de las nuevas regulaciones y leyes en tu empresa",
    image: image3,
  },
];

const featureList: string[] = [
  "Monitoreo 24/7",
  "Cobertura Nacional",
  "Alertas en Tiempo Real",
  "Reportes Personalizados",
  "Actualizaciones Automáticas",
  "Seguridad de Datos",
  "Analítica Avanzada",
];

export const Features = () => {
  console.log("Features component rendering", features);

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

      <div className="flex flex-wrap md:justify-center gap-4">
        {featureList.map((feature: string) => (
          <div key={feature}>
            <Badge
              variant="secondary"
              className="text-sm"
            >
              {feature}
            </Badge>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map(({ title, description, image }: FeatureProps) => (
          <Card key={title}>
            <CardHeader>
              <CardTitle>{title}</CardTitle>
            </CardHeader>

            <CardContent>{description}</CardContent>

            <CardFooter>
              <img
                src={image}
                alt="About feature"
                className="w-[200px] lg:w-[300px] mx-auto"
              />
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
