import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function PageCta({ title, subtitle, button, to = '/contact' }) {
  return (
    <section className="py-20 md:py-24 bg-gradient-to-br from-primary-900 via-primary-900 to-accent-900">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-5xl font-display font-semibold text-white mb-5">{title}</h2>
          {subtitle && <p className="text-lg text-white/70 mb-10 leading-relaxed">{subtitle}</p>}
          <Link
            to={to}
            className="inline-flex bg-accent-500 text-white px-10 py-4 rounded-md font-semibold shadow-lift hover:bg-accent-400 hover:-translate-y-0.5 transition-all duration-300"
          >
            {button}
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
