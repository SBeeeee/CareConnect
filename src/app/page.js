import "./globals.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Recents from "./components/Recents";
import Cards from "./components/Cards";
import TimeLine from "./components/TimeLine";

export default function Home() {
  return (
    <div>
      <HeroSection/>
      <Recents/>
      <Cards/>
      <TimeLine/>
    </div>
  );
}
