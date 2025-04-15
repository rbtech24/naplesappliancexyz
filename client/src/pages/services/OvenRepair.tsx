import ServiceTemplate from "@/components/service/ServiceTemplate";
import { services } from "@/lib/serviceData";

const ovenService = services.find(service => service.id === "oven");

const OvenRepair = () => {
  if (!ovenService) return null;

  return (
    <ServiceTemplate 
      service={ovenService}
      metaDescription="Professional oven and range repair services in Naples, FL. We repair all types of ovens including electric, gas, wall ovens, and ranges from all major brands."
      additionalContent={{
        intro: (
          <>
            <p>
              A properly functioning oven is essential for any kitchen, whether you're an occasional cook or a 
              culinary enthusiast. At Naples Appliance Repair, we provide expert oven repair services throughout 
              Naples and Southwest Florida, ensuring your cooking appliance is restored to optimal performance 
              quickly and efficiently.
            </p>
            <p>
              Our experienced technicians are skilled in repairing all types of ovens, including electric ovens, 
              gas ovens, wall ovens, range ovens, convection ovens, steam ovens, and dual-fuel ranges. We service 
              all major brands including GE, Whirlpool, Samsung, LG, KitchenAid, Thermador, Viking, Wolf, Bosch, 
              and many others.
            </p>
            <p>
              Whether your oven isn't heating properly, has temperature accuracy issues, won't turn on, or is 
              experiencing any other malfunction, our team has the expertise to diagnose and fix the problem 
              correctly. We understand how disruptive a non-functioning oven can be to your household, which 
              is why we prioritize prompt, effective service.
            </p>
          </>
        ),
        commonProblems: [
          {
            title: "Not Heating Properly",
            description: "If your oven won't heat to the correct temperature or heats unevenly, the issue may be with the heating elements, igniter, temperature sensor, or thermostat. Our technicians can diagnose and replace the faulty components."
          },
          {
            title: "Won't Turn On",
            description: "When your oven doesn't power on at all, the problem could be related to the power supply, control board, selector switch, or thermal fuse. We can identify the electrical issue and restore functionality."
          },
          {
            title: "Temperature Inaccuracy",
            description: "If your food is consistently undercooked or burned, your oven may have temperature calibration issues or problems with the temperature sensor. Our repair experts can calibrate your oven for accurate cooking results."
          },
          {
            title: "Door Not Closing Properly",
            description: "Oven door problems—including loose hinges, broken door springs, or damaged gaskets—can cause heat loss and energy inefficiency. We can repair or replace these components to ensure your oven door seals properly."
          },
          {
            title: "Self-Cleaning Function Issues",
            description: "Malfunctions with the self-cleaning feature can be caused by door lock problems, control board issues, or temperature sensor failures. Our technicians can troubleshoot and repair these specialized components."
          },
          {
            title: "Gas Ignition Problems",
            description: "For gas ovens, issues with the igniter, gas valve, or safety valve can prevent proper ignition. Our trained technicians can safely diagnose and repair gas-related problems, ensuring both functionality and safety."
          }
        ],
        repairProcess: (
          <>
            <p>
              Our oven repair process is thorough, efficient, and focused on restoring your appliance to optimal performance:
            </p>
            <ol className="list-decimal pl-6 space-y-4 my-6">
              <li>
                <strong>Comprehensive Inspection:</strong> We begin by performing a detailed examination of your oven, checking heating elements, ignition systems, temperature controls, electronics, and safety features to precisely identify the underlying issue.
              </li>
              <li>
                <strong>Detailed Assessment:</strong> After diagnosing the problem, we provide a clear explanation of what's wrong with your oven, discussing the cause of the malfunction and the recommended repair solution in easy-to-understand terms.
              </li>
              <li>
                <strong>Clear Cost Estimate:</strong> Before proceeding with any repair work, we present a transparent, itemized quote covering both parts and labor, ensuring you understand the costs involved with no hidden charges.
              </li>
              <li>
                <strong>Professional Repair:</strong> With your approval, our technicians perform the necessary repairs using quality parts that match your oven's specifications, ensuring reliable performance and longevity.
              </li>
              <li>
                <strong>Safety Verification:</strong> For gas ovens, we conduct thorough safety checks after the repair, ensuring there are no gas leaks and that all safety systems are functioning correctly to protect your household.
              </li>
              <li>
                <strong>Performance Testing:</strong> After completing repairs, we run comprehensive tests to verify that your oven heats accurately, maintains temperature properly, and all features and functions operate as intended.
              </li>
            </ol>
            <p>
              We recognize that oven problems can significantly disrupt meal preparation and family routines, which is why we prioritize efficient service with flexible scheduling options to accommodate your needs.
            </p>
          </>
        ),
        maintenanceTips: [
          {
            title: "Regular Cleaning",
            description: "Clean your oven every 3-6 months to prevent buildup that can affect heating efficiency and cause smoke or odors. For regular cleaning, use a mixture of baking soda and water on interior surfaces, avoiding heating elements and gas components. For self-cleaning ovens, use the self-clean function according to manufacturer guidelines, removing racks first to prevent damage."
          },
          {
            title: "Check and Clean Door Seals",
            description: "Inspect your oven's door gaskets regularly for cracks, tears, or food debris. Clean the seals gently with warm, soapy water and ensure they create a tight seal when the door is closed. Damaged seals allow heat to escape, causing temperature inconsistencies and wasting energy."
          },
          {
            title: "Calibrate Temperature",
            description: "Check your oven's temperature accuracy every 6-12 months using an oven-safe thermometer. Place it in the center of the oven, heat to 350°F, and verify the reading after 20 minutes. If it's off by more than 25 degrees, your oven may need professional calibration."
          },
          {
            title: "Inspect Heating Elements",
            description: "For electric ovens, visually examine the heating elements for signs of damage, blistering, or separation. When operating properly, elements should glow red evenly. For gas ovens, check that the flame is blue and consistent. Any abnormalities indicate it's time for professional service."
          },
          {
            title: "Avoid Foil on the Bottom",
            description: "Never line your oven bottom with aluminum foil as it can reflect heat improperly, causing temperature sensors to malfunction and potentially resulting in uneven cooking or control panel damage. Instead, use a removable oven liner designed for your specific model if needed."
          }
        ],
        conclusion: (
          <>
            <p>
              With over 15 years of experience serving Naples and Southwest Florida, Naples Appliance Repair 
              has established a reputation for exceptional oven repair services. Our certified technicians 
              combine technical expertise with a commitment to customer satisfaction, ensuring your oven is 
              repaired correctly the first time.
            </p>
            <p>
              We understand that a functioning oven is essential for daily meal preparation, entertaining, 
              and enjoying home-cooked meals with your family. That's why we prioritize prompt service 
              with flexible scheduling options to minimize disruption to your household.
            </p>
            <p>
              All our oven repairs are backed by a comprehensive parts and labor warranty, giving you 
              confidence in the quality and reliability of our work. Our service vehicles are stocked with 
              common replacement parts for most oven models, allowing us to complete many repairs in just 
              one visit.
            </p>
            <p>
              For professional, reliable oven repair services in Naples that you can trust, contact Naples 
              Appliance Repair today. Our friendly customer service team is ready to schedule a convenient 
              appointment and answer any questions you may have about our services.
            </p>
          </>
        )
      }}
    />
  );
};

export default OvenRepair;