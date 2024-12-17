import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import emailjs from "emailjs-com";
import { useState } from "react";
import { Label } from "@/components/ui/label";

// Define schema using Zod
const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters long."),
  email: z.string().email("Invalid email address."),
  phone: z.string().regex(/^\d{10}$/, "Phone number must be 10 digits."),
  company: z
    .string()
    .min(2, "Company name must be at least 2 characters long."),
  message: z.string().min(10, "Message must be at least 10 characters long."),
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
    mode: "all",
  });

  const onSubmit = async (data: ContactFormData) => {
    setLoading(true);

    const serviceID = "service_emlmnvm";
    const templateID = "template_t2600cs";
    const publicKey = "FX6NjO6LjvXvZSF_3";

    try {
      await emailjs.send(serviceID, templateID, data, publicKey);
      toast.success("Message sent successfully!");
      reset(); // Clear form after successful submission
    } catch (error) {
      console.error("Failed to send email:", error);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="container py-20 xl:py-32 mx-auto px-4">
      <h2 className="text-3xl font-semibold mb-6 text-center">
        Ready to Automate?
      </h2>
      <p className="text-lg mb-8 text-center text-gray-600 dark:text-gray-400">
        Fill out the form below and we’ll get back to you as soon as possible.
      </p>
      <form
        className="flex flex-col gap-6 max-w-4xl mx-auto"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="grid md:grid-cols-2 gap-6 w-full">
          <div className="space-y-1">
            <Label htmlFor="name">
              Full Name<span className="text-red-500">*</span>
            </Label>
            <Input
              id="name"
              type="text"
              placeholder="Full Name"
              {...register("name")}
            />
            {errors.name && (
              <p className="text-sm text-red-600 mt-1">{errors.name.message}</p>
            )}
          </div>
          <div className="space-y-1">
            <Label htmlFor="email">
              Email Address<span className="text-red-500">*</span>
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="Email Address"
              {...register("email")}
            />
            {errors.email && (
              <p className="text-sm text-red-600 mt-1">
                {errors.email.message}
              </p>
            )}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 w-full">
          <div className="space-y-1">
            <Label htmlFor="email">
              Phone Number<span className="text-red-500">*</span>
            </Label>
            <Input
              type="tel"
              placeholder="Phone Number"
              {...register("phone")}
            />
            {errors.phone && (
              <p className="text-sm text-red-600 mt-1">
                {errors.phone.message}
              </p>
            )}
          </div>
          <div className="space-y-1">
            <Label htmlFor="company">
              Company Name<span className="text-red-500">*</span>
            </Label>
            <Input
              id="company"
              type="text"
              placeholder="Company Name"
              {...register("company")}
            />
            {errors.company && (
              <p className="text-sm text-red-600 mt-1">
                {errors.company.message}
              </p>
            )}
          </div>
        </div>

        <div className="grid w-full">
          <div className="space-y-1">
            <Label htmlFor="message">
              Message<span className="text-red-500">*</span>
            </Label>
            <Textarea
              id="message"
              placeholder="Your Message"
              {...register("message")}
              className="bg-muted/50 dark:bg-muted/80 focus:outline-none focus:ring-2 focus:ring-primary transition duration-300 col-span-full"
            />
          </div>
          {errors.message && (
            <p className="text-sm text-red-600 mt-1">
              {errors.message.message}
            </p>
          )}
        </div>

        <Button type="submit" size={"lg"} disabled={loading}>
          {loading ? "Sending..." : "Send Message"}
        </Button>
      </form>
    </section>
  );
};
