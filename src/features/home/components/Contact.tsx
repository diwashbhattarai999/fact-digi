import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { motion } from 'framer-motion';
import { toast } from 'sonner';
import { z } from 'zod';

import ContactImage from '@/assets/contact-us/contact-us-2.svg';
import {
  GradientText,
  SectionDescription,
  SectionSubtitle,
  SectionTitle,
  SectionWrapper,
} from '@/components/PageItems';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import emailjs from '@emailjs/browser';
import { zodResolver } from '@hookform/resolvers/zod';

// Define schema using Zod
const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters long.'),
  email: z.string().email('Invalid email address.'),
  phone: z.string().min(1, 'Phone number is required.'),
  company: z.string().min(2, 'Company name must be at least 2 characters long.'),
  message: z.string().min(10, 'Message must be at least 10 characters long.'),
});

// TypeScript type for the form data
type ContactFormData = z.infer<typeof contactSchema>;

export const Contact = () => {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    mode: 'all',
  });

  const onSubmit = async (data: ContactFormData) => {
    setLoading(true);

    // const serviceID = import.meta.env.EMAILJS_SEVICE_ID;
    // const templateID = import.meta.env.EMAILJS_TEMPLATE_ID;
    // const publicKey = import.meta.env.EMAILJS_USER_ID;

    const serviceID = 'service_emlmnvm';
    const templateID = 'template_t2600cs';
    const publicKey = 'FX6NjO6LjvXvZSF_3';

    try {
      await emailjs.send(serviceID, templateID, data, publicKey);
      toast.success('Message sent successfully!');
      reset(); // Clear form after successful submission
    } catch (error) {
      console.error('Failed to send email:', error);
      toast.error('Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <SectionWrapper id="contact">
      <div className="flex w-full flex-col items-center justify-start gap-16 lg:flex-row">
        {/* Left Form Section */}
        <div className="w-full space-y-16 lg:flex-1">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <SectionSubtitle>Get in Touch with Us</SectionSubtitle>
            <SectionTitle>
              Contact Us <GradientText>Today</GradientText>
            </SectionTitle>
            <SectionDescription>
              Fill out the form below and we’ll get back to you as soon as possible. Alternatively,
              you can reach us directly at{' '}
              <a
                className="font-medium text-brand hover:underline dark:text-brand-100"
                href="mailto:contact@factdigi.com"
              >
                contact@factdigi.com
              </a>
              .
            </SectionDescription>
          </motion.div>

          <motion.form
            animate={{ opacity: 1 }}
            className="mx-auto flex max-w-4xl flex-col gap-6"
            initial={{ opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="grid w-full gap-6 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              <motion.div
                className="space-y-1"
                initial={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5 }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                <Label htmlFor="name">
                  Full Name<span className="text-red-500">*</span>
                </Label>
                <Input id="name" placeholder="Full Name" type="text" {...register('name')} />
                {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>}
              </motion.div>

              <motion.div
                className="space-y-1"
                initial={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                <Label htmlFor="email">
                  Email Address<span className="text-red-500">*</span>
                </Label>
                <Input id="email" placeholder="Email Address" type="email" {...register('email')} />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                )}
              </motion.div>
            </div>

            <div className="grid w-full gap-6 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              <motion.div
                className="space-y-1"
                initial={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                <Label htmlFor="phone">
                  Phone Number<span className="text-red-500">*</span>
                </Label>
                <Input placeholder="Phone Number" type="tel" {...register('phone')} />
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
                )}
              </motion.div>

              <motion.div
                className="space-y-1"
                initial={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                <Label htmlFor="company">
                  Company Name<span className="text-red-500">*</span>
                </Label>
                <Input
                  id="company"
                  placeholder="Company Name"
                  type="text"
                  {...register('company')}
                />
                {errors.company && (
                  <p className="mt-1 text-sm text-red-600">{errors.company.message}</p>
                )}
              </motion.div>
            </div>

            <div className="grid w-full">
              <motion.div
                className="space-y-1"
                initial={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                <Label htmlFor="message">
                  Message<span className="text-red-500">*</span>
                </Label>
                <Textarea id="message" placeholder="Your Message" {...register('message')} />
              </motion.div>
              {errors.message && (
                <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
              )}
            </div>

            <motion.div
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Button disabled={loading} size={'lg'} type="submit">
                {loading ? 'Sending...' : 'Send Message'}
              </Button>
            </motion.div>
          </motion.form>
        </div>
        {/* Image Section */}
        <div className="hidden w-1/2 lg:block">
          <motion.img
            alt="Contact Illustration"
            className="w-full rounded-lg"
            initial={{ opacity: 0 }}
            src={ContactImage}
            transition={{ duration: 0.6 }}
            whileInView={{ opacity: 1 }}
          />
        </div>
      </div>
    </SectionWrapper>
  );
};
