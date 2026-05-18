import { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Send, AlertCircle } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const contactDetails = [
  {
    icon: Mail,
    label: 'Email',
    value: 'kinardkhin@gmail.com',
    href: 'mailto:kinardkhin@gmail.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '09267259851',
    href: 'tel:09267259851',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Panabo City, Davao del Norte, Philippines',
    href: null,
  },
];

const socialLinks = [
  {
    icon: Linkedin,
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/kinardkhinorbita',
    text: 'linkedin.com/in/kinardkhinorbita',
  },
  {
    icon: Github,
    label: 'GitHub',
    href: 'https://github.com/',
    text: 'github.com/kinardkhin',
  },
  {
    icon: Mail,
    label: 'Email',
    href: 'mailto:kinardkhin@gmail.com',
    text: 'kinardkhin@gmail.com',
  },
];

const encode = (data: Record<string, string>) =>
  Object.keys(data)
    .map((k) => encodeURIComponent(k) + '=' + encodeURIComponent(data[k]))
    .join('&');

export default function Contact() {
  const [form, setForm] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': 'contact', ...form }),
      });
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  const inputClass =
    'w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 outline-none transition-all duration-200 text-gray-700 text-sm bg-white placeholder-gray-400';

  return (
    <div className="pt-16">
      {/* Hero banner */}
      <div className="bg-navy-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <p className="text-gold-400 text-sm font-semibold uppercase tracking-widest mb-3">
              Let's work together
            </p>
            <h1 className="section-heading">Get In Touch</h1>
            <p className="text-navy-200 max-w-xl mx-auto">
              Have a project in mind or want to discuss an opportunity? I'd love
              to hear from you.
            </p>
          </AnimatedSection>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact details */}
          <AnimatedSection direction="left" className="lg:col-span-2 space-y-6">
            <div>
              <h2 className="text-xl font-bold text-navy-800 mb-1">
                Contact Information
              </h2>
              <p className="text-gray-500 text-sm">
                Reach out through any of these channels.
              </p>
            </div>

            {/* Details */}
            <div className="space-y-4">
              {contactDetails.map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-navy-50 border border-navy-100 flex items-center justify-center flex-shrink-0">
                    <Icon size={18} className="text-navy-700" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-medium uppercase tracking-wide mb-0.5">
                      {label}
                    </p>
                    {href ? (
                      <a
                        href={href}
                        className="text-sm text-gray-700 hover:text-gold-600 transition-colors"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="text-sm text-gray-700">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Divider */}
            <div className="border-t border-gray-100 pt-6">
              <p className="text-sm font-semibold text-navy-700 mb-4">
                Find me online
              </p>
              <div className="space-y-3">
                {socialLinks.map(({ icon: Icon, label, href, text }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 group"
                  >
                    <div className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center group-hover:border-gold-400 group-hover:bg-gold-50 transition-all duration-200">
                      <Icon
                        size={16}
                        className="text-gray-500 group-hover:text-gold-600 transition-colors"
                      />
                    </div>
                    <span className="text-sm text-gray-500 group-hover:text-gold-600 transition-colors">
                      {text}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Contact form */}
          <AnimatedSection direction="right" className="lg:col-span-3">
            <div className="card p-8">
              {status === 'success' ? (
                <div className="text-center py-10">
                  <div className="w-16 h-16 rounded-full bg-green-50 border-2 border-green-200 flex items-center justify-center mx-auto mb-4">
                    <Send size={28} className="text-green-500" />
                  </div>
                  <h3 className="text-xl font-bold text-navy-800 mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-gray-500 text-sm">
                    Thank you for reaching out. I'll get back to you as soon as
                    possible.
                  </p>
                  <button
                    className="mt-6 btn-primary"
                    onClick={() => {
                      setStatus('idle');
                      setForm({ name: '', email: '', subject: '', message: '' });
                    }}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form
                  name="contact"
                  method="POST"
                  data-netlify="true"
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >
                  <input type="hidden" name="form-name" value="contact" />

                  <div>
                    <h2 className="text-xl font-bold text-navy-800 mb-1">
                      Send a Message
                    </h2>
                    <p className="text-sm text-gray-400 mb-6">
                      Fill in the form below and I'll respond promptly.
                    </p>
                  </div>

                  {status === 'error' && (
                    <div className="flex items-center gap-2 text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-4 py-3">
                      <AlertCircle size={16} className="flex-shrink-0" />
                      Something went wrong. Please email me directly at kinardkhin@gmail.com.
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1.5">
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        required
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1.5">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        required
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1.5">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      placeholder="What's this about?"
                      required
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1.5">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project or inquiry..."
                      required
                      rows={6}
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                  >
                    <Send size={16} />
                    {status === 'submitting' ? 'Sending…' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
}
