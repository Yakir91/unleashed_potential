import { motion } from 'framer-motion'
import { FaPaw, FaStar, FaTrophy } from 'react-icons/fa'

export default function DogOfTheWeek() {
  return (
    <section className="py-20 bg-gradient-to-br from-accent-50 to-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center space-x-2 mb-4">
            <FaTrophy className="text-accent-500 text-3xl" />
            <h2 className="section-title mb-0">Dog of the Week</h2>
            <FaTrophy className="text-accent-500 text-3xl" />
          </div>
          <p className="section-subtitle">Celebrating our amazing success stories!</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Image Section */}
              <div className="relative bg-gradient-to-br from-primary-400 to-secondary-500 aspect-square flex items-center justify-center">
                <div className="text-center text-white p-8">
                  <FaPaw className="text-8xl mb-4 mx-auto animate-bounce-slow" />
                  <p className="text-xl font-semibold">Featured Dog Photo</p>
                  <p className="text-white/80 mt-2">Add a photo of this week's star student!</p>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-8 flex flex-col justify-center">
                <div className="flex items-center space-x-2 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400 text-xl" />
                  ))}
                </div>
                
                <h3 className="text-3xl font-bold text-gray-900 mb-2 font-display">
                  Max the Golden Retriever
                </h3>
                
                <p className="text-gray-600 mb-4">
                  <strong>Achievement:</strong> Mastered Advanced Obedience
                </p>

                <p className="text-gray-700 leading-relaxed mb-6">
                  Max came to us as an energetic puppy who loved to jump on everyone. After 8 weeks of dedicated training, he's now a well-behaved gentleman who responds to over 15 commands and has even started agility training!
                </p>

                <div className="bg-primary-50 rounded-xl p-4 border-l-4 border-primary-500">
                  <p className="text-gray-700 italic">
                    "The transformation has been incredible! Max is now the perfect companion, and we couldn't be happier!" - Sarah, Max's Owner
                  </p>
                </div>

                <div className="mt-6 flex items-center space-x-4 text-sm text-gray-600">
                  <div className="flex items-center space-x-1">
                    <FaPaw className="text-primary-500" />
                    <span>8 Weeks of Training</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <FaTrophy className="text-accent-500" />
                    <span>15+ Commands Mastered</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

