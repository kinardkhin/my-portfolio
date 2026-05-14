import AnimatedSection from '../components/AnimatedSection';

interface SkillGroup {
  category: string;
  description: string;
  skills: { name: string; level?: number }[];
  color: string;
  accent: string;
}

const skillGroups: SkillGroup[] = [
  {
    category: 'Frontend',
    description: 'Client-side technologies for building modern UIs',
    color: 'from-cyan-500 to-blue-500',
    accent: 'text-cyan-700 bg-cyan-50 border-cyan-200',
    skills: [
      { name: 'React.js', level: 90 },
      { name: 'Vue.js', level: 85 },
      { name: 'InertiaJs', level: 88 },
      { name: 'JavaScript', level: 88 },
      { name: 'HTML', level: 95 },
      { name: 'CSS', level: 90 },
      { name: 'Tailwind CSS', level: 92 },
    ],
  },
  {
    category: 'Backend',
    description: 'Server-side frameworks and runtimes',
    color: 'from-red-500 to-orange-500',
    accent: 'text-red-700 bg-red-50 border-red-200',
    skills: [
      { name: 'Laravel', level: 90 },
      { name: 'Node.js', level: 82 },
      { name: 'PHP', level: 88 },
    ],
  },
  {
    category: 'Database',
    description: 'Relational and cloud database systems',
    color: 'from-emerald-500 to-teal-500',
    accent: 'text-emerald-700 bg-emerald-50 border-emerald-200',
    skills: [
      { name: 'MySQL', level: 88 },
      { name: 'PostgreSQL', level: 80 },
      { name: 'Supabase', level: 85 },
      { name: 'SQL', level: 90 },
    ],
  },
  {
    category: 'Infrastructure & Tools',
    description: 'DevOps, deployment, and enterprise systems',
    color: 'from-navy-500 to-navy-700',
    accent: 'text-navy-700 bg-navy-50 border-navy-200',
    skills: [
      { name: 'GitHub', level: 90 },
      { name: 'Netlify', level: 85 },
      { name: 'Docker', level: 75 },
      { name: 'Windows Server', level: 85 },
      { name: 'Active Directory (LDAP)', level: 82 },
      { name: 'Navis N4 (EDI)', level: 80 },
      { name: 'Jotform', level: 88 },
    ],
  },
  {
    category: 'AI Development Tools',
    description: 'Modern AI tools for accelerated development',
    color: 'from-gold-400 to-gold-600',
    accent: 'text-gold-700 bg-gold-50 border-gold-200',
    skills: [
      { name: 'Claude (Anthropic)', level: 90 },
      { name: 'GitHub Copilot', level: 88 },
      { name: 'ChatGPT', level: 85 },
      { name: 'Bolt.new', level: 88 },
    ],
  },
];

function SkillChip({ name, accent }: { name: string; accent: string }) {
  return (
    <span
      className={`text-sm font-medium px-3.5 py-2 rounded-lg border ${accent} transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md cursor-default`}
    >
      {name}
    </span>
  );
}

export default function Skills() {
  return (
    <div className="pt-16">
      {/* Hero banner */}
      <div className="bg-navy-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <p className="text-gold-400 text-sm font-semibold uppercase tracking-widest mb-3">
              My toolkit
            </p>
            <h1 className="section-heading">Skills & Stack</h1>
            <p className="text-navy-200 max-w-xl mx-auto">
              Technologies and tools I use to build, deploy, and maintain
              production-grade web applications.
            </p>
          </AnimatedSection>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        {skillGroups.map((group, i) => (
          <AnimatedSection key={group.category} delay={i * 100}>
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
              {/* Category header */}
              <div className="flex items-center gap-4 px-6 py-5 bg-gray-50 border-b border-gray-100">
                <div className={`w-1 h-10 rounded-full bg-gradient-to-b ${group.color}`} />
                <div>
                  <h2 className="text-xl font-bold text-navy-800">
                    {group.category}
                  </h2>
                  <p className="text-sm text-gray-500">{group.description}</p>
                </div>
              </div>

              {/* Skills */}
              <div className="p-6">
                <div className="flex flex-wrap gap-3">
                  {group.skills.map(({ name }) => (
                    <SkillChip key={name} name={name} accent={group.accent} />
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  );
}
