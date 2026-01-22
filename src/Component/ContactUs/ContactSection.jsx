import React, { useState } from 'react';
import {
  SendIcon,
  LoaderIcon,
  MailIcon,
  PhoneIcon,
  MapPinIcon
} from './Icons';

const inputClass =
  "w-full px-4 py-3 rounded-lg bg-slate-950 border border-slate-800 text-white placeholder-slate-500 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState({ type: null, text: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: null, text: '' });

    setTimeout(() => {
      setIsSubmitting(false);
      setStatus({ type: 'success', text: 'Message sent successfully. We will contact you soon!' });
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1500);
  };

  return (
    <div className="bg-slate-950 text-slate-200">
    <div className="max-w-6xl mx-auto bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl overflow-hidden  flex flex-col lg:flex-row">

      {/* LEFT PANEL */}
      <div className="lg:w-5/12 bg-gradient-to-br from-indigo-950 to-slate-900 p-10 flex flex-col justify-between">
        <div>
          <h2 className="text-3xl font-bold text-white mb-4">
            Let’s build something great
          </h2>
          <p className="text-slate-300 mb-10">
            Share your idea and we’ll help you turn it into reality.
          </p>

          <div className="space-y-6">
            <InfoRow icon={<PhoneIcon className="w-6 h-6" />} title="Phone" value="+1 (555) 123-4567" />
            <InfoRow icon={<MailIcon className="w-6 h-6" />} title="Email" value="hello@example.com" />
            <InfoRow icon={<MapPinIcon className="w-6 h-6" />} title="Office" value="Tech City, CA" />
          </div>
        </div>
      </div>

      {/* RIGHT PANEL */}
      <div className="lg:w-7/12 p-10">
        <h3 className="text-2xl font-bold text-white mb-2">Contact Us</h3>
        <p className="text-slate-400 mb-8">
          Fill the form below and we’ll get back to you shortly.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <Field label="Full Name">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                placeholder="John Doe"
                className={inputClass}
              />
            </Field>

            <Field label="Email Address">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                placeholder="john@example.com"
                className={inputClass}
              />
            </Field>
          </div>

          <Field label="Subject">
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              required
              placeholder="Project discussion"
              className={inputClass}
            />
          </Field>

          <Field label="Message">
            <textarea
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleInputChange}
              required
              placeholder="Tell us about your project..."
              className={`${inputClass} resize-none`}
            />
          </Field>

          {status.text && (
            <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/20 text-green-400 text-sm">
              {status.text}
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-indigo-600 hover:bg-indigo-500 py-4 rounded-xl font-semibold text-white flex items-center justify-center gap-2 shadow-lg hover:shadow-indigo-500/30 transition disabled:opacity-60"
          >
            {isSubmitting ? (
              <>
                <LoaderIcon className="w-5 h-5" />
                Sending...
              </>
            ) : (
              <>
                Send Message
                <SendIcon className="w-5 h-5" />
              </>
            )}
          </button>
        </form>
      </div>
    </div>
    </div>
  );
};

/* Small reusable components */
const Field = ({ label, children }) => (
  <div>
    <label className="block text-sm text-slate-300 mb-2">{label}</label>
    {children}
  </div>
);

const InfoRow = ({ icon, title, value }) => (
  <div className="flex items-center gap-4">
    <div className="p-3 bg-slate-800 rounded-lg text-indigo-400">
      {icon}
    </div>
    <div>
      <p className="text-white font-medium">{title}</p>
      <p className="text-slate-400 text-sm">{value}</p>
    </div>
  </div>
  
);

export default ContactSection;
