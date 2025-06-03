'use client'

import React from 'react'
import { motion } from 'framer-motion'

const researchTopics = [
  {
    title: 'Heart Rate Variability (HRV)',
    description: 'Research on the relationship between HRV and emotional regulation, showing how physiological responses can be used to enhance therapeutic outcomes.',
    icon: '💓',
  },
  {
    title: 'Emotion Recognition',
    description: 'Studies on how we process and respond to emotional stimuli, informing more effective therapeutic interventions.',
    icon: '🎭',
  },
  {
    title: 'Procrastination & Task Aversiveness',
    description: 'Understanding the psychological barriers to action and developing strategies to overcome them.',
    icon: '⏳',
  },
  {
    title: 'Mind-Body Therapeutics',
    description: 'Exploring the integration of physical and psychological approaches to promote holistic well-being.',
    icon: '🧘',
  },
]

export default function Approach() {
  return (
    <main className="pt-24">
      {/* Hero Section */}
      <section className="relative py-20 bg-serenity-green-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="font-serif text-4xl sm:text-5xl font-bold text-serenity-blue-dark mb-6">
              Research & Approach
            </h1>
            <p className="text-lg text-serenity-neutral-dark">
              Evidence-based therapy grounded in scientific research
            </p>
          </motion.div>
        </div>
      </section>

      {/* Research Topics */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {researchTopics.map((topic, index) => (
              <motion.div
                key={topic.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white p-8 rounded-lg shadow-sm border border-serenity-neutral hover:shadow-md transition-shadow duration-200"
              >
                <div className="text-4xl mb-4">{topic.icon}</div>
                <h2 className="font-serif text-2xl font-semibold text-serenity-blue-dark mb-3">
                  {topic.title}
                </h2>
                <p className="text-serenity-neutral-dark">
                  {topic.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-20 bg-serenity-off-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="prose prose-lg"
            >
              <h2 className="font-serif text-3xl font-bold text-serenity-blue-dark mb-6">
                My Methodology
              </h2>
              <p>
                My therapeutic approach is built on three core principles:
              </p>
              <h3 className="font-serif text-xl font-semibold text-serenity-blue-dark mt-8 mb-4">
                1. Evidence-Based Practice
              </h3>
              <p>
                Every intervention and technique I use is grounded in scientific research and proven 
                therapeutic approaches. This ensures that you receive the most effective and up-to-date 
                care possible.
              </p>
              <h3 className="font-serif text-xl font-semibold text-serenity-blue-dark mt-8 mb-4">
                2. Integrative Approach
              </h3>
              <p>
                I combine various therapeutic modalities to create a personalized approach that addresses 
                your unique needs. This might include elements of hypnotherapy, cognitive-behavioral 
                techniques, and mind-body practices.
              </p>
              <h3 className="font-serif text-xl font-semibold text-serenity-blue-dark mt-8 mb-4">
                3. Client-Centered Care
              </h3>
              <p>
                You are the expert on your own experience. I work collaboratively with you to develop 
                goals and strategies that align with your values and aspirations. Your feedback and 
                preferences guide our work together.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-serif text-3xl font-bold text-serenity-blue-dark mb-6">
                Ready to Experience Evidence-Based Therapy?
              </h2>
              <p className="text-lg text-serenity-neutral-dark mb-8">
                Book a consultation to discuss how we can work together to achieve your goals.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-serenity-green hover:bg-serenity-green-dark transition-colors duration-200"
              >
                Book Consultation
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
} 