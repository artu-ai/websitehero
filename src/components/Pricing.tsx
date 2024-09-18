import React from 'react';
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
import { motion } from 'framer-motion';

enum PopularPlanType {
  NO = 0,
  YES = 1,
}

interface PricingProps {
  title: string;
  popular: PopularPlanType;
  price: string | number;
  description: string;
  buttonText: string;
  benefitList: string[];
  link: string;
}

const pricingList: PricingProps[] = [
  {
    title: "Business",
    popular: PopularPlanType.YES,
    price: 999,
    description:
      "Precio para negocios que no requieren un proceso para hacernos proveedores",
    buttonText: "Programar reunión",
    benefitList: [
      "Usuarios ilimitados",
      "Monitoreo personalizado",
      "Cobertura federal",
      "Modelo de recomendación personalizado",
      "Generador de reportes y analítica gráfica",
      "Ajustes personalizados de producto",
    ],
    link: "https://calendly.com/juanpabloramirez-004/30min"
  },
  {
    title: "Enterprise",
    popular: PopularPlanType.NO,
    price: 3000,
    description:
      "Precio para negocios que sí requieren un proceso para hacernos proveedores",
    buttonText: "Programar reunión",
    benefitList: [
      "Usuarios ilimitados",
      "Monitoreo personalizado",
      "Cobertura federal",
      "Modelo de recomendación personalizado",
      "Generador de reportes y analítica gráfica",
      "Ajustes personalizados de producto",
      "Proceso para hacernos proveedores",
    ],
    link: "https://calendly.com/juanpabloramirez-004/30min"
  }
];

// Definir las variantes de animación
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

export const Pricing = () => {
  return (
    <section
      id="pricing"
      className="container py-24 sm:py-32"
    >
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Obtén
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          {" "}Acceso{" "}
        </span>
        Ilimitado
      </motion.h2>
      <motion.h3
        className="text-xl text-center text-muted-foreground pt-4 pb-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >
        Con Artu, puedes monitorear regulaciones y leyes de manera eficiente y personalizada. Elige el plan que mejor se adapte a tus necesidades.
      </motion.h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {pricingList.map((pricing: PricingProps, index: number) => (
          <motion.div
            key={pricing.title}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 + index * 0.2 }}
          >
            <Card
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
                  <span className="text-muted-foreground"> USD</span>
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
          </motion.div>
        ))}
      </div>
    </section>
  );
};
