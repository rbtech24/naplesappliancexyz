import { Route, Switch } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import Home from "@/pages/Home";
import NotFound from "@/pages/not-found";
import SEO from "./components/SEO";
import MobileCallBar from "./components/layout/MobileCallBar";
import RouteHandler from "@/components/RouteHandler";
import { ChatbotButton } from "@/components/home/ChatbotButton";

// New Pages
import AboutUsPage from "@/pages/AboutUs";
import TestimonialsPage from "@/pages/Testimonials";
import ServiceAreasPage from "@/pages/ServiceAreas";
import TroubleshootingGuide from "@/pages/TroubleshootingGuide";
import MaintenanceGuide from "@/pages/MaintenanceGuide";

// Service Pages
import ApplianceRepair from "@/pages/services/ApplianceRepair";
import RefrigeratorRepair from "@/pages/services/RefrigeratorRepair";
import WasherRepair from "@/pages/services/WasherRepair";
import DryerRepair from "@/pages/services/DryerRepair";
import OvenRepair from "@/pages/services/OvenRepair";
import DishwasherRepair from "@/pages/services/DishwasherRepair";
import MicrowaveRepair from "@/pages/services/MicrowaveRepair";

// Blog Pages
import Blog from "@/pages/blog/Blog";
import BlogPost1 from "@/pages/blog/BlogPost1";
import BlogPost2 from "@/pages/blog/BlogPost2";
import BlogPost3 from "@/pages/blog/BlogPost3";
import BlogPost4 from "@/pages/blog/BlogPost4";
import BlogPost5 from "@/pages/blog/BlogPost5";
import BlogPost6 from "@/pages/blog/BlogPost6";
import DynamicBlogPost from "@/pages/blog/DynamicBlogPost";

// Additional Blog Posts
import DishwasherNotDraining from "@/pages/blog/DishwasherNotDraining";
import ApplianceServiceFrequency from "@/pages/blog/ApplianceServiceFrequency";
import EnergyEfficientUpgrades from "@/pages/blog/EnergyEfficientUpgrades";
import DIYRepairFailures from "@/pages/blog/DIYRepairFailures";
import MoldPrevention from "@/pages/blog/MoldPrevention";
import BackToSchoolMaintenance from "@/pages/blog/BackToSchoolMaintenance";
import RepairVsReplace from "@/pages/blog/RepairVsReplace";
import DryerNotHeating from "@/pages/blog/DryerNotHeating";
import GarbageDisposalTroubleshooting from "@/pages/blog/GarbageDisposalTroubleshooting";
import HurricanePrep from "@/pages/blog/HurricanePrep";
import ApplianceWarranties from "@/pages/blog/ApplianceWarranties";
import StrangeApplianceNoises from "@/pages/blog/StrangeApplianiceNoises";
import CommonOvenProblems from "@/pages/blog/CommonOvenProblems";
import HolidayAppliancePrep from "@/pages/blog/HolidayAppliancePrep";
import DishwasherMaximizing from "@/pages/blog/DishwasherMaximizing";
import SmartAppliances from "@/pages/blog/SmartAppliances";

// Latest Blog Posts (December 2024 - January 2025)
import HolidayApplianceFailures from "@/pages/blog/HolidayApplianceFailures";
import YearEndApplianceMaintenanceChecklist from "@/pages/blog/YearEndApplianceMaintenanceChecklist";
import EmergencyApplianceRepairHolidays from "@/pages/blog/EmergencyApplianceRepairHolidays";
import OvenTakesForeverToHeatUp from "@/pages/blog/OvenTakesForeverToHeatUp";
import NewYearNewAppliances from "@/pages/blog/NewYearNewAppliances";
import RealCostDelayingApplianceRepairs from "@/pages/blog/RealCostDelayingApplianceRepairs";
import CommonWinterApplianceProblems from "@/pages/blog/CommonWinterApplianceProblems";
import QuickFixesRefrigeratorLeaks from "@/pages/blog/QuickFixesRefrigeratorLeaks";
import ApplianceEnergyEfficiencyWinter from "@/pages/blog/ApplianceEnergyEfficiencyWinter";
import ApplianceLifespanMaximizingGuide from "@/pages/blog/ApplianceLifespanMaximizingGuide";
import SnowbirdAppliancePreparation from "@/pages/blog/SnowbirdAppliancePreparation";
import VacationRentalApplianceMaintenance from "@/pages/blog/VacationRentalApplianceMaintenance";
import SecondHomeApplianceWinterization from "@/pages/blog/SecondHomeApplianceWinterization";

// Brand Pages
import BrandList from "@/pages/brands/BrandList";
import SamsungRepair from "@/pages/brands/SamsungRepair";
import LGRepair from "@/pages/brands/LGRepair";
import WhirlpoolRepair from "@/pages/brands/WhirlpoolRepair";
import GERepair from "@/pages/brands/GERepair";
import MaytagRepair from "@/pages/brands/MaytagRepair";
import BoschRepair from "@/pages/brands/BoschRepair";
import KitchenAidRepair from "@/pages/brands/KitchenAidRepair";
import FrigidaireRepair from "@/pages/brands/FrigidaireRepair";
import ElectroluxRepair from "@/pages/brands/ElectroluxRepair";
import KenmoreRepair from "@/pages/brands/KenmoreRepair";
import SubZeroRepair from "@/pages/brands/SubZeroRepair";
import WolfRepair from "@/pages/brands/WolfRepair";
import VikingRepair from "@/pages/brands/VikingRepair";
import ThermadorRepair from "@/pages/brands/ThermadorRepair";
import MieleRepair from "@/pages/brands/MieleRepair";
import FisherPaykelRepair from "@/pages/brands/FisherPaykelRepair";
import DacorRepair from "@/pages/brands/DacorRepair";
import JennAirRepair from "@/pages/brands/JennAirRepair";
import AskoRepair from "@/pages/brands/AskoRepair";
import SpeedQueenRepair from "@/pages/brands/SpeedQueenRepair";
import AmanaRepair from "@/pages/brands/AmanaRepair";
import HaierRepair from "@/pages/brands/HaierRepair";

// Location Pages
import BonitaSpringsApplianceRepair from "@/pages/locations/BonitaSpringsApplianceRepair";
import EsteroApplianceRepair from "@/pages/locations/EsteroApplianceRepair";
import NaplesParkApplianceRepair from "@/pages/locations/NaplesParkApplianceRepair";
import NorthNaplesApplianceRepair from "@/pages/locations/NorthNaplesApplianceRepair";
import NaplesApplianceRepair from "@/pages/locations/NaplesApplianceRepair";
import GoldenGateApplianceRepair from "@/pages/locations/GoldenGateApplianceRepair";
import MarcoIslandApplianceRepair from "@/pages/locations/MarcoIslandApplianceRepair";
import PelicanBayApplianceRepair from "@/pages/locations/PelicanBayApplianceRepair";
import PineRidgeApplianceRepair from "@/pages/locations/PineRidgeApplianceRepair";
import EastNaplesApplianceRepair from "@/pages/locations/EastNaplesApplianceRepair";
import LelyApplianceRepair from "@/pages/locations/LelyApplianceRepair";
import ImmokaleesApplianceRepair from "@/pages/locations/ImmokaleesApplianceRepair";
import EvergladeCityApplianceRepair from "@/pages/locations/EvergladeCityApplianceRepair";
import FortMyersApplianceRepair from "@/pages/locations/FortMyersApplianceRepair";

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
        <Route path="/services/appliance-repair" component={ApplianceRepair} />
        <Route path="/services/refrigerator-repair" component={RefrigeratorRepair} />
        <Route path="/services/washing-machine-repair" component={WasherRepair} />
        <Route path="/services/oven-repair" component={OvenRepair} />
        <Route path="/services/dishwasher-repair" component={DishwasherRepair} />
        <Route path="/services/dryer-repair" component={DryerRepair} />
        <Route path="/services/microwave-repair" component={MicrowaveRepair} />
        
        {/* Legacy URL redirects for SEO */}
        <Route path="/services/refrigerator" component={RefrigeratorRepair} />
        <Route path="/services/washer" component={WasherRepair} />
        <Route path="/services/oven" component={OvenRepair} />
        <Route path="/services/dishwasher" component={DishwasherRepair} />
        <Route path="/services/dryer" component={DryerRepair} />
        <Route path="/services/microwave" component={MicrowaveRepair} />
        
        <Route path="/blog" component={Blog} />
        <Route path="/blog/ultimate-guide-extending-appliance-lifespan-southwest-florida" component={BlogPost1} />
        <Route path="/blog/top-10-common-appliance-problems-naples-homeowners" component={BlogPost2} />
        <Route path="/blog/beat-naples-heat-high-temperatures-affect-refrigerator" component={BlogPost3} />
        <Route path="/blog/top-5-signs-washer-needs-repair-naples-guide" component={BlogPost4} />
        <Route path="/blog/naples-ac-not-cooling-appliance-troubleshooting" component={BlogPost5} />
        <Route path="/blog/protecting-appliances-naples-rainy-season-flood-humidity" component={BlogPost6} />
        
        {/* Additional Blog Posts */}
        <Route path="/blog/dishwasher-not-draining-most-common-causes-naples-homes" component={DishwasherNotDraining} />
        <Route path="/blog/how-often-service-major-appliances-naples" component={ApplianceServiceFrequency} />
        <Route path="/blog/energy-efficient-appliance-upgrades-naples-homeowners-save" component={EnergyEfficientUpgrades} />
        <Route path="/blog/why-diy-appliance-repair-fails-naples-pros-know" component={DIYRepairFailures} />
        <Route path="/blog/avoiding-mold-florida-appliances-washer-dishwasher-more" component={MoldPrevention} />
        <Route path="/blog/back-to-school-easy-appliance-maintenance-busy-naples-families" component={BackToSchoolMaintenance} />
        <Route path="/blog/appliance-lifespans-when-time-replace-vs-repair" component={RepairVsReplace} />
        <Route path="/blog/what-do-when-naples-dryer-stops-heating" component={DryerNotHeating} />
        <Route path="/blog/garbage-disposal-troubleshooting-common-naples-issues" component={GarbageDisposalTroubleshooting} />
        <Route path="/blog/hurricane-prep-protecting-appliances-naples" component={HurricanePrep} />
        <Route path="/blog/appliance-warranties-what-naples-residents-need-know" component={ApplianceWarranties} />
        <Route path="/blog/why-not-ignore-strange-noises-appliances" component={StrangeApplianceNoises} />
        <Route path="/blog/most-common-oven-problems-naples-homes" component={CommonOvenProblems} />
        <Route path="/blog/preparing-kitchen-appliances-holiday-cooking" component={HolidayAppliancePrep} />
        <Route path="/blog/how-get-most-out-naples-dishwasher" component={DishwasherMaximizing} />
        <Route path="/blog/smart-appliances-worth-it-southwest-florida" component={SmartAppliances} />
        
        {/* Latest Blog Posts (December 2024 - January 2025) */}
        <Route path="/blog/holiday-appliance-failures-what-to-do-before-guests-arrive" component={HolidayApplianceFailures} />
        <Route path="/blog/year-end-appliance-maintenance-checklist-naples-residents" component={YearEndApplianceMaintenanceChecklist} />
        <Route path="/blog/emergency-appliance-repair-naples-holidays" component={EmergencyApplianceRepairHolidays} />
        <Route path="/blog/oven-takes-forever-to-heat-up-naples-troubleshooting" component={OvenTakesForeverToHeatUp} />
        <Route path="/blog/new-year-new-appliances-repair-vs-replace" component={NewYearNewAppliances} />
        <Route path="/blog/real-cost-delaying-appliance-repairs" component={RealCostDelayingApplianceRepairs} />
        <Route path="/blog/common-winter-appliance-problems-naples-florida" component={CommonWinterApplianceProblems} />
        <Route path="/blog/quick-fixes-common-naples-refrigerator-leaks" component={QuickFixesRefrigeratorLeaks} />
        <Route path="/blog/maximizing-appliance-energy-efficiency-naples-winter" component={ApplianceEnergyEfficiencyWinter} />
        <Route path="/blog/maximizing-appliance-lifespan-southwest-florida-climate" component={ApplianceLifespanMaximizingGuide} />
        <Route path="/blog/snowbird-appliance-preparation-naples-second-homes" component={SnowbirdAppliancePreparation} />
        <Route path="/blog/vacation-rental-appliance-maintenance-naples" component={VacationRentalApplianceMaintenance} />
        <Route path="/blog/second-home-appliance-winterization-naples-snowbirds" component={SecondHomeApplianceWinterization} />
        
        {/* Catch-all route for all other blog posts */}
        <Route path="/blog/:id" component={DynamicBlogPost} />
        
        {/* Legacy blog URL redirects */}
        <Route path="/blog/1" component={BlogPost1} />
        <Route path="/blog/2" component={BlogPost2} />
        <Route path="/blog/3" component={BlogPost3} />
        <Route path="/blog/4" component={BlogPost4} />
        <Route path="/blog/5" component={BlogPost5} />
        <Route path="/blog/6" component={BlogPost6} />
        <Route path="/brands" component={BrandList} />
        <Route path="/brands/samsung" component={SamsungRepair} />
        <Route path="/brands/lg" component={LGRepair} />
        <Route path="/brands/whirlpool" component={WhirlpoolRepair} />
        <Route path="/brands/ge" component={GERepair} />
        <Route path="/brands/maytag" component={MaytagRepair} />
        <Route path="/brands/bosch" component={BoschRepair} />
        <Route path="/brands/kitchenaid" component={KitchenAidRepair} />
        <Route path="/brands/frigidaire" component={FrigidaireRepair} />
        <Route path="/brands/electrolux" component={ElectroluxRepair} />
        <Route path="/brands/kenmore" component={KenmoreRepair} />
        <Route path="/brands/sub-zero" component={SubZeroRepair} />
        <Route path="/brands/wolf" component={WolfRepair} />
        <Route path="/brands/viking" component={VikingRepair} />
        <Route path="/brands/thermador" component={ThermadorRepair} />
        <Route path="/brands/miele" component={MieleRepair} />
        <Route path="/brands/fisher-paykel" component={FisherPaykelRepair} />
        <Route path="/brands/dacor" component={DacorRepair} />
        <Route path="/brands/jennair" component={JennAirRepair} />
        <Route path="/brands/asko" component={AskoRepair} />
        <Route path="/brands/speed-queen" component={SpeedQueenRepair} />
        <Route path="/brands/amana" component={AmanaRepair} />
        <Route path="/brands/haier" component={HaierRepair} />
        
        {/* Location Pages */}
        <Route path="/bonita-springs-appliance-repair" component={BonitaSpringsApplianceRepair} />
        <Route path="/estero-appliance-repair" component={EsteroApplianceRepair} />
        <Route path="/naples-park-appliance-repair" component={NaplesParkApplianceRepair} />
        <Route path="/north-naples-appliance-repair" component={NorthNaplesApplianceRepair} />
        <Route path="/naples-appliance-repair" component={NaplesApplianceRepair} />
        <Route path="/golden-gate-appliance-repair" component={GoldenGateApplianceRepair} />
        <Route path="/marco-island-appliance-repair" component={MarcoIslandApplianceRepair} />
        <Route path="/pelican-bay-appliance-repair" component={PelicanBayApplianceRepair} />
        <Route path="/pine-ridge-appliance-repair" component={PineRidgeApplianceRepair} />
        <Route path="/east-naples-appliance-repair" component={EastNaplesApplianceRepair} />
        <Route path="/lely-appliance-repair" component={LelyApplianceRepair} />
        <Route path="/immokalee-appliance-repair" component={ImmokaleesApplianceRepair} />
        <Route path="/everglades-city-appliance-repair" component={EvergladeCityApplianceRepair} />
        <Route path="/fort-myers-appliance-repair" component={FortMyersApplianceRepair} />
        
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
