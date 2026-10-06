import { Mail, ArrowUp } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './GithubIcon'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="relative border-t border-white/[0.05] bg-[rgba(5,5,8,0.8)] backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="text-white font-bold text-lg mb-1" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Sardar Jaspreet<br />Singh Kapse
            </div>
            <div className="text-xs text-[var(--text-muted)] mt-1 mb-4" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
              AI & ML · Python · Full-Stack Development
            </div>
            <p className="text-sm text-[var(--text-muted)] leading-relaxed">
              Building intelligent systems and modern web experiences.
              Open to exciting opportunities in AI/ML and software engineering.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault()
                      document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' })
                    }}
                    className="text-sm text-[var(--text-muted)] hover:text-indigo-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Connect</h4>
            <div className="space-y-3">
              <a
                href="mailto:khalsas791@gmail.com"
                className="flex items-center gap-2.5 text-sm text-[var(--text-muted)] hover:text-white transition-colors group"
              >
                <Mail size={14} className="text-indigo-400 group-hover:scale-110 transition-transform" />
                khalsas791@gmail.com
              </a>
              <a
                href="https://www.linkedin.com/in/jaspreet-singh-23418b358/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-sm text-[var(--text-muted)] hover:text-white transition-colors group"
              >
                <LinkedinIcon size={14} className="text-sky-400 group-hover:scale-110 transition-transform" />
                LinkedIn Profile
              </a>
              <a
                href="https://github.com/khalsas791-coder"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-sm text-[var(--text-muted)] hover:text-white transition-colors group"
              >
                <GithubIcon size={14} className="text-violet-400 group-hover:scale-110 transition-transform" />
                GitHub
              </a>
            </div>

            {/* Social icon row */}
            <div className="flex gap-3 mt-6">
              <a
                href="https://github.com/khalsas791-coder"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg border border-white/[0.08] flex items-center justify-center text-[var(--text-muted)] hover:text-white hover:border-indigo-500/40 hover:bg-indigo-500/10 transition-all"
                aria-label="GitHub"
              >
                <GithubIcon size={16} />
              </a>
              <a
                href="https://www.linkedin.com/in/jaspreet-singh-23418b358/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg border border-white/[0.08] flex items-center justify-center text-[var(--text-muted)] hover:text-white hover:border-sky-500/40 hover:bg-sky-500/10 transition-all"
                aria-label="LinkedIn"
              >
                <LinkedinIcon size={16} />
              </a>
              <a
                href="mailto:khalsas791@gmail.com"
                className="w-9 h-9 rounded-lg border border-white/[0.08] flex items-center justify-center text-[var(--text-muted)] hover:text-white hover:border-indigo-500/40 hover:bg-indigo-500/10 transition-all"
                aria-label="Email"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.04] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[var(--text-muted)]">
            © {new Date().getFullYear()} Sardar Jaspreet Singh Kapse · All rights reserved
          </p>
          <div className="flex items-center gap-4">
            <span className="text-xs text-[var(--text-muted)]">Built with React & Framer Motion</span>
            <button
              onClick={scrollToTop}
              className="w-8 h-8 rounded-lg border border-white/[0.08] flex items-center justify-center text-[var(--text-muted)] hover:text-white hover:border-indigo-500/40 hover:bg-indigo-500/10 transition-all"
              aria-label="Back to top"
            >
              <ArrowUp size={14} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
