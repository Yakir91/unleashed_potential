import { motion } from 'framer-motion'
import { FaHeart, FaPaw, FaStar, FaCertificate, FaTrophy, FaGraduationCap } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'

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
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-50 via-secondary-50 to-accent-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 font-display">
              {t('about.hero.title')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500">{t('about.hero.titleHighlight')}</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('about.hero.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* My Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1"
            >
              <div className="flex items-center gap-2 mb-4">
                <FaPaw className="text-primary-500 text-2xl" />
                <span className="text-primary-600 font-semibold text-lg">{t('about.story.badge')}</span>
              </div>
              
              <h2 className="text-4xl font-bold text-gray-900 mb-6 font-display">
                {t('about.story.title')}
              </h2>
              
              <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                <p dangerouslySetInnerHTML={{ __html: t('about.story.paragraph1') }} />
                <p dangerouslySetInnerHTML={{ __html: t('about.story.paragraph2') }} />
                <p dangerouslySetInnerHTML={{ __html: t('about.story.paragraph3') }} />
                <p dangerouslySetInnerHTML={{ __html: t('about.story.paragraph4') }} />
              </div>

              <div className="mt-8 bg-primary-50 rounded-xl p-6 border-l-4 border-primary-500">
                <p className="text-gray-700 italic text-lg">
                  {t('about.story.quote')}
                </p>
                <p className="text-gray-900 font-semibold mt-4">{t('about.story.quoteAuthor')}</p>
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
                {/* Main Photo */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-square">
                  <img 
                    src="/images/about/igp_training_before_world_championship.jpg" 
                    alt="Yakir Lavi IGP Training before World Championship"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Additional Photos Grid */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative rounded-2xl overflow-hidden shadow-lg aspect-video">
                    <img 
                      src="/images/about/Rikko_running_with_ball.jpg" 
                      alt="Rikko running with ball during training"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="relative rounded-2xl overflow-hidden shadow-lg aspect-video">
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

      {/* Certifications Section */}
      <section className="py-20 bg-gradient-to-br from-secondary-50 to-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="section-title">{t('about.certifications.title')}</h2>
            <p className="section-subtitle">{t('about.certifications.subtitle')}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card p-6 text-center hover:scale-105"
              >
                <cert.icon className="text-5xl text-primary-500 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{cert.title}</h3>
                <p className="text-gray-600">{cert.year}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Philosophy Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="section-title">{t('about.philosophy.title')}</h2>
            <p className="section-subtitle">
              {t('about.philosophy.subtitle')}
            </p>
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
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full mb-6 shadow-lg">
                  <point.icon className="text-3xl text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 font-display">
                  {point.title}
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  {point.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-3xl p-8 md:p-12"
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center font-display">
              {t('about.approach.title')}
            </h3>
            
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700 text-lg">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <FaPaw className="text-primary-500 mt-1 flex-shrink-0" />
                  <p dangerouslySetInnerHTML={{ __html: t('about.approach.points.0') }} />
                </div>
                <div className="flex items-start gap-3">
                  <FaPaw className="text-primary-500 mt-1 flex-shrink-0" />
                  <p dangerouslySetInnerHTML={{ __html: t('about.approach.points.1') }} />
                </div>
                <div className="flex items-start gap-3">
                  <FaPaw className="text-primary-500 mt-1 flex-shrink-0" />
                  <p dangerouslySetInnerHTML={{ __html: t('about.approach.points.2') }} />
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <FaPaw className="text-primary-500 mt-1 flex-shrink-0" />
                  <p dangerouslySetInnerHTML={{ __html: t('about.approach.points.3') }} />
                </div>
                <div className="flex items-start gap-3">
                  <FaPaw className="text-primary-500 mt-1 flex-shrink-0" />
                  <p dangerouslySetInnerHTML={{ __html: t('about.approach.points.4') }} />
                </div>
                <div className="flex items-start gap-3">
                  <FaPaw className="text-primary-500 mt-1 flex-shrink-0" />
                  <p dangerouslySetInnerHTML={{ __html: t('about.approach.points.5') }} />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 bg-gradient-to-br from-accent-50 to-primary-50">
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
            {[1, 2].map((item) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: item * 0.2 }}
                className="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-primary-500 to-secondary-600 aspect-video"
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white p-8">
                    <FaPaw className="text-6xl mb-4 mx-auto animate-pulse" />
                    <p className="text-xl font-semibold">{t('about.video.placeholder')} {item}</p>
                    <p className="text-white/80 mt-2">{t('about.video.placeholderText')}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-500 to-secondary-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-display">
              {t('about.cta.title')}
            </h2>
            <p className="text-xl text-white/90 mb-8">
              {t('about.cta.subtitle')}
            </p>
            <a
              href="/contact"
              className="inline-block bg-white text-primary-600 px-12 py-5 rounded-full font-bold text-lg shadow-2xl hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              {t('about.cta.button')}
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

