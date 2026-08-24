import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaCheckCircle, FaPaw, FaLightbulb } from 'react-icons/fa'

export default function TrainingQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState({})
  const [showResults, setShowResults] = useState(false)

  const questions = [
    {
      id: 1,
      question: "What's your dog's current age?",
      options: [
        { value: 'puppy', label: 'Puppy (0-6 months)', icon: '🐶' },
        { value: 'young', label: 'Young (6-18 months)', icon: '🐕' },
        { value: 'adult', label: 'Adult (1.5+ years)', icon: '🦮' },
        { value: 'senior', label: 'Senior (7+ years)', icon: '🐕‍🦺' },
      ],
    },
    {
      id: 2,
      question: "What's your primary training goal?",
      options: [
        { value: 'basic', label: 'Basic Obedience', icon: '📝' },
        { value: 'behavior', label: 'Behavior Correction', icon: '🔧' },
        { value: 'advanced', label: 'IGP Sport Training', icon: '🏆' },
        { value: 'socialization', label: 'Working Dog Foundation', icon: '🤝' },
      ],
    },
    {
      id: 3,
      question: "How would you describe your dog's energy level?",
      options: [
        { value: 'low', label: 'Calm & Relaxed', icon: '😌' },
        { value: 'moderate', label: 'Moderate Energy', icon: '🙂' },
        { value: 'high', label: 'High Energy', icon: '⚡' },
        { value: 'very-high', label: 'Super Energetic!', icon: '🚀' },
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

    let recommendation = {
      title: '',
      description: '',
      program: '',
      tips: [],
    }

    // AI-like recommendations based on answers
    if (age === 'puppy') {
      recommendation.title = '🐶 Working Dog Foundation Program'
      recommendation.program = 'Perfect for your young pup!'
      recommendation.description = 'Your puppy is at the ideal age to start structured training! Our Working Dog Foundation Program establishes obedience, builds drive, and creates a solid foundation for future training or sport work.'
      recommendation.tips = [
        'Start with clear boundaries and consistent rules from day one',
        'Build drive through play and structured exercises',
        'Establish handler focus and clear communication early',
        'Assess temperament and aptitude for future sport or work',
      ]
    } else if (goal === 'behavior') {
      recommendation.title = '🔧 Behavior Modification Program'
      recommendation.program = 'Specialized behavior correction'
      recommendation.description = 'Using classical training methods, we\'ll establish clear boundaries and structure to address behavioral challenges. Every behavior problem has a solution through proper leadership and consistent rules.'
      recommendation.tips = [
        'Establish clear rules and boundaries immediately',
        'Consistency from all family members is critical',
        'Structure and routine help dogs feel secure',
        'Leadership and clear communication solve most behavior issues',
      ]
    } else if (energy === 'very-high' || energy === 'high') {
      recommendation.title = '⚡ IGP Sport Training Program'
      recommendation.program = 'Perfect for high-drive dogs'
      recommendation.description = 'Your energetic dog is an ideal candidate for IGP sport! Channel that drive into tracking, obedience, and protection work. This demanding sport provides the mental and physical challenge high-energy dogs need.'
      recommendation.tips = [
        'High-drive dogs excel in structured sport training',
        'IGP provides physical and mental challenges',
        'Proper outlet for drive prevents behavior problems',
        'Consider joining a local IGP club for training',
      ]
    } else if (goal === 'advanced') {
      recommendation.title = '🏆 IGP Sport Training'
      recommendation.program = 'Competition-level training'
      recommendation.description = 'Ready for serious training! IGP sport training develops precision obedience, tracking skills, and protection work. Learn from a trainer with proven success at national and international competitions.'
      recommendation.tips = [
        'IGP training builds incredible dog-handler teamwork',
        'Requires commitment but delivers amazing results',
        'Competition experience helps develop skills faster',
        'Join a training club for regular practice and community',
      ]
    } else {
      recommendation.title = '📝 Classical Obedience Program'
      recommendation.program = 'Build a strong foundation'
      recommendation.description = 'Structured obedience training using classical methods. We\'ll establish reliable commands, clear boundaries, and consistent behavior through proven training techniques.'
      recommendation.tips = [
        'Classical methods create reliable, long-lasting results',
        'Clear communication and consistency are essential',
        'Structure and rules help dogs feel confident',
        'Foundation work prepares dogs for advanced training',
      ]
    }

    return recommendation
  }

  const resetQuiz = () => {
    setCurrentQuestion(0)
    setAnswers({})
    setShowResults(false)
  }

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
          <h2 className="section-title">What Training Does Your Dog Need?</h2>
          <p className="section-subtitle">Take our quick quiz to get personalized recommendations!</p>
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
                {/* Progress Bar */}
                <div className="mb-8">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-600">
                      Question {currentQuestion + 1} of {questions.length}
                    </span>
                    <span className="text-sm text-gray-600">
                      {Math.round(((currentQuestion + 1) / questions.length) * 100)}% Complete
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <motion.div
                      className="bg-gradient-to-r from-primary-500 to-secondary-500 h-3 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                </div>

                {/* Question */}
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
                  {questions[currentQuestion].question}
                </h3>

                {/* Options */}
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
                    Perfect! Here's Your Recommendation
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
                          AI-Powered Tips for Your Dog:
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
                          Take Quiz Again
                        </button>
                        <a
                          href="/contact"
                          className="flex-1 btn-primary text-center"
                        >
                          Book a Session
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

