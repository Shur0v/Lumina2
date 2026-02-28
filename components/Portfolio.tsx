'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const projects = [
  {
    title: "Aetheria",
    category: "Brand Identity",
    image: "https://images.unsplash.com/photo-1523726491678-bf852e717f6a?auto=format&fit=crop&q=80&w=2070",
    year: "2024"
  },
  {
    title: "Kinetics",
    category: "Web Experience",
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=1964",
    year: "2023"
  },
  {
    title: "Monolith",
    category: "Digital Strategy",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2070",
    year: "2024"
  },
  {
    title: "Vivid",
    category: "Mobile App",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80&w=1974",
    year: "2023"
  }
];

export default function Portfolio() {
  return (
    <section id="work" className="bg-white py-32 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-20 flex flex-col items-end justify-between gap-8 md:flex-row">
          <div className="max-w-xl">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-stone-400">
              Selected Work
            </span>
            <h2 className="mt-6 font-serif text-4xl font-light tracking-tight text-stone-900 md:text-6xl">
              Crafting digital excellence through purposeful design.
            </h2>
          </div>
          <button className="group flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-stone-900">
            View All Projects <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-stone-100">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-stone-900/0 transition-colors duration-500 group-hover:bg-stone-900/20" />
              </div>
              
              <div className="mt-8 flex items-center justify-between">
                <div>
                  <h3 className="font-serif text-2xl font-light text-stone-900">
                    {project.title}
                  </h3>
                  <p className="mt-1 text-sm text-stone-400">
                    {project.category} — {project.year}
                  </p>
                </div>
                <div className="h-px w-12 bg-stone-200 transition-all duration-500 group-hover:w-24 group-hover:bg-stone-900" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
