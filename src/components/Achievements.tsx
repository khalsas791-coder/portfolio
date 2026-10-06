import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { Trophy } from 'lucide-react'

const achievements = [
  {
    emoji: '🏆',
    title: 'Smart India Hackathon 2025',
    subtitle: 'Internal College Selection Round',
    description: 'Participated in the internal college-level Smart India Hackathon 2025 selection event and presented an innovative idea with Team Travel Shield.',
    tags: ['Hackathon', 'Team Travel Shield', 'Innovation'],
    color: 'from-amber-500/10 to-orange-500/10 border-amber-500/20',
  },
  {
    emoji: '🔐',
    title: 'Deutsche Börse Cybersecurity Challenge',
    subtitle: 'Elan & nVision 2026 · IIT Hyderabad',
    description: 'Participated in the Deutsche Börse Cybersecurity Challenge as part of the prestigious Elan & nVision 2026 tech fest at IIT Hyderabad.',
    tags: ['Cybersecurity', 'IIT Hyderabad', 'Competition'],
    color: 'from-indigo-500/10 to-violet-500/10 border-indigo-500/20',
  },
  {
    emoji: '🤖',
    title: 'Build with AI Agent Builder Camp',
    subtitle: 'GeeksforGeeks × Google for Developers',
    description: 'Participated in the Build with AI Agent Builder Camp organized by GeeksforGeeks in collaboration with Google for Developers — focused on building AI agents.',
    tags: ['AI Agents', 'Google', 'GeeksforGeeks'],
    color: 'from-emerald-500/10 to-cyan-500/10 border-emerald-500/20',
  },
  {
    emoji: '💡',
    title: 'AI-Focused Workshops & Learning Events',
    subtitle: 'Technical Development',
    description: 'Actively participated in AI-focused workshops, seminars, and hands-on technical learning sessions to stay current with emerging AI trends and tools.',
    tags: ['AI', 'Workshops', 'Learning'],
    color: 'from-violet-500/10 to-purple-500/10 border-violet-500/20',
  },
  {
    emoji: '🎯',
    title: 'Technical College Activities',
    subtitle: 'Competitions & Events',
    description: 'Actively engaged in technical college activities, competitions, and inter-college events — consistently seeking opportunities to apply and expand technical skills.',
    tags: ['Competitions', 'Technical Events', 'Leadership'],
    color: 'from-rose-500/10 to-pink-500/10 border-rose-500/20',
  },
]

export default function Achievements() {
  const [ref, inView] = useInView(0.05)

  return (
    <section id="achievements" className="py-24 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={ref as React.RefObject<HTMLDivElement>}>
          {/* Header */}
          <div className="text-center mb-16">
            <motion.div
              className="section-label mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              05. Achievements
            </motion.div>
            <motion.h2
              className="section-title"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Activities & <span className="gradient-text">Milestones</span>
            </motion.h2>
          </div>

          {/* Achievement cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {achievements.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + idx * 0.08 }}
                className={`glass-card glass-card-hover p-6 border bg-gradient-to-br ${item.color}`}
              >
                <div className="flex items-start gap-4">
                  <div className="text-3xl flex-shrink-0">{item.emoji}</div>
                  <div className="min-w-0">
                    <h3 className="text-white font-semibold text-sm leading-snug mb-1" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                      {item.title}
                    </h3>
                    <div className="text-xs text-indigo-400 font-medium mb-3">{item.subtitle}</div>
                    <p className="text-xs text-[var(--text-secondary)] leading-relaxed mb-4">
                      {item.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {item.tags.map((tag) => (
                        <span key={tag} className="tech-tag text-[0.65rem] px-2 py-0.5">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom quote */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-12 text-center"
          >
            <div className="inline-flex items-center gap-3 glass-card px-6 py-4 border border-white/[0.06]">
              <Trophy size={16} className="text-amber-400" />
              <span className="text-sm text-[var(--text-secondary)]">
                Continuously seeking <span className="text-white font-medium">new challenges</span> and learning experiences in AI, tech, and beyond.
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
