import "./App.css";
import { HeroBlock } from "./components/HeroBlock";
import { SearchAndFilters } from "./components/SearchAndFilters";
import { ServicesSection } from "./components/ServicesSection";
import { LifecycleNav } from "./components/LifecycleNav";

function App() {
  return (
    <div className="min-h-screen bg-white text-black">
      <HeroBlock />
      <SearchAndFilters />
      <ServicesSection />
      <LifecycleNav />
    </div>
  );
}

export default App;
