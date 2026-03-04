import "./App.css";
import { HeaderBlock } from "./components/HeaderBlock";
import { HeroBlock } from "./components/HeroBlock";
import { SearchAndFilters } from "./components/SearchAndFilters";
import { ServicesSection } from "./components/ServicesSection";
import { LifecycleNav } from "./components/LifecycleNav";
import { RoadmapBlock } from "./components/RoadmapBlock";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-white text-black">
      <HeaderBlock />
      <HeroBlock />
      <SearchAndFilters />
      <ServicesSection />
      <LifecycleNav />
      <RoadmapBlock />
      <Footer />
    </div>
  );
}

export default App;
