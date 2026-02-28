'use client';

import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Lumina transformed our digital presence from a simple website into a powerful growth engine. Their strategic approach to design is unparalleled.",
    author: "Sarah Jenkins",
    role: "CEO at Aetheria",
    company: "Aetheria"
  },
  {
    quote: "The split hero design they implemented for our landing page increased our conversion rate by 40%. They truly understand user psychology.",
    author: "Marcus Thorne",
    role: "Marketing Director",
    company: "Kinetics"
  },
  {
    quote: "Working with Lumina felt like having an in-house design team. They are responsive, creative, and deeply committed to excellence.",
    author: "Elena Rodriguez",
    role: "Founder",
    company: "Vivid Mobile"
  }
];

export default function Testimonials() {
  return (
    <section className="bg-stone-900 py-32 px-6 text-stone-100 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <div className="mb-20 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-stone-500">
            Client Stories
          </span>
          <h2 className="mt-6 font-serif text-4xl font-light tracking-tight md:text-6xl">
            Trusted by industry leaders.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.author}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative flex flex-col justify-between border border-stone-800 p-10 transition-colors hover:border-stone-700"
            >
              <Quote className="mb-8 h-8 w-8 text-stone-700" />
              
              <p className="font-serif text-xl font-light leading-relaxed text-stone-300 italic">
                &quot;{t.quote}&quot;
              </p>
              
              <div className="mt-12">
                <p className="font-bold uppercase tracking-widest text-sm text-stone-100">
                  {t.author}
                </p>
                <p className="mt-1 text-xs text-stone-500 uppercase tracking-widest">
                  {t.role}, {t.company}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
