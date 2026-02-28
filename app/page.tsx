import Navbar from '@/components/Navbar';
import SplitHero from '@/components/SplitHero';
import SchedulingSection from '@/components/SchedulingSection';
import ContactForm from '@/components/ContactForm';
import Services from '@/components/Services';
import Portfolio from '@/components/Portfolio';
import Testimonials from '@/components/Testimonials';

export default function Home() {
  return (
    <main className="min-h-screen bg-stone-50 selection:bg-stone-900 selection:text-stone-100">
      <Navbar />
      
      {/* Hero Section */}
      <SplitHero />

      {/* About Section (Brief) */}
      <section className="bg-white py-32 px-6">
        <div className="mx-auto max-w-4xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.4em] text-stone-400">
            Our Philosophy
          </span>
          <h2 className="mt-8 font-serif text-4xl font-light leading-tight text-stone-900 md:text-6xl">
            We believe in the power of <span className="italic">intentional</span> design and strategic clarity.
          </h2>
          <p className="mt-12 text-lg leading-relaxed text-stone-500 md:text-xl">
            Lumina is a multidisciplinary studio focused on creating digital experiences that are as functional as they are beautiful. We partner with forward-thinking brands to build lasting impact through design, strategy, and technology.
          </p>
        </div>
      </section>

      {/* Portfolio Showcase */}
      <Portfolio />

      {/* Services Grid */}
      <Services />

      {/* Process Section */}
      <section className="bg-white py-32 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="mb-20 text-center">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-stone-400">
              The Process
            </span>
            <h2 className="mt-6 font-serif text-4xl font-light tracking-tight text-stone-900 md:text-6xl">
              How we work together.
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
            {[
              {
                step: "01",
                title: "Discovery",
                description: "We dive deep into your brand, audience, and goals to build a strategic foundation for the project."
              },
              {
                step: "02",
                title: "Design",
                description: "We craft visual solutions that resonate with your target audience while maintaining brand integrity."
              },
              {
                step: "03",
                title: "Execution",
                description: "We bring the vision to life through high-performance development and strategic optimization."
              }
            ].map((item) => (
              <div key={item.step} className="group relative border-t border-stone-100 pt-12">
                <span className="font-serif text-6xl font-light text-stone-100 transition-colors duration-500 group-hover:text-stone-900/5">
                  {item.step}
                </span>
                <div className="relative -mt-8">
                  <h3 className="font-serif text-2xl font-light text-stone-900">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-stone-500 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* Scheduling Section */}
      <SchedulingSection />

      {/* Contact Section */}
      <ContactForm />

      {/* Footer */}
      <footer className="bg-stone-900 py-24 px-6 text-stone-100">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-16 md:grid-cols-4">
            <div className="col-span-1 md:col-span-2 space-y-8">
              <h3 className="font-serif text-4xl tracking-tighter">LUMINA</h3>
              <p className="max-w-xs text-stone-400 leading-relaxed">
                Elevating brands through strategic design and digital innovation. Based in New York, working globally.
              </p>
            </div>
            
            <div className="space-y-6">
              <h4 className="text-xs font-bold uppercase tracking-widest text-stone-500">Navigation</h4>
              <ul className="space-y-4 text-sm font-medium">
                <li><a href="#work" className="hover:text-stone-400 transition-colors">Work</a></li>
                <li><a href="#services" className="hover:text-stone-400 transition-colors">Services</a></li>
                <li><a href="#contact" className="hover:text-stone-400 transition-colors">Contact</a></li>
              </ul>
            </div>

            <div className="space-y-6">
              <h4 className="text-xs font-bold uppercase tracking-widest text-stone-500">Connect</h4>
              <ul className="space-y-4 text-sm font-medium">
                <li><a href="#" className="hover:text-stone-400 transition-colors">Instagram</a></li>
                <li><a href="#" className="hover:text-stone-400 transition-colors">LinkedIn</a></li>
                <li><a href="#" className="hover:text-stone-400 transition-colors">Twitter</a></li>
              </ul>
            </div>
          </div>

          <div className="mt-24 border-t border-stone-800 pt-12 flex flex-col md:flex-row justify-between items-center gap-6 text-xs font-bold uppercase tracking-widest text-stone-600">
            <p>© 2026 Lumina Studio. All rights reserved.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-stone-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-stone-400 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
