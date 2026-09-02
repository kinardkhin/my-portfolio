import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-navy-900">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-gold-500/5 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-navy-700/50 blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-navy-700/20 blur-3xl" />
          {/* Grid pattern */}
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `linear-gradient(rgba(184,150,46,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(184,150,46,0.3) 1px, transparent 1px)`,
              backgroundSize: '60px 60px',
            }}
          />
        </div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Name */}
          <AnimatedSection delay={200}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-4">
              Kinard Khin{' '}
              <span className="block text-gold-400">Masayon Orbita</span>
            </h1>
          </AnimatedSection>

          {/* Title */}
          <AnimatedSection delay={350}>
            <p className="text-lg sm:text-xl md:text-2xl font-medium text-navy-200 mb-4">
              Senior System Administrator Staff
              <span className="text-gold-400 mx-2">|</span>
              Web Application Developer
            </p>
          </AnimatedSection>

          {/* Tagline */}
          <AnimatedSection delay={450}>
            <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
              Building production-ready web applications with modern tools and
              7+ years of real-world experience.
            </p>
          </AnimatedSection>

          {/* CTAs */}
          <AnimatedSection delay={550}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/projects" className="btn-primary text-base">
                View My Work
                <ArrowRight size={18} />
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white/30 text-white hover:border-gold-400 hover:text-gold-400 font-semibold px-6 py-3 rounded-lg transition-all duration-200 inline-flex items-center gap-2 text-base"
              >
                Contact Me
              </Link>
            </div>
          </AnimatedSection>

          {/* Stats */}
          <AnimatedSection delay={650}>
            <div className="mt-16 grid grid-cols-3 gap-3 sm:gap-6 max-w-lg mx-auto">
              {[
                { value: '7+', label: 'Years Experience' },
                { value: '7', label: 'Projects Built' },
                { value: '3', label: 'Certifications' },
              ].map(({ value, label }) => (
                <div key={label} className="text-center">
                  <p className="text-3xl font-bold text-gold-400">{value}</p>
                  <p className="text-xs text-gray-400 mt-1 leading-tight">{label}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown size={24} className="text-gold-400/60" />
        </div>
      </section>

      {/* Quick intro strip */}
      <section className="bg-navy-700 py-14">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              {[
                {
                  title: 'Full Stack Development',
                  desc: 'Laravel, React, Vue.js, and Node.js for end-to-end application development.',
                },
                {
                  title: 'System Administration',
                  desc: 'Windows Server, Active Directory, network device management, and EDI systems.',
                },
                {
                  title: 'AI-Assisted Delivery',
                  desc: 'Leveraging Claude, GitHub Copilot, and Bolt.new to ship faster without sacrificing quality.',
                },
              ].map(({ title, desc }) => (
                <div key={title} className="px-4">
                  <div className="w-10 h-0.5 bg-gold-500 mx-auto mb-4" />
                  <h3 className="text-white font-semibold text-lg mb-2">{title}</h3>
                  <p className="text-navy-200 text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
