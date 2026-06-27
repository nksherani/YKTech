import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * On every route change: scroll to the top of the page, or — if the URL has a
 * hash (e.g. /#services) — smoothly scroll to that section. This lets the same
 * nav links work whether the user is already on the home page or arriving from
 * a legal/product page.
 */
const ScrollToTop = () => {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '')
      const el = document.getElementById(id)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
        return
      }
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior })
  }, [pathname, hash])

  return null
}

export default ScrollToTop
