import React from 'react';
import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const image1 = "https://res.cloudinary.com/ddaqwpvht/image/upload/v1719343443/imageswebsite-8_ayq3tx.png";
const image2 = "https://res.cloudinary.com/ddaqwpvht/image/upload/v1719344385/imageswebsite-8_1_uhvbde.png";
const image3 = "https://res.cloudinary.com/ddaqwpvht/image/upload/v1719344715/imageswebsite-9_jk84ad.png";

interface FeatureProps {
  title: string;
  description: string;
  image: string;
}

const features: FeatureProps[] = [
  {
    title: "Monitoreo Continuo y Alertas Inmediatas",
    description:
      "Artu ofrece monitoreo constante y en tiempo real de regulaciones y leyes, asegurando que tu empresa siempre esté al tanto de cualquier cambio.",
    image: image1,
  },
  {
    title: "Assitente Inteligente",
    description:
      "Utiliza nuestro asistente inteligente o buscador avanzado para indagar, preguntar o encontrar cualquier tema o duda regulatoria. Recibe resúmenes detallados de todas las iniciativas y profundiza más conversando con Artu.",
    image: image2,
  },
  {
    title: "Análisis y Reportes Detallados",
    description:
      "Genera reportes ejecutivos personalizados que resumen el impacto potencial de las nuevas regulaciones y leyes en tu empresa, facilitando una comprensión profunda y una toma de decisiones informada.",
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
