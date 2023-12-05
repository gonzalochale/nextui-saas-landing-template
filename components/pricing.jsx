"use client";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Button } from "@nextui-org/button";
import { Divider } from "@nextui-org/divider";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

export default function Pricing() {
  const plans = [
    {
      name: "Free Plan",
      desc: "Enjoy limited access to all our features",
      price: 0,
      isMostPop: false,
      features: ["Make the best schedule", "Make the best schedule"],
    },
    {
      name: "Plan Basic",
      desc: "Make the best schedule for your team",
      price: 10,
      isMostPop: true,
      features: [
        "Make the best schedule",
        "Make the best schedule",
        "Make the best schedule",
      ],
    },
    {
      name: "Plan Premium",
      desc: "Make the best schedule for your team and more",
      price: 20,
      isMostPop: false,
      features: [
        "Make the best schedule",
        "Make the best schedule",
        "Make the best schedule",
        "Make the best schedule",
      ],
    },
  ];

  return (
    <motion.section
      initial={{ scale: 1.1, opacity: 0 }}
      animate={{
        scale: 1,
        opacity: 1,
      }}
      transition={{ duration: 0.5 }}
      className="max-w-screen-xl mx-auto px-4 py-24 gap-12 md:px-8 flex flex-col justify-center items-center"
    >
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="relative max-w-xl mx-auto sm:text-center">
          <h3 className="text-3xl font-bold sm:text-4xl bg-gradient-to-b from-foreground to-foreground/70 text-transparent bg-clip-text">
            Pricing Plans for your business
          </h3>
          <div className="mt-3 max-w-xl text-foreground/80">
            <p>Select the plan that best suits your needs.</p>
          </div>
        </div>
        <div className="mt-16 gap-10 grid lg:grid-cols-3 place-content-center">
          {plans.map((item, idx) => (
            <Card
              key={idx}
              className={
                item.isMostPop ? "border-2 border-primary sm:scale-110" : ""
              }
            >
              <CardHeader>
                <span className="font-medium">{item.name}</span>
              </CardHeader>
              <Divider />
              <CardBody className="gap-3">
                <div className="text-3xl font-semibold">
                  ${item.price} <span className="text-xl font-normal">/mo</span>
                </div>
                <p>{item.desc}</p>
                <ul className="p-8 space-y-3">
                  <li className="font-medium">
                    <p>Features</p>
                  </li>
                  {item.features.map((featureItem, idx) => (
                    <li key={idx} className="flex items-center gap-5">
                      <Check size={20} />
                      {featureItem}
                    </li>
                  ))}
                </ul>
              </CardBody>
              <CardFooter>
                <Button
                  className="w-full"
                  variant="solid"
                  color={item.isMostPop ? "primary" : "default"}
                >
                  Get Started
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
