import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaCheckCircle, FaLightbulb } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'

export default function TrainingQuiz() {
  const { t } = useTranslation()
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState({})
  const [showResults, setShowResults] = useState(false)

  const questions = [
    {
      id: 1,
      question: t('quiz.questions.1.question'),
      options: [
        { value: 'puppy', label: t('quiz.questions.1.options.puppy') },
        { value: 'young', label: t('quiz.questions.1.options.young') },
        { value: 'adult', label: t('quiz.questions.1.options.adult') },
        { value: 'senior', label: t('quiz.questions.1.options.senior') },
      ],
    },
    {
      id: 2,
      question: t('quiz.questions.2.question'),
      options: [
        { value: 'basic', label: t('quiz.questions.2.options.basic') },
        { value: 'behavior', label: t('quiz.questions.2.options.behavior') },
        { value: 'advanced', label: t('quiz.questions.2.options.advanced') },
        { value: 'socialization', label: t('quiz.questions.2.options.socialization') },
      ],
    },
    {
      id: 3,
      question: t('quiz.questions.3.question'),
      options: [
        { value: 'low', label: t('quiz.questions.3.options.low') },
        { value: 'moderate', label: t('quiz.questions.3.options.moderate') },
        { value: 'high', label: t('quiz.questions.3.options.high') },
        { value: 'very-high', label: t('quiz.questions.3.options.very-high') },
      ],
    },
  ]

  const handleAnswer = (value) => {
    const newAnswers = { ...answers, [currentQuestion]: value }
    setAnswers(newAnswers)

    if (currentQuestion < questions.length - 1) {
      setTimeout(() => setCurrentQuestion(currentQuestion + 1), 300)
    } else {
      setTimeout(() => setShowResults(true), 300)
    }
  }

  const getRecommendation = () => {
    const age = answers[0]
    const goal = answers[1]
    const energy = answers[2]

    let key = 'default'
    if (age === 'puppy') key = 'puppy'
    else if (goal === 'behavior') key = 'behavior'
    else if (energy === 'very-high' || energy === 'high') key = 'highEnergy'
    else if (goal === 'advanced') key = 'advanced'

    return {
      title: t(`quiz.results.${key}.title`),
      program: t(`quiz.results.${key}.program`),
      description: t(`quiz.results.${key}.description`),
      tips: [
        t(`quiz.results.${key}.tips.1`),
        t(`quiz.results.${key}.tips.2`),
        t(`quiz.results.${key}.tips.3`),
        t(`quiz.results.${key}.tips.4`),
      ],
    }
  }

  const resetQuiz = () => {
    setCurrentQuestion(0)
    setAnswers({})
    setShowResults(false)
  }

  const progressPercent = Math.round((currentQuestion / questions.length) * 100)

  return (
    <section className="py-24 md:py-32 bg-surface">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <p className="eyebrow mb-4">{t('quiz.title')}</p>
          <h2 className="section-title !mb-0">{t('quiz.subtitle')}</h2>
        </motion.div>

        <div className="bg-surface-elev rounded-xl shadow-soft border border-black/5 p-8 md:p-10">
          <AnimatePresence mode="wait">
            {!showResults ? (
              <motion.div
                key={currentQuestion}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3 }}
              >
                <div className="mb-8">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-ink-muted">
                      {t('quiz.questionOf', { current: currentQuestion + 1, total: questions.length })}
                    </span>
                    <span className="text-sm text-ink-muted">
                      {t('quiz.percentComplete', { percent: progressPercent })}
                    </span>
                  </div>
                  <div className="w-full bg-accent-100 h-1 rounded-full overflow-hidden">
                    <motion.div
                      className="bg-accent-600 h-1"
                      initial={{ width: 0 }}
                      animate={{ width: `${progressPercent}%` }}
                      transition={{ duration: 0.45 }}
                    />
                  </div>
                </div>

                <h3 className="text-2xl md:text-3xl font-display font-semibold text-ink mb-8 text-center">
                  {questions[currentQuestion].question}
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {questions[currentQuestion].options.map((option) => (
                    <motion.button
                      key={option.value}
                      onClick={() => handleAnswer(option.value)}
                      className="bg-surface p-5 rounded-lg border border-black/5 hover:border-accent-400 hover:bg-accent-50/70 transition-all duration-300 text-start"
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span className="text-base font-medium text-ink">{option.label}</span>
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
              >
                <div className="text-center mb-8">
                  <FaCheckCircle className="text-4xl text-primary-600 mx-auto mb-4" />
                  <h3 className="text-3xl font-display font-semibold text-ink">
                    {t('quiz.resultsTitle')}
                  </h3>
                </div>

                {(() => {
                  const rec = getRecommendation()
                  return (
                    <div>
                      <div className="bg-primary-50 border border-primary-100 rounded-lg p-6 mb-6 text-center">
                        <p className="eyebrow mb-2">{rec.program}</p>
                        <h4 className="text-2xl font-display font-semibold text-ink mb-3">{rec.title}</h4>
                        <p className="text-ink-muted leading-relaxed">{rec.description}</p>
                      </div>

                      <h5 className="font-semibold text-ink mb-3 flex items-center gap-2">
                        <FaLightbulb className="text-accent-500" />
                        {t('quiz.tipsTitle')}
                      </h5>
                      <ul className="space-y-2 mb-8">
                        {rec.tips.map((tip, index) => (
                          <li key={index} className="flex items-start gap-3 text-ink-muted">
                            <FaCheckCircle className="text-primary-600 mt-1 shrink-0 text-sm" />
                            <span>{tip}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-col sm:flex-row gap-3">
                        <button onClick={resetQuiz} className="flex-1 btn-outline">
                          {t('quiz.takeAgain')}
                        </button>
                        <a href="/contact" className="flex-1 btn-primary text-center">
                          {t('quiz.bookSession')}
                        </a>
                      </div>
                    </div>
                  )
                })()}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
