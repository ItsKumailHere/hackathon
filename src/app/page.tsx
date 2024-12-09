import BEST from "./components/Best";
import Featured from "./components/display";
import Hero from "./components/hero";
import { GearUpShop } from '@/components/GearUpShop'
import Last from "./components/last";
import Essential from "./components/essential";
import Miss from "./components/miss";
import Prodetail from "./components/prodetail";





export default function Home() {
  return (
    <div>
      <Hero/>
      <BEST/>
      <Featured/> 
      <GearUpShop />
      <Miss/>
      <Essential/>
      <Last/>
      <Prodetail/>
    </div>
  );
}
