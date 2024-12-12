import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "What services does Fact-Digi offer?",
    answer:
      "Fact-Digi provides business intelligence (BI), AI solutions, data analytics, and mobile & web application development to help companies leverage technology for growth.",
    value: "item-1",
  },
  {
    question: "How can Fact-Digi's AI solutions help my business?",
    answer:
      "Our AI solutions use advanced machine learning models to improve decision-making, automate processes, and uncover insights from your data. We tailor solutions to specific business needs to optimize operations.",
    value: "item-2",
  },
  {
    question: "Do you offer customized web and mobile app development?",
    answer:
      "Yes, we provide end-to-end development for web and mobile applications, including design, development, testing, and deployment. We focus on building scalable, user-friendly apps that align with your business goals.",
    value: "item-3",
  },
  {
    question:
      "What is business intelligence (BI) and how does it benefit my company?",
    answer:
      "Business Intelligence (BI) refers to the tools and strategies used to analyze and interpret business data. With BI, Fact-Digi helps businesses gain insights, make data-driven decisions, and identify growth opportunities.",
    value: "item-4",
  },
  {
    question: "Can Fact-Digi help me with data analytics?",
    answer:
      "Absolutely! We provide comprehensive data analytics services to help businesses gather insights from their data, optimize operations, and improve overall performance. Our team uses cutting-edge techniques to extract actionable insights.",
    value: "item-5",
  },
];

export const FAQ = () => {
  return (
    <section id="faq" className="container py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Frequently Asked{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Questions
        </span>
      </h2>

      <Accordion type="single" collapsible className="w-full AccordionRoot">
        {FAQList.map(({ question, answer, value }: FAQProps) => (
          <AccordionItem key={value} value={value}>
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <h3 className="font-medium mt-4">
        Still have questions?{" "}
        <a
          rel="noreferrer noopener"
          href="#"
          className="text-primary transition-all border-primary hover:border-b-2"
        >
          Contact us
        </a>
      </h3>
    </section>
  );
};