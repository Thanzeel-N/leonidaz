'use client';
import { useRevealAll } from '@/hooks/useReveal';
import { COMPANY } from '@/data/content';
import { Phone, Mail, MessageCircle, MapPin } from 'lucide-react';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';

export default function ContactPage() {
  useRevealAll();

  return (
    <>
      <section className="pt-28 sm:pt-36 md:pt-40 pb-12 sm:pb-20 px-4 sm:px-6 lg:px-24 max-w-[1600px] mx-auto bg-bg-alt rounded-b-[2rem] sm:rounded-b-[3rem] md:rounded-b-[4rem]">
        <div className="reveal">
          <span className="text-xs font-medium tracking-[2px] uppercase text-text-light mb-4 sm:mb-6 flex items-center gap-3">
            <span className="w-6 h-px bg-text-light inline-block"></span> Contact
          </span>
          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-[84px] text-text-dark tracking-tight leading-tight">
            Let's connect.
          </h1>
          <p className="font-body text-lg sm:text-xl md:text-2xl text-text-muted mt-4 sm:mt-6 max-w-2xl font-light">
            Whether you are a medical practitioner inquiring about formulations or an agency seeking exclusive district PCD franchise rights, we&apos;re here to help.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-24 max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 lg:gap-24">

          {/* ── Contact Info (Left) ── */}
          <div className="reveal order-2 lg:order-1">
            <div className="glass-card p-6 sm:p-10 md:p-12 rounded-2xl sm:rounded-[2rem] bg-white/50 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-teal/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-navy/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 pointer-events-none"></div>

              <div className="relative z-10 space-y-8 sm:space-y-12">
                <div>
                  <h3 className="text-xs font-medium tracking-[2px] uppercase text-text-light mb-3 sm:mb-4 flex items-center gap-2">
                    <MapPin size={16} /> Headquarters
                  </h3>
                  <p className="font-body text-lg sm:text-xl text-text-dark leading-relaxed">
                    {COMPANY.address}
                  </p>
                </div>

                <div>
                  <h3 className="text-xs font-medium tracking-[2px] uppercase text-text-light mb-3 sm:mb-4 flex items-center gap-2">
                    <Phone size={16} /> Direct Contact
                  </h3>
                  <div className="flex flex-col gap-2 sm:gap-3">
                    <a href={`tel:${COMPANY.phone}`} className="font-display text-xl sm:text-2xl hover:text-brand-teal transition-colors">{COMPANY.phone}</a>
                    <a href={`mailto:${COMPANY.email}`} className="font-body text-base sm:text-lg text-text-muted hover:text-brand-navy transition-colors">{COMPANY.email}</a>
                  </div>
                </div>

                <div>
                  <h3 className="text-xs font-medium tracking-[2px] uppercase text-text-light mb-3 sm:mb-4 flex items-center gap-2">
                    <MessageCircle size={16} /> WhatsApp
                  </h3>
                  <Button
                    href={`https://wa.me/${COMPANY.whatsapp.replace('+', '')}`}
                    variant="outline"
                    className="!rounded-xl border-green-500 text-green-600 hover:bg-green-50 hover:border-green-600 w-full sm:w-auto justify-center"
                    icon
                  >
                    Message on WhatsApp
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* ── Contact Form (Right) ── */}
          <div className="reveal reveal-delay-2 order-1 lg:order-2">
            <form className="space-y-2" onSubmit={(e) => e.preventDefault()}>
              <Input label="Name" placeholder="Your Name" />
              <Input label="Email" type="email" placeholder="your@email.com" />

              <Input as="select" label="Inquiry Type">
                <option value="">Select an option</option>
                <option value="franchise">PCD Pharma Franchise Inquiry</option>
                <option value="doctor">Doctor / Institutional Supply</option>
                <option value="careers">Careers</option>
                <option value="other">General Inquiry</option>
              </Input>

              <Input as="textarea" label="Message" placeholder="How can we help you?" />

              <div className="pt-4 sm:pt-6">
                <Button variant="primary" icon className="w-full sm:w-auto">
                  Send Message
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
