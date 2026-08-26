import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaStar, FaQuoteLeft, FaPaw, FaHeart, FaPaperPlane, FaTrophy } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'

export default function Testimonials() {
  const { t } = useTranslation()
  const [formData, setFormData] = useState({
    name: '',
    dogName: '',
    email: '',
    rating: 5,
    testimonial: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const testimonials = []

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Testimonial submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({
        name: '',
        dogName: '',
        email: '',
        rating: 5,
        testimonial: '',
      })
    }, 3000)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const renderStars = (rating, interactive = false, onRate = null) => {
    return (
      <div className="flex space-x-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <FaStar
            key={star}
            className={`text-2xl ${
              star <= rating ? 'text-yellow-400' : 'text-gray-300'
            } ${interactive ? 'cursor-pointer hover:scale-110 transition-transform' : ''}`}
            onClick={() => interactive && onRate && onRate(star)}
          />
        ))}
      </div>
    )
  }

  return (
    <div className="overflow-hidden">
      <section className="relative bg-gradient-to-br from-primary-50 via-secondary-50 to-accent-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 font-display">
              {t('testimonials.hero.title')}{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500">
                {t('testimonials.hero.titleHighlight')}
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('testimonials.hero.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: FaTrophy, number: '2nd', label: t('testimonials.stats.israelNational') },
              { icon: FaStar, number: '8', label: t('testimonials.stats.yearsIGP') },
              { icon: FaPaw, number: '10+', label: t('testimonials.stats.yearsExperience') },
              { icon: FaHeart, number: '500+', label: t('testimonials.stats.dogsTrained') },
            ].map((stat, index) => (
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

      <section className="py-20 bg-gradient-to-br from-secondary-50 to-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="section-title">{t('testimonials.list.title')}</h2>
            <p className="section-subtitle">{t('testimonials.list.subtitle')}</p>
          </motion.div>

          {testimonials.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="card p-6 hover:scale-105 transition-transform duration-300"
                >
                  <FaQuoteLeft className="text-3xl text-primary-300 mb-4" />
                  
                  <div className="mb-4">{renderStars(testimonial.rating)}</div>
                  
                  <p className="text-gray-700 mb-6 leading-relaxed italic">
                    "{testimonial.text}"
                  </p>
                  
                  <div className="flex items-center space-x-4 pt-4 border-t border-gray-200">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-400 to-secondary-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">
                        {t('testimonials.list.ownerOf', { dogName: testimonial.dogName })}
                      </div>
                      <div className="text-xs text-gray-500">{testimonial.date}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center py-20"
            >
              <FaPaw className="text-6xl text-gray-400 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-gray-700 mb-4">{t('testimonials.empty.title')}</h3>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                {t('testimonials.empty.subtitle')}
              </p>
            </motion.div>
          )}
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-accent-50 to-primary-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="section-title">{t('testimonials.form.title')}</h2>
            <p className="section-subtitle">
              {t('testimonials.form.subtitle')}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-3xl shadow-2xl p-8 md:p-12"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 bg-primary-500 rounded-full mb-6">
                  <FaPaperPlane className="text-4xl text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">{t('testimonials.form.thankYou')}</h3>
                <p className="text-xl text-gray-600">
                  {t('testimonials.form.thankYouMessage')}
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                      {t('testimonials.form.yourName')} *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary-500 focus:outline-none transition-colors"
                      placeholder={t('testimonials.form.placeholders.name')}
                    />
                  </div>

                  <div>
                    <label htmlFor="dogName" className="block text-gray-700 font-semibold mb-2">
                      {t('testimonials.form.dogName')} *
                    </label>
                    <input
                      type="text"
                      id="dogName"
                      name="dogName"
                      value={formData.dogName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary-500 focus:outline-none transition-colors"
                      placeholder={t('testimonials.form.placeholders.dogName')}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                    {t('testimonials.form.email')} *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary-500 focus:outline-none transition-colors"
                    placeholder={t('testimonials.form.placeholders.email')}
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    {t('testimonials.form.rating')} *
                  </label>
                  {renderStars(formData.rating, true, (rating) => setFormData(prev => ({ ...prev, rating })))}
                </div>

                <div>
                  <label htmlFor="testimonial" className="block text-gray-700 font-semibold mb-2">
                    {t('testimonials.form.experience')} *
                  </label>
                  <textarea
                    id="testimonial"
                    name="testimonial"
                    value={formData.testimonial}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary-500 focus:outline-none transition-colors resize-none"
                    placeholder={t('testimonials.form.placeholders.experience')}
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full btn-primary flex items-center justify-center space-x-2"
                >
                  <FaPaperPlane />
                  <span>{t('testimonials.form.submit')}</span>
                </motion.button>

                <p className="text-sm text-gray-500 text-center">
                  {t('testimonials.form.required')}
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-primary-500 to-secondary-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-display">
              {t('testimonials.cta.title')}
            </h2>
            <p className="text-xl text-white/90 mb-8">
              {t('testimonials.cta.subtitle')}
            </p>
            <a
              href="/contact"
              className="inline-block bg-white text-primary-600 px-12 py-5 rounded-full font-bold text-lg shadow-2xl hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              {t('testimonials.cta.button')}
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
