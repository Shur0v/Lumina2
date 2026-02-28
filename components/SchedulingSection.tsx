'use client';

import { useState, useEffect } from 'react';
import { format, addDays, startOfToday, isSameDay } from 'date-fns';
import { Calendar as CalendarIcon, Clock, CheckCircle2, ChevronRight, ChevronLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const timeSlots = [
  "09:00 AM", "10:00 AM", "11:00 AM", 
  "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM"
];

export default function SchedulingSection() {
  const [mounted, setMounted] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [isBooked, setIsBooked] = useState(false);
  const [isSyncing, setIsSyncing] = useState(false);

  useEffect(() => {
    setMounted(true); // eslint-disable-line react-hooks/set-state-in-effect
    setSelectedDate(startOfToday());
  }, []);

  const days = mounted ? Array.from({ length: 7 }, (_, i) => addDays(startOfToday(), i)) : [];

  const handleBooking = async () => {
    if (!selectedTime) return;
    setIsSyncing(true);
    // Simulate API sync with external calendar
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSyncing(false);
    setIsBooked(true);
  };

  if (!mounted) {
    return (
      <section id="booking" className="bg-stone-50 py-24 px-6">
        <div className="mx-auto max-w-5xl h-[600px] flex items-center justify-center">
          <div className="animate-pulse text-stone-300 font-serif text-2xl">Loading Schedule...</div>
        </div>
      </section>
    );
  }

  return (
    <section id="booking" className="bg-stone-50 py-24 px-6">
      <div className="mx-auto max-w-5xl">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 items-start">
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-stone-400">
                Availability
              </span>
              <h2 className="font-serif text-4xl font-light tracking-tight text-stone-900 md:text-5xl">
                Book a Consultation
              </h2>
              <p className="text-lg leading-relaxed text-stone-500">
                Ready to transform your digital presence? Schedule a 30-minute discovery call with our lead strategist. We&apos;ll discuss your goals, challenges, and how we can help you grow.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-stone-200 text-stone-600">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-medium text-stone-900">30 Minute Session</h4>
                  <p className="text-sm text-stone-500">Video call via Google Meet</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-stone-200 text-stone-600">
                  <CalendarIcon className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-medium text-stone-900">Real-time Sync</h4>
                  <p className="text-sm text-stone-500">Instantly added to your calendar</p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-white p-8 shadow-sm border border-stone-100">
            {isBooked ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-12 text-center"
              >
                <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-emerald-50 text-emerald-500">
                  <CheckCircle2 className="h-10 w-10" />
                </div>
                <h3 className="text-2xl font-serif text-stone-900">Booking Confirmed</h3>
                <p className="mt-4 text-stone-500">
                  A calendar invitation has been sent to your email for <br />
                  <span className="font-bold text-stone-900">
                    {format(selectedDate, 'MMMM do')} at {selectedTime}
                  </span>
                </p>
                <button 
                  onClick={() => {
                    setIsBooked(false);
                    setSelectedTime(null);
                  }}
                  className="mt-8 text-sm font-medium text-stone-900 underline underline-offset-4"
                >
                  Schedule another session
                </button>
              </motion.div>
            ) : (
              <div className="space-y-8">
                <div>
                  <div className="mb-4 flex items-center justify-between">
                    <h3 className="font-medium text-stone-900">Select a Date</h3>
                    <div className="flex gap-2">
                      <button className="p-1 text-stone-400 hover:text-stone-900"><ChevronLeft className="h-5 w-5" /></button>
                      <button className="p-1 text-stone-400 hover:text-stone-900"><ChevronRight className="h-5 w-5" /></button>
                    </div>
                  </div>
                  <div className="grid grid-cols-7 gap-2">
                    {days.map((day) => (
                      <button
                        key={day.toString()}
                        onClick={() => setSelectedDate(day)}
                        className={`flex flex-col items-center rounded-lg py-3 transition-all ${
                          isSameDay(day, selectedDate)
                            ? 'bg-stone-900 text-white'
                            : 'hover:bg-stone-50 text-stone-600'
                        }`}
                      >
                        <span className="text-[10px] font-bold uppercase tracking-tighter opacity-60">
                          {format(day, 'EEE')}
                        </span>
                        <span className="text-sm font-bold">
                          {format(day, 'd')}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="mb-4 font-medium text-stone-900">Select a Time</h3>
                  <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                    {timeSlots.map((time) => (
                      <button
                        key={time}
                        onClick={() => setSelectedTime(time)}
                        className={`rounded-lg border py-3 text-sm font-medium transition-all ${
                          selectedTime === time
                            ? 'border-stone-900 bg-stone-900 text-white'
                            : 'border-stone-200 text-stone-600 hover:border-stone-900'
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  disabled={!selectedTime || isSyncing}
                  onClick={handleBooking}
                  className="flex w-full items-center justify-center gap-2 rounded-lg bg-stone-900 py-4 font-bold uppercase tracking-widest text-white transition-all hover:bg-stone-800 disabled:opacity-50"
                >
                  {isSyncing ? (
                    <>
                      <motion.div 
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                      >
                        <Clock className="h-5 w-5" />
                      </motion.div>
                      Syncing Calendar...
                    </>
                  ) : (
                    'Confirm Booking'
                  )}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
