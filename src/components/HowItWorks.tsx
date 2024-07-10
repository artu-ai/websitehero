import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { ClipboardList, Sliders, Activity, Bell } from "lucide-react";

interface FeatureProps {
  icon: JSX.Element;
  title: string;
  description: string;
  link: string;
}

const features: FeatureProps[] = [
  {
    icon: <ClipboardList className="text-primary" />,
    title: "Creación de Monitores",
    description:
      "Las empresas crean monitores personalizados para seguir temas generales o específicos. Responden tres preguntas sobre su compañía y tienen una conversación con nuestro bot sobre lo que desean monitorear.",
    link: "https://your-link-to-tutorial-1.com",
  },
  {
    icon: <Sliders className="text-primary" />,
    title: "Modelo Personalizado",
    description:
      "Con la información proporcionada, creamos un modelo de Machine Learning adaptado a cada monitor. Este modelo detecta riesgos y oportunidades en sitios oficiales de comunicación de iniciativas a nivel federal del gobierno (DOF, Gazetas, Conamer).",
    link: "https://your-link-to-tutorial-2.com",
  },
  {
    icon: <Activity className="text-primary" />,
    title: "Monitoreo Continuo",
    description:
      "Nuestro sistema monitorea continuamente las regulaciones y leyes las 24 horas, todos los días, asegurando que no se pierda ninguna actualización relevante.",
    link: "https://your-link-to-tutorial-3.com",
  },
  {
    icon: <Bell className="text-primary" />,
    title: "Notificaciones Inmediatas",
    description:
      "Cada vez que se encuentre algo relevante, se les notificará por correo electrónico, incluyendo un resumen rápido sobre por qué podría ser importante para ustedes.",
    link: "https://your-link-to-tutorial-4.com",
  },
  {
    icon: <ClipboardList className="text-primary" />,
    title: "Extra 1",
    description: "",
    link: "https://your-link-to-tutorial-5.com",
  },
  {
    icon: <Sliders className="text-primary" />,
    title: "Extra 2",
    description: "",
    link: "https://your-link-to-tutorial-6.com",
  },
  {
    icon: <Activity className="text-primary" />,
    title: "Extra 3",
    description: "",
    link: "https://your-link-to-tutorial-7.com",
  },
];

const bubbleNames = [
  { name: "Crear una Cuenta", link: "https://www.loom.com/share/f24ac91a0cf04ef68cdfcaa6a7b266b8?sid=d34f8396-3615-49d6-8c18-a246e67e26f5" },
  { name: "Uso del Dashboard", link: "https://www.loom.com/share/af74d7223e9e4db79b685b5e002933ca?sid=270edcd8-019f-467b-9310-87144cb599ec" },
  { name: "Crear Gráficas en Analítica", link: "https://www.loom.com/share/3d1c8fc21e1d426f9a71cdcc88c0d4bb?sid=9cf61b97-e125-4bf3-8a44-8d3b6dceebb8" },
  { name: "Entrenamiento del Monitor", link: "https://www.loom.com/share/31d2599932a14e289a435b61dda5163c?sid=ad5255cd-902a-4bdf-a20f-dd35bc787c95" },
  { name: "Uso del Chat", link: "https://www.loom.com/share/15b65bf6c84846deb94981ae3d1313b5?sid=9603ae05-ac0d-4fbc-bf7b-b2edd0eaf1ca" },
  { name: "Generación de Reportes", link: "https://www.loom.com/share/5edb366bacb04da1827ac390c316daf6?sid=7b815b4b-e21b-4e5c-a661-285ea7fb6cf1" },
  { name: "Configuración", link: "https://www.loom.com/share/8d12fa7abaf644ccaf8aa098e384d97f?sid=8ebd8952-d453-47e5-9b38-ca47cd3b82c2" },
];

export const HowItWorks = () => {
  return (
    <section
      id="howItWorks"
      className="container text-center py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold ">
        Cómo{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Funciona{" "}
        </span>
        Paso a Paso +{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Videos Tutoriales
        </span>
      </h2>
      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
        Descubre cómo Artu simplifica el seguimiento de regulaciones y leyes en México.
      </p>

      <div className="flex justify-center flex-wrap gap-4 mb-8">
        {bubbleNames.map(({ name, link }) => (
          <a
            key={name}
            href={link}
            className="bg-muted/50 hover:bg-muted text-primary py-2 px-4 rounded-full shadow-md transition-all duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            {name}
          </a>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.slice(0, 4).map(({ icon, title, description }: FeatureProps) => (
          <Card
            key={title}
            className="bg-muted/50"
          >
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
