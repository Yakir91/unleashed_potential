import { Link } from 'react-router-dom'
import { FaFacebook, FaInstagram, FaYoutube, FaWhatsapp, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'

export default function Footer() {
  const { t } = useTranslation()

  const socialClass =
    'inline-flex items-center justify-center w-10 h-10 rounded-md bg-white/5 text-white/60 hover:text-accent-300 hover:bg-accent-500/20 transition-colors'

  return (
    <footer className="bg-surface-dark text-white/65 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="col-span-1">
            <Link to="/" className="inline-flex items-center gap-3 mb-5">
              <img
                src="/images/yakirikko-logo.png"
                alt={t('brand')}
                className="h-14 w-auto object-contain brightness-0 invert"
              />
              <span className="text-xl font-display font-semibold text-white whitespace-nowrap">
                {t('brand')}
              </span>
            </Link>
            <p className="text-white/50 mb-6 leading-relaxed text-sm">
              {t('footer.description')}
            </p>
            <div className="flex items-center gap-3">
              <a href="https://facebook.com/YakirDogTrainer" target="_blank" rel="noopener noreferrer" className={socialClass} aria-label="Facebook">
                <FaFacebook size={18} />
              </a>
              <a href="https://instagram.com/yakirlavi" target="_blank" rel="noopener noreferrer" className={socialClass} aria-label="Instagram">
                <FaInstagram size={18} />
              </a>
              <a href="https://www.youtube.com/@YakiRikko" target="_blank" rel="noopener noreferrer" className={socialClass} aria-label="YouTube">
                <FaYoutube size={18} />
              </a>
              <a href="https://wa.me/972525664414" target="_blank" rel="noopener noreferrer" className={socialClass} aria-label="WhatsApp">
                <FaWhatsapp size={18} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-display font-semibold text-lg mb-5">{t('footer.quickLinks')}</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/" className="hover:text-accent-300 transition-colors">{t('nav.home')}</Link></li>
              <li><Link to="/about" className="hover:text-accent-300 transition-colors">{t('nav.about')}</Link></li>
              <li><Link to="/services" className="hover:text-accent-300 transition-colors">{t('nav.services')}</Link></li>
              <li><Link to="/foundation" className="hover:text-accent-300 transition-colors">{t('nav.foundation')}</Link></li>
              <li><Link to="/gallery" className="hover:text-accent-300 transition-colors">{t('nav.gallery')}</Link></li>
              <li><Link to="/testimonials" className="hover:text-accent-300 transition-colors">{t('nav.testimonials')}</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-display font-semibold text-lg mb-5">{t('footer.servicesTitle')}</h3>
            <ul className="space-y-3 text-sm">
              <li>{t('services.items.behavior.title')}</li>
              <li>{t('services.items.obedience.title')}</li>
              <li>{t('services.items.private.title')}</li>
              <li>{t('services.items.igp.title')}</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-display font-semibold text-lg mb-5">{t('footer.contact')}</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <FaPhone className="text-accent-400 shrink-0" />
                <span>052-566-4414</span>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-accent-400 shrink-0" />
                <span>yakirikko1@gmail.com</span>
              </li>
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-accent-400 mt-0.5 shrink-0" />
                <span>{t('footer.location')}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center text-white/40 text-sm">
          <p>&copy; {new Date().getFullYear()} {t('brand')}. {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  )
}
