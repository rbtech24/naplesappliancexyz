import { Route, Switch } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import Home from "@/pages/Home";
import NotFound from "@/pages/not-found";
import SEO from "./components/SEO";
import MobileCallBar from "./components/layout/MobileCallBar";
import RefrigeratorRepair from "@/pages/services/RefrigeratorRepair";
import WasherRepair from "@/pages/services/WasherRepair";
import OvenRepair from "@/pages/services/OvenRepair";
import DishwasherRepair from "@/pages/services/DishwasherRepair";
import DryerRepair from "@/pages/services/DryerRepair";
import MicrowaveRepair from "@/pages/services/MicrowaveRepair";
import RouteHandler from "@/components/RouteHandler";
import { ChatbotButton } from "@/components/home/ChatbotButton";

// New Pages
import AboutUsPage from "@/pages/AboutUs";
import TestimonialsPage from "@/pages/Testimonials";
import ServiceAreasPage from "@/pages/ServiceAreas";
import TroubleshootingGuide from "@/pages/TroubleshootingGuide";

/**
 * Main application component with client-side routing
 * Includes RouteHandler for better navigation in Netlify
 */
function App() {
  return (
    <>
      {/* Global Components */}
      <SEO />
      <RouteHandler />
      
      {/* Routes */}
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/about" component={AboutUsPage} />
        <Route path="/testimonials" component={TestimonialsPage} />
        <Route path="/service-areas" component={ServiceAreasPage} />
        <Route path="/troubleshooting" component={TroubleshootingGuide} />
        <Route path="/services/refrigerator" component={RefrigeratorRepair} />
        <Route path="/services/washer" component={WasherRepair} />
        <Route path="/services/oven" component={OvenRepair} />
        <Route path="/services/dishwasher" component={DishwasherRepair} />
        <Route path="/services/dryer" component={DryerRepair} />
        <Route path="/services/microwave" component={MicrowaveRepair} />
        <Route component={NotFound} />
      </Switch>
      
      {/* UI Components */}
      <MobileCallBar />
      <ChatbotButton />
      <Toaster />
    </>
  );
}

export default App;
