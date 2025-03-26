import "./globals.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Recents from "./components/Recents";
import Sidebar from "./components/Sidebar";

export default function Home() {
  return (
    <div className="flex">
      <Sidebar/>
      <div>
      <HeroSection/>
      <Recents/>
      </div>
    </div>
  );
}
