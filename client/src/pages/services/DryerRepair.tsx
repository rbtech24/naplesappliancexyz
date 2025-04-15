import ServiceTemplate from "@/components/service/ServiceTemplate";
import { services } from "@/lib/serviceData";

const dryerService = services.find(service => service.id === "dryer");

const DryerRepair = () => {
  if (!dryerService) return null;

  return (
    <ServiceTemplate 
      service={dryerService}
      metaDescription="Expert dryer repair services in Naples, FL. We repair all types of dryers - gas, electric, front load, and stackable models from all major brands. Fast and reliable service."
      additionalContent={{
        intro: (
          <>
            <p>
              A malfunctioning dryer can quickly disrupt your household routine and leave you with piles of wet 
              laundry. At Naples Appliance Repair, we provide professional dryer repair services throughout Naples 
              and Southwest Florida, helping you get back to your normal routine with minimal disruption.
            </p>
            <p>
              Our skilled technicians have extensive experience with all types of dryers, including electric dryers, 
              gas dryers, front-loading models, stackable units, and combination washer-dryers. We service all major 
              brands including Whirlpool, Maytag, GE, Samsung, LG, Electrolux, Speed Queen, and many others.
            </p>
            <p>
              Whether your dryer is not heating, making unusual noises, taking too long to dry clothes, or has 
              stopped working entirely, our team has the expertise to diagnose the issue accurately and provide 
              an efficient, effective repair. We prioritize your safety and convenience, offering prompt service 
              with same-day or next-day appointments available in most cases.
            </p>
          </>
        ),
        commonProblems: [
          {
            title: "Not Heating",
            description: "If your dryer tumbles but doesn't produce heat, the issue could be a faulty heating element, gas valve solenoid, thermal fuse, or temperature switch. Our technicians can identify and replace the specific component causing the heating problem."
          },
          {
            title: "Long Drying Times",
            description: "When clothes take too long to dry, the problem may be related to clogged vents, restricted airflow, a malfunctioning thermostat, or worn drum seals. We can identify the cause and restore your dryer's efficiency."
          },
          {
            title: "Unusual Noises",
            description: "Squeaking, rumbling, or thumping sounds during operation typically indicate issues with drum rollers, idler pulleys, worn bearings, or a damaged drum belt. Our experts can diagnose and fix these mechanical issues."
          },
          {
            title: "Won't Start or Turn On",
            description: "If your dryer won't power on or start a cycle, the problem could be related to the door switch, start switch, thermal fuse, or control board. We can identify electrical issues and restore functionality."
          },
          {
            title: "Automatic Cycle Not Working",
            description: "Problems with the moisture sensor or electronic control board can prevent your dryer from properly detecting when clothes are dry. Our technicians can repair or replace these components to restore accurate cycle completion."
          },
          {
            title: "Drum Not Turning",
            description: "When the dryer drum doesn't rotate, the issue is typically a broken belt, worn drum roller, faulty motor, or damaged idler pulley. We can diagnose and repair these mechanical failures to get your dryer spinning again."
          }
        ],
        repairProcess: (
          <>
            <p>
              Our dryer repair process is comprehensive, efficient, and focused on safety:
            </p>
            <ol className="list-decimal pl-6 space-y-4 my-6">
              <li>
                <strong>Thorough Diagnostic Assessment:</strong> We begin with a complete examination of your dryer, checking heating components, mechanical parts, ventilation, electronics, and safety features to accurately identify the underlying issue.
              </li>
              <li>
                <strong>Safety Inspection:</strong> For gas dryers, we conduct a thorough safety check of gas connections, ignition systems, and ventilation to ensure there are no dangerous conditions that could lead to fire hazards or gas leaks.
              </li>
              <li>
                <strong>Clear Explanation:</strong> After diagnosing the problem, we explain the issue in easy-to-understand terms, discussing what caused the malfunction and the recommended repair solution without confusing technical jargon.
              </li>
              <li>
                <strong>Transparent Quote:</strong> Before proceeding with any repairs, we provide a detailed, no-obligation estimate covering both parts and labor, ensuring you understand all costs involved with no surprises.
              </li>
              <li>
                <strong>Professional Repair:</strong> With your approval, our technicians perform the necessary repairs using quality replacement parts that match your dryer's specifications, ensuring reliable performance and safety.
              </li>
              <li>
                <strong>Ventilation Check:</strong> As part of our service, we inspect your dryer's ventilation system for restrictions or lint buildup that could affect performance or pose a fire hazard, recommending cleaning if necessary.
              </li>
              <li>
                <strong>Complete Testing:</strong> After completing repairs, we run multiple test cycles to verify that your dryer is functioning correctly, checking heating, tumbling, cycle completion, and safety systems.
              </li>
            </ol>
            <p>
              For urgent situations, we offer priority scheduling options to address your dryer problems promptly, helping you minimize disruption to your household laundry routine.
            </p>
          </>
        ),
        maintenanceTips: [
          {
            title: "Clean the Lint Filter Every Load",
            description: "Remove and clean the lint filter before or after every load. A clogged lint filter restricts airflow, extends drying time, increases energy consumption, and creates a potential fire hazard. Make it a habit to check and clean the filter each time you use your dryer."
          },
          {
            title: "Inspect and Clean Vents Annually",
            description: "Have your entire dryer vent system inspected and cleaned by a professional at least once a year. Lint accumulation in the vent duct severely restricts airflow, forcing your dryer to work harder and longer while creating a serious fire risk. Signs of restricted venting include clothes taking longer to dry and the dryer exterior feeling unusually hot."
          },
          {
            title: "Check Behind the Dryer",
            description: "Periodically check behind your dryer to ensure the vent hose isn't crushed or kinked, which can restrict airflow and create a fire hazard. Keep the area around the dryer clear of dust and lint. Make sure the dryer is positioned to allow a few inches of space between it and the wall for proper ventilation."
          },
          {
            title: "Don't Overload",
            description: "Avoid overloading your dryer. Cramming too many clothes into the drum restricts tumbling and airflow, resulting in longer drying times, increased energy usage, excessive wear on mechanical components, and unevenly dried clothes. Follow the manufacturer's capacity recommendations."
          },
          {
            title: "Clean the Moisture Sensor",
            description: "Locate and gently clean the moisture sensor (usually two metal strips inside the drum) with a soft cloth and rubbing alcohol every few months. Fabric softener residue on these sensors can interfere with their ability to accurately detect when clothes are dry, resulting in cycles that end prematurely or run too long."
          }
        ],
        conclusion: (
          <>
            <p>
              For over 15 years, Naples Appliance Repair has been the trusted name in dryer repair 
              throughout Naples and Southwest Florida. Our factory-trained technicians combine technical 
              knowledge with hands-on experience to deliver reliable, lasting repairs for all dryer makes 
              and models.
            </p>
            <p>
              We understand that a malfunctioning dryer can significantly disrupt your household routine. 
              That's why we prioritize prompt service with flexible scheduling options to accommodate your 
              needs and restore this essential appliance as quickly as possible.
            </p>
            <p>
              All our dryer repairs are backed by a comprehensive warranty on both parts and labor, giving 
              you confidence in the quality and reliability of our work. Our service vehicles are stocked 
              with common replacement parts for most dryer brands and models, allowing us to complete many 
              repairs in a single visit.
            </p>
            <p>
              For safe, professional dryer repair services in Naples that you can trust, contact Naples 
              Appliance Repair today. Our friendly customer service team is ready to answer your questions 
              and schedule a convenient appointment with one of our expert technicians.
            </p>
          </>
        )
      }}
    />
  );
};

export default DryerRepair;