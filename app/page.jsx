import Hero from "@/components/hero";
import NavBar from "@/components/navbar";
import Pricing from "@/components/pricing";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main>
        <Hero />
        <Pricing />
      </main>
    </div>
  );
}
