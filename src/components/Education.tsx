import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { GraduationCap, MapPin, Calendar, BookOpen } from 'lucide-react'

const languages = [
  { name: 'English', level: 'Professional', pct: 90 },
  { name: 'Hindi', level: 'Native', pct: 100 },
  { name: 'Telugu', level: 'Conversational', pct: 60 },
]

export default function Education() {
  const [ref, inView] = useInView(0.1)

  return (
    <section id="education" className="py-24 lg:py-32 relative">
      <div className="max-w-5xl mx-auto px-6">
        <div ref={ref as React.RefObject<HTMLDivElement>}>
          {/* Header */}
          <div className="text-center mb-16">
            <motion.div
              className="section-label mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              07. Education
            </motion.div>
            <motion.h2
              className="section-title"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Academic <span className="gradient-text">Background</span>
            </motion.h2>
          </div>

          {/* Main education card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-8 border border-indigo-500/20 bg-gradient-to-br from-indigo-500/10 to-violet-500/10 mb-8"
          >
            <div className="flex flex-col md:flex-row items-start gap-6">
              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center flex-shrink-0">
                <GraduationCap size={30} className="text-indigo-400" />
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-white font-bold text-xl mb-1" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                      Guru Nanak Dev Engineering College
                    </h3>
                    <p className="text-indigo-400 font-medium text-sm">B.E. – Computer Science Engineering (AI & ML)</p>
                  </div>
                  <div className="flex flex-col gap-1.5 text-right">
                    <div className="flex items-center gap-2 text-xs text-[var(--text-muted)] justify-end">
                      <MapPin size={12} />
                      Bidar, Karnataka
                    </div>
                    <div className="flex items-center gap-2 text-xs text-[var(--text-muted)] justify-end">
                      <Calendar size={12} />
                      Expected 2028
                    </div>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
                  {[
                    { label: 'Current Year', value: '3rd Year' },
                    { label: 'CGPA', value: '8.0 / 10' },
                    { label: 'Specialization', value: 'AI & ML' },
                    { label: 'Degree', value: 'B.E.' },
                  ].map((stat) => (
                    <div key={stat.label} className="bg-white/[0.04] rounded-lg px-4 py-3 border border-white/[0.04]">
                      <div className="text-xs text-[var(--text-muted)] mb-1">{stat.label}</div>
                      <div className="text-sm font-semibold text-white">{stat.value}</div>
                    </div>
                  ))}
                </div>

                {/* Focus areas */}
                <div className="mt-6">
                  <div className="text-xs text-[var(--text-muted)] mb-3 flex items-center gap-1.5">
                    <BookOpen size={12} />
                    Key Focus Areas
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {[
                      'Artificial Intelligence',
                      'Machine Learning',
                      'Data Structures & Algorithms',
                      'Computer Vision',
                      'Database Management',
                      'Web Technologies',
                      'Python Programming',
                      'Software Engineering',
                    ].map((area) => (
                      <span key={area} className="tech-tag">{area}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Languages */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="glass-card p-6 border border-white/[0.06]"
          >
            <h3 className="text-white font-semibold text-base mb-6" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Languages
            </h3>
            <div className="grid sm:grid-cols-3 gap-6">
              {languages.map((lang, idx) => (
                <motion.div
                  key={lang.name}
                  initial={{ opacity: 0, x: -10 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 + idx * 0.1 }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white text-sm font-medium">{lang.name}</span>
                    <span className="text-xs text-[var(--text-muted)]">{lang.level}</span>
                  </div>
                  <div className="skill-bar-track">
                    <motion.div
                      className="skill-bar-fill"
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${lang.pct}%` } : { width: 0 }}
                      transition={{ duration: 1.2, delay: 0.6 + idx * 0.1, ease: [0.4, 0, 0.2, 1] }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
