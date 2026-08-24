import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaFacebook, FaInstagram, FaPaperPlane, FaClock, FaPaw } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'

export default function Contact() {
  const { t } = useTranslation()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    dogName: '',
    dogAge: '',
    dogBreed: '',
    trainingType: '',
    preferredDate: '',
    preferredTime: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would normally send the data to your backend
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({
        name: '',
        email: '',
        phone: '',
        dogName: '',
        dogAge: '',
        dogBreed: '',
        trainingType: '',
        preferredDate: '',
        preferredTime: '',
        message: '',
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

  const contactInfo = [
    {
      icon: FaPhone,
      title: t('contact.info.phone'),
      content: '052-566-4414',
      link: 'tel:0525664414',
      color: 'from-primary-500 to-primary-600',
    },
    {
      icon: FaEnvelope,
      title: t('contact.info.email'),
      content: 'unleashedpotential@gmail.com',
      link: 'mailto:unleashedpotential@gmail.com',
      color: 'from-secondary-500 to-secondary-600',
    },
    {
      icon: FaMapMarkerAlt,
      title: t('contact.info.location'),
      content: 'Herzliya, Israel',
      link: '#map',
      color: 'from-accent-500 to-accent-600',
    },
    {
      icon: FaClock,
      title: t('contact.info.hours'),
      content: t('contact.info.hoursText'),
      link: null,
      color: 'from-primary-600 to-secondary-600',
    },
  ]

  const socialLinks = [
    {
      icon: FaWhatsapp,
      name: 'WhatsApp',
      link: 'https://wa.me/972525664414',
      color: 'hover:bg-green-500',
    },
    {
      icon: FaFacebook,
      name: 'Facebook',
      link: 'https://facebook.com/YakirDogTrainer',
      color: 'hover:bg-blue-600',
    },
    {
      icon: FaInstagram,
      name: 'Instagram',
      link: 'https://instagram.com/yakirlavi',
      color: 'hover:bg-pink-600',
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
              {t('contact.hero.title')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500">{t('contact.hero.titleHighlight')}</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('contact.hero.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <motion.a
                key={index}
                href={info.link || '#'}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`card p-6 text-center hover:scale-105 transition-transform ${
                  info.link ? 'cursor-pointer' : 'cursor-default'
                }`}
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${info.color} rounded-full mb-4 shadow-lg`}>
                  <info.icon className="text-2xl text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{info.title}</h3>
                <p className="text-gray-600 whitespace-pre-line">{info.content}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20 bg-gradient-to-br from-secondary-50 to-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Booking Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6 font-display">
                {t('contact.form.title')}
              </h2>
              <p className="text-gray-600 mb-8">
                {t('contact.form.subtitle')}
              </p>

              <div className="bg-white rounded-3xl shadow-2xl p-8">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-primary-500 rounded-full mb-6">
                      <FaPaperPlane className="text-4xl text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">{t('contact.form.thankYou')}</h3>
                    <p className="text-xl text-gray-600">
                      {t('contact.form.thankYouMessage')}
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Owner Information */}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                        <span className="inline-flex items-center justify-center w-8 h-8 bg-primary-500 text-white rounded-full text-sm mr-2">1</span>
                        {t('contact.form.yourInfo')}
                      </h3>
                      <div className="space-y-4">
                        <div>
                          <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                            {t('contact.form.fullName')} *
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary-500 focus:outline-none transition-colors"
                            placeholder="John Doe"
                          />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                              {t('contact.form.email')} *
                            </label>
                            <input
                              type="email"
                              id="email"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              required
                              className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary-500 focus:outline-none transition-colors"
                              placeholder="john@example.com"
                            />
                          </div>

                          <div>
                            <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                              {t('contact.form.phone')} *
                            </label>
                            <input
                              type="tel"
                              id="phone"
                              name="phone"
                              value={formData.phone}
                              onChange={handleChange}
                              required
                              className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary-500 focus:outline-none transition-colors"
                              placeholder="(555) 123-4567"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Dog Information */}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                        <span className="inline-flex items-center justify-center w-8 h-8 bg-primary-500 text-white rounded-full text-sm mr-2">2</span>
                        {t('contact.form.aboutDog')}
                      </h3>
                      <div className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div>
                            <label htmlFor="dogName" className="block text-gray-700 font-medium mb-2">
                              {t('contact.form.dogName')} *
                            </label>
                            <input
                              type="text"
                              id="dogName"
                              name="dogName"
                              value={formData.dogName}
                              onChange={handleChange}
                              required
                              className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary-500 focus:outline-none transition-colors"
                              placeholder="Max"
                            />
                          </div>

                          <div>
                            <label htmlFor="dogAge" className="block text-gray-700 font-medium mb-2">
                              {t('contact.form.age')} *
                            </label>
                            <input
                              type="text"
                              id="dogAge"
                              name="dogAge"
                              value={formData.dogAge}
                              onChange={handleChange}
                              required
                              className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary-500 focus:outline-none transition-colors"
                              placeholder="2 years"
                            />
                          </div>

                          <div>
                            <label htmlFor="dogBreed" className="block text-gray-700 font-medium mb-2">
                              {t('contact.form.breed')} *
                            </label>
                            <input
                              type="text"
                              id="dogBreed"
                              name="dogBreed"
                              value={formData.dogBreed}
                              onChange={handleChange}
                              required
                              className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary-500 focus:outline-none transition-colors"
                              placeholder="Golden Retriever"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Training Information */}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                        <span className="inline-flex items-center justify-center w-8 h-8 bg-primary-500 text-white rounded-full text-sm mr-2">3</span>
                        {t('contact.form.trainingDetails')}
                      </h3>
                      <div className="space-y-4">
                        <div>
                          <label htmlFor="trainingType" className="block text-gray-700 font-medium mb-2">
                            {t('contact.form.trainingType')} *
                          </label>
                          <select
                            id="trainingType"
                            name="trainingType"
                            value={formData.trainingType}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary-500 focus:outline-none transition-colors"
                          >
                            <option value="">{t('contact.form.selectService')}</option>
                            <option value="puppy">{t('contact.form.serviceOptions.puppy')}</option>
                            <option value="obedience">{t('contact.form.serviceOptions.obedience')}</option>
                            <option value="behavior">{t('contact.form.serviceOptions.behavior')}</option>
                            <option value="agility">{t('contact.form.serviceOptions.advanced')}</option>
                            <option value="group">{t('contact.form.serviceOptions.group')}</option>
                            <option value="private">{t('contact.form.serviceOptions.private')}</option>
                            <option value="other">{t('contact.form.serviceOptions.other')}</option>
                          </select>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label htmlFor="preferredDate" className="block text-gray-700 font-medium mb-2">
                              {t('contact.form.preferredDate')}
                            </label>
                            <input
                              type="date"
                              id="preferredDate"
                              name="preferredDate"
                              value={formData.preferredDate}
                              onChange={handleChange}
                              className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary-500 focus:outline-none transition-colors"
                            />
                          </div>

                          <div>
                            <label htmlFor="preferredTime" className="block text-gray-700 font-medium mb-2">
                              {t('contact.form.preferredTime')}
                            </label>
                            <select
                              id="preferredTime"
                              name="preferredTime"
                              value={formData.preferredTime}
                              onChange={handleChange}
                              className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary-500 focus:outline-none transition-colors"
                            >
                              <option value="">{t('contact.form.selectTime')}</option>
                              <option value="morning">{t('contact.form.morning')}</option>
                              <option value="afternoon">{t('contact.form.afternoon')}</option>
                              <option value="evening">{t('contact.form.evening')}</option>
                              <option value="flexible">{t('contact.form.flexible')}</option>
                            </select>
                          </div>
                        </div>

                        <div>
                          <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                            {t('contact.form.additionalInfo')}
                          </label>
                          <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows="4"
                            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary-500 focus:outline-none transition-colors resize-none"
                            placeholder={t('contact.form.additionalPlaceholder')}
                          />
                        </div>
                      </div>
                    </div>

                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full btn-primary flex items-center justify-center space-x-2"
                    >
                      <FaPaperPlane />
                      <span>{t('contact.form.submit')}</span>
                    </motion.button>

                    <p className="text-sm text-gray-500 text-center">
                      {t('contact.form.required')}
                    </p>
                  </form>
                )}
              </div>
            </motion.div>

            {/* Right Column - Info & Map */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Why Contact Us */}
              <div className="bg-white rounded-3xl shadow-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 font-display">
                  {t('contact.whyContact.title')}
                </h3>
                <div className="space-y-4">
                  {[
                    { icon: '🎓', title: t('contact.whyContact.items.1.title'), text: t('contact.whyContact.items.1.text') },
                    { icon: '❤️', title: t('contact.whyContact.items.2.title'), text: t('contact.whyContact.items.2.text') },
                    { icon: '⭐', title: t('contact.whyContact.items.3.title'), text: t('contact.whyContact.items.3.text') },
                    { icon: '🤝', title: t('contact.whyContact.items.4.title'), text: t('contact.whyContact.items.4.text') },
                    { icon: '📍', title: t('contact.whyContact.items.5.title'), text: t('contact.whyContact.items.5.text') },
                    { icon: '💯', title: t('contact.whyContact.items.6.title'), text: t('contact.whyContact.items.6.text') },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex items-start space-x-3"
                    >
                      <div className="text-3xl">{item.icon}</div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{item.title}</h4>
                        <p className="text-gray-600 text-sm">{item.text}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-white rounded-3xl shadow-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 font-display">
                  {t('contact.connect.title')}
                </h3>
                <p className="text-gray-600 mb-6">
                  {t('contact.connect.subtitle')}
                </p>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className={`flex-1 flex items-center justify-center py-4 bg-gray-100 rounded-xl ${social.color} hover:text-white transition-all duration-300`}
                    >
                      <social.icon className="text-3xl" />
                    </motion.a>
                  ))}
                </div>
              </div>

            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="section-title">{t('contact.faq.title')}</h2>
            <p className="section-subtitle">{t('contact.faq.subtitle')}</p>
          </motion.div>

          <div className="space-y-4">
            {[
              {
                q: t('contact.faq.items.1.q'),
                a: t('contact.faq.items.1.a'),
              },
              {
                q: t('contact.faq.items.2.q'),
                a: t('contact.faq.items.2.a'),
              },
              {
                q: t('contact.faq.items.3.q'),
                a: t('contact.faq.items.3.a'),
              },
              {
                q: t('contact.faq.items.4.q'),
                a: t('contact.faq.items.4.a'),
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-6"
              >
                <h3 className="font-semibold text-gray-900 text-lg mb-2 flex items-center">
                  <FaPaw className="text-primary-500 mr-2" />
                  {faq.q}
                </h3>
                <p className="text-gray-700 pl-7">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

