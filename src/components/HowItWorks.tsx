import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { ClipboardList, Sliders, Activity, Bell } from "lucide-react";

interface FeatureProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const features: FeatureProps[] = [
  {
    icon: <ClipboardList className="text-primary" />,
    title: "Creación de Monitores",
    description:
      "Las empresas crean monitores personalizados para seguir temas generales o específicos. Responden tres preguntas sobre su compañía y tienen una conversación con nuestro bot sobre lo que desean monitorear.",
  },
  {
    icon: <Sliders className="text-primary" />,
    title: "Modelo Personalizado",
    description:
      "Con la información proporcionada, creamos un modelo de Machine Learning adaptado a cada monitor. Este modelo detecta riesgos y oportunidades en sitios oficiales de comunicación de iniciativas a nivel federal del gobierno (DOF, Gazetas, Conamer).",
  },
  {
    icon: <Activity className="text-primary" />,
    title: "Monitoreo Continuo",
    description:
      "Nuestro sistema monitorea continuamente las regulaciones y leyes las 24 horas, todos los días, asegurando que no se pierda ninguna actualización relevante.",
  },
  {
    icon: <Bell className="text-primary" />,
    title: "Notificaciones Inmediatas",
    description:
      "Cada vez que se encuentre algo relevante, se les notificará por correo electrónico, incluyendo un resumen rápido sobre por qué podría ser importante para ustedes.",
  },
];

export const HowItWorks = () => {
  return (
    <section id="howItWorks" className="container text-center py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold ">
        Cómo{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Funciona
        </span>{" "}
        Paso a Paso
      </h2>
      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
        Descubre cómo Artu simplifica el seguimiento de regulaciones y leyes en México.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map(({ icon, title, description }: FeatureProps) => (
          <Card key={title} className="bg-muted/50">
            <CardHeader>
              <CardTitle className="grid gap-4 place-items-center">
                {icon}
                {title}
              </CardTitle>
            </CardHeader>
            <CardContent>{description}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
