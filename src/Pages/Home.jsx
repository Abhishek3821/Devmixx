import Hero from "../Component/Hero";
import DevmixxHeroText from "../Component/DevmixxHeroText";
import AboutExperience from "../Component/AboutExperience";
import DevmixxMarquee from "../Component/DevmixxMarquee";
import ServiceSection from "../Component/ServiceSection";
import Testimonials from "../Component/Testimonials";
import TeamSection from "../Component/TeamSection";
import FAQSection from "../Component/FAQSection";
import IT_SERVICES from "../Component/IT_SERVICES";
import CaseStudies from "../Component/CaseStudies";
function Home() {


  return (
    <>
       <Hero />     
       <DevmixxHeroText />
       <AboutExperience />
       <DevmixxMarquee />
       <ServiceSection />
       <Testimonials />
       <IT_SERVICES />
       <CaseStudies />
       <TeamSection />
       <FAQSection />
    </>
  )
}

export default Home