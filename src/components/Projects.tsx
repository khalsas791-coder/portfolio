import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { ExternalLink } from 'lucide-react'
import { GithubIcon } from './GithubIcon'

interface Project {
  number: string
  title: string
  description: string
  longDesc: string
  features?: string[]
  tags: string[]
  github?: string
  live?: string
  status: string
  statusColor: string
  gradient: string
  emoji: string
}

const projects: Project[] = [
  {
    number: '01',
    title: 'Face Recognition Attendance System',
    description: 'Automated attendance management using computer vision and facial biometrics.',
    longDesc:
      'A Flask-based attendance management system using computer vision and face recognition to identify students and automatically record attendance. Features admin authentication, student management, and a real-time dashboard backed by a relational database.',
    features: [
      'Real-time face detection & recognition pipeline',
      'Student registration & management system',
      'Automated attendance recording & history',
      'Admin authentication & protected dashboard',
      'Face encoding storage with SQLAlchemy ORM',
      'Modular architecture with Flask Blueprints',
    ],
    tags: ['Python', 'Flask', 'OpenCV', 'face_recognition', 'SQLAlchemy', 'SQLite'],
    status: 'Completed',
    statusColor: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
    gradient: 'from-indigo-500/10 to-violet-500/10',
    emoji: '🎯',
  },
  {
    number: '02',
    title: 'AIML Portal',
    description: 'A modern web platform to organize and showcase AI/ML resources and projects.',
    longDesc:
      'A modern AI/ML-focused web platform designed to organize and present AI/ML resources, tools, projects, and learning content. Built with a responsive component architecture, smooth interactions, and a clean information hierarchy.',
    features: [
      'Responsive React component architecture',
      'AI/ML resource & project showcase',
      'Modern UI with Tailwind CSS styling',
      'Fast build toolchain with Vite',
      'Deployed to version control on GitHub',
    ],
    tags: ['React', 'Vite', 'Tailwind CSS', 'JavaScript'],
    github: 'https://github.com/khalsas791-coder/aiml-portal',
    status: 'Active',
    statusColor: 'text-indigo-400 bg-indigo-500/10 border-indigo-500/20',
    gradient: 'from-violet-500/10 to-purple-500/10',
    emoji: '🤖',
  },
  {
    number: '03',
    title: 'Premium Watch Website',
    description: 'Elegant product-focused website for a luxury watch brand with immersive UI.',
    longDesc:
      'A premium watch showcase website featuring smooth reveal animations, interactive product presentation, and a modern e-commerce aesthetic built entirely with vanilla HTML, CSS, and JavaScript — demonstrating strong front-end fundamentals.',
    features: [
      'CSS scroll-triggered reveal animations',
      'Interactive product display with JavaScript',
      'Fully responsive layout across all viewports',
      'Premium typography & visual hierarchy',
      'Optimized asset loading for performance',
    ],
    tags: ['HTML', 'CSS', 'JavaScript', 'Animations'],
    status: 'Completed',
    statusColor: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
    gradient: 'from-amber-500/10 to-orange-500/10',
    emoji: '⌚',
  },
  {
    number: '04',
    title: 'Mango Bliss',
    description: 'Vibrant, responsive e-commerce web experience for mango-based products.',
    longDesc:
      'A visually rich, responsive website for a mango-themed brand, featuring real-time product management via Firebase, cloud deployment on Vercel, and a modern front-end stack — demonstrating full-stack integration from UI to cloud.',
    features: [
      'React component-based UI architecture',
      'Firebase real-time database integration',
      'Responsive product listing & display',
      'Cloud deployment via Vercel',
      'Tailwind CSS for rapid, consistent styling',
    ],
    tags: ['React', 'Vite', 'Tailwind CSS', 'Firebase', 'Vercel'],
    status: 'Deployed',
    statusColor: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20',
    gradient: 'from-yellow-500/10 to-amber-500/10',
    emoji: '🥭',
  },
]

export default function Projects() {
  const [ref, inView] = useInView(0.05)

  return (
    <section id="projects" className="py-24 lg:py-32 relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-950/10 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Header */}
        <div ref={ref as React.RefObject<HTMLDivElement>} className="text-center mb-16">
          <motion.div
            className="section-label mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            03. Projects
          </motion.div>
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Things I've <span className="gradient-text">Built</span>
          </motion.h2>
          <motion.p
            className="text-[var(--text-secondary)] mt-4 max-w-xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            A selection of projects spanning AI/ML systems, web platforms, and interactive experiences.
          </motion.p>
        </div>

        {/* Project cards grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
          {projects.map((project, idx) => (
            <ProjectCard key={project.number} project={project} index={idx} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project, index, inView }: { project: Project; index: number; inView: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
      className={`glass-card glass-card-hover p-6 border border-white/[0.06] bg-gradient-to-br ${project.gradient} flex flex-col h-full`}
    >
      {/* Top: Number + Status */}
      <div className="flex items-center justify-between mb-5">
        <span className="card-number">/{project.number}</span>
        <span className={`text-xs px-2.5 py-1 rounded-full border font-medium ${project.statusColor}`}>
          {project.status}
        </span>
      </div>

      {/* Emoji + Title */}
      <div className="mb-3">
        <div className="text-3xl mb-3">{project.emoji}</div>
        <h3 className="text-white font-semibold text-lg leading-snug mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
          {project.title}
        </h3>
        <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
          {project.longDesc}
        </p>
      </div>

      {/* Features list */}
      {project.features && (
        <ul className="mt-3 space-y-1.5 mb-4">
          {project.features.map((f) => (
            <li key={f} className="flex items-start gap-2 text-xs text-[var(--text-muted)]">
              <span className="text-indigo-400 mt-0.5 flex-shrink-0">▸</span>
              <span>{f}</span>
            </li>
          ))}
        </ul>
      )}

      {/* Spacer */}
      <div className="flex-1" />

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 mt-4 mb-4">
        {project.tags.map((tag) => (
          <span key={tag} className="tech-tag">
            {tag}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex items-center gap-3 pt-4 border-t border-white/[0.05]">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs text-[var(--text-muted)] hover:text-white transition-colors group"
          >
            <div className="group-hover:scale-110 transition-transform">
              <GithubIcon size={14} />
            </div>
            View Code
          </a>
        )}
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs text-[var(--text-muted)] hover:text-indigo-400 transition-colors"
          >
            <ExternalLink size={14} />
            Live Demo
          </a>
        )}
        {!project.github && !project.live && (
          <span className="text-xs text-[var(--text-muted)] flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400/60 inline-block" />
            Private Repository
          </span>
        )}
      </div>
    </motion.div>
  )
}
