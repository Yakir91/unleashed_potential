import { motion } from 'framer-motion'

export default function PageHero({ title, titleHighlight = '', subtitle, eyebrow }) {
  return (
    <section className="relative bg-surface-dark text-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-950 via-surface-dark to-accent-950/80" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-accent-500/50 to-transparent" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-3xl mx-auto"
        >
          {eyebrow && <p className="eyebrow text-accent-300 mb-4">{eyebrow}</p>}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold text-white mb-5 leading-tight">
            {title}
            {titleHighlight ? (
              <span className="text-accent-300">{titleHighlight}</span>
            ) : null}
          </h1>
          {subtitle && (
            <p className="text-lg md:text-xl text-white/65 leading-relaxed">{subtitle}</p>
          )}
        </motion.div>
      </div>
    </section>
  )
}
