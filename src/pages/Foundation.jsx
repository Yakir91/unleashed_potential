import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import PageHero from '../components/PageHero'
import PageCta from '../components/PageCta'

const EPISODES = [
  { id: 'sit', youtubeId: 'kgewmWrQjRo', episode: 1 },
  { id: 'down', youtubeId: '0HhJaVjLOGQ', episode: 2 },
  { id: 'come', youtubeId: '9-K4Y_Dyf2Q', episode: 3 },
]

export default function Foundation() {
  const { t } = useTranslation()

  return (
    <div className="overflow-hidden">
      <PageHero
        eyebrow={t('foundation.hero.badge')}
        title={t('foundation.hero.title')}
        subtitle={t('foundation.hero.subtitle')}
      />

      <section className="py-20 md:py-24 bg-surface-elev">
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
                <div className="relative rounded-xl overflow-hidden shadow-lift bg-surface-dark aspect-[9/16]">
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
                  <p className="text-sm font-semibold text-accent-700 mb-1">
                    {t('foundation.episodes.episodeLabel', { number: episode.episode })}
                  </p>
                  <h3 className="text-xl font-semibold text-ink font-display mb-2">
                    {t(`foundation.episodes.items.${episode.id}.title`)}
                  </h3>
                  <p className="text-ink-muted leading-relaxed">
                    {t(`foundation.episodes.items.${episode.id}.description`)}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <PageCta
        title={t('foundation.cta.title')}
        subtitle={t('foundation.cta.subtitle')}
        button={t('foundation.cta.button')}
      />
    </div>
  )
}
