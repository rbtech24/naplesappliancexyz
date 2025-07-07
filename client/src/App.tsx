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
import MaintenanceGuide from "@/pages/MaintenanceGuide";

// Blog Pages
import Blog from "@/pages/blog/Blog";
import BlogPost1 from "@/pages/blog/BlogPost1";
import BlogPost2 from "@/pages/blog/BlogPost2";
import BlogPost3 from "@/pages/blog/BlogPost3";
import BlogPost4 from "@/pages/blog/BlogPost4";
import BlogPost5 from "@/pages/blog/BlogPost5";
import BlogPost6 from "@/pages/blog/BlogPost6";

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
        <Route path="/maintenance" component={MaintenanceGuide} />
        <Route path="/services/refrigerator" component={RefrigeratorRepair} />
        <Route path="/services/washer" component={WasherRepair} />
        <Route path="/services/oven" component={OvenRepair} />
        <Route path="/services/dishwasher" component={DishwasherRepair} />
        <Route path="/services/dryer" component={DryerRepair} />
        <Route path="/services/microwave" component={MicrowaveRepair} />
        <Route path="/blog" component={Blog} />
        <Route path="/blog/1" component={BlogPost1} />
        <Route path="/blog/2" component={BlogPost2} />
        <Route path="/blog/3" component={BlogPost3} />
        <Route path="/blog/4" component={BlogPost4} />
        <Route path="/blog/5" component={BlogPost5} />
        <Route path="/blog/6" component={BlogPost6} />
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
