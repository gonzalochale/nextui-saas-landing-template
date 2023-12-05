"use client";
import { Button } from "@nextui-org/react";
import { useState } from "react";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "lucide-react";

export default function ThemeSwitcher() {
  const [svg, setSvg] = useState(<MoonIcon size={24} />);
  const { theme, setTheme } = useTheme();

  const handleClick = () => {
    if (theme === "light") {
      setTheme("dark");
      setSvg(<MoonIcon size={24} />);
    } else {
      setTheme("light");
      setSvg(<SunIcon size={24} />);
    }
  };

  return (
    <Button isIconOnly variant="light" onClick={handleClick}>
      {svg}
    </Button>
  );
}
