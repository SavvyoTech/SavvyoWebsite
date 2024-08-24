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
  // const isSmallScreen = useMediaQuery(
  //   "(min-width: 320px) and (max-width: 480px)"
  // );
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
                Reach Millions of Customers Nationwide with SAVVYO's Zero
                Commission Model
              </div>
              <p className={styles.featureSectionDescription}>
                At SAVVYO, we are committed to helping our sellers succeed. Our
                platform offers unique benefits designed to maximize your
                profits and simplify your business operations.
              </p>
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
            </div>
          </div>
          <div className={styles.featureContainerRight}>
            <div className={styles.featuureSectionHeadingRight}>
              Why Sellers Love SAVVYO
            </div>
            <ul className={styles.featuureSectionHeadingRightHeading}>
              <li className={styles.featureSectionRightLoveSavvyoList}>
                <span className={styles.featureSectionRightCheckbox}>
                  <img src="/icons/Check icon.svg" alt="" />
                </span>
                Lowest Shipping Costs
              </li>
              <li className={styles.featureSectionRightLoveSavvyoList}>
                <span className={styles.featureSectionRightCheckbox}>
                  <img src="/icons/Check icon.svg" alt="" />
                </span>
                Lowest Shipping Costs
              </li>
              <li className={styles.featureSectionRightLoveSavvyoList}>
                <span className={styles.featureSectionRightCheckbox}>
                  <img src="/icons/Check icon.svg" alt="" />
                </span>
                Lowest Shipping Costs
              </li>
              <li className={styles.featureSectionRightLoveSavvyoList}>
                <span className={styles.featureSectionRightCheckbox}>
                  <img src="/icons/Check icon.svg" alt="" />
                </span>
                Lowest Shipping Costs
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.contentMainImage}>
          {/* C:\Users\asus\Downloads\SavvyoWebsite-main (1)\SavvyoWebsite-main\public\images\Content.svg */}
          <img src="/images/Content.svg" alt="Contentimage" />
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
              <img src="/icons/lowcosticon.svg" alt="" />
            </span>
            <div className={styles.growBoxTitle}>Lowest Shipping Costs</div>
            <p className={styles.growBoxDescription}>
              Reach customers across India with the most affordable delivery
              rates.
            </p>
          </div>

          <div className={styles.growBusinessBox}>
            <span className={styles.growBusinessBoxIcon}>
              <img
                src="/icons/nexdaydispatchicon.svg"
                alt="nextdaydispatchicon"
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
              <img src="/icons/advertisingtoolicon.svg" alt="" />
            </span>
            <div className={styles.growBoxTitle}>Advertising Tools</div>
            <p className={styles.growBoxDescription}>
              Use SAVVYO Ads to boost your product visibility and sales.
              Increase your conversion by 2x.
            </p>
          </div>

          <div className={styles.growBusinessBox}>
            <span className={styles.growBusinessBoxIcon}>
              <img src="/icons/buissnessinsighticon.svg" alt="" />
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
          </div>
        </section>

        {/* how it works */}
        <section id="howitworks">
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
                <img src="/icons/personicon.svg" alt="personn icon" />
              </div>
              <div className={styles.title}>Create Account</div>
              <p className={styles.description}>
                Provide your GSTIN (for GST sellers) or Enrolment ID / UIN (for
                non-GST sellers) & Link your bank account.
              </p>
            </div>
            <div className={styles.stepcontainerline}></div>
          </div>

          <div className={styles.stepcontainersinglebox}>
            <div className={styles.step}>
              <div className={styles.icon}>
                <img src="/icons/listitemicon.svg" alt="list item" />
              </div>
              <div className={styles.title}>List Products</div>
              <p className={styles.description}>
                Add the products you want to sell in your seller dashboard.
              </p>
            </div>
            <div className={styles.stepcontainerline}></div>
          </div>

          <div className={styles.stepcontainersinglebox}>
            <div className={styles.step}>
              <div className={styles.icon}>
                <img src="/icons/getordericon.svg" alt="person icon" />
              </div>
              <div className={styles.title}>Get Orders</div>
              <p className={styles.description}>
                Start receiving orders from millions of SAVVYO users.
              </p>
            </div>
            <div className={styles.stepcontainerline}></div>
          </div>

          <div className={styles.stepcontainersinglebox}>
            <div className={styles.step}>
              <div className={styles.icon}>
                <img src="/icons/lowcosticon.svg" alt="low cost icon" />
              </div>
              <div className={styles.title}>Lowest Cost Shipping</div>
              <p className={styles.description}>
                Enjoy the lowest shipping costs across India.
              </p>
            </div>
            <div className={styles.stepcontainerline}></div>
          </div>

          <div className={styles.stepcontainersinglebox}>
            <div className={styles.step}>
              <div className={styles.icon}>
                <img
                  src="/icons/receivepaymenticon.svg"
                  alt="receive payment icon"
                />
              </div>
              <div className={styles.title}>Receive Payments</div>
              <p className={styles.description}>
                Payments are processed and deposited directly into your bank
                account within 7 days of delivery.
              </p>
            </div>
            <div className={styles.stepcontainerline}></div>
          </div>
        </div>

        {/* fourth section */}
        <section className={styles.fourthSection}>
          <div className={styles.fourthsectionTop}>
            <div className={styles.fourthSectionTitle}>
              SAVVYO Seller Support
            </div>
            <p className={styles.fourthSectionDescription}>
              Our dedicated support team is here to assist you at any time
            </p>
          </div>
          <div className={styles.fourthButtons}>
            <Link href="/about" className={styles.fourthSectionAboutUs}>
              About us
            </Link>

            <Link href="/about" className={styles.fourthSectionContactUs}>
              Contact us
            </Link>
          </div>
        </section>
      </div>

      <div id="becomeASeller" ref={sellerRef} className={styles.headBox}>
        <Typography typography={"h6"}>Start selling with us</Typography>
        <Typography typography={"h3"}>
          Join Our Vibrant Seller Community
        </Typography>
        <Typography typography={"body1"}>
          We&apos;re excited to welcome you to our platform where your business
          can thrive. Please provide your details below to get started on your
          journey with us.
        </Typography>
      </div>
      <div className={styles.formBox}>
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
        <div className={styles.activeForm}>
          {getActiveForm(activeStep, handleNext, handleFormData)}
        </div>
      </div>
    </main>
  );
}
