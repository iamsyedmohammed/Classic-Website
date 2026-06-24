import { z } from 'zod';

export const cateringFormSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters' }),
  phone: z.string().min(10, { message: 'Phone number must be at least 10 digits' }),
  email: z.string().email({ message: 'Please enter a valid email address' }),
  eventType: z.string().min(1, { message: 'Please select an event type' }),
  guestCount: z.number().min(10, { message: 'Minimum catering guest count is 10' }),
  eventDate: z.string().min(1, { message: 'Please select an event date' }),
  message: z.string().optional()
});

export type CateringFormData = z.infer<typeof cateringFormSchema>;

export const contactFormSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters' }),
  phone: z.string().min(10, { message: 'Phone number must be at least 10 digits' }),
  email: z.string().email({ message: 'Please enter a valid email address' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters' })
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
