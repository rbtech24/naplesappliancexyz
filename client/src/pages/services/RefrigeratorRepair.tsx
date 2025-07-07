import ServiceTemplate from "@/components/service/ServiceTemplate";
import { services } from "@/lib/serviceData";
import { linkifyBrands } from "@/utils/brandLinks";

const refrigeratorService = services.find(service => service.id === "refrigerator-repair");

const RefrigeratorRepair = () => {
  if (!refrigeratorService) return null;

  return (
    <ServiceTemplate 
      service={refrigeratorService}
      metaDescription="Professional refrigerator repair services in Naples, FL. Our expert technicians fix all brands including Samsung, LG, Whirlpool, GE, and more. Same-day service available."
      additionalContent={{
        intro: (
          <>
            <p>
              When your refrigerator stops working properly, it can quickly become an emergency situation. 
              At Naples Appliance Repair, we specialize in fast, professional refrigerator repair services 
              throughout Naples and surrounding areas in Southwest Florida.
            </p>
            <p>
              Our factory-trained technicians have extensive experience with all refrigerator types including 
              French door, side-by-side, bottom freezer, top freezer, built-in, and counter-depth models. 
              We service all major brands including {linkifyBrands("Samsung, LG, Whirlpool, GE, Maytag, KitchenAid, Sub-Zero,")}{" "}
              and many more.
            </p>
            <p>
              Whether your refrigerator isn't cooling properly, is making strange noises, or has stopped working 
              entirely, our team can quickly diagnose the issue and provide an efficient, long-lasting repair. 
              We understand how disruptive a broken refrigerator can be to your household, which is why we 
              offer same-day service in many cases.
            </p>
          </>
        ),
        commonProblems: [
          {
            title: "Not Cooling Properly",
            description: "If your refrigerator isn't maintaining the proper temperature, it could be due to dirty condenser coils, a faulty thermostat, or issues with the compressor or evaporator fan. Our technicians can diagnose and fix the specific cause."
          },
          {
            title: "Water Leaking Inside or Outside",
            description: "Water pooling inside your refrigerator or on your floor often indicates a clogged defrost drain, damaged water supply line, or issues with the water filter or inlet valve. We can identify the source and resolve it quickly."
          },
          {
            title: "Ice Maker Not Working",
            description: "Problems with ice production can be caused by clogged water lines, faulty water inlet valves, or issues with the ice maker assembly itself. Our repair experts can get your ice maker functioning properly again."
          },
          {
            title: "Excessive Frost Buildup",
            description: "If you're noticing unusual frost accumulation in your freezer, this often points to problems with the defrost system, door gaskets, or temperature control. We'll identify and fix the underlying cause."
          },
          {
            title: "Strange Noises",
            description: "Unusual buzzing, clicking, or rattling sounds typically indicate issues with the compressor, condenser fan, or other mechanical components. Our technicians can diagnose and repair the source of the noise."
          },
          {
            title: "Not Dispensing Water",
            description: "When your water dispenser stops working, it's often related to a frozen or clogged water line, faulty water inlet valve, or control board issues. Our team can pinpoint and resolve these problems effectively."
          }
        ],
        repairProcess: (
          <>
            <p>
              Our refrigerator repair process is designed to be thorough, efficient, and transparent from start to finish:
            </p>
            <ol className="list-decimal pl-6 space-y-4 my-6">
              <li>
                <strong>Initial Assessment:</strong> We begin with a comprehensive diagnostic evaluation of your refrigerator, examining all components including the compressor, evaporator, condenser coils, fan motors, thermostats, and electronic control boards.
              </li>
              <li>
                <strong>Problem Identification:</strong> Our experienced technicians accurately identify the specific issue affecting your refrigerator's performance, explaining the problem and repair options in clear, understandable terms.
              </li>
              <li>
                <strong>Upfront Quote:</strong> Before proceeding with any repairs, we provide a detailed, no-obligation quote covering both parts and labor, with no hidden fees or surprises.
              </li>
              <li>
                <strong>Quality Repairs:</strong> Upon your approval, we perform the necessary repairs using genuine manufacturer parts whenever possible, ensuring long-lasting results.
              </li>
              <li>
                <strong>Thorough Testing:</strong> After completing the repair, we conduct extensive testing to verify that your refrigerator is functioning properly, checking cooling performance, temperature stability, and all features.
              </li>
              <li>
                <strong>Maintenance Recommendations:</strong> We provide guidance on proper refrigerator maintenance to help prevent future issues and extend the life of your appliance.
              </li>
            </ol>
            <p>
              For refrigerator emergencies, we offer priority service options to address your needs as quickly as possible, helping you minimize food spoilage and disruption to your household.
            </p>
          </>
        ),
        maintenanceTips: [
          {
            title: "Clean the Condenser Coils",
            description: "Dust and clean the condenser coils at the back or bottom of your refrigerator every 6-12 months. Dirty coils force the compressor to work harder, reducing efficiency and potentially causing premature failure. Use a coil brush or vacuum with a brush attachment for best results."
          },
          {
            title: "Check and Clean Door Seals",
            description: "Inspect the door gaskets regularly for tears, food debris, or signs of wear. Clean them with mild soap and water, and ensure they create a tight seal. Damaged gaskets allow cold air to escape, making your refrigerator work harder and increasing energy consumption."
          },
          {
            title: "Maintain Proper Temperature",
            description: "Keep your refrigerator compartment between 37-40°F (3-4°C) and your freezer at 0°F (-18°C). Use a separate thermometer to verify temperatures, as built-in displays aren't always accurate. Proper temperatures ensure food safety and optimal energy efficiency."
          },
          {
            title: "Replace Water Filters Regularly",
            description: "If your refrigerator has a water dispenser or ice maker, replace the water filter every 6 months or as recommended by the manufacturer. This ensures clean, great-tasting water and ice while preventing potential clogs or leaks in the water system."
          },
          {
            title: "Organize Content Efficiently",
            description: "Avoid overcrowding your refrigerator, as this restricts airflow and reduces cooling efficiency. Leave some space between items and around air vents to allow for proper cold air circulation throughout all compartments."
          }
        ],
        conclusion: (
          <>
            <p>
              With over 15 years of experience serving Naples and Southwest Florida, Naples Appliance Repair 
              has established a reputation for reliable, high-quality refrigerator repair services. Our team 
              takes pride in providing prompt, professional service with a focus on customer satisfaction.
            </p>
            <p>
              We understand that a malfunctioning refrigerator isn't just an inconvenience—it can lead to 
              costly food spoilage and disrupt your daily routine. That's why we prioritize quick response 
              times and efficient repairs to get your appliance back in working order as quickly as possible.
            </p>
            <p>
              All our refrigerator repairs are backed by a comprehensive warranty on both parts and labor, 
              giving you peace of mind and confidence in our work. Our technicians arrive fully equipped with 
              the tools and common replacement parts needed to complete most repairs in a single visit.
            </p>
            <p>
              For professional refrigerator repair in Naples that you can trust, contact Naples Appliance 
              Repair today. Our friendly team is ready to answer your questions and schedule a convenient 
              service appointment.
            </p>
          </>
        )
      }}
    />
  );
};

export default RefrigeratorRepair;