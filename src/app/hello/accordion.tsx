"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import React from "react";
import type { AccordionSection } from "@/types";

interface AccordionProps {
  sections: AccordionSection[];
  defaultOpenId?: string;
}

export default function AccordionEntry({
  sections,
  defaultOpenId,
}: AccordionProps) {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full"
      defaultValue={defaultOpenId}
    >
      {sections.map((section) => (
        <AccordionItem key={section.id} value={section.id}>
          <AccordionTrigger>{section.title}</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            {section.content}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
