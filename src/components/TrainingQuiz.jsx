import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaCheckCircle, FaPaw, FaLightbulb } from 'react-icons/fa'
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
        { value: 'puppy', label: t('quiz.questions.1.options.puppy'), icon: '🐶' },
        { value: 'young', label: t('quiz.questions.1.options.young'), icon: '🐕' },
        { value: 'adult', label: t('quiz.questions.1.options.adult'), icon: '🦮' },
        { value: 'senior', label: t('quiz.questions.1.options.senior'), icon: '🐕‍🦺' },
      ],
    },
    {
      id: 2,
      question: t('quiz.questions.2.question'),
      options: [
        { value: 'basic', label: t('quiz.questions.2.options.basic'), icon: '📝' },
        { value: 'behavior', label: t('quiz.questions.2.options.behavior'), icon: '🔧' },
        { value: 'advanced', label: t('quiz.questions.2.options.advanced'), icon: '🏆' },
        { value: 'socialization', label: t('quiz.questions.2.options.socialization'), icon: '🤝' },
      ],
    },
    {
      id: 3,
      question: t('quiz.questions.3.question'),
      options: [
        { value: 'low', label: t('quiz.questions.3.options.low'), icon: '😌' },
        { value: 'moderate', label: t('quiz.questions.3.options.moderate'), icon: '🙂' },
        { value: 'high', label: t('quiz.questions.3.options.high'), icon: '⚡' },
        { value: 'very-high', label: t('quiz.questions.3.options.very-high'), icon: '🚀' },
      ],
    },
  ]

  const handleAnswer = (value) => {
    const newAnswers = { ...answers, [currentQuestion]: value }
    setAnswers(newAnswers)

    if (currentQuestion < questions.length - 1) {
      setTimeout(() => {
        setCurrentQuestion(currentQuestion + 1)
      }, 300)
    } else {
      setTimeout(() => {
        setShowResults(true)
      }, 300)
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

  // Progress reflects completed answers only (starts at 0% on the first question)
  const progressPercent = Math.round((currentQuestion / questions.length) * 100)

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center space-x-2 mb-4">
            <FaLightbulb className="text-accent-500 text-3xl" />
          </div>
          <h2 className="section-title">{t('quiz.title')}</h2>
          <p className="section-subtitle">{t('quiz.subtitle')}</p>
        </motion.div>

        <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-3xl shadow-2xl p-8 md:p-12">
          <AnimatePresence mode="wait">
            {!showResults ? (
              <motion.div
                key={currentQuestion}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
              >
                <div className="mb-8">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-600">
                      {t('quiz.questionOf', { current: currentQuestion + 1, total: questions.length })}
                    </span>
                    <span className="text-sm text-gray-600">
                      {t('quiz.percentComplete', { percent: progressPercent })}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <motion.div
                      className="bg-gradient-to-r from-primary-500 to-secondary-500 h-3 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${progressPercent}%` }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
                  {questions[currentQuestion].question}
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {questions[currentQuestion].options.map((option) => (
                    <motion.button
                      key={option.value}
                      onClick={() => handleAnswer(option.value)}
                      className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-left group"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <div className="flex items-center space-x-4">
                        <div className="text-4xl">{option.icon}</div>
                        <div className="flex-1">
                          <div className="text-lg font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
                            {option.label}
                          </div>
                        </div>
                      </div>
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="text-center mb-8">
                  <FaCheckCircle className="text-6xl text-primary-500 mx-auto mb-4" />
                  <h3 className="text-3xl font-bold text-gray-900 mb-2 font-display">
                    {t('quiz.resultsTitle')}
                  </h3>
                </div>

                {(() => {
                  const rec = getRecommendation()
                  return (
                    <div className="bg-white rounded-2xl p-8 shadow-xl">
                      <div className="text-center mb-6">
                        <h4 className="text-3xl font-bold text-gray-900 mb-2">{rec.title}</h4>
                        <p className="text-primary-600 font-semibold text-lg">{rec.program}</p>
                      </div>

                      <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                        {rec.description}
                      </p>

                      <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-xl p-6 mb-6">
                        <h5 className="font-semibold text-gray-900 mb-4 flex items-center">
                          <FaPaw className="text-primary-500 mr-2" />
                          {t('quiz.tipsTitle')}
                        </h5>
                        <ul className="space-y-3">
                          {rec.tips.map((tip, index) => (
                            <li key={index} className="flex items-start space-x-3">
                              <FaCheckCircle className="text-primary-500 mt-1 flex-shrink-0" />
                              <span className="text-gray-700">{tip}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-4">
                        <button
                          onClick={resetQuiz}
                          className="flex-1 btn-outline"
                        >
                          {t('quiz.takeAgain')}
                        </button>
                        <a
                          href="/contact"
                          className="flex-1 btn-primary text-center"
                        >
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
