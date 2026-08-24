import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { PhotoProvider, PhotoView } from 'react-photo-view'
import 'react-photo-view/dist/react-photo-view.css'
import { FaPaw, FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'

export default function Gallery() {
  const { t } = useTranslation()
  const [selectedFilter, setSelectedFilter] = useState('all')

  const filters = [
    { id: 'all', label: t('gallery.filters.all'), icon: FaPaw },
    { id: 'training', label: t('gallery.filters.training'), icon: FaPaw },
    { id: 'before-after', label: t('gallery.filters.beforeAfter'), icon: FaPaw },
    { id: 'outdoor', label: t('gallery.filters.outdoor'), icon: FaPaw },
    { id: 'puppies', label: t('gallery.filters.puppies'), icon: FaPaw },
  ]

  // Real gallery items with category tags
  const galleryItems = [
    {
      id: 1,
      category: ['training', 'outdoor'],
      title: 'Heelwork Focus',
      description: 'Focused obedience and handler-dog connection',
      image: '/images/gallery/igp-heelwork-1.png',
    },
    {
      id: 2,
      category: ['training', 'outdoor'],
      title: 'Competition Obedience',
      description: 'Precision heeling under trial conditions',
      image: '/images/gallery/igp-heelwork-2.png',
    },
    {
      id: 3,
      category: ['training', 'outdoor'],
      title: 'Long Bite',
      description: 'Power, control, and commitment in protection work',
      image: '/images/gallery/igp-protection-1.png',
    },
    {
      id: 4,
      category: ['training', 'outdoor'],
      title: 'Tracking Session',
      description: 'Structured scent tracking in open field',
      image: '/images/gallery/igp-tracking-1.png',
    },
    {
      id: 5,
      category: ['training', 'outdoor'],
      title: 'Retrieve Over Obstacle',
      description: 'Athletic obedience with dumbbell retrieve',
      image: '/images/gallery/igp-obedience-1.png',
    },
    {
      id: 6,
      category: ['training', 'outdoor'],
      title: 'Fast Retrieve',
      description: 'Drive and speed in obedience retrieve',
      image: '/images/gallery/igp-retrieve-1.png',
    },
    {
      id: 7,
      category: ['training', 'outdoor'],
      title: 'Agility Jump',
      description: 'Confidence and coordination over obstacles',
      image: '/images/gallery/igp-agility-1.png',
    },
    {
      id: 8,
      category: ['training', 'outdoor'],
      title: 'Protection Engagement',
      description: 'Controlled targeting and grip quality',
      image: '/images/gallery/igp-protection-2.png',
    },
    {
      id: 9,
      category: ['training', 'outdoor'],
      title: 'Bite Development',
      description: 'Building intensity with clean handling',
      image: '/images/gallery/igp-protection-3.png',
    },
    {
      id: 10,
      category: ['before-after', 'outdoor'],
      title: 'Competition Result',
      description: 'Proud moment from a successful event',
      image: '/images/gallery/igp-award-1.png',
    },
    {
      id: 11,
      category: ['training', 'outdoor'],
      title: 'Trial-Style Heeling',
      description: 'Focused movement in obedience pattern',
      image: '/images/gallery/igp-heelwork-3.png',
    },
    {
      id: 12,
      category: ['training', 'outdoor'],
      title: 'Front Position Focus',
      description: 'Attention and precision during obedience',
      image: '/images/gallery/igp-heelwork-4.png',
    },
    {
      id: 13,
      category: ['training', 'outdoor'],
      title: 'Blind Search',
      description: 'Control and commitment in protection phase',
      image: '/images/gallery/igp-protection-4.png',
    },
    {
      id: 14,
      category: ['training', 'outdoor'],
      title: 'Dynamic Long Bite',
      description: 'Explosive power and full engagement',
      image: '/images/gallery/igp-protection-5.png',
    },
    {
      id: 15,
      category: ['training', 'outdoor'],
      title: 'Grip Work',
      description: 'Technical bite work with steady control',
      image: '/images/gallery/igp-protection-6.png',
    },
    {
      id: 16,
      category: ['puppies', 'outdoor'],
      title: t('gallery.items.7.title'),
      description: t('gallery.items.7.description'),
      image: '/images/gallery/puppy_img.jpg',
    },
    {
      id: 17,
      category: ['training', 'outdoor'],
      title: t('gallery.items.8.title'),
      description: t('gallery.items.8.description'),
      image: '/images/gallery/group_class.jpg',
    },
  ]

  const filteredItems = selectedFilter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category.includes(selectedFilter))

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
              {t('gallery.hero.title')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500">{t('gallery.hero.titleHighlight')}</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('gallery.hero.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-white sticky top-20 z-40 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filter) => (
              <motion.button
                key={filter.id}
                onClick={() => setSelectedFilter(filter.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center space-x-2 ${
                  selectedFilter === filter.id
                    ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <filter.icon />
                <span>{filter.label}</span>
              </motion.button>
            ))}
          </div>
          
          <div className="text-center mt-4 text-gray-600">
            {t('gallery.showing')} <strong>{filteredItems.length}</strong> {filteredItems.length === 1 ? t('gallery.photo') : t('gallery.photos')}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-gradient-to-br from-secondary-50 to-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <PhotoProvider
            maskOpacity={0.9}
            speed={() => 300}
            easing={(type) => (type === 2 ? 'cubic-bezier(0.36, 0, 0.66, -0.56)' : 'cubic-bezier(0.34, 1.56, 0.64, 1)')}
            toolbarRender={({ onScale, scale, rotate, onRotate }) => (
              <>
                <svg
                  className="PhotoView-Slider__toolbarIcon"
                  onClick={() => onScale(scale + 1)}
                  width="44"
                  height="44"
                  fill="white"
                  viewBox="0 0 768 768"
                >
                  <path d="M384 640.5q105 0 180.75-75.75t75.75-180.75-75.75-180.75-180.75-75.75-180.75 75.75-75.75 180.75 75.75 180.75 180.75 75.75zM384 64.5q132 0 225.75 93.75t93.75 225.75-93.75 225.75-225.75 93.75-225.75-93.75-93.75-225.75 93.75-225.75 225.75-93.75zM415.5 223.5v129h129v64.5h-129v129h-64.5v-129h-129v-64.5h129v-129h64.5z" />
                </svg>
                <svg
                  className="PhotoView-Slider__toolbarIcon"
                  onClick={() => onScale(scale - 1)}
                  width="44"
                  height="44"
                  fill="white"
                  viewBox="0 0 768 768"
                >
                  <path d="M384 640.5q105 0 180.75-75.75t75.75-180.75-75.75-180.75-180.75-75.75-180.75 75.75-75.75 180.75 75.75 180.75 180.75 75.75zM384 64.5q132 0 225.75 93.75t93.75 225.75-93.75 225.75-225.75 93.75-225.75-93.75-93.75-225.75 93.75-225.75 225.75-93.75zM223.5 352.5h321v64.5h-321v-64.5z" />
                </svg>
                <svg
                  className="PhotoView-Slider__toolbarIcon"
                  onClick={() => onRotate(rotate + 90)}
                  width="44"
                  height="44"
                  fill="white"
                  viewBox="0 0 768 768"
                >
                  <path d="M565.5 202.5l75-75v225h-225l103.5-103.5c-34.5-34.5-82.5-57-135-57-106.5 0-192 85.5-192 192s85.5 192 192 192c84 0 156-52.5 181.5-127.5h66c-28.5 111-127.5 192-247.5 192-141 0-255-115.5-255-256.5s114-256.5 255-256.5c70.5 0 135 28.5 181.5 75z" />
                </svg>
              </>
            )}
          >
            <AnimatePresence mode="popLayout">
              <motion.div
                layout
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
              >
                {filteredItems.map((item, index) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="group cursor-pointer"
                  >
                    <PhotoView src={item.image}>
                      <div className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 aspect-square">
                        <img
                          src={item.image}
                          alt={item.title}
                          loading="lazy"
                          className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />

                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <div className="text-white text-center">
                            <div className="text-4xl mb-2">🔍</div>
                            <p className="font-semibold">{t('gallery.clickToView')}</p>
                          </div>
                        </div>
                      </div>
                    </PhotoView>
                    
                    {/* Caption */}
                    <div className="mt-3 px-2">
                      <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                      <p className="text-sm text-gray-600">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </PhotoProvider>

          {filteredItems.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-20"
            >
              <FaPaw className="text-6xl text-gray-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-700 mb-2">{t('gallery.noPhotos.title')}</h3>
              <p className="text-gray-600">{t('gallery.noPhotos.subtitle')}</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Upload Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="section-title">{t('gallery.upload.title')}</h2>
            <p className="section-subtitle mb-8">
              {t('gallery.upload.subtitle')}
            </p>
            
            <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-3xl p-12 shadow-lg">
              <FaPaw className="text-6xl text-primary-500 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('gallery.upload.sectionTitle')}</h3>
              <div className="text-left max-w-2xl mx-auto space-y-3 text-gray-700">
                <p>{t('gallery.upload.tips.1')}</p>
                <p>{t('gallery.upload.tips.2')}</p>
                <p>{t('gallery.upload.tips.3')}</p>
                <p>{t('gallery.upload.tips.4')}</p>
                <p>{t('gallery.upload.tips.5')}</p>
              </div>
              <div className="mt-8">
                <div className="inline-block bg-white px-8 py-4 rounded-full shadow-lg">
                  <p className="text-gray-700">
                    <strong>{t('gallery.upload.proTip')}</strong> {t('gallery.upload.proTipText')}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-500 to-secondary-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-display">
              {t('gallery.cta.title')}
            </h2>
            <p className="text-xl text-white/90 mb-8">
              {t('gallery.cta.subtitle')}
            </p>
            <a
              href="/contact"
              className="inline-block bg-white text-primary-600 px-12 py-5 rounded-full font-bold text-lg shadow-2xl hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              {t('gallery.cta.button')}
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

