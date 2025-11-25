import React, { useState } from 'react';
import { Send, X } from 'lucide-react';

type Props = {
  title?: string;
  isOpen: boolean;
  onClose: () => void;
};

const ContactModal: React.FC<Props> = ({ title, isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  });

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', company: '', phone: '', message: '' });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex items-center justify-center p-6">
      <div className="w-full max-w-3xl bg-black border border-white/10">
        <div className="flex items-center justify-between px-8 py-6 border-b border-white/10">
          <div>
            <h2 className="text-3xl md:text-4xl font-display font-bold uppercase tracking-widest text-white">
              {title || 'Contact Us'}
            </h2>
            <p className="text-slate-400 mt-2">Let's build the future together</p>
          </div>
          <button onClick={onClose} className="text-slate-400 hover:text-white">
            <X className="w-6 h-6" />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="px-8 py-8">
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-xs font-display uppercase tracking-widest text-slate-500 mb-2">Full Name *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-techcora-dark border border-white/10 px-4 py-3 text-white placeholder-slate-600 focus:border-techcora-orange focus:outline-none"
                placeholder="Enter your full name..."
              />
            </div>
            <div>
              <label className="block text-xs font-display uppercase tracking-widest text-slate-500 mb-2">Email Address *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-techcora-dark border border-white/10 px-4 py-3 text-white placeholder-slate-600 focus:border-techcora-orange focus:outline-none"
                placeholder="Enter your email address..."
              />
            </div>
            <div>
              <label className="block text-xs font-display uppercase tracking-widest text-slate-500 mb-2">Company Name</label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full bg-techcora-dark border border-white/10 px-4 py-3 text-white placeholder-slate-600 focus:border-techcora-orange focus:outline-none"
                placeholder="Enter your company name..."
              />
            </div>
            <div>
              <label className="block text-xs font-display uppercase tracking-widest text-slate-500 mb-2">Phone Number *</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full bg-techcora-dark border border-white/10 px-4 py-3 text-white placeholder-slate-600 focus:border-techcora-orange focus:outline-none"
                placeholder="e.g. +91 98765 43210"
              />
            </div>
          </div>
          <div className="mb-8">
            <label className="block text-xs font-display uppercase tracking-widest text-slate-500 mb-2">Message *</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="w-full bg-techcora-dark border border-white/10 px-4 py-3 text-white placeholder-slate-600 focus:border-techcora-orange focus:outline-none resize-none"
              placeholder="Enter your message..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full md:w-auto px-10 py-4 bg-techcora-orange text-white font-display font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300 flex items-center justify-center gap-3"
          >
            Send Message
            <Send className="w-4 h-4" />
          </button>
          <div className="px-1 mt-4 text-[10px] text-slate-500 uppercase tracking-widest">We respect your privacy. Your information will be kept confidential.</div>
        </form>
      </div>
    </div>
  );
};

export default ContactModal;