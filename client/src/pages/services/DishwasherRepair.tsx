import ServiceTemplate from "@/components/service/ServiceTemplate";
import { services } from "@/lib/serviceData";

const dishwasherService = services.find(service => service.id === "dishwasher");

const DishwasherRepair = () => {
  if (!dishwasherService) return null;

  return (
    <ServiceTemplate 
      service={dishwasherService}
      metaDescription="Professional dishwasher repair services in Naples, FL. We fix all brands including Bosch, KitchenAid, Whirlpool, and more. Fast, affordable, and reliable dishwasher repairs."
      additionalContent={{
        intro: (
          <>
            <p>
              A properly functioning dishwasher saves you time and ensures your dishes are thoroughly cleaned 
              and sanitized. When your dishwasher malfunctions, Naples Appliance Repair provides expert repair 
              services throughout Naples and Southwest Florida to quickly restore this essential kitchen appliance.
            </p>
            <p>
              Our skilled technicians have extensive experience with all types of dishwashers, including built-in, 
              portable, drawer, and countertop models. We service all major brands including Bosch, KitchenAid, 
              Whirlpool, GE, Maytag, Samsung, LG, Miele, Frigidaire, and many others.
            </p>
            <p>
              Whether your dishwasher isn't cleaning properly, is leaking, won't drain, or has stopped working 
              entirely, our team has the expertise to diagnose the issue correctly and provide an efficient, 
              long-lasting repair. We understand the inconvenience of a broken dishwasher and strive to provide 
              prompt service with same-day or next-day appointments available in many cases.
            </p>
          </>
        ),
        commonProblems: [
          {
            title: "Poor Cleaning Performance",
            description: "If dishes aren't getting clean, the issue could be related to spray arms, water inlet valves, wash pump assemblies, or detergent dispensers. Our technicians can identify what's preventing proper cleaning and restore optimal performance."
          },
          {
            title: "Leaking Water",
            description: "Dishwasher leaks are often caused by damaged door gaskets, faulty water inlet valves, loose connections, or cracked tubs. We can pinpoint the source of leaks and make necessary repairs to prevent water damage to your kitchen."
          },
          {
            title: "Drainage Issues",
            description: "When your dishwasher won't drain properly, the problem might be a clogged drain filter, blocked drain hose, faulty drain pump, or issues with the check valve. Our experts can resolve these drainage problems effectively."
          },
          {
            title: "Won't Start or Complete Cycles",
            description: "If your dishwasher won't start or stops mid-cycle, the issue could be with the door latch, control board, selector switch, or thermal fuse. We can diagnose and repair these electronic and mechanical malfunctions."
          },
          {
            title: "Unusual Noises",
            description: "Grinding, humming, or rattling sounds during operation typically indicate problems with the wash arm, pump, motor, or spray arm. Our technicians can identify the source of the noise and restore quiet operation."
          },
          {
            title: "Water Not Heating",
            description: "If your dishwasher isn't heating water properly, dishes may not be sanitized adequately. This is often due to a faulty heating element, temperature sensor, or thermostat. We can repair or replace these components to ensure proper water temperature."
          }
        ],
        repairProcess: (
          <>
            <p>
              Our dishwasher repair process is designed to be thorough, efficient, and transparent:
            </p>
            <ol className="list-decimal pl-6 space-y-4 my-6">
              <li>
                <strong>Comprehensive Diagnosis:</strong> We begin with a detailed examination of your dishwasher, checking the water supply system, drain components, motor, pump, spray arms, control board, and door mechanisms to precisely identify the problem.
              </li>
              <li>
                <strong>Clear Problem Explanation:</strong> After identifying the issue, we explain what's wrong in simple terms, discussing the cause of the malfunction and the recommended repair solution without confusing technical jargon.
              </li>
              <li>
                <strong>Transparent Pricing:</strong> Before proceeding with any repairs, we provide a detailed, no-obligation quote covering both parts and labor, ensuring you understand all costs involved with no surprises.
              </li>
              <li>
                <strong>Quality Repairs:</strong> With your approval, our technicians perform the necessary repairs using genuine manufacturer parts whenever possible, ensuring optimal performance and longevity.
              </li>
              <li>
                <strong>Thorough Testing:</strong> After completing repairs, we run full test cycles to verify that your dishwasher is functioning correctly, checking water intake, spray performance, drainage, and cycle completion.
              </li>
              <li>
                <strong>Maintenance Guidance:</strong> We provide practical advice on proper dishwasher use and maintenance to help prevent future issues and extend the life of your appliance.
              </li>
            </ol>
            <p>
              For urgent situations, we offer priority scheduling options to address your dishwasher problems promptly, helping you minimize disruption to your household routine.
            </p>
          </>
        ),
        maintenanceTips: [
          {
            title: "Clean the Filter Regularly",
            description: "Remove and clean your dishwasher's filter at least once a month. The filter is typically located at the bottom of the dishwasher tub and can become clogged with food particles. Rinse it under warm water and use a soft brush to remove stubborn debris. A clean filter improves cleaning performance and prevents drainage issues."
          },
          {
            title: "Check and Clean Spray Arms",
            description: "Inspect the spray arms every 1-2 months for food particles or mineral buildup that might be blocking the spray holes. Remove the arms according to your owner's manual and clear any obstructions using a toothpick or small wire. Ensure they spin freely when reinstalled for proper water distribution."
          },
          {
            title: "Run Hot Water Before Starting",
            description: "Before starting your dishwasher, run hot water at the kitchen sink until it reaches maximum temperature. This ensures that your dishwasher begins its cycle with hot water, improving cleaning effectiveness and helping to dissolve detergent properly, especially during winter months when pipes may contain cold water."
          },
          {
            title: "Use Dishwasher Cleaner Monthly",
            description: "Run an empty cycle with a commercial dishwasher cleaner or a cup of white vinegar in the top rack once a month to remove limescale, mineral buildup, and grease accumulation. This helps maintain efficient operation, prevents odors, and extends your dishwasher's lifespan."
          },
          {
            title: "Check Door Gasket and Seals",
            description: "Examine the rubber gasket around your dishwasher door regularly for food debris, mold, or damage. Clean it with a damp cloth and mild solution of water and vinegar. Damaged gaskets should be replaced promptly as they can cause leaks and affect the dishwasher's ability to maintain proper water temperature."
          }
        ],
        conclusion: (
          <>
            <p>
              With over 15 years of experience serving Naples and Southwest Florida, Naples Appliance Repair 
              has established a reputation for reliable, high-quality dishwasher repair services. Our certified 
              technicians combine technical expertise with exceptional customer service to ensure your complete 
              satisfaction.
            </p>
            <p>
              We understand that a malfunctioning dishwasher can disrupt your daily routine and create extra 
              work in the kitchen. That's why we prioritize fast response times and efficient repairs to restore 
              this essential appliance as quickly as possible.
            </p>
            <p>
              All our dishwasher repairs are backed by a comprehensive warranty on both parts and labor, giving 
              you confidence in the quality and durability of our work. Our service vehicles are stocked with 
              common replacement parts for most dishwasher brands and models, allowing us to complete many 
              repairs in a single visit.
            </p>
            <p>
              For professional dishwasher repair in Naples that you can trust, contact Naples Appliance Repair 
              today. Our friendly team is ready to schedule a convenient service appointment and answer any 
              questions you have about our services.
            </p>
          </>
        )
      }}
    />
  );
};

export default DishwasherRepair;