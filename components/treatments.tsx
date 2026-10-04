import { additionalTreatments, enquiry } from "@/lib/clinic";
import { Arrow } from "./ui";
const options = [
  ...additionalTreatments,
  {
    name: "Laser treatments",
    description:
      "Discuss Pico and CO₂ laser options, suitability and aftercare with the clinic.",
  },
  {
    name: "HIFU",
    description:
      "Explore the clinic’s HIFU options and discuss your individual aesthetic preferences.",
  },
  {
    name: "Skin boosters",
    description:
      "Discuss skin booster options and a plan suited to your concerns.",
  },
];
export function Treatments() {
  return (
    <div className="treatment-accordion">
      {options.map((item) => (
        <details key={item.name} name="clinic-treatments">
          <summary>
            <h3>{item.name}</h3>
            <svg
              viewBox="0 0 24 24"
              width="22"
              height="22"
              fill="none"
              aria-hidden="true"
            >
              <path d="m5 9 7 7 7-7" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </summary>
          <div className="treatment-details">
            <p>{item.description}</p>
            <a
              className="text-link"
              href={enquiry(undefined, item.name.toLowerCase())}
              target="_blank"
              rel="noopener noreferrer"
            >
              Enquire about treatment <Arrow diagonal />
            </a>
          </div>
        </details>
      ))}
    </div>
  );
}
