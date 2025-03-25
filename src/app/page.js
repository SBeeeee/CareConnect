import "./globals.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Recents from "./components/Recents";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <Recents/>
    </div>
  );
}
