import { motion } from 'framer-motion';
import { BarChart, Bot, Database, Workflow } from 'lucide-react';

import {
  GradientText,
  SectionDescription,
  SectionSubtitle,
  SectionTitle,
  SectionWrapper,
} from '@/components/PageItems';
// import { Button } from '@/components/ui/button';

interface ServiceProps {
  title: string;
  description: string;
  icon: JSX.Element;
}

const serviceList: Array<ServiceProps> = [
  {
    title: 'GenAI Consulting for Process Automation',
    description:
      'Optimize your business processes with our expert GenAI consulting services, focused on identifying and automating workflows.',
    icon: <Workflow className="size-6 text-brand" />,
  },
  {
    title: 'Data Solutions Provider',
    description:
      'Harness the power of data with our tailored data solutions, enabling better decision-making and business insights.',
    icon: <Database className="size-6 text-brand" />,
  },
  {
    title: 'AI/BI Solutions',
    description:
      'Leverage AI and BI technologies to enhance your business intelligence, improve analytics, and drive smarter decisions.',
    icon: <BarChart className="size-6 text-brand" />,
  },
  {
    title: 'Agentic AI Development',
    description:
      'Build AI-driven autonomous agents that intelligently adapt, automate decision-making, and optimize workflows in real-time.',
    icon: <Bot className="size-6 text-brand" />,
  },
];

export const Services = () => {
  return (
    <SectionWrapper className="pt-0" id="services">
      <motion.div
        animate={{ opacity: 1, y: 0 }}
        className="relative flex w-full flex-col space-y-10 overflow-hidden rounded-2xl border bg-background p-8 shadow-xl md:p-12"
        initial={{ opacity: 0, y: 30 }}
        transition={{ duration: 0.8 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <div>
          <div className="pattern-dots absolute left-0 top-0 size-full pattern-blue-500 pattern-bg-background pattern-opacity-5 pattern-size-6" />
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <SectionSubtitle>AI Solutions</SectionSubtitle>
            <SectionTitle>
              Your <GradientText>AI Journey Starts Here</GradientText>
            </SectionTitle>
            <SectionDescription>
              Empower your business with tailored AI solutions that drive efficiency, innovation,
              and continuous growth.
            </SectionDescription>
          </motion.div>
        </div>

        {/* Service List */}
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 gap-12 md:grid-cols-2 xl:grid-cols-4"
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delayChildren: 0.2, staggerChildren: 0.2 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          {serviceList.map(({ icon, title, description }: ServiceProps, index) => (
            <motion.div
              key={title}
              animate={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <div className="flex flex-col items-start justify-start gap-4 space-y-1">
                <div className="mt-1 rounded-full bg-brand/20 p-2">{icon}</div>
                <div>
                  <h3 className="text-brand dark:text-brand-100">{title}</h3>
                  <p className="text-md mt-2 text-muted-foreground">{description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Button */}
        {/* <motion.div
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <Button className="z-0 w-64 rounded-full">
            <a className="flex items-center justify-center gap-2" href={'#how-it-works'}>
              Discover How We Work
              <ArrowRight className="size-4" />
            </a>
          </Button>
        </motion.div> */}
      </motion.div>
    </SectionWrapper>
  );
};
