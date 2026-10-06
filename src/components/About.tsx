import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { Brain, Code2, Globe, Lightbulb, Target, Zap } from 'lucide-react'

const highlights = [
  { icon: Brain, label: 'AI & Machine Learning', color: 'from-indigo-500/20 to-violet-500/20', borderColor: 'border-indigo-500/20', textColor: 'text-indigo-400' },
  { icon: Code2, label: 'Python Development', color: 'from-emerald-500/20 to-cyan-500/20', borderColor: 'border-emerald-500/20', textColor: 'text-emerald-400' },
  { icon: Globe, label: 'Full-Stack Web Dev', color: 'from-violet-500/20 to-pink-500/20', borderColor: 'border-violet-500/20', textColor: 'text-violet-400' },
  { icon: Target, label: 'Computer Vision', color: 'from-amber-500/20 to-orange-500/20', borderColor: 'border-amber-500/20', textColor: 'text-amber-400' },
  { icon: Zap, label: 'Rapid Prototyping', color: 'from-cyan-500/20 to-sky-500/20', borderColor: 'border-cyan-500/20', textColor: 'text-cyan-400' },
  { icon: Lightbulb, label: 'Real-World Projects', color: 'from-pink-500/20 to-rose-500/20', borderColor: 'border-pink-500/20', textColor: 'text-pink-400' },
]

export default function About() {
  const [ref, inView] = useInView(0.1)

  return (
    <section id="about" className="py-24 lg:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={ref as React.RefObject<HTMLDivElement>} className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="section-label mb-4"
            >
              01. About Me
            </motion.div>

            <motion.h2
              className="section-title mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Building Intelligent<br />
              <span className="gradient-text">Systems & Experiences</span>
            </motion.h2>

            <motion.div
              className="space-y-4 text-[var(--text-secondary)] leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <p>
                I'm <span className="text-white font-medium">Sardar Jaspreet Singh Kapse</span>, a 3rd-year
                Computer Science Engineering student specializing in <span className="text-indigo-400 font-medium">Artificial Intelligence & Machine Learning</span> at
                Guru Nanak Dev Engineering College, Bidar.
              </p>
              <p>
                My work spans modern software development — from building computer vision pipelines and Flask-based
                AI systems to shipping responsive full-stack web applications with React and Firebase.
                I focus on the intersection of AI and software engineering, where intelligent systems meet practical interfaces.
              </p>
              <p>
                I learn by building. Every project I take on is an opportunity to tackle new technical challenges,
                apply concepts from coursework, and ship maintainable, real-world solutions.
              </p>
              <p>
                Currently seeking <span className="text-white font-medium">AI/ML engineering, Python development,
                and full-stack roles</span> where I can contribute meaningfully and grow rapidly.
              </p>
            </motion.div>

            {/* Stats row */}
            <motion.div
              className="flex flex-wrap gap-8 mt-10"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.35 }}
            >
              {[
                { value: '8.0', label: 'CGPA', suffix: '' },
                { value: '3rd', label: 'Year', suffix: '' },
                { value: '4+', label: 'Projects', suffix: '' },
                { value: '7', label: 'Certifications', suffix: '' },
              ].map((stat) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <div className="text-2xl font-bold gradient-text" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                    {stat.value}{stat.suffix}
                  </div>
                  <div className="text-xs text-[var(--text-muted)] mt-0.5 tracking-wide">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Highlight cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-3">
            {highlights.map((h, i) => (
              <motion.div
                key={h.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.1 + i * 0.07 }}
                className={`glass-card glass-card-hover p-4 border ${h.borderColor} bg-gradient-to-br ${h.color}`}
              >
                <div className={`mb-3 ${h.textColor}`}>
                  <h.icon size={22} />
                </div>
                <div className="text-sm font-medium text-[var(--text-primary)] leading-tight">{h.label}</div>
              </motion.div>
            ))}

            {/* Location card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.55 }}
              className="glass-card p-4 border border-white/[0.06] col-span-2 sm:col-span-3 lg:col-span-2 xl:col-span-3"
            >
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-base">📍</span>
                </div>
                <div>
                  <div className="text-xs text-[var(--text-muted)] mb-0.5">Currently based in</div>
                  <div className="text-sm text-white font-medium">Karimnagar, Telangana, India</div>
                  <div className="text-xs text-[var(--text-muted)] mt-1">Open to remote & relocation opportunities</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
