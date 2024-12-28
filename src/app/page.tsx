import Best from "./components/Best";
import Featured from "./components/display";
import Hero from "./components/hero";
import { GearUpShop } from '@/components/GearUpShop'
import Last from "./components/last";
import Essentials from "./components/essential";
import Miss from "./components/miss";
import Prodetail from "./components/prodetail";





export default function Home() {
  return (
    <>
      <Hero/>
      <Best/>
      <Featured/> 
      <GearUpShop />
      <Miss/>
      <Essentials/>
      <Last/>
      <Prodetail/>
    </>
  );
}
