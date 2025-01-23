import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { toast } from 'sonner';
import { z } from 'zod';

import ContactImage from '@/assets/contact-us/contact-us.svg';
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
  phone: z.string().regex(/^\d{10}$/, 'Phone number must be 10 digits.'),
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
    <section className="max-container py-20 xl:py-32" id="contact">
      <div className="flex items-center gap-16">
        <div className="w-full md:w-1/2">
          <h2 className="mb-2 text-4xl font-semibold">
            Contact Us <span className="text-gradient">Today</span>
          </h2>
          <p className="mb-10 text-gray-600 dark:text-gray-400">
            Fill out the form below and we’ll get back to you as soon as possible.
          </p>
          <form className="mx-auto flex max-w-4xl flex-col gap-6" onSubmit={handleSubmit(onSubmit)}>
            <div className="grid w-full gap-6 md:grid-cols-2">
              <div className="space-y-1">
                <Label htmlFor="name">
                  Full Name<span className="text-red-500">*</span>
                </Label>
                <Input id="name" placeholder="Full Name" type="text" {...register('name')} />
                {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>}
              </div>
              <div className="space-y-1">
                <Label htmlFor="email">
                  Email Address<span className="text-red-500">*</span>
                </Label>
                <Input id="email" placeholder="Email Address" type="email" {...register('email')} />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                )}
              </div>
            </div>

            <div className="grid w-full gap-6 md:grid-cols-2">
              <div className="space-y-1">
                <Label htmlFor="email">
                  Phone Number<span className="text-red-500">*</span>
                </Label>
                <Input placeholder="Phone Number" type="tel" {...register('phone')} />
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
                )}
              </div>
              <div className="space-y-1">
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
              </div>
            </div>

            <div className="grid w-full">
              <div className="space-y-1">
                <Label htmlFor="message">
                  Message<span className="text-red-500">*</span>
                </Label>
                <Textarea id="message" placeholder="Your Message" {...register('message')} />
              </div>
              {errors.message && (
                <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
              )}
            </div>

            <Button disabled={loading} size={'lg'} type="submit">
              {loading ? 'Sending...' : 'Send Message'}
            </Button>
          </form>
        </div>

        {/* Image Section */}
        <div className="hidden w-full md:block md:w-1/2">
          <img alt="Contact Illustration" className="w-full rounded-lg" src={ContactImage} />
        </div>
      </div>
    </section>
  );
};
