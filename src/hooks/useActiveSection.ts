import { useEffect, useState } from 'react'

/**
 * Tracks which section should be highlighted in the nav based on scroll
 * position relative to the fixed header — more reliable than IntersectionObserver
 * for tall sections like the hero.
 */
export function useActiveSection(ids: string[]) {
  const [activeId, setActiveId] = useState<string>(ids[0] ?? '')

  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el))

    if (elements.length === 0) return

    const getOffset = () => {
      const raw = getComputedStyle(document.documentElement)
        .getPropertyValue('--nav-height')
        .trim()
      const navHeight = Number.parseFloat(raw) || 76
      return navHeight + 16
    }

    const update = () => {
      const offset = getOffset()
      let current = elements[0]?.id ?? ''

      for (const el of elements) {
        // Activate a section once its top has crossed just below the header
        if (el.getBoundingClientRect().top - offset <= 0) {
          current = el.id
        } else {
          break
        }
      }

      // Near the bottom of the page, pin to the last section
      const scrollBottom = window.scrollY + window.innerHeight
      const docHeight = document.documentElement.scrollHeight
      if (docHeight - scrollBottom < 4) {
        current = elements[elements.length - 1]?.id ?? current
      }

      setActiveId((prev) => (prev === current ? prev : current))
    }

    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [ids])

  return activeId
}
