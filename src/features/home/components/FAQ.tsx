import { motion } from 'framer-motion';

import {
  GradientText,
  SectionDescription,
  SectionSubtitle,
  SectionTitle,
  SectionWrapper,
} from '@/components/PageItems';
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
    question: 'What is Fact-Digi’s expertise?',
    answer:
      'Fact-Digi specializes in Agentic AI solutions, business intelligence (BI), AI-driven automation, and data analytics to help businesses optimize workflows and make data-driven decisions.',
    value: 'item-1',
  },
  {
    question: 'What are Agentic AI solutions?',
    answer:
      'Agentic AI solutions involve AI-driven autonomous agents capable of reasoning, adapting, and making decisions without constant human intervention. These agents optimize business operations, automate tasks, and drive efficiency.',
    value: 'item-2',
  },
  {
    question: 'How can AI-driven automation help my business?',
    answer:
      'AI-driven automation streamlines repetitive tasks, enhances decision-making with real-time insights, and reduces operational costs. Our solutions integrate AI agents to optimize business processes and boost productivity.',
    value: 'item-3',
  },
  {
    question: 'What industries benefit from AI-driven solutions?',
    answer:
      'Our AI-powered solutions benefit industries such as finance, healthcare, logistics, e-commerce, and manufacturing by automating workflows, improving predictive analytics, and enhancing customer experiences.',
    value: 'item-4',
  },
  {
    question: 'How does Fact-Digi approach AI implementation?',
    answer:
      'We start by analyzing your business needs, identifying automation opportunities, and designing AI agents tailored to your workflows. Our solutions seamlessly integrate into your existing systems to maximize efficiency.',
    value: 'item-5',
  },
];

export const FAQ = () => {
  return (
    <SectionWrapper className="space-y-10" id="faq">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        transition={{ duration: 0.6 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <SectionSubtitle>Get to Know Us Better</SectionSubtitle>
        <SectionTitle>
          Frequently Asked <GradientText>Questions</GradientText>
        </SectionTitle>
        <SectionDescription>
          Learn how our Agentic AI solutions, AI-driven automation, and data intelligence can
          transform your business.
        </SectionDescription>
      </motion.div>

      <Accordion collapsible className="AccordionRoot w-full" type="single">
        {FAQList.map(({ question, answer, value }: FAQProps, index) => (
          <AccordionItem key={value} value={value}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <AccordionTrigger className="text-left">{question}</AccordionTrigger>
            </motion.div>

            <motion.div
              animate={{ opacity: 1, height: 'auto' }}
              initial={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4 }}
            >
              <AccordionContent>{answer}</AccordionContent>
            </motion.div>
          </AccordionItem>
        ))}
      </Accordion>
    </SectionWrapper>
  );
};
