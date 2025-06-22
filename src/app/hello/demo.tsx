import type { AccordionSection } from "@/types";

export const demoSections: AccordionSection[] = [
  {
    id: "item-1",
    title: "Product Information",
    content: (
      <>
        <p>Our flagship product combines cutting-edge technology...</p>
        <p>Key features include advanced processing capabilities...</p>
      </>
    ),
  },
  {
    id: "item-2",
    title: "Shipping Details",
    content: (
      <>
        <p>We offer worldwide shipping through trusted courier partners...</p>
        <p>All orders are carefully packaged and fully insured...</p>
      </>
    ),
  },
  {
    id: "item-3",
    title: "Return Policy",
    content: (
      <>
        <p>We stand behind our products with a 30-day return policy...</p>
        <p>Our hassle-free return process includes free return shipping...</p>
      </>
    ),
  },
];
