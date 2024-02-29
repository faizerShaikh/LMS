"use client"
import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { FaqInterface } from "interfaces/faq";
import { CaretDown } from "@carbon/icons-react";

export interface FAQProps {
  specialization: FaqInterface;
}

export function FAQ({ specialization }: FAQProps) {
  const [expanded, setExpanded] = useState<string | false>(false);


  const handleChange = (panel: string) => (
    event: React.SyntheticEvent,
    isExpanded: boolean
  )=> {
    setExpanded(isExpanded ? panel : false);
  };
  

  return (
    <div className="w-[48%] mb-4">
      <Accordion
        expanded={expanded === specialization.faqTopic.topic}
        onChange={handleChange(specialization.faqTopic.topic)}
        className="text-white rounded-md"
      >
        <AccordionSummary
        expandIcon={<CaretDown className="text-white"/>}
          aria-controls={`${specialization.faqTopic.topic}-content`}
          id={`${specialization.faqTopic.topic}-header`}
          className="bg-blue-900 rounded-md"
        >
          {specialization.faqTopic.topic}
        </AccordionSummary>
        <AccordionDetails className="text-black">
          {specialization.faqTopic.answer}
        </AccordionDetails>
      </Accordion>
    </div>
  );
}




