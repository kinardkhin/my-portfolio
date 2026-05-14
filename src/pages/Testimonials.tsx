import { Quote } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

interface Testimonial {
  quote: string;
  name: string;
  position: string;
  company: string;
  initials: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      'Kinard consistently delivers high-quality web applications that solve real operational challenges. His ability to understand business requirements and translate them into production-ready systems has been invaluable to our terminal operations.',
    name: 'John D. Santos',
    position: 'Operations Manager',
    company: 'Davao International Container Terminal, Inc.',
    initials: 'JS',
  },
  {
    quote:
      'What sets Kinard apart is his commitment to quality and his forward-thinking approach. He embraces modern tools and AI-assisted workflows to deliver projects faster — without cutting corners on code quality or maintainability.',
    name: 'Maria C. Reyes',
    position: 'IT Department Head',
    company: 'Davao International Container Terminal, Inc.',
    initials: 'MR',
  },
  {
    quote:
      'The biometric management system and network monitoring tool Kinard built have significantly improved our daily workflows. His technical expertise and dedication to solving problems make him a standout developer.',
    name: 'Roberto A. Lim',
    position: 'Senior IT Officer',
    company: 'Davao International Container Terminal, Inc.',
    initials: 'RL',
  },
];

function TestimonialCard({
  testimonial,
  delay,
}: {
  testimonial: Testimonial;
  delay: number;
}) {
  return (
    <AnimatedSection delay={delay}>
      <div className="card p-8 h-full flex flex-col relative overflow-hidden">
        {/* Background quote decoration */}
        <div className="absolute top-4 right-4 opacity-5">
          <Quote size={80} className="text-navy-700" fill="currentColor" />
        </div>

        {/* Gold accent line */}
        <div className="w-10 h-1 bg-gold-500 rounded-full mb-6" />

        {/* Quote icon */}
        <div className="w-10 h-10 rounded-full bg-navy-50 border border-navy-100 flex items-center justify-center mb-5">
          <Quote size={18} className="text-navy-600" />
        </div>

        {/* Quote text */}
        <blockquote className="text-gray-600 leading-relaxed italic flex-1 mb-8 text-[15px]">
          "{testimonial.quote}"
        </blockquote>

        {/* Author */}
        <div className="flex items-center gap-4 pt-5 border-t border-gray-100">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-navy-700 to-navy-900 flex items-center justify-center flex-shrink-0 shadow-md">
            <span className="text-white font-bold text-sm">
              {testimonial.initials}
            </span>
          </div>
          <div>
            <p className="font-bold text-navy-800">{testimonial.name}</p>
            <p className="text-sm text-gold-600 font-medium">
              {testimonial.position}
            </p>
            <p className="text-xs text-gray-400">{testimonial.company}</p>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}

export default function Testimonials() {
  return (
    <div className="pt-16">
      {/* Hero banner */}
      <div className="bg-navy-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <p className="text-gold-400 text-sm font-semibold uppercase tracking-widest mb-3">
              What others say
            </p>
            <h1 className="section-heading">Testimonials</h1>
            <p className="text-navy-200 max-w-xl mx-auto">
              Placeholder testimonials — real endorsements from colleagues and
              stakeholders will be added here.
            </p>
          </AnimatedSection>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Disclaimer */}
        <AnimatedSection className="mb-10">
          <div className="flex items-center gap-3 bg-gold-50 border border-gold-200 rounded-lg px-5 py-4 max-w-2xl mx-auto">
            <div className="w-2 h-2 rounded-full bg-gold-500 flex-shrink-0" />
            <p className="text-sm text-gold-700">
              These are placeholder testimonials. Real testimonials from
              colleagues and clients will replace them.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.name} testimonial={t} delay={i * 100} />
          ))}
        </div>
      </div>
    </div>
  );
}
