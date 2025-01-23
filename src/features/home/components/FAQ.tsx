import { SectionWrapper } from '@/components/PageItems';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: Array<FAQProps> = [
  {
    question: 'What services does Fact-Digi offer?',
    answer:
      'Fact-Digi provides business intelligence (BI), AI solutions, data analytics, and mobile & web application development to help companies leverage technology for growth.',
    value: 'item-1',
  },
  {
    question: "How can Fact-Digi's AI solutions help my business?",
    answer:
      'Our AI solutions use advanced machine learning models to improve decision-making, automate processes, and uncover insights from your data. We tailor solutions to specific business needs to optimize operations.',
    value: 'item-2',
  },
  {
    question: 'Do you offer customized web and mobile app development?',
    answer:
      'Yes, we provide end-to-end development for web and mobile applications, including design, development, testing, and deployment. We focus on building scalable, user-friendly apps that align with your business goals.',
    value: 'item-3',
  },
  {
    question: 'What is business intelligence (BI) and how does it benefit my company?',
    answer:
      'Business Intelligence (BI) refers to the tools and strategies used to analyze and interpret business data. With BI, Fact-Digi helps businesses gain insights, make data-driven decisions, and identify growth opportunities.',
    value: 'item-4',
  },
  {
    question: 'Can Fact-Digi help me with data analytics?',
    answer:
      'Absolutely! We provide comprehensive data analytics services to help businesses gather insights from their data, optimize operations, and improve overall performance. Our team uses cutting-edge techniques to extract actionable insights.',
    value: 'item-5',
  },
];

export const FAQ = () => {
  return (
    <SectionWrapper className="w-full" id="faq">
      <h2 className="mb-4 text-3xl font-bold md:text-4xl">
        Frequently Asked <span className="text-gradient">Questions</span>
      </h2>

      <Accordion collapsible className="AccordionRoot w-full" type="single">
        {FAQList.map(({ question, answer, value }: FAQProps) => (
          <AccordionItem key={value} value={value}>
            <AccordionTrigger className="text-left">{question}</AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </SectionWrapper>
  );
};
