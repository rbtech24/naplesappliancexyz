import ServiceTemplate from "@/components/service/ServiceTemplate";
import { services } from "@/lib/serviceData";
import { linkifyBrands } from "@/utils/brandLinks";

const washerService = services.find(service => service.id === "washing-machine-repair");

const WasherRepair = () => {
  if (!washerService) return null;

  return (
    <ServiceTemplate 
      service={washerService}
      metaDescription="Expert washing machine repair in Naples, FL. We fix all types of washers - front load, top load, HE models, and all major brands. Fast, reliable service with fair pricing."
      additionalContent={{
        intro: (
          <>
            <p>
              A malfunctioning washing machine can quickly disrupt your household routine and leave you with 
              piles of dirty laundry. At Naples Appliance Repair, we provide expert washing machine repair 
              services throughout Naples and Southwest Florida, helping you get back to your normal routine 
              as quickly as possible.
            </p>
            <p>
              Our technicians are highly trained and experienced in repairing all types of washing machines, 
              including front-loading, top-loading, high-efficiency (HE), compact, and smart washers. We service 
              all major brands including {linkifyBrands("Samsung, LG, Whirlpool, GE, Maytag, Bosch, Speed Queen,")}{" "}
              and many others.
            </p>
            <p>
              Whether your washer is leaking, making unusual noises, not spinning properly, or has stopped 
              working entirely, our team has the expertise to diagnose the issue accurately and provide efficient, 
              effective repairs. We pride ourselves on offering same-day or next-day service in most cases, 
              minimizing disruption to your daily routine.
            </p>
          </>
        ),
        commonProblems: [
          {
            title: "Leaking Water",
            description: "Water leaks can stem from damaged hoses, worn door gaskets, faulty water pumps, or cracked tubs. Our technicians can pinpoint the source of the leak and make the necessary repairs to prevent water damage to your home."
          },
          {
            title: "Not Draining Properly",
            description: "If your washer isn't draining, it could be due to a clogged drain pump, kinked drain hose, or foreign objects blocking the drainage system. We can clear obstructions and repair or replace damaged components."
          },
          {
            title: "Excessive Vibration or Noise",
            description: "Unusual noises or shaking during operation often indicate unbalanced loads, worn bearings, damaged drive belts, or problems with the motor or suspension system. Our team can identify and fix these issues to restore quiet operation."
          },
          {
            title: "Not Spinning or Agitating",
            description: "When your washer won't spin or agitate, it may be due to a broken drive belt, worn motor coupler, faulty lid switch, or issues with the motor or control board. We can diagnose and repair these problems efficiently."
          },
          {
            title: "Control Panel or Electronic Issues",
            description: "Unresponsive buttons, error codes, or display problems often point to issues with the control board, user interface, or internal wiring. Our technicians are experienced in troubleshooting and repairing these electronic components."
          },
          {
            title: "Water Temperature Problems",
            description: "If your washer isn't heating water properly or is using the wrong temperature, it could be due to faulty heating elements, temperature sensors, or water inlet valve issues. We can identify and fix these temperature-related problems."
          }
        ],
        repairProcess: (
          <>
            <p>
              Our washing machine repair process is comprehensive and customer-focused from beginning to end:
            </p>
            <ol className="list-decimal pl-6 space-y-4 my-6">
              <li>
                <strong>Thorough Diagnosis:</strong> We begin with a complete examination of your washing machine, checking the motor, pump, belts, electronic controls, water inlet system, drainage components, and mechanical parts to identify the exact issue.
              </li>
              <li>
                <strong>Clear Explanation:</strong> Once we've identified the problem, we'll explain it in plain language, discussing what's wrong, why it happened, and the recommended repair options so you can make an informed decision.
              </li>
              <li>
                <strong>Transparent Quote:</strong> Before proceeding with any repairs, we provide a detailed estimate covering parts and labor with no hidden costs or surprises. Our pricing is competitive and fair.
              </li>
              <li>
                <strong>Expert Repair:</strong> With your approval, our technicians perform the necessary repairs using high-quality replacement parts that match your washer's specifications, ensuring durability and proper performance.
              </li>
              <li>
                <strong>Verification and Testing:</strong> After completing the repair, we run multiple test cycles to verify that all functions are working correctly, checking wash cycles, water levels, drainage, spinning, and any special features.
              </li>
              <li>
                <strong>Preventive Advice:</strong> We provide guidance on proper washer usage and maintenance to help extend the life of your appliance and prevent future breakdowns.
              </li>
            </ol>
            <p>
              For urgent situations, we offer priority scheduling options to address your washing machine problems promptly, helping you minimize disruption to your household laundry routine.
            </p>
          </>
        ),
        maintenanceTips: [
          {
            title: "Clean the Drum Regularly",
            description: "Run an empty hot water cycle with two cups of white vinegar or a commercial washing machine cleaner monthly to remove detergent buildup, mildew, and odors. This is especially important for front-loading machines. Wipe down the drum and door seal after the cleaning cycle completes."
          },
          {
            title: "Leave the Door Open When Not in Use",
            description: "Keep your washer door or lid slightly open when not in use, especially for front-loading machines. This allows air circulation and helps prevent mold and mildew growth in the drum and door gasket, which can cause unpleasant odors."
          },
          {
            title: "Check and Clean the Filter",
            description: "Many washing machines have accessible filters that should be checked and cleaned every 3-4 months. These can become clogged with lint, coins, and other small items. For front-loaders, the filter is typically located near the bottom front of the machine behind a small access panel."
          },
          {
            title: "Inspect Hoses Regularly",
            description: "Examine the water supply and drain hoses every 6 months for signs of wear, bulging, cracking, or leaks. Hoses should be replaced every 3-5 years even if they appear to be in good condition, as internal deterioration can lead to catastrophic failures and flooding."
          },
          {
            title: "Use the Right Detergent",
            description: "Always use the appropriate type and amount of detergent for your specific washing machine model. High-efficiency (HE) washers require HE detergent. Using the wrong detergent or too much can cause excess sudsing, which may lead to mechanical problems and poor washing performance."
          }
        ],
        conclusion: (
          <>
            <p>
              For over 15 years, Naples Appliance Repair has been the trusted name in washing machine repair 
              throughout Naples and Southwest Florida. Our factory-trained technicians combine technical expertise 
              with a commitment to exceptional customer service, ensuring your satisfaction with every repair.
            </p>
            <p>
              We understand the inconvenience of a broken washing machine and strive to provide the fastest 
              possible response times without compromising on quality. Our service vehicles are fully equipped 
              with common replacement parts, allowing us to complete most repairs in a single visit.
            </p>
            <p>
              All our washing machine repairs are backed by a comprehensive warranty on both parts and labor, 
              giving you confidence in the quality and durability of our work. We stand behind every repair 
              we perform.
            </p>
            <p>
              Whether you're dealing with a minor issue or a major malfunction, you can count on Naples Appliance 
              Repair for professional, reliable washing machine repair services. Contact us today to schedule 
              a convenient appointment with one of our skilled technicians.
            </p>
          </>
        )
      }}
    />
  );
};

export default WasherRepair;