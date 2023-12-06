import { Divider } from "@nextui-org/divider";
import { Button } from "@nextui-org/button";
import { Github, Linkedin, Twitter } from "lucide-react";
export default function Footer() {
  return (
    <footer className="pt-24">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <Divider />
        <div className="flex justify-between">
          <div className="mt-10 py-10 w-1/2 flex items-center justify-start gap-3">
            <p className="font-light">
              Made by{" "}
              <a
                href="https://github.com/gonzalochale"
                target="_blank"
                className="font-medium"
              >
                Gonzalo Chale
              </a>{" "}
              with ❤️
            </p>
          </div>
          <div className="mt-10 py-10 flex items-center justify-between gap-3">
            <a href="https://github.com/gonzalochale" target="_blank">
              <Button isIconOnly variant="light">
                <Github size={24} />
              </Button>
            </a>
            <a href="https://twitter.com/gonzalochale" target="_blank">
              <Button isIconOnly variant="light">
                <Twitter size={24} />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
