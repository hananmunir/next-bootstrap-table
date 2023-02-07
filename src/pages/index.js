import AppLayout from "@/components/layout/AppLayout";
import Coming from "@/components/sections/Coming";
import FAQ from "@/components/sections/FAQ";
import Hero from "@/components/sections/Hero";
import HowWork from "@/components/sections/HowWork";
import Performan from "@/components/sections/Performan";
import RoadmaapSection from "@/components/sections/RoadmaapSection";
import RosyWhaale from "@/components/sections/RosyWhaale";
import Team from "@/components/sections/Team";
import Token from "@/components/sections/Token";
import Tokenomics from "@/components/sections/Tokenomics";
import Script from "next/script";


export default function Home() {
  return (
<>
  <AppLayout>
    {/*-------Hero Section START --------*/}
    <Hero />
    {/*-------Hero Section End --------*/}
    {/*------- Performance Section START --------*/}
    <Performan />
    {/*------- Performance Section End --------*/}
    {/*-------How work Section START --------*/}
    <HowWork />
    {/*-------How work Section End --------*/}
    {/*------- RosyWhaale Section START --------*/}
    <RosyWhaale />
    {/*------- RosyWhaale Section End --------*/}
    {/*------- Token Section START --------*/}
    <Token />
    {/*------- Token Section End --------*/}
    {/*-------  RoadmaapSection START --------*/}
    <RoadmaapSection />
    {/*------- Roadmaap Section End --------*/}
    {/*-------Comning soon Section START --------*/}
    <Coming />
    {/*-------Comning soon Section End --------*/}
    {/*-------Team Section START --------*/}
    <Team />
    {/*-------Team Section End --------*/}
    {/*------- Tokenomics Section START --------*/}
    <Tokenomics />
    {/*------- Tokenomics Section End --------*/}
    {/*------- FAQ Section START --------*/}
    <FAQ />
    {/*------- FAQ Section END --------*/}

  </AppLayout>



  <Script src="/js/main.js"></Script> 
  <Script src="/js/owlCofig.js"></Script>
</>

  )
}
