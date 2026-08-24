import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'

const LanguageSwitcher = ({ mobile = false }) => {
  const { i18n } = useTranslation()

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'he' : 'en'
    i18n.changeLanguage(newLang)
  }

  const isHebrew = i18n.language === 'he'

  if (mobile) {
    return (
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={toggleLanguage}
        className="w-full text-left px-4 py-3 text-gray-800 hover:bg-primary-50 hover:text-primary-500 transition-colors font-medium"
      >
        {isHebrew ? 'English' : 'עברית'}
      </motion.button>
    )
  }

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggleLanguage}
      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary-500 text-white font-semibold hover:bg-primary-600 transition-colors shadow-md"
    >
      <span className="text-lg">{isHebrew ? '🇬🇧' : '🇮🇱'}</span>
      <span>{isHebrew ? 'EN' : 'עב'}</span>
    </motion.button>
  )
}

export default LanguageSwitcher

