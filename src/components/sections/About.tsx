import { Mail } from 'lucide-react'
import { about, education, personal } from '../../data/portfolio'
import { BehanceIcon, GithubIcon, LinkedinIcon } from '../ui/BrandIcons'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'
import { TypedLines } from '../ui/TypedLines'

const educationFacts = [
  { prompt: 'information', output: 'About me' },
  { prompt: 'name', output: personal.name },
  { prompt: 'education', output: education.school },
  {
    prompt: 'degree',
    output: `B.S. in ${education.major}\nCertificate: ${education.certificateShort}`,
  },
  { prompt: 'graduation', output: education.graduated },
]

const socials = [
  { href: personal.github, label: 'GitHub profile', icon: GithubIcon, external: true },
  { href: personal.linkedin, label: 'LinkedIn profile', icon: LinkedinIcon, external: true },
  { href: personal.behance, label: 'Behance profile', icon: BehanceIcon, external: true },
  { href: `mailto:${personal.email}`, label: 'Send email', icon: Mail, external: false },
] as const

export function About() {
  return (
    <section id="about" className="py-24 sm:py-32" aria-label="About Me">
      <div className="container-page">
        <SectionHeading label="about me" number="01" />

        <div className="grid items-start gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div>
            <Reveal>
              <div
                className="max-w-[400px] overflow-hidden rounded-lg border sm:max-w-[420px]"
                style={{ borderColor: 'var(--color-border)', backgroundColor: 'var(--color-surface)' }}
              >
                <img
                  src={`${import.meta.env.BASE_URL}${about.photo}`}
                  alt="Rikin Shrestha"
                  width={800}
                  height={1200}
                  className="aspect-[4/5] w-full origin-top object-cover object-[center_12%] scale-[1.12]"
                />
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <TypedLines
                lines={educationFacts}
                showCursorWhenDone={false}
                className="mono-tag mt-5 space-y-2 text-[0.8rem] leading-relaxed sm:text-sm"
              />
            </Reveal>
          </div>

          <div className="space-y-6">
            <Reveal>
              <div>
                <h3
                  className="mt-5 text-3xl font-semibold sm:text-4xl md:text-5xl"
                  style={{ color: 'var(--color-ink)' }}
                >
                  About me
                </h3>
                <div className="mt-5 flex items-center justify-start gap-4">
                  {socials.map(({ href, label, icon: Icon, external }) => (
                    <a
                      key={label}
                      href={href}
                      target={external ? '_blank' : undefined}
                      rel={external ? 'noopener noreferrer' : undefined}
                      aria-label={label}
                      className="text-[var(--color-ink-muted)] transition-colors hover:text-[var(--color-accent)]"
                    >
                      <Icon size={20} />
                    </a>
                  ))}
                </div>
              </div>
            </Reveal>

            {about.paragraphs.map((p, i) => (
              <Reveal key={i} delay={0.08 + i * 0.08}>
                <p
                  className="text-pretty text-lg leading-relaxed sm:text-xl"
                  style={{ color: 'var(--color-ink-muted)' }}
                >
                  {p}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
