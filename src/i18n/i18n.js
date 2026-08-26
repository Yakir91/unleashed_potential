import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from './locales/en.json'
import he from './locales/he.json'

const resources = {
  en: { translation: en },
  he: { translation: he }
}

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: localStorage.getItem('language') || 'he', // Default to Hebrew for primary audience
    fallbackLng: 'he',
    interpolation: {
      escapeValue: false // React already escapes values
    }
  })

// Update document direction when language changes
i18n.on('languageChanged', (lng) => {
  document.documentElement.dir = lng === 'he' ? 'rtl' : 'ltr'
  document.documentElement.lang = lng
  localStorage.setItem('language', lng)
})

// Set initial direction
document.documentElement.dir = i18n.language === 'he' ? 'rtl' : 'ltr'
document.documentElement.lang = i18n.language

export default i18n

