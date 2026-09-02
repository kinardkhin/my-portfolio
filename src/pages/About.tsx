import { Download, CheckCircle, Award } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

const offerings = [
  'Full stack web application development',
  'Database design and management',
  'Production deployment and maintenance',
];

const certifications = [
  {
    title: 'CompTIA Security+',
    issuer: 'CompTIA',
    icon: '🛡️',
  },
  {
    title: 'Microsoft Azure Fundamentals',
    code: 'AZ-900',
    issuer: 'Microsoft',
    icon: '☁️',
  },
  {
    title: 'Microsoft Security, Compliance, and Identity Fundamentals',
    code: 'SC-900',
    issuer: 'Microsoft',
    icon: '🔐',
  },
];

export default function About() {
  return (
    <div className="pt-16">
      {/* Hero banner */}
      <div className="bg-navy-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <p className="text-gold-400 text-sm font-semibold uppercase tracking-widest mb-3">
              Get to know me
            </p>
            <h1 className="section-heading">About Me</h1>
            <p className="text-navy-200 max-w-xl mx-auto">
              7+ years building systems that matter.
            </p>
          </AnimatedSection>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-start">
          {/* Photo + quick stats */}
          <AnimatedSection direction="left" className="lg:col-span-2">
            <div className="text-center">
              {/* Photo */}
              <div className="relative inline-block mb-6">
                <img
                  src="/images/my-photo.png"
                  alt="Kinard Khin Masayon Orbita"
                  className="w-40 h-40 sm:w-48 sm:h-48 rounded-full object-cover object-top border-4 border-gold-500/30 shadow-2xl"
                />
                <div className="absolute -bottom-2 -right-2 w-10 h-10 rounded-full bg-gold-500 flex items-center justify-center shadow-lg">
                  <CheckCircle size={20} className="text-white" />
                </div>
              </div>

              <h2 className="text-xl font-bold text-navy-800 mb-1">
                Kinard Khin Masayon Orbita
              </h2>
              <p className="text-gold-600 text-sm font-medium mb-4">
                Senior System Administrator Staff | Web Application Developer
              </p>

              <div className="flex justify-center gap-6 text-center mb-6">
                {[
                  { value: '7+', label: 'Years Exp.' },
                  { value: '7', label: 'Projects' },
                  { value: '3', label: 'Certs' },
                ].map(({ value, label }) => (
                  <div key={label}>
                    <p className="text-2xl font-bold text-navy-700">{value}</p>
                    <p className="text-xs text-gray-500">{label}</p>
                  </div>
                ))}
              </div>

              <a
                href="/resume/kinard-khin-orbita-resume.pdf"
                download
                className="btn-primary w-full justify-center"
              >
                <Download size={16} />
                Download CV
              </a>
              <p className="text-xs text-gray-400 mt-2">PDF • Updated 2025</p>
            </div>
          </AnimatedSection>

          {/* Bio + offerings */}
          <AnimatedSection direction="right" className="lg:col-span-3">
            <div className="space-y-5 text-gray-600 leading-relaxed mb-8">
              <p>
                I am a Senior System Administrator Staff and Web Application
                Developer based in Panabo City, Davao del Norte, Philippines
                with over 7 years of experience at Davao International
                Container Terminal, Inc.
              </p>
              <p>
                I specialize in building internal business systems, production
                web apps, and workflow automation tools using modern stacks
                including Laravel, React, Vue.js, Node.js, and Supabase, with
                hands-on experience in Navis N4 EDI integration, network
                monitoring, Active Directory management, and containerized
                deployments via Docker.
              </p>
              <p>
                I embrace modern AI-assisted development workflows, using tools
                like Claude, GitHub Copilot, and Bolt.new, to deliver faster
                without sacrificing quality or ownership of the code.
              </p>
            </div>

            {/* What I offer */}
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <h3 className="font-bold text-navy-700 text-lg mb-4">
                What I Offer
              </h3>
              <ul className="space-y-3">
                {offerings.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-gray-600">
                    <CheckCircle size={16} className="text-gold-500 flex-shrink-0" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>
        </div>

        {/* Certifications */}
        <AnimatedSection className="mt-16">
          <div className="text-center mb-8">
            <p className="text-gold-600 text-sm font-semibold uppercase tracking-widest mb-2">
              Professional Credentials
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-navy-700">
              Certifications
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {certifications.map(({ title, code, issuer }) => (
              <div key={title} className="card p-6 flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-navy-50 flex items-center justify-center flex-shrink-0 border border-navy-100">
                  <Award size={24} className="text-navy-700" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-gold-600 uppercase tracking-wide mb-1">
                    {issuer} {code && `• ${code}`}
                  </p>
                  <h4 className="font-semibold text-navy-800 text-sm leading-snug">
                    {title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
