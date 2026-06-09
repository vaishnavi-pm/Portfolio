import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail, MapPin, ArrowUpRight, Send, CheckCircle2, Sparkles } from 'lucide-react';
import emailjs from '@emailjs/browser';

const FloatingInput = ({ label, type = 'text', name, value, onChange, required, as = 'input', rows }) => {
  const [focused, setFocused] = useState(false);
  const hasValue = value && value.length > 0;
  const isFloating = focused || hasValue;
  const Tag = as;

  return (
    <div className="relative group">
      <Tag
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        rows={rows}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className={`
          w-full bg-transparent border-b-2 pt-6 pb-2 px-0 text-white text-base
          outline-none resize-none transition-all duration-300 peer
          ${focused ? 'border-[#c8f65d]' : 'border-white/20'}
          ${as === 'textarea' ? 'min-h-[120px]' : ''}
          placeholder-transparent
        `}
        placeholder={label}
      />
      <label
        className={`
          absolute left-0 transition-all duration-300 pointer-events-none font-medium
          ${isFloating
            ? 'top-0 text-xs text-[#c8f65d]'
            : 'top-6 text-base text-white/40'
          }
        `}
      >
        {label}
      </label>
      <motion.div
        className="absolute bottom-0 left-0 h-[2px] bg-[#c8f65d]"
        animate={{ width: focused ? '100%' : '0%' }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      />
    </div>
  );
};

const Contact = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });

  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (error) setError(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_name: 'Vaishnavi PM',
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 6000);
    } catch (err) {
      console.error('EmailJS error:', err);
      setError('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/vaishnavi-pm-/' },
    { label: 'GitHub', href: 'https://github.com/vaishnavi-pm' },
  ];

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative py-24 lg:py-32 bg-[#0a0a0a] overflow-hidden"
    >
      {/* Background grain texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: '200px',
        }}
      />

      {/* Accent blobs */}
      <div className="pointer-events-none absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-[#c8f65d]/5 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-[#c8f65d]/4 blur-[100px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-20"
        >
          <div className="flex items-center gap-3 mb-6">
            <motion.div
              initial={{ scale: 0, rotate: -30 }}
              animate={isInView ? { scale: 1, rotate: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.5, type: 'spring' }}
              className="flex items-center gap-2 bg-[#c8f65d]/10 border border-[#c8f65d]/30 rounded-full px-4 py-1.5"
            >
              <Sparkles size={13} className="text-[#c8f65d]" />
              <span className="text-[#c0000] text-xs font-semibold tracking-widest uppercase">
                Let's work together
              </span>
            </motion.div>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <h2
              className="text-[clamp(3rem,8vw,7rem)] font-black leading-[0.9] text-white tracking-tight"
              style={{ fontFamily: "'Syne', 'Space Grotesk', sans-serif" }}
            >
              Get in
              <br />
              <span className="text-[#c8f65d]">touch.</span>
            </h2>

            <p className="text-white/40 text-base max-w-xs leading-relaxed lg:mb-2">
              Have a project in mind? I'd love to hear about it. Send a message and I'll get back to you as soon as possible.
            </p>
          </div>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0, originX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ delay: 0.4, duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 h-px bg-white/10"
          />
        </motion.div>

        {/* Main grid */}
        <div className="grid lg:grid-cols-5 gap-16 lg:gap-24">

          {/* LEFT — Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-2 flex flex-col justify-between gap-12"
          >
            {/* Contact cards */}
            <div className="space-y-4">
              {[
                {
                  icon: Mail,
                  label: 'Email me at',
                  value: 'vaishpm15@gmail.com',
                  href: 'mailto:vaishpm15@gmail.com',
                },
                {
                  icon: MapPin,
                  label: 'Based in',
                  value: 'CHENNAI,INDIA',
                  href: '#',
                },
              ].map((item, i) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.6 }}
                  whileHover={{ x: 8 }}
                  className="group flex items-center gap-5 p-5 rounded-2xl border border-white/8 bg-white/[0.03] hover:border-[#c8f65d]/30 hover:bg-[#c8f65d]/5 transition-all duration-300"
                >
                  <div className="w-11 h-11 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-[#c8f65d]/15 transition-colors duration-300 shrink-0">
                    <item.icon size={18} className="text-white/50 group-hover:text-[#c8f65d] transition-colors duration-300" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-white/35 mb-0.5 tracking-wide">{item.label}</p>
                    <p className="text-white/80 text-sm font-medium group-hover:text-white truncate transition-colors duration-300">
                      {item.value}
                    </p>
                  </div>
                  <ArrowUpRight
                    size={14}
                    className="ml-auto text-white/20 group-hover:text-[#c8f65d] shrink-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </motion.a>
              ))}
            </div>

            {/* Social links */}
            <div>
              <p className="text-xs text-white/30 tracking-widest uppercase mb-5 font-medium">Find me online</p>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((s, i) => (
                  <motion.a
                    key={s.label}
                    href={s.href}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.5 + i * 0.07, duration: 0.4 }}
                    whileHover={{ y: -3, backgroundColor: 'rgba(200, 246, 93, 0.12)', borderColor: 'rgba(200, 246, 93, 0.4)', color: '#c8f65d' }}
                    className="px-5 py-2 rounded-full border border-white/12 text-white/50 text-sm font-medium transition-all duration-200 cursor-pointer"
                  >
                    {s.label}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Availability badge */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.7 }}
              className="inline-flex items-center gap-3 self-start"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#c8f65d] opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#c8f65d]" />
              </span>
              <span className="text-white/40 text-sm">Available for new projects</span>
            </motion.div>
          </motion.div>

          {/* RIGHT — Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-3"
          >
            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: -20 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="flex flex-col items-center justify-center text-center min-h-[400px] rounded-3xl border border-[#c8f65d]/20 bg-[#c8f65d]/5 p-12"
                >
                  <motion.div
                    initial={{ scale: 0, rotate: -45 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
                    className="w-16 h-16 rounded-2xl bg-[#c8f65d] flex items-center justify-center mb-6"
                  >
                    <CheckCircle2 size={28} className="text-black" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-white mb-3">Message sent!</h3>
                  <p className="text-white/40 text-sm max-w-xs">
                    Thanks for reaching out. I'll get back to you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-10"
                >
                  <div className="grid sm:grid-cols-2 gap-10">
                    <FloatingInput
                      label="Your name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                    <FloatingInput
                      label="Email address"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <FloatingInput
                    label="Subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />

                  <FloatingInput
                    label="Tell me about your project..."
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    as="textarea"
                    rows={4}
                  />

                  {error && (
                    <motion.p
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-400 text-sm"
                    >
                      {error}
                    </motion.p>
                  )}

                  <div className="pt-2 flex items-center justify-between gap-6">

                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      className={`
                        relative flex items-center gap-3 px-8 py-4 rounded-2xl font-semibold text-sm
                        overflow-hidden transition-all duration-300 shrink-0
                        ${isSubmitting
                          ? 'bg-[#c8f65d]/60 text-black/60 cursor-not-allowed'
                          : 'bg-[#c8f65d] text-black hover:bg-[#d4fc6b] cursor-pointer'
                        }
                      `}
                    >
                      <AnimatePresence mode="wait">
                        {isSubmitting ? (
                          <motion.span
                            key="loading"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="flex items-center gap-2"
                          >
                            <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                            </svg>
                            Sending...
                          </motion.span>
                        ) : (
                          <motion.span
                            key="send"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="flex items-center gap-2"
                          >
                            Send message
                            <Send size={15} />
                          </motion.span>
                        )}
                      </AnimatePresence>
                    </motion.button>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Bottom strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="mt-24 pt-8 border-t border-white/8 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <p className="text-white/20 text-sm">
            Open to full-time & freelance
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;