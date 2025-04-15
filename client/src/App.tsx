import { Route, Switch } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import Home from "@/pages/Home";
import NotFound from "@/pages/not-found";
import SEO from "./components/SEO";
import MobileCallBar from "./components/layout/MobileCallBar";

function App() {
  return (
    <>
      <SEO />
      <Switch>
        <Route path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
      <MobileCallBar />
      <Toaster />
    </>
  );
}

export default App;
