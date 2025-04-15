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

function App() {
  return (
    <>
      <SEO />
      <Switch>
        <Route path="/" component={Home} />
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
