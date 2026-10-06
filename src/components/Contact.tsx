import { useState, FormEvent } from 'react'
import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { Mail, Send, MapPin, CheckCircle } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './GithubIcon'

const contactItems = [
  {
    label: 'Email',
    value: 'khalsas791@gmail.com',
    href: 'mailto:khalsas791@gmail.com',
    color: 'text-indigo-400',
    bg: 'from-indigo-500/10 to-violet-500/10 border-indigo-500/20',
    iconType: 'mail' as const,
  },
  {
    label: 'LinkedIn',
    value: 'jaspreet-singh-23418b358',
    href: 'https://www.linkedin.com/in/jaspreet-singh-23418b358/',
    color: 'text-sky-400',
    bg: 'from-sky-500/10 to-blue-500/10 border-sky-500/20',
    iconType: 'linkedin' as const,
  },
  {
    label: 'GitHub',
    value: 'khalsas791-coder',
    href: 'https://github.com/khalsas791-coder',
    color: 'text-violet-400',
    bg: 'from-violet-500/10 to-purple-500/10 border-violet-500/20',
    iconType: 'github' as const,
  },
]

function ContactIcon({ type, className }: { type: string; className: string }) {
  const size = 18
  if (type === 'mail') return <Mail size={size} className={className} />
  if (type === 'linkedin') return <LinkedinIcon size={size} className={className} />
  if (type === 'github') return <GithubIcon size={size} className={className} />
  return null
}

export default function Contact() {
  const [ref, inView] = useInView(0.1)
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setSending(true)
    setErrorMessage('')

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: accessKey || 'YOUR_ACCESS_KEY_HERE',
          name: formData.name,
          email: formData.email,
          message: formData.message,
          from_name: `${formData.name} (Portfolio Contact)`,
          subject: `New Message from Portfolio - ${formData.name}`,
        }),
      })

      const data = await response.json()

      if (data.success) {
        setSubmitted(true)
        setFormData({ name: '', email: '', message: '' })
      } else {
        setErrorMessage(data.message || 'Failed to send message. Please try again.')
      }
    } catch {
      setErrorMessage('Network error. Please try again or contact directly via khalsas791@gmail.com')
    } finally {
      setSending(false)
    }
  }

  return (
    <section id="contact" className="py-24 lg:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-950/10 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative">
        <div ref={ref as React.RefObject<HTMLDivElement>}>
          {/* Header */}
          <div className="text-center mb-16">
            <motion.div
              className="section-label mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              08. Contact
            </motion.div>
            <motion.h2
              className="section-title"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Let's <span className="gradient-text">Connect</span>
            </motion.h2>
            <motion.p
              className="text-[var(--text-secondary)] mt-4 max-w-xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Open to internship opportunities, collaborations, and conversations about AI,
              Python development, and software engineering. Feel free to reach out!
            </motion.p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left: Contact info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="mb-8">
                <h3 className="text-white font-semibold text-lg mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  Get in Touch
                </h3>
                <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                  Whether you have an opportunity to share, a project to discuss, or just want to say hi —
                  my inbox is always open.
                </p>
              </div>

              <div className="space-y-4">
                {contactItems.map((info, idx) => (
                  <motion.a
                    key={info.label}
                    href={info.href}
                    target={info.href.startsWith('http') ? '_blank' : undefined}
                    rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + idx * 0.07 }}
                    className={`flex items-center gap-4 glass-card glass-card-hover p-4 border bg-gradient-to-br ${info.bg} group`}
                  >
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center bg-white/[0.05] group-hover:bg-white/[0.08] transition-colors`}>
                      <ContactIcon type={info.iconType} className={info.color} />
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs text-[var(--text-muted)] mb-0.5">{info.label}</div>
                      <div className={`text-sm font-medium ${info.color} truncate`}>{info.value}</div>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Location */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="mt-6 flex items-center gap-3 text-sm text-[var(--text-muted)]"
              >
                <MapPin size={14} className="text-indigo-400" />
                Karimnagar, Telangana, India · Open to remote & relocation
              </motion.div>
            </motion.div>

            {/* Right: Contact form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="glass-card p-8 border border-white/[0.06]">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center text-center py-10 gap-4"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center">
                      <CheckCircle size={30} className="text-emerald-400" />
                    </div>
                    <h3 className="text-white font-semibold text-lg" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                      Message Sent!
                    </h3>
                    <p className="text-[var(--text-secondary)] text-sm">
                      Thanks for reaching out. I'll get back to you as soon as possible.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="btn-secondary text-sm mt-2"
                    >
                      Send Another
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label className="text-xs text-[var(--text-muted)] block mb-2 tracking-wide">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="form-input"
                        id="contact-name"
                      />
                    </div>
                    <div>
                      <label className="text-xs text-[var(--text-muted)] block mb-2 tracking-wide">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="you@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="form-input"
                        id="contact-email"
                      />
                    </div>
                    <div>
                      <label className="text-xs text-[var(--text-muted)] block mb-2 tracking-wide">
                        Message
                      </label>
                      <textarea
                        required
                        rows={5}
                        placeholder="Hi Jaspreet, I'd love to discuss an opportunity..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="form-input resize-none"
                        id="contact-message"
                      />
                    </div>

                    {errorMessage && (
                      <div className="p-3 text-xs text-rose-400 bg-rose-500/10 border border-rose-500/20 rounded-lg">
                        {errorMessage}
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={sending}
                      className="btn-primary w-full flex items-center justify-center gap-2 py-3"
                      id="contact-submit"
                    >
                      {sending ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send size={15} />
                          Send Message
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
