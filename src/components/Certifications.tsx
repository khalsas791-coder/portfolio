import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { Award, Calendar, Building2 } from 'lucide-react'

interface Cert {
  title: string
  issuer: string
  date: string
  emoji: string
  color: string
  borderColor: string
  textColor: string
}

const certifications: Cert[] = [
  {
    title: 'AI Tools & ChatGPT Workshop',
    issuer: 'be10x',
    date: 'December 28, 2025',
    emoji: '🤖',
    color: 'from-violet-500/10 to-purple-500/10',
    borderColor: 'border-violet-500/20',
    textColor: 'text-violet-400',
  },
  {
    title: 'AI Literacy',
    issuer: 'IBM SkillsBuild',
    date: 'December 20, 2025',
    emoji: '🧠',
    color: 'from-blue-500/10 to-indigo-500/10',
    borderColor: 'border-blue-500/20',
    textColor: 'text-blue-400',
  },
  {
    title: 'Installing MySQL & PHP Packages',
    issuer: 'Infosys Springboard',
    date: 'March 13, 2026',
    emoji: '🗄️',
    color: 'from-cyan-500/10 to-sky-500/10',
    borderColor: 'border-cyan-500/20',
    textColor: 'text-cyan-400',
  },
  {
    title: 'AI Assisted Coding for Beginners',
    issuer: 'AZ Career Link',
    date: 'April 12, 2026',
    emoji: '⌨️',
    color: 'from-emerald-500/10 to-teal-500/10',
    borderColor: 'border-emerald-500/20',
    textColor: 'text-emerald-400',
  },
  {
    title: 'Build with AI Agent Builder Camp',
    issuer: 'GeeksforGeeks × Google for Developers',
    date: '2026',
    emoji: '🤖',
    color: 'from-indigo-500/10 to-violet-500/10',
    borderColor: 'border-indigo-500/20',
    textColor: 'text-indigo-400',
  },
  {
    title: 'Deutsche Börse Cybersecurity Challenge',
    issuer: 'Elan & nVision 2026, IIT Hyderabad',
    date: '2026',
    emoji: '🔐',
    color: 'from-rose-500/10 to-pink-500/10',
    borderColor: 'border-rose-500/20',
    textColor: 'text-rose-400',
  },
  {
    title: 'Python Programming Internship Certificate',
    issuer: 'InternPe',
    date: 'March 9, 2026 – April 5, 2026',
    emoji: '🐍',
    color: 'from-amber-500/10 to-orange-500/10',
    borderColor: 'border-amber-500/20',
    textColor: 'text-amber-400',
  },
]

export default function Certifications() {
  const [ref, inView] = useInView(0.05)

  return (
    <section id="certifications" className="py-24 lg:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-950/10 to-transparent pointer-events-none" />
      
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
              06. Certifications
            </motion.div>
            <motion.h2
              className="section-title"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Credentials & <span className="gradient-text">Learning</span>
            </motion.h2>
            <motion.p
              className="text-[var(--text-secondary)] mt-4 max-w-xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              A record of certifications, workshops, and training programs completed across AI, development, and tech.
            </motion.p>
          </div>

          {/* Cert grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {certifications.map((cert, idx) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.1 + idx * 0.06 }}
                className={`glass-card glass-card-hover p-5 border ${cert.borderColor} bg-gradient-to-br ${cert.color} flex flex-col`}
              >
                {/* Icon + number */}
                <div className="flex items-center justify-between mb-4">
                  <div className="text-2xl">{cert.emoji}</div>
                  <div className="flex items-center justify-center w-7 h-7 rounded-full border border-white/[0.08]">
                    <Award size={12} className={cert.textColor} />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-white font-semibold text-sm leading-snug mb-2 flex-1" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  {cert.title}
                </h3>

                {/* Issuer */}
                <div className="flex items-center gap-1.5 text-xs text-[var(--text-muted)] mb-3">
                  <Building2 size={11} />
                  <span className={cert.textColor + ' font-medium'}>{cert.issuer}</span>
                </div>

                {/* Date */}
                <div className="flex items-center gap-1.5 text-xs text-[var(--text-muted)] mt-auto pt-3 border-t border-white/[0.04]">
                  <Calendar size={11} />
                  <span>{cert.date}</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Summary */}
          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 text-sm text-[var(--text-muted)]">
              <span className="gradient-text font-bold text-2xl">7</span>
              <span>certifications & credentials earned · continuously learning</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
