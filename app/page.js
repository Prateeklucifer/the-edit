import Image from "next/image";
import Hero from "./components/Hero";
import ContactCmp from "./components/Contact";
import FAQs from "./components/FAQs";
import AboutCmp from "./components/About";
import ServicesCmp from "./components/Services";

export default function Home() {
  return (
    <>
      <Hero />

      <div className="mt-16">
        <div className="md:px-4">
          <div className="container m-auto px-4 md:px-0">
            <div className=" text-3xl font-bold text-center mb-8">
              Our Services
            </div>
            <ServicesCmp />
          </div>
        </div>
      </div>
      
      <div className="mt-16">
        <AboutCmp page={"home"} />
      </div>

      <div className="mt-16">
        <ContactCmp />
      </div>
    </>
  );
}
