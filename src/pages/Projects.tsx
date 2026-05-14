import { ExternalLink, Github, Cpu } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

interface Project {
  title: string;
  description: string;
  stack: string[];
  aiAssisted: boolean;
  isProduction?: boolean;
  hasGithub?: boolean;
  demoUrl?: string;
}

const projects: Project[] = [
  {
    title: 'Driver Monitoring System',
    description:
      'Production web app for monitoring port terminal drivers in real time. Used daily by company operations staff to track driver activity and status.',
    stack: ['React', 'Node.js', 'Supabase', 'Netlify', 'GitHub'],
    aiAssisted: true,
    isProduction: true,
    demoUrl: '#',
  },
  {
    title: 'BiometricHub',
    description:
      'Biometric Device Management System. Extracts registered users, updates device time, and retrieves attendance logs directly from biometric hardware.',
    stack: ['Laravel', 'InertiaJs', 'React', 'MySQL'],
    aiAssisted: true,
    demoUrl: '#',
  },
  {
    title: 'NetDevMon',
    description:
      'Network Device Monitoring System that tracks access points, routers, switches, and other network-reachable devices across the terminal.',
    stack: ['Laravel', 'InertiaJs', 'React', 'MySQL'],
    aiAssisted: true,
    demoUrl: '#',
  },
  {
    title: 'DICT Accomplishment Monitoring System',
    description:
      'Tracks and reports departmental accomplishments. First project to use Docker for containerized deployment, improving portability and consistency.',
    stack: ['Laravel', 'InertiaJs', 'React', 'MySQL', 'Docker'],
    aiAssisted: false,
    demoUrl: '#',
  },
  {
    title: 'Fuel Monitoring System',
    description:
      'Records detailed fuel consumption per truck and driver in liters, with meter readings, equipment details, and operator tracking for audit compliance.',
    stack: ['Laravel', 'Vue.js', 'MySQL'],
    aiAssisted: false,
    demoUrl: '#',
  },
  {
    title: 'M&S Borrower System',
    description:
      'Materials and Supply Borrower System for item borrowing workflows and inventory tracking across departments.',
    stack: ['Laravel', 'JavaScript', 'MySQL'],
    aiAssisted: true,
    demoUrl: '#',
  },
];

const stackColors: Record<string, string> = {
  React: 'bg-cyan-50 text-cyan-700 border-cyan-200',
  'Node.js': 'bg-green-50 text-green-700 border-green-200',
  Supabase: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  Netlify: 'bg-teal-50 text-teal-700 border-teal-200',
  GitHub: 'bg-gray-100 text-gray-700 border-gray-200',
  Laravel: 'bg-red-50 text-red-700 border-red-200',
  InertiaJs: 'bg-violet-50 text-violet-700 border-violet-200',
  'Vue.js': 'bg-green-50 text-green-700 border-green-200',
  MySQL: 'bg-blue-50 text-blue-700 border-blue-200',
  Docker: 'bg-sky-50 text-sky-700 border-sky-200',
  JavaScript: 'bg-yellow-50 text-yellow-700 border-yellow-200',
};

function StackTag({ name }: { name: string }) {
  const colorClass = stackColors[name] ?? 'bg-gray-50 text-gray-600 border-gray-200';
  return (
    <span
      className={`text-xs font-medium px-2.5 py-1 rounded-full border ${colorClass}`}
    >
      {name}
    </span>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="card p-0 flex flex-col overflow-hidden">
      {/* Card header bar */}
      <div className="h-1.5 w-full bg-gradient-to-r from-navy-700 to-gold-500" />

      <div className="p-6 flex flex-col flex-1">
        {/* Badges */}
        <div className="flex flex-wrap gap-2 mb-3">
          {project.aiAssisted && (
            <span className="flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full bg-gold-50 text-gold-700 border border-gold-200">
              <Cpu size={11} />
              AI Assisted
            </span>
          )}
          {project.isProduction && (
            <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-green-50 text-green-700 border border-green-200">
              Production App
            </span>
          )}
        </div>

        <h3 className="text-lg font-bold text-navy-800 mb-2">{project.title}</h3>
        <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-1">
          {project.description}
        </p>

        {/* Stack tags */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.stack.map((s) => (
            <StackTag key={s} name={s} />
          ))}
        </div>

        {/* Actions */}
        <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-100">
          <a
            href={project.demoUrl ?? '#'}
            onClick={(e) => e.preventDefault()}
            className="btn-primary text-sm py-2 px-4"
          >
            <ExternalLink size={14} />
            Live Demo
          </a>
          <p className="text-xs text-gray-400 self-center italic">
            Demo login credentials provided
          </p>
          {project.hasGithub && (
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              className="btn-outline text-sm py-2 px-4"
            >
              <Github size={14} />
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <div className="pt-16">
      {/* Hero banner */}
      <div className="bg-navy-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <p className="text-gold-400 text-sm font-semibold uppercase tracking-widest mb-3">
              What I've built
            </p>
            <h1 className="section-heading">Projects</h1>
            <p className="text-navy-200 max-w-xl mx-auto">
              Production-ready internal systems and tools built for real-world
              use at Davao International Container Terminal, Inc.
            </p>
          </AnimatedSection>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Legend */}
        <AnimatedSection className="flex flex-wrap gap-4 mb-10">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <span className="flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full bg-gold-50 text-gold-700 border border-gold-200">
              <Cpu size={11} />
              AI Assisted
            </span>
            <span>Built with AI development tools</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-green-50 text-green-700 border border-green-200">
              Production App
            </span>
            <span>Actively used in production</span>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <AnimatedSection key={project.title} delay={i * 80}>
              <ProjectCard project={project} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  );
}
