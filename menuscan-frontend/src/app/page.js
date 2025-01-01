import AddMenue from "@/components/AddMenue";
import SpecialMenu from "@/components/SpecialMenu";
import MenuTable from "@/components/MenuTableCost";
import Image from "next/image";
import Hotels from "@/components/Hotels";
import HeroSection from "@/components/HomePages/HeroSection";
import HowItWorks from "@/components/HomePages/HowItWorkSection";
import Features from "@/components/HomePages/Features";
import Benefits from "@/components/HomePages/Benefits";
import Testimonials from "@/components/HomePages/Testimonials";
import FAQs from "@/components/HomePages/FAQs";
import ContactUs from "@/components/HomePages/ContactUs";


export default function Home() {



  return (
      <>
        <div className="">
            <HeroSection/>
            <HowItWorks/>
            <Features/>
            <Benefits/>
            <Testimonials/>
            <FAQs/>
            <ContactUs/>
        </div>
          {/* <AddMenue/>  */}
          {/* <MenuTable/> */}
          {/* <SpecialMenu/> */}
          {/* <Hotels/> */}
      </>
  );
}
