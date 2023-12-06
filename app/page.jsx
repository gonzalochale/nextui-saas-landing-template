import Footer from "@/components/footer";
import Hero from "@/components/hero";
import NavBar from "@/components/navbar";
import Pricing from "@/components/pricing";
import Partners from "@/components/partners";
import Faq from "@/components/faq";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main>
        <Hero />
        <Partners />
        <Pricing />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}
