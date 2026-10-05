import Link from "next/link";
import { Shell, Circuit } from "../components/Site";
import "./globals.css";

const A = "/assets/";

const solutions = [
  [
    "IoT & Connected Devices",
    "Remote monitoring, smart metering and sensor networks that keep systems connected and responsive.",
    "iot1-1.png",
    "Remote Monitoring Systems · Smart Metering · Air Quality Monitoring",
  ],
  [
    "Solar & Renewable",
    "Complete solar solutions designed for reliable operation in off-grid environments.",
    "solar1-3.png",
    "Solar Street Lights · Pump Controllers · Inverter Electronics",
  ],
  [
    "Industrial Automation",
    "Process control, scientific instruments and machine controllers engineered for precision.",
    "industrial-3.jpg",
    "Process Controllers · Scientific Instruments · SPM Machine Control",
  ],
  [
    "ODM & White Labelling",
    "From concept to production — complete product realization and manufacturing for your brand.",
    "odm-3.jpg",
    "Product Design · Manufacturing · Customisation",
  ],
];

const clients = [
  "client1.png",
  "client2.png",
  "client3.png",
  "client4.png",
  "client5.png",
  "client6.png",
  "client9.png",
];

export default function Home() {
  return (
    <Shell>
      <main>
        <section className="hero">
          <div className="grid" />

          <div className="heroRed">
            <Circuit />
          </div>

          <div className="heroCopy reveal">
            <div className="eyebrow">
              PUNE, INDIA <i /> ELECTRONICS ENGINEERING
            </div>

            <h1>
              <span>
                <em>I</em>t&apos;s all
              </span>
              <span>
                <em>AB</em>out
              </span>
              <span>
                <em>E</em>lectroni<em>X</em>.
              </span>
            </h1>

            <p>We build serious engineering systems.</p>

            <div className="actions">
              <Link href="/products">
                Explore products <b>→</b>
              </Link>

              <Link href="#about" className="ghost">
                Discover IABEX <b>↓</b>
              </Link>
            </div>
          </div>

          <div className="stats">
            {[
              ["8+", "Years active"],
              ["5", "Industry verticals"],
              ["100%", "Custom solutions"],
              ["01", "End-to-end partner"],
            ].map(([value, label]) => (
              <div key={label}>
                <strong>{value}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>

          <div className="scroll">
            SCROLL TO ENGINEERING <b>↓</b>
          </div>
        </section>

        <section className="about" id="about">
          <div className="kicker">01 / WHO WE ARE</div>

          <div className="aboutGrid">
            <h2 className="reveal">
              Engineering
              <br />
              intelligence
              <br />
              <em>into hardware.</em>
            </h2>

            <div className="aboutText reveal">
              <p>
                <b>IABEX Technologies</b> is a Pune-based electronics engineering
                company delivering end-to-end solutions for industrial and
                commercial customers.
              </p>

              <p>
                From concept to production, we handle every layer of the stack —
                hardware design, firmware, enclosures and deployment.
              </p>

              <div className="chips">
                <span>Embedded Systems</span>
                <span>SPM</span>
                <span>IoT</span>
                <span>Automation</span>
              </div>
            </div>
          </div>
        </section>

        <section className="show">
          <div className="sectionTop">
            <div>
              <div className="kicker">02 / ENGINEERING IN ACTION</div>

              <h2>
                Built in the real world.
                <br />
                <em>Made to perform.</em>
              </h2>
            </div>

            <p>
              Real hardware. Real deployment.
              <br />
              No concept-only engineering.
            </p>
          </div>

          <div className="mosaic">
            <figure className="big reveal">
              <img
                src={A + "fphoto.jpg"}
                alt="IABEX engineering facility"
                loading="lazy"
              />

              <figcaption>
                Engineering facility <b>01</b>
              </figcaption>
            </figure>

            <figure className="reveal">
              <img
                src={A + "smarttouch.jpg"}
                alt="IABEX embedded system"
                loading="lazy"
              />

              <figcaption>
                Embedded systems <b>02</b>
              </figcaption>
            </figure>

            <figure className="reveal">
              <img
                src={A + "industrial-3.jpg"}
                alt="IABEX industrial control system"
                loading="lazy"
              />

              <figcaption>
                Industrial control <b>03</b>
              </figcaption>
            </figure>
          </div>
        </section>

        <section className="solutions" id="solutions">
          <div className="sectionTop">
            <div>
              <div className="kicker">03 / WHAT WE BUILD</div>

              <h2>
                Engineered solutions
                <br />
                <em>for every domain.</em>
              </h2>
            </div>
          </div>

          <div className="solutionList">
            {solutions.map(([title, description, image, services], index) => (
              <article
                className="solution interactive reveal"
                key={title}
              >
                <div className="num">0{index + 1}</div>

                <div className="solutionCopy">
                  <h3>{title}</h3>
                  <p>{description}</p>
                  <small>{services}</small>
                </div>

                <img
                  src={A + image}
                  alt={title}
                  loading="lazy"
                />

                <b className="arr">↗</b>
              </article>
            ))}
          </div>

          <Link className="allProducts" href="/products">
            View all products <b>→</b>
          </Link>
        </section>

        <section className="process">
          <div className="kicker">04 / FROM IDEA TO REALITY</div>

          <h2>
            One engineering partner.
            <br />
            <em>Every critical stage.</em>
          </h2>

          <div className="processGrid">
            {[
              "Discover",
              "Design",
              "Prototype",
              "Validate",
              "Manufacture",
            ].map((stage, index) => (
              <div className="reveal" key={stage}>
                <small>0{index + 1}</small>
                <i />
                <h3>{stage}</h3>
              </div>
            ))}
          </div>
        </section>

        <section className="clients">
          <div className="kicker">05 / TRUSTED BY</div>

          <div className="marquee">
            <div>
              {[...clients, ...clients].map((image, index) => (
                <img
                  key={`${image}-${index}`}
                  src={A + image}
                  alt="IABEX client logo"
                  loading="lazy"
                />
              ))}
            </div>
          </div>
        </section>

        <section className="contact" id="contact">
          <div className="contactCopy">
            <div className="kicker">06 / GET IN TOUCH</div>

            <h2>
              Have something
              <br />
              <em>challenging to build?</em>
            </h2>

            <p>Bring us the problem. We&apos;ll engineer the electronics.</p>

            <a href="mailto:info@iabex.in">
              Start a project <b>↗</b>
            </a>
          </div>

          <div className="details">
            <div>
              <small>ADDRESS</small>

              <p>
                IABEX Technologies Pvt. Ltd.
                <br />
                S.No.131/2A 24, behind Church,
                <br />
                Rajyog Society, Warje,
                <br />
                Pune, Maharashtra 411058
              </p>
            </div>

            <div>
              <small>CONTACT</small>

              <p>
                +91 7666690113
                <br />
                info@iabex.in
              </p>
            </div>

            <div>
              <small>WORKING HOURS</small>

              <p>
                Weekdays 9:30 AM — 6:30 PM
                <br />
                Sunday — Holiday
              </p>
            </div>
          </div>
        </section>
      </main>
    </Shell>
  );
}