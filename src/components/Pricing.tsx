import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";

enum PopularPlanType {
  NO = 0,
  YES = 1,
}

interface PricingProps {
  title: string;
  popular: PopularPlanType;
  price: number;
  description: string;
  buttonText: string;
  benefitList: string[];
  link: string;  // Add this field to hold the WhatsApp link
}

const pricingList: PricingProps[] = [
  {
    title: "PYME",
    popular: 0,
    price: 499,
    description:
      "Ideal para pymes que necesitan monitoreo efectivo sin grandes inversiones.",
    buttonText: "Comprar",
    benefitList: [
      "5 Usuarios",
      "3 Monitores",
      "Modelo de recomendación personalizado",
      "Generador de reportes",
    ],
    link: "https://wa.me/16314805472?text=Quiero%20comprar%20el%20paquete%20basico"
  },
  {
    title: "Enterprise",
    popular: 1,
    price: 1499,
    description:
      "Perfecto para grandes empresas con necesidades avanzadas de monitoreo y predicción.",
    buttonText: "Comprar",
    benefitList: [
      "Usuarios Ilimitados",
      "3 Monitores",
      "Cobertura Federal",
      "Modelo de recomendación personalizado",
      "Generador de reportes",
      "Predicción de resultados regulatorios",
    ],
    link: "https://wa.me/16314805472?text=Quiero%20comprar%20el%20paquete%20PYMES"
  },
  {
    title: "Flexible",
    popular: 0,
    price: 0,
    description:
      "Diseñado para empresas que necesitan un plan adaptable y personalizado.",
    buttonText: "Comprar",
    benefitList: [
      "$200 Usuarios Ilimitados",
      "$300 por monitor",
      "$0 Cobertura Federal",
      "$100 Modelo de recomendación personalizado",
      "$20 Generador de reportes",
    ],
    link: "https://wa.me/16314805472?text=Quiero%20comprar%20el%20paquete%20Enterprise"
  },
];

export const Pricing = () => {
  return (
    <section
      id="pricing"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center">
        Obtén
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          {" "}Acceso{" "}
        </span>
        Ilimitado 
      </h2>
      <h3 className="text-xl text-center text-muted-foreground pt-4 pb-8">
        Con Artu, puedes monitorear regulaciones y leyes de manera eficiente y personalizada. Elige el plan que mejor se adapte a tus necesidades.
      </h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {pricingList.map((pricing: PricingProps) => (
          <Card
            key={pricing.title}
            className={
              pricing.popular === PopularPlanType.YES
                ? "drop-shadow-xl shadow-black/10 dark:shadow-white/10"
                : ""
            }
          >
            <CardHeader>
              <CardTitle className="flex item-center justify-between">
                {pricing.title}
                {pricing.popular === PopularPlanType.YES ? (
                  <Badge
                    variant="secondary"
                    className="text-sm text-primary"
                  >
                    Popular
                  </Badge>
                ) : null}
              </CardTitle>
              <div>
                <span className="text-3xl font-bold">${pricing.price}</span>
                <span className="text-muted-foreground"> /mes (USD)</span>
              </div>

              <CardDescription>{pricing.description}</CardDescription>
            </CardHeader>

            <CardContent>
              <Button 
                className="w-full"
                onClick={() => window.open(pricing.link, "_blank")}
              >
                {pricing.buttonText}
              </Button>
            </CardContent>

            <hr className="w-4/5 m-auto mb-4" />

            <CardFooter className="flex">
              <div className="space-y-4">
                {pricing.benefitList.map((benefit: string) => (
                  <span
                    key={benefit}
                    className="flex"
                  >
                    <Check className="text-green-500" />{" "}
                    <h3 className="ml-2">{benefit}</h3>
                  </span>
                ))}
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
