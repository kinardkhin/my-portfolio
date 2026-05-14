import { Briefcase, GraduationCap, Award, MapPin, Calendar } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

const responsibilities = [
  'Supervise and maintain a production React/Node.js/Supabase driver monitoring app deployed on Netlify',
  'Design and develop multiple in-house web applications using Laravel, InertiaJs, React, Vue.js, and MySQL',
  'Manage Active Directory user accounts via LDAP on Windows Server',
  'Monitor and maintain network devices through a custom-built network monitoring system',
  'Handle EDI generation and interpretation for Navis N4 (COARRI, CODECO, TPFREP, COREOR)',
  'Administer Jotform-based online forms for customer Job Orders and Pre-Advise Containers; conduct customer training',
  'Manage source control and deployment pipelines using GitHub and Netlify',
  'Utilize Docker for containerized application development',
  'Leverage AI development tools to accelerate delivery: Claude, GitHub Copilot, ChatGPT, Bolt.new',
];

const certifications = [
  {
    title: 'CompTIA Security+',
    issuer: 'CompTIA',
  },
  {
    title: 'Microsoft Azure Fundamentals (AZ-900)',
    issuer: 'Microsoft',
  },
  {
    title: 'Microsoft Security, Compliance, and Identity Fundamentals (SC-900)',
    issuer: 'Microsoft',
  },
];

export default function Experience() {
  return (
    <div className="pt-16">
      {/* Hero banner */}
      <div className="bg-navy-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <p className="text-gold-400 text-sm font-semibold uppercase tracking-widest mb-3">
              Career history
            </p>
            <h1 className="section-heading">Work Experience</h1>
            <p className="text-navy-200 max-w-xl mx-auto">
              7+ years building and maintaining mission-critical systems for a
              major port terminal in the Philippines.
            </p>
          </AnimatedSection>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Timeline */}
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-8 rounded-full bg-gold-500 flex items-center justify-center">
              <Briefcase size={16} className="text-white" />
            </div>
            <h2 className="text-xl font-bold text-navy-700">Work History</h2>
          </div>
        </AnimatedSection>

        <div className="relative">
          {/* Timeline vertical line */}
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gold-500 via-navy-300 to-transparent" />

          <AnimatedSection direction="right">
            <div className="relative pl-12 pb-12">
              {/* Timeline dot */}
              <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-navy-700 border-4 border-gold-400 shadow-md flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-gold-400" />
              </div>

              {/* Card */}
              <div className="card p-6">
                {/* Header */}
                <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-navy-800">
                      Senior System Admin Staff
                    </h3>
                    <p className="text-gold-600 font-semibold mt-0.5">
                      Davao International Container Terminal, Inc.
                    </p>
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-green-50 text-green-700 border border-green-200">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                      Current Role
                    </span>
                    <span className="flex items-center gap-1 text-sm text-gray-500">
                      <Calendar size={13} />
                      2018 – Present
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-sm text-gray-500 mb-5">
                  <MapPin size={14} />
                  Panabo City, Davao del Norte, Philippines
                </div>

                {/* Responsibilities */}
                <ul className="space-y-3">
                  {responsibilities.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-sm text-gray-600"
                    >
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gold-500 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Education */}
        <AnimatedSection className="mt-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-8 rounded-full bg-navy-700 flex items-center justify-center">
              <GraduationCap size={16} className="text-white" />
            </div>
            <h2 className="text-xl font-bold text-navy-700">Education</h2>
          </div>
        </AnimatedSection>

        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-navy-300 to-transparent" />

          <AnimatedSection direction="right">
            <div className="relative pl-12 pb-12">
              <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-navy-100 border-4 border-navy-300 shadow-md flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-navy-500" />
              </div>

              <div className="card p-6">
                <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
                  <div>
                    <h3 className="text-lg font-bold text-navy-800">
                      Bachelor of Science in Information Technology
                    </h3>
                    <p className="text-gold-600 font-medium mt-0.5">
                      Davao del Norte State College
                    </p>
                  </div>
                  <span className="flex items-center gap-1 text-sm text-gray-500 whitespace-nowrap">
                    <Calendar size={13} />
                    2014 – 2018
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-sm text-gray-500">
                  <MapPin size={14} />
                  Panabo City, Davao del Norte, Philippines
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Certifications */}
        <AnimatedSection className="mt-4">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-8 rounded-full bg-gold-500 flex items-center justify-center">
              <Award size={16} className="text-white" />
            </div>
            <h2 className="text-xl font-bold text-navy-700">Certifications</h2>
          </div>

          <div className="space-y-4">
            {certifications.map(({ title, issuer }) => (
              <div key={title} className="card p-5 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-navy-50 flex items-center justify-center flex-shrink-0 border border-navy-100">
                  <Award size={22} className="text-navy-700" />
                </div>
                <div>
                  <h4 className="font-semibold text-navy-800">{title}</h4>
                  <p className="text-sm text-gray-500 mt-0.5">{issuer}</p>
                </div>
                <div className="ml-auto">
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-gold-50 text-gold-700 border border-gold-200">
                    Certified
                  </span>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
