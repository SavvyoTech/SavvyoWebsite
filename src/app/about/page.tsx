'use client';

import Image from "next/image";
import styles from "./page.module.scss";
import { Typography } from "@mui/material";
import GridItemProduct from "../components/gridItemProduct/gridItemProduct";
import Link from "next/link";
import { motion } from "framer-motion";
import { useRef } from "react";

export default function AboutPage() {
  const letsConnectRef = useRef<HTMLDivElement>(null);

  const scrollToLetsConnect = () => {
    if (letsConnectRef.current) {
      letsConnectRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className={styles.main}>
      <section className={styles.aboutSection1}>
        <div className={styles.ourValuesHead}>
          <Typography typography={"h6"}>Our Values: Vasudhaiva Kutumbakam</Typography>
          <Typography typography={"h3"}>At Savvyo, we believe in the profound wisdom of "Vasudhaiva Kutumbakam"</Typography>
          <Typography typography={"body1"} className={styles.coreValue}>The world is one family. Rooted in this timeless Indian principle, our core value, “SvaDharma”, encapsulates a rich tapestry of virtues.</Typography>
        </div>
        <div className={styles.ourValuesGrid}>
          <GridItemProduct
            title="Sincerity and Integrity"
            description="We uphold honesty and trustworthiness in all our endeavors, fostering genuine connections and unwavering integrity."
            icon="/icons/chat-icon.svg"
          />
          <GridItemProduct
            title="Fulfilling Responsibilities"
            description="Embracing our duties and responsibilities, we prioritize our commitments regardless of external influences, ensuring steadfast dedication to our mission."
            icon="/icons/lightning-icon.svg"
          />
          <GridItemProduct
            title="Simplicity and Focus"
            description="Amidst the noise of the world, we maintain clarity of purpose, focusing on the essence of our tasks with unwavering determination and simplicity."
            icon="/icons/user-gen-icon.svg"
          />
          <GridItemProduct
            title="Empathy and Fairness"
            description="We believe in fairness and empathy, refraining from exploiting others even when presented with the opportunity, and always striving to uplift and empower those around us."
            icon="/icons/emoji-icon.svg"
          />
          <GridItemProduct
            title="Accountability and Reflection"
            description="When faced with challenges, we look inward, taking responsibility for our actions and choices, and seeking growth through self-reflection and continuous improvement."
            icon="/icons/cmd-icon.svg"
          />
          <GridItemProduct
            title="The difference"
            description="Each one of us can make a difference. Together we make a change, whether you are trying to build something small it all matters here."
            icon="/icons/heart-chat.svg"
          />
        </div>

        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          id="section3"
          className={styles.CTA}
        >
          <div className={styles.questionsBox}>
            <div className={styles.questionsBoxSection}>
              <div>
                <h5>Still have questions?</h5>
                <p>Can&apos;t find the answer you&apos;re looking for? Please chat to our friendly team.</p>
              </div>
              <div className={styles.getInTouch} onClick={scrollToLetsConnect}>
                <Link href="#" onClick={(e) => e.preventDefault()} className={styles.getInTouchLink}>
                  Get in touch
                </Link>
              </div>
            </div>
          </div>
        </motion.section>
      </section>

      <section className={styles.aboutSection2}>
        <div className={styles.ourJourneySection}>

          <motion.div
            initial={{ opacity: 0, x: "-100%" }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className={styles.marketPlaceItemsDivGrid}
          >
            <div className={styles.ourJourneyDesc}>
              <h3>Our journey begins</h3>

              <div className={styles.ourJourneyParas}>
                <p className={styles.ourJourneyDescBold}>For us at Savvyo, embodying a relentlessly pursuing value creation for our customers, driven by goodwill and a steadfast commitment to doing good.</p>
                <p>In our journey towards excellence, we may encounter obstacles, but rest assured, our actions are always guided by benevolence and a steadfast commitment to positive impact.</p>
                <p>Together, let's embrace the spirit and work towards building a brighter, more inclusive world where every individual is valued and respected as part of one global family.</p>
              </div>

              <div className={styles.ourJourneyBtns}>
                <Link href="#" className={styles.ourJourneyLink1}>
                  Read more
                </Link>
                <Link href="/product" className={styles.ourJourneyLink2}>
                  Check our product
                </Link>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className={styles.marketPlaceItemsImage}
          >
            <div className={styles.ourJourneyImg}>
              <Image
                src="/images/our-journey.jpeg"
                alt="Our Journey"
                width={576}
                height={654}
                objectFit="cover"
                quality={100}
              />
            </div>
          </motion.div>

        </div>
      </section>

      <section className={styles.aboutSection3} ref={letsConnectRef}>
        <motion.div
          initial={{ opacity: 0, x: "-100%" }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className={styles.marketPlaceItemsDivGrid}
        >
          <div className={styles.indiaImg}>
            <Image
              src="/images/lets-connect.jpeg"
              alt="Let's Connect"
              width={629}
              height={815}
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: "100%" }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className={styles.marketPlaceItemsImage}
        >

          <div className={styles.letsConnect}>
            <div className={styles.letsConnectDesc}>
              <h3>Let&apos;s Connect</h3>
              <p>We&apos;d love to hear from you. Please fill out this form.</p>
            </div>
            <div className={styles.letsConnectForm}>
              <div className={styles.name}>
                <div className={styles.firstName}>
                  <label>First name *</label>
                  <input placeholder="First name" />
                </div>
                <div className={styles.lastName}>
                  <label>Last name *</label>
                  <input placeholder="Last name" />
                </div>
              </div>
              <div className={styles.email}>
                <label>Email *</label>
                <input placeholder="you@company.com" />
              </div>
              <div className={styles.phone}>
                <label>Phone number</label>
                <div className={styles.phSection}>
                  <select>
                    <option value="US" selected>US</option>
                    <option value="IN">IN</option>
                    <option value="UK">UK</option>
                  </select>
                  <input placeholder="+1 (555) 000-0000" />
                </div>
              </div>
              <div className={styles.message}>
                <label>Message *</label>
                <textarea placeholder="Leave us a message..." />
              </div>
              <div className={styles.category}>
                <label>Category</label>
                <div className={styles.checkboxGroup}>
                  <label>
                    <input type="checkbox" name="customerIssues" />
                    <span className={styles.checkmark} />
                    Customer Issues
                  </label>
                  <label>
                    <input type="checkbox" name="supplierIssue" />
                    <span className={styles.checkmark} />
                    Supplier Issue
                  </label>
                  <label>
                    <input type="checkbox" name="businessEnquiries" />
                    <span className={styles.checkmark} />
                    Business Enquiries
                  </label>
                  <label>
                    <input type="checkbox" name="other" />
                    <span className={styles.checkmark} />
                    Other
                  </label>
                </div>
              </div>

              <button className={styles.getStartedBtn}>Get Started</button>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
