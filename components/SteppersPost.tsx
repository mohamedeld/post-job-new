"use client";

import { Box, Button, Step, StepLabel, Stepper, Typography } from "@mui/material";
import React, { useState } from "react";
import StepperContent from "./StepperContent";
import { FieldValues, UseFormHandleSubmit } from "react-hook-form";

const steps = ['Job Details', 'Screening Questions', 'Review & Publist'];

type StepperPostProps = {
  children:React.ReactNode;
  onSubmit:(data:any)=> void;
  handleSubmit:UseFormHandleSubmit<FieldValues, undefined>;
}

const SteppersPost = ({children,onSubmit,handleSubmit}:StepperPostProps) => {
  const [activeStep, setActiveStep] = useState(1);
  const [skipped, setSkipped] = useState(new Set<number>());

  const isStepOptional = (step: number) => {
    return step === 1;
  };

  const isStepSkipped = (step: number) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };
  return (
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={1} alternativeLabel>
        {steps.map((label) => (
          <Step key={label} sx={{
            '& .MuiSvgIcon-root.Mui-active': {
              color: '#185D43',
            },
            '& .MuiSvgIcon-root.Mui-completed': {
              color: '#185D43',
            },
          }}>
            <StepLabel sx={{
              
          '& .MuiStepLabel-label': {
            color: '#cccccc',
            fontWeight: 'bold',
          },
          '& .MuiStepLabel-label.Mui-active': {
            color: '#185D43',
              fontSize:'20px',
              fontWeight:'600'
          },
          '& .MuiStepLabel-label.Mui-completed': {
            color: '#185D43',
                fontSize:'20px',
                fontWeight:'600'
          },
        }}>{label}</StepLabel>
          </Step>
        ))}
      
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mt-6 px-5 py-2 border-[1px] border-solid border-[#D6DDEB]">
            <StepperContent title={steps[activeStep]} subTitle={"Add Screening questions to get 5 to 10x better results"}/>
            {children}
            </div>
            <Box sx={{ display: 'flex',gap:'2.2rem',justifyContent:'flex-end',alignItems:'center', flexDirection: 'row', pt: 2, }}>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{
                  background:'#fff',
                  border:'1px solid #D6DDEB',
                py:'0.8rem',
                px:'1.3rem',
                fontSize:'14px',
                fontWeight:'600',
                color:'#2EAE7D'
                }}
              >
                Back
              </Button>
              <Box sx={{  }} />
              {isStepOptional(activeStep) && (
                <Button sx={{
                  background:'#fff',
                  border:'1px solid #D6DDEB',
                py:'0.8rem',
                px:'1.3rem',
                fontSize:'14px',
                fontWeight:'600',
                color:'#2EAE7D'
                }} color="inherit" onClick={handleSkip} >
                  Save Later
                </Button>
              )}
              <Button sx={{
                background:'linear-gradient(#2EAE7D,#134834)',
                py:'0.8rem',
                px:'1.3rem',
                fontSize:'14px',
                fontWeight:'600',
                color:'#fff'
              }} onClick={handleNext} type="submit">
                {activeStep === steps.length - 1 ? 'Finish' : 'Save and Publish'}
              </Button>
            </Box>
          </form>
        </React.Fragment>
      )}
    </Box>
  )
}

export default SteppersPost