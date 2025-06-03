'use client'

import React from 'react'
import { motion } from 'framer-motion'

const trainingModules = [
  {
    title: 'Foundation in Hypnotherapy',
    description: 'Core principles and techniques of clinical hypnotherapy',
    status: 'Completed',
    date: '2023',
  },
  {
    title: 'Mind-Body Integration',
    description: 'Understanding the connection between physical and psychological well-being',
    status: 'Completed',
    date: '2023',
  },
  {
    title: 'Advanced Therapeutic Techniques',
    description: 'Specialized approaches for complex client presentations',
    status: 'In Progress',
    date: '2024',
  },
  {
    title: 'Research Methods & Evidence-Based Practice',
    description: 'Applying scientific research to therapeutic interventions',
    status: 'Upcoming',
    date: '2024',
  },
]

const credentials = [
  {
    name: 'General Hypnotherapy Standards Council (GHSC)',
    logo: 'GHSC',
    status: 'Student Member',
  },
  {
    name: 'Complementary and Natural Healthcare Council (CNHC)',
    logo: 'CNHC',
    status: 'Pending Registration',
  },
  {
    name: 'International Council of Clinical Hypnotherapy Practitioners (ICCHP)',
    logo: 'ICCHP',
    status: 'Student Member',
  },
]

export default function Training() {
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
              Training & Credentials
            </h1>
            <p className="text-lg text-serenity-neutral-dark">
              Professional development and accreditation
            </p>
          </motion.div>
        </div>
      </section>

      {/* Training Modules */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="font-serif text-3xl font-bold text-serenity-blue-dark mb-12 text-center"
            >
              ICCHP Training Modules
            </motion.h2>
            <div className="space-y-8">
              {trainingModules.map((module, index) => (
                <motion.div
                  key={module.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-lg shadow-sm border border-serenity-neutral"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-serif text-xl font-semibold text-serenity-blue-dark mb-2">
                        {module.title}
                      </h3>
                      <p className="text-serenity-neutral-dark mb-4">
                        {module.description}
                      </p>
                    </div>
                    <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-serenity-green-light text-serenity-green">
                      {module.status}
                    </span>
                  </div>
                  <p className="text-sm text-serenity-neutral-dark">
                    {module.date}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-20 bg-serenity-off-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="font-serif text-3xl font-bold text-serenity-blue-dark mb-12 text-center"
            >
              Professional Memberships
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {credentials.map((credential, index) => (
                <motion.div
                  key={credential.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-lg shadow-sm border border-serenity-neutral text-center"
                >
                  <div className="text-2xl font-bold text-serenity-blue-dark mb-2">
                    {credential.logo}
                  </div>
                  <h3 className="font-serif text-lg font-semibold text-serenity-blue-dark mb-2">
                    {credential.name}
                  </h3>
                  <p className="text-sm text-serenity-green">
                    {credential.status}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Supervision Note */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="prose prose-lg"
            >
              <h2 className="font-serif text-3xl font-bold text-serenity-blue-dark mb-6">
                Clinical Supervision
              </h2>
              <p>
                As a trainee hypnotherapist, I receive regular clinical supervision from experienced 
                practitioners. This ensures that I provide the highest standard of care while continuing 
                to develop my skills and knowledge.
              </p>
              <p>
                My supervisor is a registered member of the General Hypnotherapy Standards Council (GHSC) 
                and has extensive experience in clinical practice. This supervision process helps me to:
              </p>
              <ul>
                <li>Maintain professional standards and ethical practice</li>
                <li>Develop my therapeutic skills and techniques</li>
                <li>Reflect on my work and continue learning</li>
                <li>Ensure client safety and well-being</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
} 