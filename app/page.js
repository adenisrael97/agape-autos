import Hero from "@/components/LandingPage/Hero";
import CTA from "@/components/LandingPage/CTA";
import Services from "@/components/LandingPage/Services";
import AboutUs from "@/components/LandingPage/AboutUs";
import Testimonials from "@/components/LandingPage/Testimonials";



export default function HomePage() {
  return (
    <section>
      <Hero />
      <CTA />
      <Services />
      <AboutUs />
      <Testimonials />
    </section>
   
  )
}