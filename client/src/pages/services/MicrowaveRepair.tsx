import ServiceTemplate from "@/components/service/ServiceTemplate";
import { services } from "@/lib/serviceData";
import { linkifyBrands } from "@/utils/brandLinks";

const microwaveService = services.find(service => service.id === "microwave-repair");

const MicrowaveRepair = () => {
  if (!microwaveService) return null;

  return (
    <ServiceTemplate 
      service={microwaveService}
      metaDescription="Professional microwave repair services in Naples, FL. We fix all types of microwaves including countertop, over-the-range, built-in and drawer models from all major brands."
      additionalContent={{
        intro: (
          <>
            <p>
              When your microwave stops working properly, it can disrupt your daily meal preparation and
              food reheating routines. At Naples Appliance Repair, we provide expert microwave repair
              services throughout Naples and Southwest Florida to quickly restore this essential kitchen
              appliance to proper operation.
            </p>
            <p>
              Our skilled technicians have extensive experience with all types of microwaves, including
              countertop models, over-the-range units, built-in microwaves, drawer microwaves, and
              combination microwave-ovens. We service all major brands including GE, Whirlpool, Samsung,
              LG, KitchenAid, Frigidaire, Panasonic, Sharp, and many others.
            </p>
            <p>
              Whether your microwave isn't heating properly, has stopped working entirely, is making unusual
              noises, or has door issues, our team has the expertise to diagnose and fix the problem
              correctly. We understand the convenience a properly functioning microwave provides, which
              is why we offer prompt, efficient service to minimize disruption to your kitchen routines.
            </p>
          </>
        ),
        commonProblems: [
          {
            title: "Not Heating Food",
            description: "If your microwave runs but doesn't heat food properly, the issue could be with the magnetron, diode, high voltage capacitor, or transformer. Our technicians can diagnose and replace the specific faulty component to restore proper heating function."
          },
          {
            title: "Turntable Not Rotating",
            description: "When the turntable stops rotating, the problem might be with the turntable motor, drive coupler, or support assembly. We can identify the cause and repair or replace the necessary parts to get your turntable spinning again."
          },
          {
            title: "Unusual Noises",
            description: "Loud buzzing, grinding, or rattling sounds during operation typically indicate problems with the magnetron, cooling fan, turntable motor, or roller guide. Our experts can pinpoint the source of the noise and restore quiet operation."
          },
          {
            title: "Touchpad or Control Panel Issues",
            description: "If certain buttons don't work or the display is malfunctioning, the issue could be with the control board, touchpad membrane, or ribbon cable connections. We can troubleshoot and repair these electronic components effectively."
          },
          {
            title: "Door Problems",
            description: "Door latch failures or misalignments are common microwave issues that affect safety and functionality. Our technicians can repair or replace door switches, latches, handles, and hinges to ensure proper and safe operation."
          },
          {
            title: "Power Issues",
            description: "When your microwave won't turn on at all, the problem could be related to the fuse, thermal cutout, line fuse, or power supply circuit. We can diagnose electrical problems and restore power to your microwave safely."
          }
        ],
        repairProcess: (
          <>
            <p>
              Our microwave repair process is thorough, efficient, and focused on safety:
            </p>
            <ol className="list-decimal pl-6 space-y-4 my-6">
              <li>
                <strong>Comprehensive Diagnosis:</strong> We begin with a detailed examination of your microwave, checking the electrical components, mechanical systems, door alignment, safety switches, and control panel to accurately identify the underlying issue.
              </li>
              <li>
                <strong>Safety Inspection:</strong> Microwaves contain high-voltage components that can be dangerous even when unplugged. Our technicians conduct a thorough safety check to ensure there are no radiation leaks or other hazardous conditions.
              </li>
              <li>
                <strong>Clear Explanation:</strong> After diagnosing the problem, we explain what's wrong in simple terms, discussing the cause of the malfunction and the recommended repair solution without confusing technical jargon.
              </li>
              <li>
                <strong>Transparent Quote:</strong> Before proceeding with any repairs, we provide a detailed, no-obligation estimate covering both parts and labor, ensuring you understand all costs involved with no surprises.
              </li>
              <li>
                <strong>Quality Repairs:</strong> With your approval, our technicians perform the necessary repairs using genuine manufacturer parts whenever possible, ensuring reliable performance and longevity.
              </li>
              <li>
                <strong>Complete Testing:</strong> After completing repairs, we conduct thorough testing to verify that your microwave is heating properly, all functions work correctly, and it operates safely according to manufacturer specifications.
              </li>
            </ol>
            <p>
              For your convenience, we offer flexible scheduling options and can often complete microwave repairs in a single visit, minimizing disruption to your household routines.
            </p>
          </>
        ),
        maintenanceTips: [
          {
            title: "Regular Cleaning",
            description: "Clean your microwave interior regularly with a mild solution of water and vinegar or lemon juice. Heat the solution in a microwave-safe bowl for 2-3 minutes until steaming, then wipe down the loosened food particles and grease. Pay special attention to the ceiling of the cavity where splatter often accumulates and can cause arcing or burning if left unattended."
          },
          {
            title: "Inspect the Door Seal",
            description: "Check the door gasket and seal periodically for food debris, damage, or deterioration. Clean the seal gently with a damp cloth. The door must close securely with no gaps to prevent microwave energy leakage. If you notice any damage or gaps in the seal, stop using the microwave and have it professionally inspected immediately."
          },
          {
            title: "Avoid Running Empty",
            description: "Never run your microwave empty or with empty containers, as this can damage the magnetron (the component that generates microwave energy). Always ensure there's food or liquid in the microwave to absorb the energy. Even when defrosting small items, place a cup of water in the microwave alongside them to provide an energy-absorbing load."
          },
          {
            title: "Use Microwave-Safe Containers",
            description: "Only use containers specifically labeled as microwave-safe. Avoid metal, aluminum foil, and dishes with metallic trim or decoration as they can cause arcing (sparking). Similarly, avoid containers with unknown composition or plastic containers not designed for microwave use, as they may melt or release chemicals into your food."
          },
          {
            title: "Check the Turntable",
            description: "Remove and clean the glass turntable and support roller regularly. Ensure the roller track is clean and the turntable is properly positioned on its support. Improper turntable operation can lead to uneven cooking and unnecessary strain on the turntable motor. If you notice any wobbling or grinding sounds, inspect the support mechanism for damage."
          }
        ],
        conclusion: (
          <>
            <p>
              With over 15 years of experience serving Naples and Southwest Florida, Naples Appliance Repair
              has established a reputation for reliable, high-quality microwave repair services. Our certified
              technicians combine technical expertise with exceptional customer service to ensure your 
              complete satisfaction.
            </p>
            <p>
              We understand that a malfunctioning microwave can significantly disrupt your daily kitchen routines.
              That's why we prioritize prompt service with flexible scheduling options to restore this 
              essential appliance as quickly as possible.
            </p>
            <p>
              All our microwave repairs are backed by a comprehensive warranty on both parts and labor, giving
              you confidence in the quality and durability of our work. Our service vehicles are stocked with
              common replacement parts for most microwave brands and models, allowing us to complete many
              repairs in a single visit.
            </p>
            <p>
              For professional microwave repair in Naples that you can trust, contact Naples Appliance Repair
              today. Our friendly team is ready to schedule a convenient service appointment and answer any
              questions you have about our services.
            </p>
          </>
        )
      }}
    />
  );
};

export default MicrowaveRepair;