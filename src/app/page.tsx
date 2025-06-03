import { motion } from 'framer-motion'

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-serenity-off-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-serenity-blue-dark mb-6"
            >
              Integrative Hypnotherapy for Real Change
              <span className="block text-serenity-green mt-2">Mind, Body & Beyond</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg sm:text-xl text-serenity-neutral-dark mb-8"
            >
              Supportive, research-based therapy grounded in both science and soul.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <a
                href="#book"
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-serenity-green hover:bg-serenity-green-dark transition-colors duration-200"
              >
                Book Consultation
              </a>
              <a
                href="#learn-more"
                className="inline-flex items-center justify-center px-8 py-3 border border-serenity-green text-base font-medium rounded-md text-serenity-green hover:bg-serenity-green-light transition-colors duration-200"
              >
                Learn More
              </a>
            </motion.div>
          </div>
        </div>
        
        {/* Animated breath element */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-6 h-10 border-2 border-serenity-green rounded-full flex items-center justify-center">
            <div className="w-1 h-3 bg-serenity-green rounded-full animate-breath"></div>
          </div>
        </motion.div>
      </section>
    </main>
  )
} 