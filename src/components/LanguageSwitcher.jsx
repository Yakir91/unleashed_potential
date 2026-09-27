import { useTranslation } from 'react-i18next'

const LanguageSwitcher = ({ mobile = false }) => {
  const { i18n } = useTranslation()

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'he' : 'en'
    i18n.changeLanguage(newLang)
  }

  const isHebrew = i18n.language === 'he'
  const label = isHebrew ? 'EN' : 'עב'

  if (mobile) {
    return (
      <button
        onClick={toggleLanguage}
        className="w-full text-start px-2 py-3 text-ink-muted hover:text-accent-700 transition-colors font-medium border border-black/10 rounded-md hover:border-accent-300"
      >
        {isHebrew ? 'Switch to English' : 'עברית'}
      </button>
    )
  }

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center justify-center min-w-[2.75rem] h-9 px-3 rounded-md border border-current/20 text-sm font-semibold tracking-wide hover:bg-accent-500/15 hover:border-accent-400 hover:text-accent-700 transition-colors"
      aria-label="Switch language"
    >
      {label}
    </button>
  )
}

export default LanguageSwitcher
