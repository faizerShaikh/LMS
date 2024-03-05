"use client"
import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { FaqInterface, Topics } from "interfaces/faq";
import { CaretDown } from "@carbon/icons-react";

export interface FAQProps {
  specialization: Topics;
}

export function FAQ({ specialization }: FAQProps) {
  const [expanded, setExpanded] = useState<string | false>(false);


  const handleChange = (panel: string) => (
    event: React.SyntheticEvent,
    isExpanded: boolean
  )=> {
    setExpanded(isExpanded ? panel : false);
  };
  
  console.log(specialization, "<========================== data")

  return (
    <div className="w-full mb-4 ">
      <Accordion
        expanded={expanded === specialization.topic}
        onChange={handleChange(specialization.topic)}
        className="text-white rounded-md"
      >
        <AccordionSummary
        expandIcon={<CaretDown className="text-white"/>}
          aria-controls={`${specialization.topic}-content`}
          id={`${specialization.topic}-header`}
          className="bg-blue-900 rounded-md"
        >
          {specialization.topic}
        </AccordionSummary>
        <AccordionDetails className="text-black">
          {specialization.answer}
        </AccordionDetails>
      </Accordion>
      
    </div>

    
  );
}




