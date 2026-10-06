import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { Briefcase, Calendar } from 'lucide-react'

export default function Experience() {
  const [ref, inView] = useInView(0.1)

  return (
    <section id="experience" className="py-24 lg:py-32 relative">
      <div className="max-w-4xl mx-auto px-6">
        <div ref={ref as React.RefObject<HTMLDivElement>}>
          {/* Header */}
          <div className="text-center mb-16">
            <motion.div
              className="section-label mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              04. Experience
            </motion.div>
            <motion.h2
              className="section-title"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Professional <span className="gradient-text">Experience</span>
            </motion.h2>
          </div>

          {/* Timeline */}
          <div className="relative pl-10">
            <div className="timeline-line" />

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative mb-8"
            >
              {/* Dot */}
              <div className="absolute -left-[29px] top-1.5">
                <div className="timeline-dot" />
              </div>

              <div className="glass-card glass-card-hover p-7 border border-white/[0.06] bg-gradient-to-br from-indigo-500/10 to-violet-500/10">
                {/* Header */}
                <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
                  <div>
                    <div className="flex items-center gap-2.5 mb-2">
                      <div className="w-8 h-8 rounded-lg bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center">
                        <Briefcase size={15} className="text-indigo-400" />
                      </div>
                      <h3 className="text-white font-semibold text-lg" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                        Python Programming Intern
                      </h3>
                    </div>
                    <div className="text-indigo-400 font-medium text-sm">InternPe</div>
                  </div>

                  <div className="flex items-center gap-2 text-xs text-[var(--text-muted)] bg-white/[0.04] border border-white/[0.06] rounded-full px-3 py-1.5">
                    <Calendar size={12} />
                    <span>March 2026 – April 2026</span>
                  </div>
                </div>

                {/* Description */}
                <ul className="space-y-2.5">
                  {[
                    'Completed a structured Python programming internship focused on practical development tasks and programming concepts.',
                    'Strengthened core programming skills through hands-on exercises in Python data structures, algorithms, and scripting.',
                    'Worked on problem-solving tasks that reinforced programming logic and clean code practices.',
                    'Gained exposure to software development workflows and professional coding standards.',
                    'Received an internship completion certificate validating the practical training undertaken.',
                  ].map((point, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-[var(--text-secondary)]">
                      <span className="text-indigo-400 mt-1 flex-shrink-0">▸</span>
                      {point}
                    </li>
                  ))}
                </ul>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-5 pt-5 border-t border-white/[0.05]">
                  {['Python', 'Programming', 'Problem Solving', 'Software Development'].map((tag) => (
                    <span key={tag} className="tech-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Future opportunities note */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative"
            >
              <div className="absolute -left-[29px] top-1.5">
                <div className="w-4 h-4 rounded-full border-2 border-dashed border-[var(--text-muted)]/40 flex items-center justify-center" />
              </div>
              <div className="glass-card p-5 border border-dashed border-white/[0.06]">
                <p className="text-sm text-[var(--text-muted)]">
                  <span className="text-indigo-400 font-medium">Currently open to internships</span> — looking for AI/ML engineering, 
                  Python development, or full-stack development roles to continue building real-world experience.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
