import { Github, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const navLinks = [
  { path: '/about', label: 'About' },
  { path: '/projects', label: 'Projects' },
  { path: '/skills', label: 'Skills' },
  { path: '/experience', label: 'Experience' },
  { path: '/testimonials', label: 'Testimonials' },
  { path: '/contact', label: 'Contact' },
];

const socialLinks = [
  {
    href: 'https://linkedin.com/in/kinardkhinorbita',
    icon: Linkedin,
    label: 'LinkedIn',
  },
  {
    href: 'https://github.com/',
    icon: Github,
    label: 'GitHub',
  },
  {
    href: 'mailto:kinardkhin@gmail.com',
    icon: Mail,
    label: 'Email',
  },
];

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <Link to="/" className="text-white font-bold text-xl">
              Kinard<span className="text-gold-400">.</span>Orbita
            </Link>
            <p className="mt-3 text-sm leading-relaxed">
              Full Stack Web Developer & Senior System Admin Staff based in
              Panabo City, Davao del Norte, Philippines.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {navLinks.map(({ path, label }) => (
                <li key={path}>
                  <Link
                    to={path}
                    className="text-sm hover:text-gold-400 transition-colors duration-200"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Get In Touch
            </h3>
            <p className="text-sm mb-1">kinardkhin@gmail.com</p>
            <p className="text-sm mb-4">Panabo City, Davao del Norte, PH</p>
            <div className="flex gap-3">
              {socialLinks.map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-gray-400 hover:text-gold-400 hover:border-gold-400 transition-all duration-200"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs">
            © 2025 Kinard Khin Masayon Orbita. All rights reserved.
          </p>
          <p className="text-xs">Built with React, Tailwind CSS & Supabase</p>
        </div>
      </div>
    </footer>
  );
}
