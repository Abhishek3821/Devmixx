import Hero from "../Component/Hero";
import AboutExperience from "../Component/AboutExperience";
import DevmixxMarquee from "../Component/DevmixxMarquee";
import ServiceSection from "../Component/ServiceSection";
import Testimonials from "../Component/Testimonials";
import TeamSection from "../Component/TeamSection";
import FAQSection from "../Component/FAQSection";
function Home() {


  return (
    <>
       <Hero />     
       <AboutExperience />
       <DevmixxMarquee />
       <ServiceSection />
       <Testimonials />
       <TeamSection />
       <FAQSection />
    </>
  )
}

export default Home