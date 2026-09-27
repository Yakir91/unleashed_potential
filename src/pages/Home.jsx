import { motion, useScroll, useTransform } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaCheck, FaArrowRight } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'
import { useRef } from 'react'
import TrainingQuiz from '../components/TrainingQuiz'
import AnimatedStat from '../components/AnimatedStat'

const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
  }),
}

const imageReveal = {
  hidden: { opacity: 0, scale: 1.08, y: 40 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
  },
}

export default function Home() {
  const { t } = useTranslation()
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '12%'])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.85], [1, 0.35])

  const stats = [
    { number: '500+', label: t('home.stats.dogsTrained') },
    { number: '10+', label: t('home.stats.yearsExperience') },
    { number: '100%', label: t('home.stats.behaviorPrograms') },
    { number: '1:1', label: t('home.stats.privateSessions') },
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

  const youtubeChannelUrl = 'https://www.youtube.com/@YakiRikko'
  const youtubeEmbedUrl = 'https://www.youtube.com/embed/ryEzTH4bGIM'

  return (
    <div className="overflow-hidden">
      {/* Full-bleed professional hero */}
      <section ref={heroRef} className="relative min-h-[100svh] flex items-end md:items-center overflow-hidden">
        <motion.div style={{ y: heroY }} className="absolute inset-0">
          <img
            src="/images/home/second_place.jpg"
            alt={t('home.hero.imageAlt')}
            className="h-full w-full object-cover object-[center_2%]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface-dark via-surface-dark/55 to-surface-dark/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-surface-dark/75 via-surface-dark/30 to-transparent" />
        </motion.div>

        <motion.div
          style={{ opacity: heroOpacity }}
          className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 md:py-32"
        >
          <motion.p
            custom={0.1}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="eyebrow text-accent-300 mb-5"
          >
            {t('brand')}
          </motion.p>

          <motion.h1
            custom={0.2}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="max-w-4xl text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-semibold text-white leading-[1.2] mb-6"
          >
            {t('home.hero.title')}
            <span className="block text-accent-300 mt-1">{t('home.hero.titleHighlight')}</span>
          </motion.h1>

          <motion.p
            custom={0.35}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="max-w-xl text-lg md:text-xl text-white/80 leading-relaxed mb-10"
          >
            {t('home.hero.subtitle', { name: 'Yakir Lavi' })}
          </motion.p>

          <motion.div
            custom={0.45}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link to="/contact" className="btn-primary bg-accent-500 hover:bg-accent-600 shadow-lift">
              {t('home.hero.bookConsultation')}
            </Link>
            <Link to="/services" className="btn-ghost-light">
              {t('home.hero.exploreServices')}
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Stats strip */}
      <section className="relative z-20 -mt-8 md:-mt-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-primary-900/10 rounded-xl overflow-hidden shadow-lift border border-black/5">
            {stats.map((stat, index) => (
              <AnimatedStat
                key={index}
                number={stat.number}
                label={stat.label}
                delay={index * 0.08}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Video */}
      <section className="py-24 md:py-32 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-14"
          >
            <p className="eyebrow mb-4">{t('home.video.title')}</p>
            <h2 className="section-title !mb-3">{t('home.video.subtitle')}</h2>
          </motion.div>

          <motion.div
            variants={imageReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="relative mx-auto max-w-4xl overflow-hidden rounded-xl shadow-lift aspect-video bg-surface-dark"
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

          <div className="text-center mt-8">
            <a href={youtubeChannelUrl} target="_blank" rel="noopener noreferrer" className="btn-outline">
              {t('home.video.watchOnYoutube')}
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-24 md:py-32 bg-surface-elev">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5"
            >
              <p className="eyebrow mb-4">{t('brand')}</p>
              <h2 className="section-title">{t('home.whyChoose.title')}</h2>
              <p className="text-lg text-ink-muted mb-8 leading-relaxed">
                {t('home.whyChoose.subtitle')}
              </p>

              <ul className="space-y-4 mb-10">
                {benefits.map((benefit, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: index * 0.06 }}
                    className="flex items-start gap-3"
                  >
                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent-100 text-accent-700">
                      <FaCheck className="text-[10px]" />
                    </span>
                    <span className="text-ink leading-snug">{benefit}</span>
                  </motion.li>
                ))}
              </ul>

              <Link to="/about" className="btn-primary inline-flex gap-2">
                {t('home.whyChoose.learnMore')}
                <FaArrowRight className="text-sm rtl:rotate-180" />
              </Link>
            </motion.div>

            <motion.div
              variants={imageReveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.35 }}
              className="lg:col-span-7 relative"
            >
              <div className="relative overflow-hidden rounded-xl shadow-lift aspect-[4/3]">
                <img
                  src="/images/home/happy_dog.jpg"
                  alt={t('home.whyChoose.imageAlt')}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary-950/25 to-transparent pointer-events-none" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* IGP Sport */}
      <section className="relative py-24 md:py-32 bg-surface-dark text-white overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img
            src="/images/home/second_place.jpg"
            alt=""
            className="h-full w-full object-cover object-[center_1%]"
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-surface-dark/85" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="eyebrow text-accent-300 mb-4"
            >
              {t('home.igpSport.badge')}
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-display font-semibold mb-4 text-white"
            >
              {t('home.igpSport.title')}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="text-xl text-white/70 mb-4"
            >
              {t('home.igpSport.subtitle')}
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-white/55 mb-8 leading-relaxed"
            >
              {t('home.igpSport.description')}
            </motion.p>
            <ul className="space-y-3 mb-10">
              {igpBenefits.map((benefit, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.08 }}
                  className="flex items-start gap-3 text-white/80"
                >
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent-400 shrink-0" />
                  {benefit}
                </motion.li>
              ))}
            </ul>
            <Link to="/services" className="btn-primary bg-accent-500 hover:bg-accent-600">
              {t('home.igpSport.button')}
            </Link>
          </div>
        </div>
      </section>

      <TrainingQuiz />

      {/* CTA */}
      <section className="py-24 md:py-28 bg-gradient-to-br from-primary-900 via-primary-900 to-accent-900">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl md:text-5xl font-display font-semibold text-white mb-5">
              {t('home.cta.title')}
            </h2>
            <p className="text-lg text-white/70 mb-10 leading-relaxed">{t('home.cta.subtitle')}</p>
            <Link
              to="/contact"
              className="inline-flex bg-accent-500 text-white px-10 py-4 rounded-md font-semibold shadow-lift hover:bg-accent-400 hover:-translate-y-0.5 transition-all duration-300"
            >
              {t('home.cta.button')}
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
