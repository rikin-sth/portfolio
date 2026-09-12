import { ArrowUpRight, Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon, BehanceIcon } from '../ui/BrandIcons'
import { personal } from '../../data/portfolio'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'

const socials = [
  { href: personal.github, label: 'GitHub', icon: GithubIcon },
  { href: personal.linkedin, label: 'LinkedIn', icon: LinkedinIcon },
  { href: personal.behance, label: 'Behance', icon: BehanceIcon },
] as const

export function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden py-36 sm:py-44 md:py-52"
      aria-label="Connect"
    >
      <div className="container-page relative">
        <SectionHeading label="connect" number="06" />

        <div className="mx-auto max-w-3xl py-10 text-center sm:py-16 md:py-20">
          <Reveal>
            <h2
              className="text-balance text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl"
              style={{ color: 'var(--color-ink)' }}
            >
              Got something in mind?
            </h2>
          </Reveal>
          <Reveal delay={0.06}>
            <p
              className="mx-auto mt-6 max-w-xl text-balance text-base leading-relaxed sm:text-lg"
              style={{ color: 'var(--color-ink-muted)' }}
            >
              Whether it’s tech, design, or just a conversation, feel free to reach out. You can
              email me directly or find me on GitHub, LinkedIn, and Behance.
            </p>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="mt-14">
              <a
                href={`mailto:${personal.email}`}
                className="group inline-flex max-w-full items-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_28px_-6px_var(--color-cta)] sm:px-7 sm:py-3.5 sm:text-base"
                style={{ backgroundColor: 'var(--color-cta)', color: 'var(--color-cta-ink)' }}
              >
                <Mail size={18} className="shrink-0" />
                <span className="truncate">{personal.email}</span>
                <ArrowUpRight
                  size={16}
                  className="shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.18}>
            <nav
              aria-label="Social profiles"
              className="mt-14 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 sm:gap-x-12 md:gap-x-14"
            >
              {socials.map(({ href, label, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2.5 text-base font-medium tracking-wide text-[var(--color-ink)] transition-all duration-200 hover:-translate-y-0.5 hover:text-[var(--color-accent)] sm:gap-3 sm:text-lg"
                >
                  <Icon size={22} className="transition-transform duration-200 group-hover:scale-110" />
                  {label}
                </a>
              ))}
            </nav>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
