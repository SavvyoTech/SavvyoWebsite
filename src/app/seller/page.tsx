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
import { useState } from "react";
import { ExperienceForm } from "../components/seller/experience";
import { AboutForm } from "../components/seller/about";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import { TransactionForm } from "../components/seller/transaction";
import { StoreForm } from "../components/seller/store";

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
      <div className={styles.headBox}>
        <Typography typography={"h6"}>Start selling with us</Typography>
        <Typography typography={"h3"}>
          Join Our Vibrant Seller Community
        </Typography>
        <Typography typography={"body1"}>
          We're excited to welcome you to our platform where your business can
          thrive. Please provide your details below to get started on your
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
