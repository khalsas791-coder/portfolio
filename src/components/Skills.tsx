import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'

interface SkillGroup {
  category: string
  emoji: string
  color: string
  skills: string[]
}

const skillGroups: SkillGroup[] = [
  {
    category: 'Programming Languages',
    emoji: '⌨️',
    color: 'from-indigo-500/10 to-violet-500/10 border-indigo-500/20',
    skills: ['Python', 'JavaScript', 'Java', 'C'],
  },
  {
    category: 'AI / Machine Learning',
    emoji: '🤖',
    color: 'from-violet-500/10 to-purple-500/10 border-violet-500/20',
    skills: ['Artificial Intelligence', 'Machine Learning', 'Computer Vision', 'Face Recognition'],
  },
  {
    category: 'Data & Analytics',
    emoji: '📊',
    color: 'from-cyan-500/10 to-sky-500/10 border-cyan-500/20',
    skills: ['Data Analysis', 'Pandas', 'NumPy', 'SQL', 'MySQL'],
  },
  {
    category: 'Web Development',
    emoji: '🌐',
    color: 'from-emerald-500/10 to-teal-500/10 border-emerald-500/20',
    skills: ['HTML', 'CSS', 'React', 'Flask', 'Node.js', 'REST APIs', 'Tailwind CSS'],
  },
  {
    category: 'Databases',
    emoji: '🗄️',
    color: 'from-amber-500/10 to-orange-500/10 border-amber-500/20',
    skills: ['MySQL', 'SQLite', 'MongoDB', 'Firebase', 'Supabase'],
  },
  {
    category: 'Libraries & Frameworks',
    emoji: '📦',
    color: 'from-sky-500/10 to-blue-500/10 border-sky-500/20',
    skills: ['OpenCV', 'face_recognition', 'SQLAlchemy', 'Framer Motion', 'Vite'],
  },
  {
    category: 'Tools & Platforms',
    emoji: '🛠️',
    color: 'from-rose-500/10 to-pink-500/10 border-rose-500/20',
    skills: ['Git', 'GitHub', 'VS Code', 'Vercel', 'Google Cloud'],
  },
]

export default function Skills() {
  const [ref, inView] = useInView(0.05)

  return (
    <section id="skills" className="py-24 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div ref={ref as React.RefObject<HTMLDivElement>} className="text-center mb-16">
          <motion.div
            className="section-label mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            02. Skills
          </motion.div>
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Technical <span className="gradient-text">Arsenal</span>
          </motion.h2>
          <motion.p
            className="text-[var(--text-secondary)] mt-4 max-w-xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Technologies, frameworks, and tools I work with across AI/ML, web development, and data engineering.
          </motion.p>
        </div>

        {/* Skill Groups */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillGroups.map((group, groupIdx) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + groupIdx * 0.07 }}
              className={`glass-card glass-card-hover p-6 border bg-gradient-to-br ${group.color}`}
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-5">
                <span className="text-xl">{group.emoji}</span>
                <h3 className="font-semibold text-white text-sm" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  {group.category}
                </h3>
              </div>

              {/* Skill tags */}
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span key={skill} className="tech-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
