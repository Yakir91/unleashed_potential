import { motion } from 'framer-motion'
import { FaPaw, FaStar, FaTrophy, FaGraduationCap } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'
import PageHero from '../components/PageHero'
import PageCta from '../components/PageCta'

export default function About() {
  const { t } = useTranslation()

  const certifications = [
    { icon: FaTrophy, title: t('about.certifications.items.0.title'), year: '2023' },
    { icon: FaTrophy, title: t('about.certifications.items.1.title'), year: '2024' },
    { icon: FaTrophy, title: t('about.certifications.items.2.title'), year: '2025' },
    { icon: FaStar, title: t('about.certifications.items.3.title'), year: '2023' },
  ]

  const philosophyPoints = [
    {
      icon: FaTrophy,
      title: t('about.philosophy.points.0.title'),
      description: t('about.philosophy.points.0.description'),
    },
    {
      icon: FaPaw,
      title: t('about.philosophy.points.1.title'),
      description: t('about.philosophy.points.1.description'),
    },
    {
      icon: FaStar,
      title: t('about.philosophy.points.2.title'),
      description: t('about.philosophy.points.2.description'),
    },
  ]

  return (
    <div className="overflow-hidden">
      <PageHero
        title={t('about.hero.title')}
        titleHighlight={t('about.hero.titleHighlight')}
        subtitle={t('about.hero.subtitle')}
      />

      <section className="py-20 bg-surface-elev">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1"
            >
              <p className="eyebrow mb-4">{t('about.story.badge')}</p>
              <h2 className="section-title">{t('about.story.title')}</h2>
              <div className="space-y-4 text-ink-muted text-lg leading-relaxed">
                <p dangerouslySetInnerHTML={{ __html: t('about.story.paragraph1') }} />
                <p dangerouslySetInnerHTML={{ __html: t('about.story.paragraph2') }} />
                <p dangerouslySetInnerHTML={{ __html: t('about.story.paragraph3') }} />
                <p dangerouslySetInnerHTML={{ __html: t('about.story.paragraph4') }} />
              </div>
              <div className="mt-8 bg-accent-50 rounded-xl p-6 border-l-4 border-accent-500">
                <p className="text-ink-muted italic text-lg">{t('about.story.quote')}</p>
                <p className="text-ink font-semibold mt-4">{t('about.story.quoteAuthor')}</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-2"
            >
              <div className="grid grid-cols-1 gap-6">
                <div className="relative rounded-xl overflow-hidden shadow-lift aspect-square">
                  <img
                    src="/images/about/igp_training_before_world_championship.jpg"
                    alt="Yakir Lavi IGP Training before World Championship"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative rounded-xl overflow-hidden shadow-soft aspect-video">
                    <img
                      src="/images/about/Rikko_running_with_ball.jpg"
                      alt="Rikko running with ball during training"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="relative rounded-xl overflow-hidden shadow-soft aspect-video">
                    <img
                      src="/images/about/rikko_send_away.jpg"
                      alt="Rikko performing send away exercise"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="section-title">{t('about.experience.title')}</h2>
            <p className="section-subtitle">{t('about.experience.subtitle')}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[0, 1, 2].map((index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="card p-8"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-primary-800 rounded-md shrink-0">
                    <FaGraduationCap className="text-2xl text-accent-300" />
                  </div>
                  <div>
                    <p className="text-accent-700 font-semibold">
                      {t(`about.experience.items.${index}.year`)} · {t(`about.experience.items.${index}.location`)}
                    </p>
                    <h3 className="text-xl font-semibold text-ink mt-1 font-display">
                      {t(`about.experience.items.${index}.title`)}
                    </h3>
                  </div>
                </div>
                <p className="text-ink-muted text-lg leading-relaxed">
                  {t(`about.experience.items.${index}.description`)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-surface-elev">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="section-title">{t('about.philosophy.title')}</h2>
            <p className="section-subtitle">{t('about.philosophy.subtitle')}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {philosophyPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-800 rounded-md mb-6 shadow-soft">
                  <point.icon className="text-2xl text-accent-300" />
                </div>
                <h3 className="text-2xl font-semibold text-ink mb-4 font-display">{point.title}</h3>
                <p className="text-ink-muted text-lg leading-relaxed">{point.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-accent-50/50 border border-accent-100 rounded-xl p-8 md:p-12"
          >
            <h3 className="text-3xl font-semibold text-ink mb-6 text-center font-display">
              {t('about.approach.title')}
            </h3>
            <div className="max-w-3xl mx-auto space-y-4 text-ink-muted text-lg">
              {[0, 1, 2].map((index) => (
                <div key={index} className="flex items-start gap-3">
                  <FaPaw className="text-accent-600 mt-1 flex-shrink-0" />
                  <p dangerouslySetInnerHTML={{ __html: t(`about.approach.points.${index}`) }} />
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-surface-dark to-primary-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <p className="eyebrow text-accent-300 mb-4">{t('about.igpSport.title')}</p>
            <h2 className="text-4xl font-semibold mb-4 font-display text-white">{t('about.igpSport.subtitle')}</h2>
            <p className="text-white/60 max-w-3xl mx-auto mt-4 leading-relaxed">{t('about.igpSport.intro')}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 max-w-4xl mx-auto">
            {[0, 1, 2].map((index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-xl p-5"
              >
                <FaTrophy className="text-accent-400 mt-1 shrink-0" />
                <p
                  className="text-white/75"
                  dangerouslySetInnerHTML={{ __html: t(`about.igpSport.points.${index}`) }}
                />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h3 className="text-2xl font-semibold mb-2 font-display text-white">{t('about.certifications.title')}</h3>
            <p className="text-white/50">{t('about.certifications.subtitle')}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-xl p-6 text-center hover:border-accent-400/40 transition-colors"
              >
                <cert.icon className="text-4xl text-accent-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2 text-white">{cert.title}</h3>
                <p className="text-white/45">{cert.year}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="section-title">{t('about.video.title')}</h2>
            <p className="section-subtitle">{t('about.video.subtitle')}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { id: 1, embedUrl: 'https://www.youtube.com/embed/ea0BZdbXFhw', title: t('about.video.items.1.title') },
              { id: 2, embedUrl: 'https://www.youtube.com/embed/aZ8NKb7Sz3E', title: t('about.video.items.2.title') },
            ].map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (index + 1) * 0.15 }}
                className="relative rounded-xl overflow-hidden shadow-lift bg-surface-dark aspect-video"
              >
                <iframe
                  src={item.embedUrl}
                  title={item.title}
                  className="absolute inset-0 h-full w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <PageCta
        title={t('about.cta.title')}
        subtitle={t('about.cta.subtitle')}
        button={t('about.cta.button')}
      />
    </div>
  )
}
