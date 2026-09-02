import { useParams, Navigate, Link } from 'react-router-dom';
import { ArrowLeft, Cpu, Lock, CheckCircle } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import ImageGallery from '../components/ImageGallery';
import { getProjectBySlug } from '../data/projects';

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getProjectBySlug(slug) : undefined;

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  const { caseStudy } = project;

  return (
    <div className="pt-16">
      {/* Hero banner */}
      <div className="bg-navy-900 py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-navy-200 hover:text-gold-400 text-sm font-medium mb-6 transition-colors"
            >
              <ArrowLeft size={16} />
              Back to Projects
            </Link>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.status === 'AI Assisted' && (
                <span className="flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full bg-gold-50 text-gold-700 border border-gold-200">
                  <Cpu size={11} />
                  AI Assisted
                </span>
              )}
              {project.status === 'Production' && (
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-green-50 text-green-700 border border-green-200">
                  Production App
                </span>
              )}
              <span className="flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full bg-white/10 text-navy-100 border border-white/20">
                <Lock size={11} />
                Internal Use Only
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-3">
              {project.title}
            </h1>
            <p className="text-navy-200 text-sm">{project.year}</p>

            <div className="flex flex-wrap gap-2 mt-6">
              {project.stack.map((s) => (
                <span
                  key={s}
                  className="text-xs font-medium px-2.5 py-1 rounded-full border border-white/20 text-navy-100"
                >
                  {s}
                </span>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-14">
        <AnimatedSection>
          <h2 className="text-xl font-bold text-navy-800 mb-3">The Problem</h2>
          <p className="text-gray-600 leading-relaxed">{caseStudy.problem}</p>
        </AnimatedSection>

        <AnimatedSection>
          <h2 className="text-xl font-bold text-navy-800 mb-3">What I Built</h2>
          <p className="text-gray-600 leading-relaxed">{caseStudy.whatIBuilt}</p>
        </AnimatedSection>

        <AnimatedSection>
          <h2 className="text-xl font-bold text-navy-800 mb-4">Key Technical Decisions</h2>
          <ul className="space-y-3">
            {caseStudy.keyDecisions.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-gray-600 leading-relaxed">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gold-500 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </AnimatedSection>

        <AnimatedSection>
          <h2 className="text-xl font-bold text-navy-800 mb-3">Challenges</h2>
          <p className="text-gray-600 leading-relaxed">{caseStudy.challenges}</p>
        </AnimatedSection>

        <AnimatedSection>
          <h2 className="text-xl font-bold text-navy-800 mb-4">Outcome / Impact</h2>
          <ul className="space-y-3">
            {caseStudy.outcome.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-gray-600 leading-relaxed">
                <CheckCircle size={16} className="text-gold-500 flex-shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </AnimatedSection>

        {project.images.length > 0 && (
          <AnimatedSection>
            <h2 className="text-xl font-bold text-navy-800 mb-4">Screenshots</h2>
            <ImageGallery images={project.images} alt={project.title} />
          </AnimatedSection>
        )}
      </div>
    </div>
  );
}
