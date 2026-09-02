import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaPaw, FaBone, FaTrophy, FaHeart, FaCheckCircle, FaStar, FaDog } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

function ServiceCard({ service, expandedService, setExpandedService, t }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: service.delay * 0.1 }}
      className="relative"
    >
      <div
        className={`card cursor-pointer transition-all duration-300 ${
          expandedService === service.id ? 'scale-105 ring-4 ring-primary-300' : ''
        }`}
        onClick={() => setExpandedService(expandedService === service.id ? null : service.id)}
      >
        <div className={`bg-gradient-to-r ${service.color} p-6 text-white`}>
          <service.icon className="text-5xl mb-4" />
          <h3 className="text-2xl font-bold mb-1">{service.title}</h3>
          <p className="text-white/90 text-sm">{service.subtitle}</p>
        </div>

        <div className="p-6">
          <p className="text-gray-600 mb-4">{service.description}</p>

          <div className="flex justify-end items-center mb-4 pb-4 border-b border-gray-200">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="text-primary-500 font-semibold"
            >
              {expandedService === service.id ? t('services.showLess') + ' ▲' : t('services.learnMore') + ' ▼'}
            </motion.button>
          </div>

          <AnimatePresence>
            {expandedService === service.id && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="mb-4">
                  <p className="text-gray-700 mb-4">{service.details}</p>
                  <h4 className="font-semibold text-gray-900 mb-3">{t('services.whatsIncluded')}</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <FaCheckCircle className="text-primary-500 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Link to="/contact" className="block w-full text-center btn-primary">
                  {t('services.bookService')}
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  )
}

export default function Services() {
  const { t } = useTranslation()
  const [expandedService, setExpandedService] = useState(null)

  const houseServices = [
    {
      id: 'behavior',
      delay: 0,
      icon: FaHeart,
      title: t('services.items.behavior.title'),
      subtitle: t('services.items.behavior.subtitle'),
      description: t('services.items.behavior.description'),
      color: 'from-accent-400 to-accent-600',
      features: [
        t('services.items.behavior.features.1'),
        t('services.items.behavior.features.2'),
        t('services.items.behavior.features.3'),
        t('services.items.behavior.features.4'),
        t('services.items.behavior.features.5'),
        t('services.items.behavior.features.6'),
      ],
      details: t('services.items.behavior.details'),
    },
    {
      id: 'obedience',
      delay: 1,
      icon: FaBone,
      title: t('services.items.obedience.title'),
      subtitle: t('services.items.obedience.subtitle'),
      description: t('services.items.obedience.description'),
      color: 'from-secondary-400 to-secondary-600',
      features: [
        t('services.items.obedience.features.1'),
        t('services.items.obedience.features.2'),
        t('services.items.obedience.features.3'),
        t('services.items.obedience.features.4'),
        t('services.items.obedience.features.5'),
      ],
      details: t('services.items.obedience.details'),
    },
    {
      id: 'private',
      delay: 2,
      icon: FaDog,
      title: t('services.items.private.title'),
      subtitle: t('services.items.private.subtitle'),
      description: t('services.items.private.description'),
      color: 'from-accent-500 to-primary-500',
      features: [
        t('services.items.private.features.1'),
        t('services.items.private.features.2'),
        t('services.items.private.features.3'),
        t('services.items.private.features.4'),
        t('services.items.private.features.5'),
        t('services.items.private.features.6'),
      ],
      details: t('services.items.private.details'),
    },
  ]

  const igpServices = [
    {
      id: 'igp',
      delay: 0,
      icon: FaTrophy,
      title: t('services.items.igp.title'),
      subtitle: t('services.items.igp.subtitle'),
      description: t('services.items.igp.description'),
      color: 'from-primary-500 to-secondary-500',
      features: [
        t('services.items.igp.features.1'),
        t('services.items.igp.features.2'),
        t('services.items.igp.features.3'),
        t('services.items.igp.features.4'),
        t('services.items.igp.features.5'),
      ],
      details: t('services.items.igp.details'),
    },
    {
      id: 'foundation',
      delay: 1,
      icon: FaPaw,
      title: t('services.items.foundation.title'),
      subtitle: t('services.items.foundation.subtitle'),
      description: t('services.items.foundation.description'),
      color: 'from-primary-400 to-primary-600',
      features: [
        t('services.items.foundation.features.1'),
        t('services.items.foundation.features.2'),
        t('services.items.foundation.features.3'),
        t('services.items.foundation.features.4'),
        t('services.items.foundation.features.5'),
        t('services.items.foundation.features.6'),
      ],
      details: t('services.items.foundation.details'),
    },
    {
      id: 'tracking',
      delay: 2,
      icon: FaStar,
      title: t('services.items.tracking.title'),
      subtitle: t('services.items.tracking.subtitle'),
      description: t('services.items.tracking.description'),
      color: 'from-secondary-500 to-accent-500',
      features: [
        t('services.items.tracking.features.1'),
        t('services.items.tracking.features.2'),
        t('services.items.tracking.features.3'),
      ],
      details: t('services.items.tracking.details'),
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
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 font-display">
              {t('services.hero.title')}{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500">
                {t('services.hero.titleHighlight')}
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t('services.hero.subtitle')}</p>
          </motion.div>
        </div>
      </section>

      {/* House Dog Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="section-title">{t('services.houseSection.title')}</h2>
            <p className="section-subtitle">{t('services.houseSection.subtitle')}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {houseServices.map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
                expandedService={expandedService}
                setExpandedService={setExpandedService}
                t={t}
              />
            ))}
          </div>
        </div>
      </section>

      {/* IGP Sport Services */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-4 font-display">{t('services.igpSection.title')}</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">{t('services.igpSection.subtitle')}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {igpServices.map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
                expandedService={expandedService}
                setExpandedService={setExpandedService}
                t={t}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="section-title">{t('services.process.title')}</h2>
            <p className="section-subtitle">{t('services.process.subtitle')}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '1', title: t('services.process.steps.1.title'), description: t('services.process.steps.1.description') },
              { step: '2', title: t('services.process.steps.2.title'), description: t('services.process.steps.2.description') },
              { step: '3', title: t('services.process.steps.3.title'), description: t('services.process.steps.3.description') },
              { step: '4', title: t('services.process.steps.4.title'), description: t('services.process.steps.4.description') },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full text-white text-2xl font-bold mb-4 shadow-lg">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
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
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-display">{t('services.cta.title')}</h2>
            <p className="text-xl text-white/90 mb-8">{t('services.cta.subtitle')}</p>
            <Link
              to="/contact"
              className="inline-block bg-white text-primary-600 px-12 py-5 rounded-full font-bold text-lg shadow-2xl hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              {t('services.cta.button')}
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
