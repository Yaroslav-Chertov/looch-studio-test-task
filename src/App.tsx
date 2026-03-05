import "./App.css";
import { HeaderBlock } from "./components/HeaderBlock";
import { HeroBlock } from "./components/HeroBlock";
import { ServicesSection } from "./components/ServicesSection";
import { ServicesGrid } from "./components/ServicesGrid";
import { NewEmployeeBlock } from "./components/NewEmployeeBlock";
import { LifecycleNav } from "./components/LifecycleNav";
import { FeedbackBlock } from "./components/FeedbackBlock";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-white text-black">
      <HeaderBlock />
      <HeroBlock />
      <ServicesSection />
      <ServicesGrid />
      <NewEmployeeBlock />
      <LifecycleNav />
      <FeedbackBlock />
      <Footer />
    </div>
  );
}

export default App;
