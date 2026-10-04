import Image from "next/image";
import { Navigation } from "@/components/navigation";
import { Treatments } from "@/components/treatments";
import { Motion } from "@/components/motion";
import { FeedbackMarquee } from "@/components/feedback-marquee";
import { Arrow, Button, Wordmark } from "@/components/ui";
import {
  branches,
  clinic,
  enquiry,
  images,
  operatingHours,
} from "@/lib/clinic";
export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Navigation />
      <main id="main" className="overflow-x-hidden w-full max-w-full">
        <section id="home" className="hero" aria-labelledby="hero-title">
          <div className="hero-topline">
            <span>AESTHETIC & WELLNESS CARE</span>
            <span>MALAYSIA</span>
          </div>
          <div className="hero-copy">
            <h1 id="hero-title" className="max-w-6xl">
              Let’s Enhance Your
              <br />
              <span>Beauty With Us.</span>
            </h1>
            <p>
              A thoughtful approach to skin, aesthetics and wellbeing.
              <br className="desktop-break" /> Care that begins with you, at
              Klinik Dr Sophia Y.
            </p>
            <div className="hero-actions">
              <Button href="#treatments">Explore Treatments</Button>
              <Button href={enquiry()} outline>
                Book Appointment
              </Button>
            </div>
          </div>
          <div className="hero-image media">
            <Image
              {...images.hero}
              fill
              priority
              sizes="100vw"
              className="editorial-image"
            />
            <div className="hero-image-caption">
              <span>BEAUTY, WITH INTENTION.</span>
              <span>Editorial portrait · illustrative only</span>
            </div>
          </div>
          <div className="hero-bottom">
            <span>Skin · Aesthetics · Wellness</span>
            <a href="#treatments">
              Discover our approach <span aria-hidden="true">↓</span>
            </a>
          </div>
        </section>
        <section
          id="treatments"
          className="section treatments-section"
          aria-labelledby="treatment-title"
        >
          <div className="treatments-split">
            <div className="treatments-heading treatments-heading-photo">
              <Image {...images.treatment} fill sizes="(max-width: 768px) 100vw, 50vw" className="treatments-backdrop" alt="" />
              <p className="eyebrow">Care, thoughtfully chosen</p>
              <h2 id="treatment-title">
                Your care.
                <br />
                <span className="muted">Your choices.</span>
              </h2>
              <p>
                Explore treatment options for your skin, hair and wellbeing.
              </p>
            </div>
            <Treatments />
          </div>
          <p className="fine-print">
            Treatment suitability, availability, risks and expected outcomes are
            discussed during consultation. Individual results vary.
          </p>
        </section>
        <section
          id="about"
          className="section philosophy-section"
          aria-labelledby="about-title"
        >
          <div className="philosophy-layout">
            <div className="philosophy-heading">
              <p className="eyebrow">The way we see care</p>
              <h2 id="about-title">
                Let’s Enhance
                <br />
                Your Beauty
                <br />
                <span className="muted">With Us.</span>
              </h2>
            </div>
            <div className="philosophy-content">
              <div className="media philosophy-image">
                <Image
                  {...images.treatment}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="editorial-image"
                />
              </div>
              <p className="image-credit">
                Editorial imagery · illustrative only
              </p>
              <h3>
                Confidence is personal.
                <br />
                Your care should be, too.
              </h3>
              <p>
                Klinik Dr Sophia Y offers aesthetic and wellness care with an
                emphasis on natural beauty and personalised treatment. A
                consultation is a place to share what matters to you, ask
                questions and consider your options.
              </p>
              <p>
                From skin concerns to aesthetic preferences, begin with a
                conversation about your individual needs.
              </p>
              <a
                className="text-link"
                href={enquiry()}
                target="_blank"
                rel="noopener noreferrer"
              >
                Let’s talk about your skin <Arrow diagonal />
              </a>
            </div>
          </div>
        </section>
        <section
          className="section doctor-section"
          aria-labelledby="doctor-title"
        >
          <div className="doctor-monogram" aria-hidden="true">
            <span>S</span>
            <span>Y.</span>
          </div>
          <div className="doctor-copy">
            <p className="eyebrow">The person behind the name</p>
            <h2 id="doctor-title">
              Dr Sophia
              <br />
              <span className="muted">Yuhanis.</span>
            </h2>
            <p className="doctor-lead">
              Thoughtful care.
              <br />Individual choices.
            </p>
            <p>
              Meet Dr Sophia Yuhanis, the name behind Klinik Dr Sophia Y.
              The clinic’s approach begins with a conversation about your skin,
              your preferences and what you would like to explore.
            </p>
            <p>
              Take time to ask questions, understand your options and discuss
              a plan suited to your individual needs.
            </p>
          </div>
        </section>
        <section
          className="section feedback-section"
          id="feedback"
          aria-labelledby="feedback-title"
        >
          <div className="section-intro">
            <div>
              <p className="eyebrow">From our community</p>
              <h2 id="feedback-title">
                Your experience.
                <br />
                <span className="muted">In your words.</span>
              </h2>
            </div>
            <p className="intro-copy">
              Public feedback from visitors to our Shah Alam clinic.
            </p>
          </div>
          <FeedbackMarquee />

        </section>
        <section
          id="locations"
          className="section locations-section"
          aria-labelledby="locations-title"
        >
          <div className="section-intro">
            <div>
              <p className="eyebrow">Find your place for care</p>
              <h2 id="locations-title">Our clinics.</h2>
            </div>
            <p className="intro-copy">
              Across Selangor, Kuala Lumpur and Negeri Sembilan. Choose a clinic
              and speak directly with its team.
            </p>
          </div>
          <div className="branch-list">
            {branches.map((branch, i) => (
              <article className="branch" key={branch.name}>
                <span className="branch-index" aria-hidden="true">
                  0{i + 1}
                </span>
                <div className="branch-name">
                  <h3>{branch.name}</h3>
                  <p>{branch.designation}</p>
                </div>
                <address>{branch.address}</address>
                <div className="branch-links">
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`Klinik Dr Sophia Y ${branch.address}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Get Directions <Arrow diagonal />
                  </a>
                  <a
                    href={enquiry(
                      branch.phone,
                      `an appointment at ${branch.name}`,
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    WhatsApp Clinic <Arrow diagonal />
                  </a>
                  <a className="branch-phone" href={`tel:+${branch.phone}`}>
                    {branch.displayPhone}
                  </a>
                </div>
              </article>
            ))}
          </div>
          <p className="fine-print">
            Please contact your preferred branch to confirm opening hours and
            appointment availability before visiting.
          </p>
        </section>
      </main>
      <footer className="footer" id="contact">
        <div className="footer-contact">
          <div>
            <h3>Speak with our clinic team.</h3>
            <a
              className="text-link"
              href={enquiry()}
              target="_blank"
              rel="noopener noreferrer"
            >
              Book Appointment <Arrow diagonal />
            </a>
          </div>
          <div className="footer-hours" id="operating-hours">
            <h3>Operating Hours</h3>
            <dl>
              {operatingHours.map((item) => (
                <div key={item.days}>
                  <dt>{item.days}</dt>
                  <dd>{item.hours}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
        <div className="footer-locations">
          {branches.map((branch) => (
            <a href="#locations" key={branch.name}>
              {branch.name}
            </a>
          ))}
        </div>
        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} Klinik Dr Sophia Y. All rights
            reserved.
          </span>
          <span>
            General information only. Consultation is required for treatment
            advice.
          </span>
          <a href="#home">Back to top ↑</a>
        </div>
      </footer>
      <Motion />
    </>
  );
}
