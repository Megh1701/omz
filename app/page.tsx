import Hero from "@/components/Hero";
import InsuranceMarquee from "@/components/InsuranceMarquee";
import LoanMarquee from "@/components/LoanMarquee";
import Faq from "@/components/FAQ";
import Numbers from "@/components/Numbers";
import MouseTail from "@/components/MouseTail";
import  TestimonialsSection  from "@/components/Testimonials";
import Footer from "@/components/Footer";
import {MarkerMap} from "@/components/Mapcn"
import ServicesSection from "@/components/Services";
export default function Home() {
  return (<>
    <Hero></Hero>
    <InsuranceMarquee></InsuranceMarquee>
    <LoanMarquee></LoanMarquee>
    <Numbers></Numbers>
    <ServicesSection></ServicesSection>
    <TestimonialsSection></TestimonialsSection>
    <Faq></Faq>
    <MouseTail></MouseTail>
    <MarkerMap></MarkerMap>
    <Footer></Footer>
    
  </>
  );
}
