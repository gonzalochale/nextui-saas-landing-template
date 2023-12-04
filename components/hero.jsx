"use client";
/* eslint-disable @next/next/no-img-element */
import { Chip } from "@nextui-org/chip";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="relative justify-center items-center">
      <section>
        <div className="max-w-screen-xl mx-auto px-4 py-28 gap-12 md:px-8 flex flex-col justify-center items-center">
          <motion.div
            initial={{ y: 5, opacity: 0 }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-center items-center space-y-5 max-w-4xl mx-auto text-center"
          >
            <Chip
              startContent={
                <svg
                  className="mx-1"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M4 5h2" />
                  <path d="M5 4v2" />
                  <path d="M11.5 4l-.5 2" />
                  <path d="M18 5h2" />
                  <path d="M19 4v2" />
                  <path d="M15 9l-1 1" />
                  <path d="M18 13l2 -.5" />
                  <path d="M18 19h2" />
                  <path d="M19 18v2" />
                  <path d="M14 16.518l-6.518 -6.518l-4.39 9.58a1 1 0 0 0 1.329 1.329l9.579 -4.39z" />
                </svg>
              }
              variant="dot"
              color="default"
            >
              La inteligencia artificial llegó al TecNM
            </Chip>
            <h1 className="text-4xl font-extrabold mx-auto md:text-5xl">
              Con AiTec podrás tomar decisiones
            </h1>
            <p className="max-w-2xl mx-auto">
              de una manera más rápida y sencilla mediante inteligencia
              artificial.
            </p>
            <div className="items-center justify-center gap-x-3 space-y-3 sm:flex sm:space-y-0">
              <motion.div whileHover={{ scale: 1.1 }}>
                <Button as={Link} color="primary" href="#" variant="solid">
                  Comenzar Ahora
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
      <div className="w-full h-full absolute -top-20 flex justify-center -z-10">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="w-96 h-52 bg-primary blur-[300px] rounded-full"
        ></motion.div>
      </div>
    </div>
  );
}
