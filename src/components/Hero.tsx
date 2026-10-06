import { useEffect, useState } from 'react'
import jaspreetPhoto from '../assets/jaspreet.png'
import { motion } from 'framer-motion'
import { Mail, ArrowDown, Download, ExternalLink, GraduationCap, Star, FolderOpen, Award } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './GithubIcon'

const roles = [
  'AI/ML Engineer',
  'Python Developer',
  'Full-Stack Developer',
  'Computer Vision Developer',
  'Problem Solver',
]

const recruiterStats = [
  { icon: GraduationCap, label: 'B.E. CSE (AI & ML)', value: '3rd Year' },
  { icon: Star, label: 'CGPA', value: '8.0 / 10' },
  { icon: FolderOpen, label: 'Projects', value: '4+' },
  { icon: Award, label: 'Certifications', value: '7' },
]

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [typing, setTyping] = useState(true)

  useEffect(() => {
    const role = roles[roleIndex]
    let timeout: ReturnType<typeof setTimeout>
    if (typing) {
      if (displayed.length < role.length) {
        timeout = setTimeout(() => setDisplayed(role.slice(0, displayed.length + 1)), 60)
      } else {
        timeout = setTimeout(() => setTyping(false), 2200)
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35)
      } else {
        setRoleIndex((prev) => (prev + 1) % roles.length)
        setTyping(true)
      }
    }
    return () => clearTimeout(timeout)
  }, [displayed, typing, roleIndex])

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background orbs */}
      <div className="orb w-[600px] h-[600px] bg-indigo-600" style={{ top: '-10%', left: '-15%', animationDelay: '0s' }} />
      <div className="orb w-[500px] h-[500px] bg-violet-600" style={{ bottom: '-10%', right: '-10%', animationDelay: '4s' }} />
      <div className="orb w-[300px] h-[300px] bg-cyan-500" style={{ top: '40%', right: '20%', animationDelay: '8s', opacity: 0.07 }} />

      {/* Gradient overlay top fade */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[var(--bg-primary)] pointer-events-none" style={{ top: '60%' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 lg:py-40 flex flex-col lg:flex-row items-center gap-16">
        {/* Left content */}
        <div className="flex-1 text-center lg:text-left">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-xs text-indigo-300 font-medium mb-6"
            style={{ fontFamily: 'JetBrains Mono, monospace' }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Open to Opportunities · Karimnagar, Telangana
          </motion.div>

          {/* Name */}
          <motion.h1
            className="hero-name text-white mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Sardar{' '}
            <span className="gradient-text">Jaspreet</span>
            <br />
            Singh Kapse
          </motion.h1>

          {/* Typing role */}
          <motion.div
            className="hero-role text-[var(--text-secondary)] mb-6 min-h-[2rem]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="text-indigo-400 font-medium">{displayed}</span>
            <span className="typing-cursor" />
          </motion.div>

          {/* Description */}
          <motion.p
            className="text-[var(--text-secondary)] text-base leading-relaxed max-w-xl mx-auto lg:mx-0 mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Computer Science Engineering student specializing in AI & Machine Learning,
            building practical computer vision systems, full-stack web applications,
            and intelligent software — from prototype to deployment.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-wrap gap-3 justify-center lg:justify-start mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <button
              onClick={() => scrollToSection('projects')}
              className="btn-primary flex items-center gap-2"
              id="hero-view-projects"
            >
              <ExternalLink size={15} />
              View Projects
            </button>
            <a
              href="/Sardar_Jaspreet_Singh_Kapse_Resume.pdf"
              download
              className="btn-secondary flex items-center gap-2"
              id="hero-download-resume"
            >
              <Download size={15} />
              Download Resume
            </a>
            <button
              onClick={() => scrollToSection('contact')}
              className="btn-secondary flex items-center gap-2"
              id="hero-contact"
            >
              <Mail size={15} />
              Contact Me
            </button>
          </motion.div>

          {/* Recruiter Snapshot */}
          <motion.div
            className="flex flex-wrap gap-3 justify-center lg:justify-start mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            {recruiterStats.map((stat) => (
              <div
                key={stat.label}
                className="flex items-center gap-2 px-3 py-2 rounded-lg border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm"
              >
                <stat.icon size={12} className="text-indigo-400 flex-shrink-0" />
                <div className="text-left">
                  <div className="text-[0.6rem] text-[var(--text-muted)] leading-none mb-0.5" style={{ fontFamily: 'JetBrains Mono, monospace' }}>{stat.label}</div>
                  <div className="text-xs font-semibold text-white leading-none">{stat.value}</div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Social links */}
          <motion.div
            className="flex items-center gap-4 justify-center lg:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <a
              href="https://github.com/khalsas791-coder"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[var(--text-muted)] hover:text-white transition-colors group"
              id="hero-github-link"
            >
              <div className="w-9 h-9 rounded-lg border border-white/[0.08] flex items-center justify-center group-hover:border-indigo-500/40 group-hover:bg-indigo-500/10 transition-all">
                <GithubIcon size={17} />
              </div>
              <span className="text-sm hidden sm:block">GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/jaspreet-singh-23418b358/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[var(--text-muted)] hover:text-white transition-colors group"
              id="hero-linkedin-link"
            >
              <div className="w-9 h-9 rounded-lg border border-white/[0.08] flex items-center justify-center group-hover:border-indigo-500/40 group-hover:bg-indigo-500/10 transition-all">
                <LinkedinIcon size={17} />
              </div>
              <span className="text-sm hidden sm:block">LinkedIn</span>
            </a>
            <a
              href="mailto:khalsas791@gmail.com"
              className="flex items-center gap-2 text-[var(--text-muted)] hover:text-white transition-colors group"
              id="hero-email-link"
            >
              <div className="w-9 h-9 rounded-lg border border-white/[0.08] flex items-center justify-center group-hover:border-indigo-500/40 group-hover:bg-indigo-500/10 transition-all">
                <Mail size={17} />
              </div>
              <span className="text-sm hidden sm:block">Email</span>
            </a>
          </motion.div>
        </div>

        {/* Right: Avatar / Visual */}
        <motion.div
          className="relative flex-shrink-0"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="relative w-64 h-64 lg:w-80 lg:h-80">
            {/* Outer ring */}
            <div className="absolute inset-0 rounded-full border border-indigo-500/20 animate-spin" style={{ animationDuration: '20s' }} />
            <div className="absolute inset-3 rounded-full border border-violet-500/15 animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }} />
            
            {/* Glow */}
            <div className="absolute inset-8 rounded-full bg-gradient-to-br from-indigo-600/30 to-violet-600/30 blur-2xl" />
            
            {/* Avatar container */}
            <div className="absolute inset-8 rounded-full bg-gradient-to-br from-indigo-900/60 to-violet-900/60 border border-white/10 flex items-center justify-center overflow-hidden backdrop-blur-sm">
              {/* Profile Photo */}
              <img
                src={jaspreetPhoto}
                alt="Sardar Jaspreet Singh Kapse"
                className="w-full h-full object-cover object-top rounded-full"
              />
            </div>

            {/* Floating badges */}
            <motion.div
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-2 -right-4 glass-card px-3 py-1.5 text-xs font-medium text-emerald-300 border border-emerald-500/20"
            >
              🤖 AI & ML
            </motion.div>
            <motion.div
              animate={{ y: [5, -5, 5] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-2 -left-4 glass-card px-3 py-1.5 text-xs font-medium text-indigo-300 border border-indigo-500/20"
            >
              ⚡ Python Dev
            </motion.div>
            <motion.div
              animate={{ x: [-3, 3, -3] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute top-1/2 -right-12 glass-card px-3 py-1.5 text-xs font-medium text-violet-300 border border-violet-500/20"
              style={{ transform: 'translateY(-50%)' }}
            >
              🌐 Web Dev
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() => scrollToSection('about')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[var(--text-muted)] hover:text-indigo-400 transition-colors"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        aria-label="Scroll to about"
      >
        <span className="text-xs tracking-widest" style={{ fontFamily: 'JetBrains Mono, monospace' }}>SCROLL</span>
        <ArrowDown size={16} />
      </motion.button>
    </section>
  )
}
