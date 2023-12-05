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
        <div className="max-w-screen-xl mx-auto px-4 py-24 gap-12 md:px-8 flex flex-col justify-center items-center">
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
              NextUI template its here!
            </Chip>
            <h1 className="text-4xl font-extrabold mx-auto md:text-5xl bg-gradient-to-b from-foreground to-foreground/70 text-transparent bg-clip-text">
              Use Nextjs and{" "}
              <span className="bg-gradient-to-b from-foreground to-primary text-transparent bg-clip-text">
                NextUI
              </span>{" "}
              to build your website
            </h1>
            <p className="max-w-2xl mx-auto text-foreground/80">
              Create your website with NextUI and Nextjs, the best UI Framework.
            </p>
            <div className="items-center justify-center gap-x-3 space-y-3 sm:flex sm:space-y-0">
              <motion.div whileHover={{ scale: 1.05 }}>
                <Button as={Link} color="primary" href="#" variant="solid">
                  Get Started
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
      <motion.div
        initial={{ y: 5, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        className="w-full h-full absolute -top-32 flex justify-end items-center -z-10"
      >
        <div className="w-3/4 flex justify-center items-center">
          <div className="w-12 h-[600px] bg-primary blur-[100px] rounded-3xl max-sm:rotate-[15deg] sm:rotate-[30deg]"></div>
        </div>
      </motion.div>
    </div>
  );
}
