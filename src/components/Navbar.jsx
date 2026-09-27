import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { FaBars, FaTimes } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'
import LanguageSwitcher from './LanguageSwitcher'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const { t } = useTranslation()

  const isHome = location.pathname === '/'
  const solid = !isHome || scrolled || isOpen

  const navLinks = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.about'), path: '/about' },
    { name: t('nav.services'), path: '/services' },
    { name: t('nav.foundation'), path: '/foundation' },
    { name: t('nav.gallery'), path: '/gallery' },
    { name: t('nav.contact'), path: '/contact' },
  ]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [location.pathname])

  const isActive = (path) => location.pathname === path

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        solid
          ? 'bg-surface-elev/95 backdrop-blur-md shadow-soft border-b border-black/5'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-[4.5rem] md:h-20">
          <Link to="/" className="flex items-center gap-3 shrink-0 group">
            <img
              src="/images/yakirikko-logo.png"
              alt={t('brand')}
              className={`h-12 md:h-14 w-auto object-contain transition-all duration-500 ${
                solid ? '' : 'brightness-0 invert'
              }`}
            />
            <span
              className={`text-lg md:text-xl font-display font-semibold tracking-tight whitespace-nowrap transition-colors duration-500 ${
                solid ? 'text-ink' : 'text-white'
              }`}
            >
              {t('brand')}
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative group px-3 py-2 text-sm font-medium tracking-wide transition-colors duration-300 ${
                  solid
                    ? isActive(link.path)
                      ? 'text-accent-700'
                      : 'text-ink-muted hover:text-accent-600'
                    : isActive(link.path)
                      ? 'text-accent-300'
                      : 'text-white/75 hover:text-accent-300'
                }`}
              >
                {link.name}
                <span
                  className={`absolute bottom-1 inset-x-3 h-px transition-all duration-300 ${
                    isActive(link.path)
                      ? 'bg-accent-500'
                      : 'bg-transparent group-hover:bg-accent-400/70'
                  }`}
                />
              </Link>
            ))}
            <div className={`ms-2 ${solid ? '' : '[&_button]:text-white [&_button]:border-white/30'}`}>
              <LanguageSwitcher />
            </div>
            <Link
              to="/contact"
              className={`ms-3 whitespace-nowrap ${
                solid ? 'btn-primary !px-5 !py-2.5 text-sm' : 'btn-ghost-light !px-5 !py-2.5 text-sm'
              }`}
            >
              {t('nav.bookSession')}
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden transition-colors ${solid ? 'text-ink' : 'text-white'}`}
            aria-label="Menu"
          >
            {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-surface-elev border-t border-black/5 overflow-hidden"
          >
            <div className="px-4 py-5 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block py-3 px-2 text-base font-medium border-b border-black/5 ${
                    isActive(link.path) ? 'text-accent-700' : 'text-ink-muted hover:text-accent-600'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-3" onClick={() => setIsOpen(false)}>
                <LanguageSwitcher mobile />
              </div>
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center btn-primary mt-3"
              >
                {t('nav.bookSession')}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
