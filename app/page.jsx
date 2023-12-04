/* eslint-disable @next/next/no-img-element */
import NavBar from "@/components/navbar";
import { Chip } from "@nextui-org/chip";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main>
        <section>
          <div className="max-w-screen-xl mx-auto px-4 py-28 gap-12 md:px-8">
            <div className="flex flex-col justify-center items-center space-y-5 max-w-4xl mx-auto text-center">
              <Chip
                startContent={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-confetti"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
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
                variant="shadow"
                color="primary"
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
                <Button
                  as={Link}
                  color="primary"
                  href="#"
                  variant="ghost"
                  className="hidden sm:flex"
                >
                  Comenzar Ahora
                </Button>
              </div>
            </div>
            <div className="mt-14">
              <img
                src="https://raw.githubusercontent.com/sidiDev/remote-assets/main/Safari%20(Big%20Sur)%20-%20Light.png"
                className="w-full shadow-lg rounded-lg border"
                alt="aitec dashboard image"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
