import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaPaw, FaBone, FaTrophy, FaHeart, FaCheckCircle, FaStar, FaDog } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import PageHero from '../components/PageHero'
import PageCta from '../components/PageCta'

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
        className={`bg-white rounded-xl shadow-soft border border-black/5 overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-lift hover:border-accent-300/60 ${
          expandedService === service.id ? 'ring-2 ring-accent-400' : ''
        }`}
        onClick={() => setExpandedService(expandedService === service.id ? null : service.id)}
      >
        <div className={`bg-gradient-to-r ${service.color} p-6 text-white`}>
          <service.icon className="text-4xl mb-4 text-white drop-shadow-sm" />
          <h3 className="text-2xl font-semibold mb-1 text-white font-display">{service.title}</h3>
          <p className="text-white/85 text-sm">{service.subtitle}</p>
        </div>

        <div className="p-6 bg-white">
          <p className="text-ink leading-relaxed mb-4">{service.description}</p>

          <div className="flex justify-end items-center mb-4 pb-4 border-b border-black/5">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-accent-700 font-semibold"
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
                  <p className="text-ink-muted mb-4 leading-relaxed">{service.details}</p>
                  <h4 className="font-semibold text-ink mb-3">{t('services.whatsIncluded')}</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <FaCheckCircle className="text-accent-600 mt-1 flex-shrink-0" />
                        <span className="text-ink">{feature}</span>
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
      color: 'from-accent-600 to-accent-800',
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
      color: 'from-primary-700 to-primary-900',
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
      color: 'from-accent-700 to-primary-800',
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
      color: 'from-primary-800 to-accent-800',
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
      color: 'from-primary-700 to-accent-700',
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
      color: 'from-secondary-800 to-accent-700',
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
      <PageHero
        title={t('services.hero.title')}
        titleHighlight={t('services.hero.titleHighlight')}
        subtitle={t('services.hero.subtitle')}
      />

      {/* House Dog Services */}
      <section className="py-20 bg-surface-elev">
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
      <section className="py-20 bg-gradient-to-br from-surface-dark to-primary-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-semibold text-white mb-4 font-display">{t('services.igpSection.title')}</h2>
            <p className="text-xl text-white/65 max-w-3xl mx-auto">{t('services.igpSection.subtitle')}</p>
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
      <section className="py-20 bg-surface-elev">
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
                <div className="inline-flex items-center justify-center w-14 h-14 bg-primary-800 rounded-md text-accent-300 text-xl font-semibold mb-4 shadow-soft">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-ink mb-2">{item.title}</h3>
                <p className="text-ink-muted">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <PageCta
        title={t('services.cta.title')}
        subtitle={t('services.cta.subtitle')}
        button={t('services.cta.button')}
      />
    </div>
  )
}
