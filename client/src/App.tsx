import { Route, Switch, useLocation } from "wouter";
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
import { useEffect } from "react";

// New Pages
import AboutUsPage from "@/pages/AboutUs";
import TestimonialsPage from "@/pages/Testimonials";
import ServiceAreasPage from "@/pages/ServiceAreas";

function App() {
  const [location, setLocation] = useLocation();
  
  // Handle page refresh to restore the correct route
  useEffect(() => {
    // Restore last known path on page refresh if it exists
    const lastPath = localStorage.getItem('lastPath');
    if (lastPath && lastPath !== '/' && lastPath !== location) {
      setLocation(lastPath);
    }
    
    // Store current path whenever it changes
    if (location !== '/' && location) {
      localStorage.setItem('lastPath', location);
    }
  }, [location]);
  
  return (
    <>
      <SEO />
      <RouteHandler />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/about" component={AboutUsPage} />
        <Route path="/testimonials" component={TestimonialsPage} />
        <Route path="/service-areas" component={ServiceAreasPage} />
        <Route path="/services/refrigerator" component={RefrigeratorRepair} />
        <Route path="/services/washer" component={WasherRepair} />
        <Route path="/services/oven" component={OvenRepair} />
        <Route path="/services/dishwasher" component={DishwasherRepair} />
        <Route path="/services/dryer" component={DryerRepair} />
        <Route path="/services/microwave" component={MicrowaveRepair} />
        <Route component={NotFound} />
      </Switch>
      <MobileCallBar />
      <Toaster />
    </>
  );
}

export default App;
