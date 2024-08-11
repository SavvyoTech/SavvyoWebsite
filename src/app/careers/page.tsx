'use client';

import {  Step, StepContent, StepLabel, Stepper, Typography } from "@mui/material";
import styles from "./page.module.scss";
import PersonIcon from '@mui/icons-material/Person';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import { useState } from "react";
import { ExperienceForm } from "../components/career/experience";
import { AboutForm } from "../components/career/about";
import { MiscellaneousForm } from "../components/career/miscellaneous";

const steps = [
  {
    label: 'Your details',
    description: 'Please provide your name and email',
    icon: <PersonIcon />,
  },
  {
    label: 'Help us understand you',
    description: 'Answer few question',
    icon: <QuestionAnswerIcon />,
  },
  {
    label: 'Almost done',
    description: 'Just some final questions',
    icon: <GroupAddIcon />,
  },
];

const getActiveForm = (
  activeStep: number, 
  handleNext: any, 
  handleFormData: any
) => {
  switch (activeStep) {
    case 0:
      return <AboutForm handleNext={handleNext} handleFormData={handleFormData}/>;
    case 1:
      return <ExperienceForm handleNext={handleNext} handleFormData={handleFormData} />;
    case 2:
      return <MiscellaneousForm />;
    default:
      return <></>;
  }
};

export default function CareersPage() {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({});

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleFormData = (data: any) => {
    setFormData((prevData) => ({...prevData, ...data}));
  };

  return (
    <main className={styles.main}>
      <div className={styles.headBox}>
        <Typography typography={"h6"}>We&apos;re hiring</Typography>
        <Typography typography={"h3"}>We&apos;re looking for the best</Typography>
        <Typography typography={"body1"}>We&apos;re a small team that loves to create great experiences and make meaningful connections. We&apos;d love to hear from you, Please fill out this form.</Typography>
      </div>
      <div className={styles.formBox}>
        <div className={styles.formProgress}>
          <Stepper activeStep={activeStep} orientation="vertical">
            {steps.map((step, index) => (
              <Step key={step.label}>
                <StepLabel 
                  // StepIconComponent={step.icon}
                >
                    <Typography typography={"h6"}>{step.label}</Typography>
                </StepLabel>
                <StepContent>
                  <Typography>{step.description}</Typography>
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
