'use client'

import React from 'react'
import { motion } from 'framer-motion'

const services = [
  {
    title: 'Hypnotherapy',
    description: 'Evidence-based hypnotherapy sessions to help you achieve deep relaxation and positive change. As a trainee hypnotherapist, I work under supervision to ensure the highest standards of care.',
    status: 'Trainee Stage',
    icon: '🧠',
  },
  {
    title: 'Mind-Body Sessions',
    description: 'Integrative sessions that combine psychological techniques with physical awareness to promote holistic well-being and stress reduction.',
    status: 'Available',
    icon: '🌿',
  },
  {
    title: 'Breathwork & Relaxation',
    description: 'Guided breathing exercises and relaxation techniques to help you manage stress, anxiety, and improve overall mental clarity.',
    status: 'Available',
    icon: '🫁',
  },
  {
    title: 'Research-Informed Coaching',
    description: 'Coaching sessions grounded in psychological research and evidence-based practices to support your personal development goals.',
    status: 'In Development',
    icon: '📚',
  },
]

export default function Services() {
  return (
    <main className="pt-24">
      {/* Hero Section */}
      <section className="relative py-20 bg-serenity-blue-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="font-serif text-4xl sm:text-5xl font-bold text-serenity-blue-dark mb-6">
              Services
            </h1>
            <p className="text-lg text-serenity-neutral-dark">
              Personalized therapeutic approaches to support your journey
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white p-8 rounded-lg shadow-sm border border-serenity-neutral hover:shadow-md transition-shadow duration-200"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h2 className="font-serif text-2xl font-semibold text-serenity-blue-dark mb-3">
                  {service.title}
                </h2>
                <p className="text-serenity-neutral-dark mb-4">
                  {service.description}
                </p>
                <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-serenity-green-light text-serenity-green">
                  {service.status}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Note */}
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
                Training & Supervision
              </h2>
              <p>
                As a therapist in training, I am committed to providing the highest quality of care while 
                continuing my professional development. All hypnotherapy sessions are conducted under the 
                supervision of experienced practitioners, ensuring that you receive the best possible support 
                on your therapeutic journey.
              </p>
              <p>
                I regularly engage in continuing education and professional development to stay current with 
                the latest research and therapeutic approaches. This commitment to ongoing learning allows me 
                to offer you the most effective and evidence-based interventions.
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
                Ready to Begin Your Journey?
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