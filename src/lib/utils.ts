export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(' ')
}

/** Smoothly scrolls to a section by id, accounting for the fixed nav height. */
export function scrollToSection(id: string) {
  const el = document.getElementById(id)
  if (!el) return
  const navHeight = 76
  const top = el.getBoundingClientRect().top + window.scrollY - navHeight
  window.scrollTo({ top, behavior: 'smooth' })
}
