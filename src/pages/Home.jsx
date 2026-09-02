import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaPaw, FaHeart, FaStar, FaTrophy, FaUserFriends, FaCheckCircle } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'
import TrainingQuiz from '../components/TrainingQuiz'

export default function Home() {
  const { t } = useTranslation()
  
  const stats = [
    { icon: FaTrophy, number: '500+', label: t('home.stats.dogsTrained') },
    { icon: FaUserFriends, number: '10+', label: t('home.stats.yearsExperience') },
    { icon: FaHeart, number: '100%', label: t('home.stats.behaviorPrograms') },
    { icon: FaCheckCircle, number: '1:1', label: t('home.stats.privateSessions') },
  ]

  const igpBenefits = [
    t('home.igpSport.benefits.1'),
    t('home.igpSport.benefits.2'),
    t('home.igpSport.benefits.3'),
  ]

  const benefits = [
    t('home.whyChoose.benefits.1'),
    t('home.whyChoose.benefits.2'),
    t('home.whyChoose.benefits.3'),
    t('home.whyChoose.benefits.4'),
    t('home.whyChoose.benefits.5'),
    t('home.whyChoose.benefits.6'),
  ]

  const youtubeChannelUrl = 'https://www.youtube.com/@lavios3022'
  const youtubeEmbedUrl = 'https://www.youtube.com/embed/ryEzTH4bGIM'

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-50 via-secondary-50 to-accent-50 min-h-screen flex items-center">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-accent-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <FaPaw className="text-primary-500 text-2xl" />
                <span className="text-primary-600 font-semibold">{t('home.hero.badge')}</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-display">
                {t('home.hero.title')}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500">{t('home.hero.titleHighlight')}</span>
              </h1>
              
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                {t('home.hero.subtitle', { name: 'Yakir Lavi' })}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link to="/contact" className="btn-primary text-center">
                  {t('home.hero.bookConsultation')}
                </Link>
                <Link to="/services" className="btn-outline text-center">
                  {t('home.hero.exploreServices')}
                </Link>
              </div>

              <div className="flex items-center gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <FaCheckCircle className="text-primary-500" />
                  <span>{t('home.hero.certified')}</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              {/* Hero image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-square">
                <img 
                  src="/images/home/second_place.jpg" 
                  alt={t('home.hero.imageAlt')}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-xl p-4"
              >
                <div className="flex items-center gap-3">
                  <FaStar className="text-yellow-400 text-2xl" />
                  <div>
                    <div className="text-2xl font-bold text-gray-900">5.0</div>
                    <div className="text-xs text-gray-600">{t('home.hero.reviewsLabel')}</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <stat.icon className="text-5xl text-primary-500 mx-auto mb-4" />
                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 bg-gradient-to-br from-secondary-50 to-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="section-title">{t('home.video.title')}</h2>
            <p className="section-subtitle">{t('home.video.subtitle')}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative rounded-3xl overflow-hidden shadow-2xl aspect-video max-w-4xl mx-auto bg-black"
          >
            <iframe
              src={youtubeEmbedUrl}
              title={t('home.video.iframeTitle')}
              className="absolute inset-0 h-full w-full"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </motion.div>

          <div className="text-center mt-6">
            <a
              href={youtubeChannelUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline inline-block"
            >
              {t('home.video.watchOnYoutube')}
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="section-title">{t('home.whyChoose.title')}</h2>
              <p className="text-xl text-gray-600 mb-8">
                {t('home.whyChoose.subtitle')}
              </p>
              
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="flex-shrink-0 w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center">
                      <FaCheckCircle className="text-white" />
                    </div>
                    <span className="text-gray-700 text-lg">{benefit}</span>
                  </motion.div>
                ))}
              </div>

              <Link to="/about" className="btn-primary inline-block mt-8">
                {t('home.whyChoose.learnMore')}
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-square">
                <img 
                  src="/images/home/happy_dog.jpg" 
                  alt={t('home.whyChoose.imageAlt')}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* IGP Sport Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block bg-primary-500/20 text-primary-300 px-4 py-1 rounded-full text-sm font-semibold mb-4">
                {t('home.igpSport.badge')}
              </span>
              <h2 className="text-4xl font-bold mb-4 font-display">{t('home.igpSport.title')}</h2>
              <p className="text-xl text-gray-300 mb-4">{t('home.igpSport.subtitle')}</p>
              <p className="text-gray-400 mb-8 leading-relaxed">{t('home.igpSport.description')}</p>
              <ul className="space-y-3 mb-8">
                {igpBenefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <FaStar className="text-primary-400 mt-1 shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </li>
                ))}
              </ul>
              <Link to="/services" className="btn-primary inline-block">
                {t('home.igpSport.button')}
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative rounded-3xl overflow-hidden shadow-2xl aspect-square"
            >
              <img
                src="/images/home/second_place.jpg"
                alt={t('home.hero.imageAlt')}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Training Quiz */}
      <TrainingQuiz />

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
              {t('home.cta.title')}
            </h2>
            <p className="text-xl text-white/90 mb-8">
              {t('home.cta.subtitle')}
            </p>
            <Link
              to="/contact"
              className="inline-block bg-white text-primary-600 px-12 py-5 rounded-full font-bold text-lg shadow-2xl hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              {t('home.cta.button')}
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

