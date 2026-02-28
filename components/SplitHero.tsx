'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, X } from 'lucide-react';
import Image from 'next/image';

export default function SplitHero() {
  const [activePanel, setActivePanel] = useState<'left' | 'right' | null>(null);

  const panels = {
    left: {
      title: "The Creative Studio",
      subtitle: "Bespoke Design & Branding",
      description: "We craft visual identities that resonate. Our studio approach combines traditional craftsmanship with modern digital strategy to elevate your brand's presence.",
      image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=2070",
      color: "bg-stone-100",
      textColor: "text-stone-900"
    },
    right: {
      title: "Digital Strategy",
      subtitle: "Growth & Performance",
      description: "Data-driven insights meet human-centric design. We build digital ecosystems that convert visitors into loyal advocates through strategic optimization.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2015",
      color: "bg-stone-900",
      textColor: "text-stone-100"
    }
  };

  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden bg-stone-50">
      <div className="flex h-full w-full flex-col md:flex-row">
        {/* Left Panel */}
        <div 
          onClick={() => setActivePanel('left')}
          className={`group relative flex h-1/2 w-full cursor-pointer items-center justify-center overflow-hidden transition-all duration-700 md:h-full md:w-1/2 ${activePanel === 'right' ? 'md:w-0 opacity-0' : 'md:w-1/2 opacity-100'}`}
        >
          <div className="absolute inset-0 z-0">
            <Image 
              src={panels.left.image} 
              alt="Studio" 
              fill
              className="object-cover grayscale transition-transform duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-stone-900/40 transition-opacity duration-500 group-hover:opacity-20" />
          </div>
          <div className="relative z-10 text-center">
            <h2 className="font-serif text-4xl font-light tracking-tight text-white md:text-6xl">
              {panels.left.title}
            </h2>
            <p className="mt-4 flex items-center justify-center gap-2 text-sm font-medium uppercase tracking-widest text-white/80">
              Explore <ArrowRight className="h-4 w-4" />
            </p>
          </div>
        </div>

        {/* Right Panel */}
        <div 
          onClick={() => setActivePanel('right')}
          className={`group relative flex h-1/2 w-full cursor-pointer items-center justify-center overflow-hidden transition-all duration-700 md:h-full md:w-1/2 ${activePanel === 'left' ? 'md:w-0 opacity-0' : 'md:w-1/2 opacity-100'}`}
        >
          <div className="absolute inset-0 z-0">
            <Image 
              src={panels.right.image} 
              alt="Strategy" 
              fill
              className="object-cover grayscale transition-transform duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-stone-900/60 transition-opacity duration-500 group-hover:opacity-30" />
          </div>
          <div className="relative z-10 text-center">
            <h2 className="font-serif text-4xl font-light tracking-tight text-white md:text-6xl">
              {panels.right.title}
            </h2>
            <p className="mt-4 flex items-center justify-center gap-2 text-sm font-medium uppercase tracking-widest text-white/80">
              Explore <ArrowRight className="h-4 w-4" />
            </p>
          </div>
        </div>
      </div>

      {/* Overlay Content */}
      <AnimatePresence>
        {activePanel && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={`absolute inset-0 z-50 flex items-center justify-center p-6 md:p-24 ${panels[activePanel].color}`}
          >
            <button 
              onClick={(e) => {
                e.stopPropagation();
                setActivePanel(null);
              }}
              className={`absolute top-8 right-8 p-2 transition-transform hover:rotate-90 ${panels[activePanel].textColor}`}
            >
              <X className="h-8 w-8" />
            </button>

            <div className="grid w-full max-w-6xl grid-cols-1 gap-12 md:grid-cols-2 items-center">
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="space-y-6"
              >
                <span className={`text-xs font-bold uppercase tracking-[0.3em] ${panels[activePanel].textColor} opacity-60`}>
                  {panels[activePanel].subtitle}
                </span>
                <h3 className={`font-serif text-5xl md:text-7xl font-light leading-tight ${panels[activePanel].textColor}`}>
                  {panels[activePanel].title}
                </h3>
                <p className={`text-lg md:text-xl leading-relaxed opacity-80 ${panels[activePanel].textColor} max-w-md`}>
                  {panels[activePanel].description}
                </p>
                <div className="pt-6">
                  <button className={`px-8 py-4 border ${activePanel === 'left' ? 'border-stone-900 text-stone-900 hover:bg-stone-900 hover:text-white' : 'border-stone-100 text-stone-100 hover:bg-stone-100 hover:text-stone-900'} transition-all duration-300 font-medium tracking-wide`}>
                    View Projects
                  </button>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="hidden md:block relative aspect-[4/5] overflow-hidden rounded-sm"
              >
                <Image 
                  src={panels[activePanel].image} 
                  alt={panels[activePanel].title}
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
