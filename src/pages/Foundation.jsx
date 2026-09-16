import { motion } from 'framer-motion'
import { FaPlay, FaPaw } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const EPISODES = [
  {
    id: 'sit',
    youtubeId: 'kgewmWrQjRo',
    episode: 1,
  },
  {
    id: 'down',
    youtubeId: '0HhJaVjLOGQ',
    episode: 2,
  },
]

export default function Foundation() {
  const { t } = useTranslation()

  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-primary-50 via-secondary-50 to-accent-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 bg-white/80 text-primary-700 px-4 py-2 rounded-full text-sm font-semibold mb-6 shadow-sm">
              <FaPlay className="text-primary-500" />
              {t('foundation.hero.badge')}
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 font-display">
              {t('foundation.hero.title')}
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              {t('foundation.hero.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Episodes */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-14"
          >
            <h2 className="section-title">{t('foundation.episodes.title')}</h2>
            <p className="section-subtitle">{t('foundation.episodes.subtitle')}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
            {EPISODES.map((episode, index) => (
              <motion.article
                key={episode.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="w-full max-w-sm"
              >
                <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gray-900 aspect-[9/16]">
                  <iframe
                    src={`https://www.youtube.com/embed/${episode.youtubeId}`}
                    title={t(`foundation.episodes.items.${episode.id}.title`)}
                    className="absolute inset-0 h-full w-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="strict-origin-when-cross-origin"
                  />
                </div>
                <div className="mt-5 text-center px-2">
                  <p className="text-sm font-semibold text-primary-600 mb-1">
                    {t('foundation.episodes.episodeLabel', { number: episode.episode })}
                  </p>
                  <h3 className="text-xl font-bold text-gray-900 font-display mb-2">
                    {t(`foundation.episodes.items.${episode.id}.title`)}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {t(`foundation.episodes.items.${episode.id}.description`)}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-primary-500 to-secondary-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <FaPaw className="text-5xl text-white/90 mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-display">
              {t('foundation.cta.title')}
            </h2>
            <p className="text-xl text-white/90 mb-8">{t('foundation.cta.subtitle')}</p>
            <Link
              to="/contact"
              className="inline-block bg-white text-primary-600 px-12 py-5 rounded-full font-bold text-lg shadow-2xl hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              {t('foundation.cta.button')}
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
