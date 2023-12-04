import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Button } from "@nextui-org/button";
import { Image } from "@nextui-org/image";
import { Link } from "@nextui-org/link";
import { Divider } from "@nextui-org/divider";

export default function Pricing() {
  const plans = [
    {
      name: "Plan Gratuito",
      desc: "Disfruta de 5 creditos gratis para probar nuestro servicio.",
      price: 0,
      isMostPop: false,
      features: ["Genera el mejor horario"],
    },
    {
      name: "Plan Basico",
      desc: "25 Creditos mensuales para que puedas probar nuestro servicio.",
      price: 99,
      isMostPop: true,
      features: ["Genera el mejor horario"],
    },
    {
      name: "Plan Premium",
      desc: "100 Creditos mensuales para que puedas probar nuestro servicio.",
      price: 200,
      isMostPop: false,
      features: ["Genera el mejor horario"],
    },
  ];

  return (
    <section className="max-w-screen-xl mx-auto px-4 py-28 gap-12 md:px-8 flex flex-col justify-center items-center">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="relative max-w-xl mx-auto sm:text-center">
          <h3 className="text-3xl font-semibold sm:text-4xl">
            Planes y precios para todos
          </h3>
          <div className="mt-3 max-w-xl">
            <p>selecciona el plan que mas se adapte a tus necesidades.</p>
          </div>
        </div>
        <div className="mt-16 gap-6 grid sm:grid-cols-2 lg:grid-cols-3 place-content-center">
          {plans.map((item, idx) => (
            <Card key={idx} isFooterBlurred>
              <CardHeader>
                <span className="font-medium">{item.name}</span>
              </CardHeader>
              <Divider />
              <CardBody className="gap-3">
                <div className="text-3xl font-semibold">
                  ${item.price}{" "}
                  <span className="text-xl font-normal">/mes</span>
                </div>
                <p>{item.desc}</p>
                <ul className="p-8 space-y-3">
                  <li className="font-medium">
                    <p>Qué incluye</p>
                  </li>
                  {item.features.map((featureItem, idx) => (
                    <li key={idx} className="flex items-center gap-5">
                      <svg
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      {featureItem}
                    </li>
                  ))}
                </ul>
              </CardBody>
              <CardFooter>
                <Button className="w-full">Comenzar Ahora</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
