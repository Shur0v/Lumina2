'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useState } from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Loader2 } from 'lucide-react';

const formSchema = z.object({
  firstName: z.string().min(2, 'First name is required'),
  lastName: z.string().min(2, 'Last name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Valid phone number is required'),
  notes: z.string().min(10, 'Please provide some details'),
  optIn: z.boolean().optional(),
});

type FormData = z.infer<typeof formSchema>;

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log('Form submitted:', data);
    setIsSubmitting(false);
    setIsSuccess(true);
    reset();
    setTimeout(() => setIsSuccess(false), 5000);
  };

  return (
    <section id="contact" className="bg-white py-24 px-6">
      <div className="mx-auto max-w-3xl">
        <div className="mb-16 text-center">
          <h2 className="font-serif text-4xl font-light tracking-tight text-stone-900 md:text-5xl">
            Let&apos;s Start a Conversation
          </h2>
          <p className="mt-4 text-stone-500">
            Tell us about your project and we&apos;ll get back to you within 24 hours.
          </p>
        </div>

        {isSuccess ? (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center justify-center rounded-xl border border-stone-100 bg-stone-50 p-12 text-center"
          >
            <CheckCircle2 className="mb-4 h-12 w-12 text-emerald-500" />
            <h3 className="text-xl font-medium text-stone-900">Message Sent Successfully</h3>
            <p className="mt-2 text-stone-500">Thank you for reaching out. We&apos;ll be in touch soon.</p>
            <button 
              onClick={() => setIsSuccess(false)}
              className="mt-8 text-sm font-medium text-stone-900 underline underline-offset-4"
            >
              Send another message
            </button>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-stone-500">
                  First Name *
                </label>
                <input
                  {...register('firstName')}
                  className={`w-full border-b-2 bg-transparent py-3 outline-none transition-colors ${
                    errors.firstName ? 'border-red-300' : 'border-stone-200 focus:border-stone-900'
                  }`}
                  placeholder="Jane"
                />
                {errors.firstName && <p className="text-xs text-red-500">{errors.firstName.message}</p>}
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-stone-500">
                  Last Name *
                </label>
                <input
                  {...register('lastName')}
                  className={`w-full border-b-2 bg-transparent py-3 outline-none transition-colors ${
                    errors.lastName ? 'border-red-300' : 'border-stone-200 focus:border-stone-900'
                  }`}
                  placeholder="Doe"
                />
                {errors.lastName && <p className="text-xs text-red-500">{errors.lastName.message}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-stone-500">
                  Email Address *
                </label>
                <input
                  {...register('email')}
                  type="email"
                  className={`w-full border-b-2 bg-transparent py-3 outline-none transition-colors ${
                    errors.email ? 'border-red-300' : 'border-stone-200 focus:border-stone-900'
                  }`}
                  placeholder="jane@example.com"
                />
                {errors.email && <p className="text-xs text-red-500">{errors.email.message}</p>}
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-stone-500">
                  Phone Number *
                </label>
                <input
                  {...register('phone')}
                  className={`w-full border-b-2 bg-transparent py-3 outline-none transition-colors ${
                    errors.phone ? 'border-red-300' : 'border-stone-200 focus:border-stone-900'
                  }`}
                  placeholder="+1 (555) 000-0000"
                />
                {errors.phone && <p className="text-xs text-red-500">{errors.phone.message}</p>}
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-stone-500">
                Project Details *
              </label>
              <textarea
                {...register('notes')}
                rows={4}
                className={`w-full border-b-2 bg-transparent py-3 outline-none transition-colors resize-none ${
                  errors.notes ? 'border-red-300' : 'border-stone-200 focus:border-stone-900'
                }`}
                placeholder="Tell us about your vision..."
              />
              {errors.notes && <p className="text-xs text-red-500">{errors.notes.message}</p>}
            </div>

            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                {...register('optIn')}
                id="optIn"
                className="h-4 w-4 rounded border-stone-300 text-stone-900 focus:ring-stone-900"
              />
              <label htmlFor="optIn" className="text-sm text-stone-500">
                Subscribe to our monthly design insights newsletter (Optional)
              </label>
            </div>

            <div className="pt-6">
              <button
                type="submit"
                disabled={isSubmitting}
                className="group relative w-full overflow-hidden bg-stone-900 py-5 text-sm font-bold uppercase tracking-[0.2em] text-white transition-all hover:bg-stone-800 disabled:opacity-70"
              >
                <span className={`flex items-center justify-center gap-2 ${isSubmitting ? 'opacity-0' : 'opacity-100'}`}>
                  Send Message
                </span>
                {isSubmitting && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Loader2 className="h-5 w-5 animate-spin" />
                  </div>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
