'use client';

import { motion } from 'motion/react';
import { 
  Layers, 
  Monitor, 
  Smartphone, 
  Search, 
  PenTool, 
  BarChart,
  ArrowUpRight
} from 'lucide-react';

const services = [
  {
    title: "Brand Identity",
    description: "We define the visual and verbal language of your brand, creating a cohesive identity that stands out in a crowded marketplace.",
    icon: PenTool,
    tags: ["Logo Design", "Typography", "Brand Guidelines"]
  },
  {
    title: "Web Experience",
    description: "High-performance websites designed with a focus on user experience, accessibility, and conversion optimization.",
    icon: Monitor,
    tags: ["Next.js", "E-commerce", "Web Apps"]
  },
  {
    title: "Mobile Design",
    description: "Seamless mobile experiences that feel native and intuitive, ensuring your brand is accessible on every device.",
    icon: Smartphone,
    tags: ["iOS", "Android", "Responsive Design"]
  },
  {
    title: "SEO & Content",
    description: "Strategic content planning and technical SEO to ensure your brand is found by the right people at the right time.",
    icon: Search,
    tags: ["Technical SEO", "Copywriting", "Strategy"]
  },
  {
    title: "Digital Strategy",
    description: "Data-driven roadmaps that align your digital presence with your business goals for sustainable long-term growth.",
    icon: BarChart,
    tags: ["Market Analysis", "Growth Hacking", "Analytics"]
  },
  {
    title: "UI/UX Audit",
    description: "Comprehensive analysis of your existing digital products to identify friction points and opportunities for improvement.",
    icon: Layers,
    tags: ["User Testing", "Heuristic Evaluation", "UX Research"]
  }
];

export default function Services() {
  return (
    <section id="services" className="bg-stone-50 py-32 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-20 max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-stone-400">
            Our Expertise
          </span>
          <h2 className="mt-6 font-serif text-4xl font-light tracking-tight text-stone-900 md:text-6xl">
            Comprehensive solutions for the modern digital landscape.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-px bg-stone-200 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-stone-50 p-10 transition-colors hover:bg-white"
            >
              <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-full bg-stone-100 text-stone-900 transition-colors group-hover:bg-stone-900 group-hover:text-white">
                <service.icon className="h-6 w-6" />
              </div>
              
              <h3 className="font-serif text-2xl font-light text-stone-900">
                {service.title}
              </h3>
              
              <p className="mt-4 text-stone-500 leading-relaxed">
                {service.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-2">
                {service.tags.map(tag => (
                  <span key={tag} className="text-[10px] font-bold uppercase tracking-widest text-stone-400">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="absolute top-10 right-10 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1">
                <ArrowUpRight className="h-5 w-5 text-stone-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
