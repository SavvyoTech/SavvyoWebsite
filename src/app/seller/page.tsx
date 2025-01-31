"use client";

import {
  Step,
  StepContent,
  StepLabel,
  Stepper,
  Typography,
} from "@mui/material";
import styles from "./page.module.scss";
import PersonIcon from "@mui/icons-material/Person";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import { useRef, useState } from "react";
import { ExperienceForm } from "../components/seller/experience";
import { AboutForm } from "../components/seller/about";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import { TransactionForm } from "../components/seller/transaction";
import { StoreForm } from "../components/seller/store";
import Link from "next/link";
import Image from "next/image";
import useMediaQuery from "@mui/material/useMediaQuery";

const steps = [
  {
    label: "Your details",
    description: "Please provide your name and email",
    icon: <PersonIcon />,
  },
  {
    label: "Business Details",
    description: "Few important details",
    icon: <QuestionAnswerIcon />,
  },
  {
    label: "Transaction & GST ",
    description: "Transaction details",
    icon: <GroupAddIcon />,
  },
  {
    label: "Store setup ",
    description: "Info about your store",
    icon: <AutoAwesomeIcon />,
  },
];

const getActiveForm = (
  activeStep: number,
  handleNext: any,
  handleFormData: any
) => {
  switch (activeStep) {
    case 0:
      return (
        <AboutForm handleNext={handleNext} handleFormData={handleFormData} />
      );
    case 1:
      return (
        <ExperienceForm
          handleNext={handleNext}
          handleFormData={handleFormData}
        />
      );
    case 2:
      return (
        <TransactionForm
          handleNext={handleNext}
          handleFormData={handleFormData}
        />
      );
    case 3:
      return (
        <StoreForm handleNext={handleNext} handleFormData={handleFormData} />
      );
    default:
      return <></>;
  }
};

export default function SellerForm() {
  const sellerRef = useRef<HTMLDivElement>(null);
  const isSmallScreen = useMediaQuery(
    "(min-width: 320px) and (max-width: 480px)"
  );
  const isTabScreen = useMediaQuery(
    "(min-width: 768px) and (max-width: 1024px)"
  );
  const scrollToSellerForm = () => {
    if (sellerRef.current) {
      sellerRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({});

  const handleNext = () => {
    if (activeStep === steps.length - 1) {
      console.log("Form Data:", formData); // Log the accumulated form data
    } else {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleFormData = (data: any) => {
    setFormData((prevData) => ({ ...prevData, ...data }));
  };

  return (
    <main className={styles.main}>
      <div className={styles.becomeaseller}>
        <div className={styles.firstBoxBecomeASeller}>
          <div className={styles.featuresContainerLeft}>
            <div className={styles.featureTextContainer}>
              <div className={styles.featureSectionTitle}>
                Reach Millions of Customers Nationwide with SAVVYO&#39;s Zero
                Commission Model
              </div>
              <p className={styles.featureSectionDescription}>
                At SAVVYO, we are committed to helping our sellers succeed. Our
                platform offers unique benefits designed to maximize your
                profits and simplify your business operations.
              </p>

              {!isSmallScreen &&
                <div className={styles.featureSectionTextContainerButtons}>
                  <button
                    className={styles.featureSectionBecomeASellerButton}
                    onClick={scrollToSellerForm}
                  >
                    Become a seller
                  </button>
                  <button className={styles.featureSectionHowItWorksButton}>
                    <a href="#howitworks">How it works</a>{" "}
                  </button>
                </div>
              }
            </div>
          </div>
          <div className={styles.featureContainerRight}>
            <div className={styles.featuureSectionHeadingRight}>
              Why Sellers Love SAVVYO
            </div>
            <ul className={styles.featureSectionHeadingRightHeading}>
              <li className={styles.featureSectionRightLoveSavvyoList}>
                <span className={styles.featureSectionRightCheckbox}>
                  <Image
                    src="/icons/Check icon.svg"
                    alt=""
                    width={32}
                    height={32}
                  />
                </span>
                Lowest Shipping Costs
              </li>
              <li className={styles.featureSectionRightLoveSavvyoList}>
                <span className={styles.featureSectionRightCheckbox}>
                  <Image
                    src="/icons/Check icon.svg"
                    alt=""
                    width={32}
                    height={32}
                  />
                </span>
                Next Day Dispatch Program
              </li>
              <li className={styles.featureSectionRightLoveSavvyoList}>
                <span className={styles.featureSectionRightCheckbox}>
                  <Image
                    src="/icons/Check icon.svg"
                    alt=""
                    width={32}
                    height={32}
                  />
                </span>
                Advertising Tools
              </li>
              <li className={styles.featureSectionRightLoveSavvyoList}>
                <span className={styles.featureSectionRightCheckbox}>
                  <Image
                    src="/icons/Check icon.svg"
                    alt=""
                    width={32}
                    height={32}
                  />
                </span>
                Business Insights
              </li>
            </ul>
            {isSmallScreen &&
              <div className={styles.featureSectionTextContainerButtons}>
                <button
                  className={styles.featureSectionBecomeASellerButton}
                  onClick={scrollToSellerForm}
                >
                  Get Started
                </button>
                <button className={styles.featureSectionHowItWorksButton}>
                  <a href="#howitworks">How it works</a>{" "}
                </button>
              </div>
            }
          </div>
        </div>

        <div className={styles.contentMainImage}>
          {/* C:\Users\asus\Downloads\SavvyoWebsite-main (1)\SavvyoWebsite-main\public\images\Content.svg */}
          <Image
            src={isSmallScreen? "/images/become-a-seller-mobile.svg" : "/images/Content.svg"}
            alt="Contentimage"
            width={isSmallScreen ? 375 : 1200}
            height={isSmallScreen ? 272 : 450}
            layout="responsive"
          />
        </div>

        {/* grow section */}
        <section className={styles.growBusiness}>
          <div className={styles.growBusinessTitle}>
            Grow Your Business with SAVVYO
          </div>
          <p className={styles.growBusinessDescription}>
            Powerful, self-serve product and growth analytics to help you
            convert, engage, and retain more users. Trusted by over 4,000
            startups.
          </p>
        </section>
        <section className={styles.stepsContainer}>
          {/* <div className={styles.growBusinessBoxes}> */}
          <div className={styles.growBusinessBox}>
            <span className={styles.growBusinessBoxIcon}>
              <Image
                src="/icons/lowcosticon.svg"
                alt=""
                width={48}
                height={48}
              />
            </span>
            <div className={styles.growBoxTitle}>Lowest Shipping Costs</div>
            <p className={styles.growBoxDescription}>
              Reach customers across India with the most affordable delivery
              rates.
            </p>
          </div>

          <div className={styles.growBusinessBox}>
            <span className={styles.growBusinessBoxIcon}>
              <Image
                src="/icons/nexdaydispatchicon.svg"
                alt="nextdaydispatchicon"
                width={48}
                height={48}
              />
            </span>
            <div className={styles.growBoxTitle}>Next Day Dispatch</div>
            <p className={styles.growBoxDescription}>
              Join for higher visibility and personalized support from an
              account manager.
            </p>
          </div>

          <div className={styles.growBusinessBox}>
            <span className={styles.growBusinessBoxIcon}>
              <Image
                src="/icons/advertisingtoolicon.svg"
                alt=""
                width={48}
                height={48}
              />
            </span>
            <div className={styles.growBoxTitle}>Advertising Tools</div>
            <p className={styles.growBoxDescription}>
              Use SAVVYO Ads to boost your product visibility and sales.
              Increase your conversion by 2x.
            </p>
          </div>

          <div className={styles.growBusinessBox}>
            <span className={styles.growBusinessBoxIcon}>
              <Image
                src="/icons/buissnessinsighticon.svg"
                alt=""
                width={48}
                height={48}
              />
            </span>
            <div className={styles.growBoxTitle}>Business Insights</div>
            <p className={styles.growBoxDescription}>
              Leverage our product and price recommendations to stay ahead in
              the market.
            </p>
          </div>
        </section>

        {/* third section */}
        <section className={styles.thirdSection}>
          <div className={styles.thirdsectionLeft}>
            <div className={styles.ctaTitle}>
              Reach Millions of Customers Nationwide
            </div>
            <p className={styles.ctaDescription}>
              Join over 4,000+ sellers already growing with Savvyo.
            </p>
          </div>
          <div className={styles.ctaButtons}>
            {isSmallScreen ?
              <>
                <button
                  className={styles.getStartedButton}
                  onClick={scrollToSellerForm}
                >
                  Get Started
                </button>
                <button className={styles.whySavvyoButton}>
                  Why Savvyo?
                  {/* <Link href="/about"><Button>About Us</Button></Link> */}
                </button>
              </> :
              <>
                <button className={styles.whySavvyoButton}>
                  Why Savvyo?
                  {/* <Link href="/about"><Button>About Us</Button></Link> */}
                </button>
                <button
                  className={styles.getStartedButton}
                  onClick={scrollToSellerForm}
                >
                  Get Started
                </button>
              </>
            }
          </div>
        </section>

        {/* how it works */}
        <section id="howitworks" className={styles.howItWorks}>
          <div className={styles.howitworktitle}>How it works</div>
          <div className={styles.howitworkheading}>
            Keep 100% of your earnings with our zero commission policy
          </div>
          <div className={styles.howitworkdescription}>
            Powerful, self-serve product and growth analytics to help you
            convert, engage, and retain more users. Trusted by over 4,000
            startups.
          </div>
        </section>

        {/* create account flow */}
        <div className={styles.stepsContainer}>
          <div className={styles.stepcontainersinglebox}>
            <div className={styles.step}>
              <div className={styles.icon}>
                <Image
                  src="/icons/personicon.svg"
                  alt="personn icon"
                  width={48}
                  height={48}
                />
              </div>
              <div className={styles.stepDesc}>
                <div className={styles.title}>Create Account</div>
                <p className={styles.description}>
                  Provide your GSTIN (for GST sellers) or Enrolment ID / UIN (for
                  non-GST sellers) & Link your bank account.
                </p>
              </div>
            </div>
            {!isSmallScreen && !isTabScreen && <div className={styles.stepcontainerline}></div>}
          </div>

          <div className={styles.stepcontainersinglebox}>
            <div className={styles.step}>
              <div className={styles.icon}>
                <Image
                  src="/icons/listitemicon.svg"
                  alt="list item"
                  width={48}
                  height={48}
                />
              </div>
              <div className={styles.stepDesc}>
                <div className={styles.title}>List Products</div>
                <p className={styles.description}>
                  Add the products you want to sell in your seller dashboard.
                </p>
              </div>
            </div>
            {!isSmallScreen && !isTabScreen && <div className={styles.stepcontainerline}></div>}
          </div>

          <div className={styles.stepcontainersinglebox}>
            <div className={styles.step}>
              <div className={styles.icon}>
                <Image
                  src="/icons/getordericon.svg"
                  alt="person icon"
                  width={48}
                  height={48}
                />
              </div>
              <div className={styles.stepDesc}>
                <div className={styles.title}>Get Orders</div>
                <p className={styles.description}>
                  Start receiving orders from millions of SAVVYO users.
                </p>
              </div>
            </div>
            {!isSmallScreen && !isTabScreen && <div className={styles.stepcontainerline}></div>}
          </div>

          <div className={styles.stepcontainersinglebox}>
            <div className={styles.step}>
              <div className={styles.icon}>
                <Image
                  src="/icons/lowcosticon.svg"
                  alt="low cost icon"
                  width={48}
                  height={48}
                />
              </div>
              <div className={styles.stepDesc}>
                <div className={styles.title}>Lowest Cost Shipping</div>
                <p className={styles.description}>
                  Enjoy the lowest shipping costs across India.
                </p>
              </div>
            </div>
            {!isSmallScreen && !isTabScreen && <div className={styles.stepcontainerline}></div>}
          </div>

          <div className={styles.stepcontainersinglebox}>
            <div className={styles.step}>
              <div className={styles.icon}>
                <Image
                  src="/icons/receivepaymenticon.svg"
                  alt="receive payment icon"
                  width={48}
                  height={48}
                />
              </div>
              <div className={styles.stepDesc}>
                <div className={styles.title}>Receive Payments</div>
                <p className={styles.description}>
                  Payments are processed and deposited directly into your bank
                  account within 7 days of delivery.
                </p>
              </div>
            </div>
            {!isSmallScreen && !isTabScreen && <div className={styles.stepcontainerline}></div>}
          </div>
        </div>

        {/* fourth section */}
        <section className={styles.fourthSection}>
          <div className={styles.fourthSectionSection}>
            <div className={styles.fourthsectionTop}>
              <div className={styles.fourthSectionTitle}>
                SAVVYO Seller Support
              </div>
              <p className={styles.fourthSectionDescription}>
                Our dedicated support team is here to assist you at any time
              </p>
            </div>
            {isSmallScreen? 
              <div className={styles.fourthButtons}>
                <Link href="/about" className={styles.fourthSectionContactUs}>
                  Contact us
                </Link>
                <Link href="/about" className={styles.fourthSectionAboutUs}>
                  About us
                </Link>
              </div> :
              <div className={styles.fourthButtons}>
                <Link href="/about" className={styles.fourthSectionAboutUs}>
                  About us
                </Link>

                <Link href="/about" className={styles.fourthSectionContactUs}>
                  Contact us
                </Link>
              </div>
            }
          </div>
        </section>
      </div>

      <div id="becomeASeller" ref={sellerRef} className={styles.headBox}>
        <Typography typography={"h6"}>Start selling with us</Typography>
        <Typography typography={"h3"} className={styles.sellerFormHeading}>
          Join Our Vibrant Seller Community
        </Typography>
        <Typography typography={"body1"} className={styles.sellerFormDesc}>
          We&apos;re excited to welcome you to our platform where your business
          can thrive. {!isSmallScreen && "Please provide your details below to get started on your journey with us."}
        </Typography>
      </div>
      <div className={styles.formBox}>
        {!isSmallScreen &&
          <>
            <div className={styles.formProgress}>
              <Stepper activeStep={activeStep} orientation="vertical">
                {steps.map((step, index) => (
                  <Step key={step.label}>
                    <StepLabel icon={step.icon}>
                      <Typography typography={"h6"} className={styles.stepLabel}>
                        {step.label}
                      </Typography>
                    </StepLabel>
                    <StepContent>
                      <Typography className={styles.stepDesc}>
                        {step.description}
                      </Typography>
                    </StepContent>
                  </Step>
                ))}
              </Stepper>
            </div>
            <hr />
          </>}
        <div className={styles.activeForm}>
          {getActiveForm(activeStep, handleNext, handleFormData)}
        </div>
      </div>
    </main>
  );
}
