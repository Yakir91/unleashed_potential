import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

function parseStat(number) {
  const raw = String(number)
  const digits = raw.match(/\d+/g)
  if (!digits || digits.length !== 1) {
    return { prefix: '', value: 0, suffix: raw, isNumeric: false }
  }
  const match = raw.match(/^([^\d]*)(\d+)([^\d]*)$/)
  if (!match) return { prefix: '', value: 0, suffix: raw, isNumeric: false }
  return {
    prefix: match[1] || '',
    value: Number(match[2]),
    suffix: match[3] || '',
    isNumeric: true,
  }
}

export default function AnimatedStat({ number, label, delay = 0 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.6 })
  const { prefix, value, suffix, isNumeric } = parseStat(number)
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!inView || !isNumeric) return undefined

    let frame
    const duration = 1400
    const start = performance.now()

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setDisplay(Math.round(value * eased))
      if (progress < 1) frame = requestAnimationFrame(tick)
    }

    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [inView, isNumeric, value])

  const shown = isNumeric ? `${prefix}${display}${suffix}` : number

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24, scale: 0.92 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      className="bg-surface-elev px-4 py-8 text-center flex flex-col items-center"
    >
      <div className="mb-3 flex h-24 w-24 md:h-28 md:w-28 items-center justify-center rounded-full border-2 border-accent-200 bg-gradient-to-br from-accent-50 to-primary-50 shadow-soft">
        <span className="font-stat text-2xl md:text-3xl font-extrabold tracking-tight text-accent-700 tabular-nums">
          {shown}
        </span>
      </div>
      <div className="text-sm text-ink-muted tracking-wide max-w-[9rem]">{label}</div>
    </motion.div>
  )
}
