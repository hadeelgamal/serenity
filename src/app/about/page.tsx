'use client'

import React from 'react'
import { motion } from 'framer-motion'

const qualifications = [
  {
    title: 'BSc in Pharmacy and Biotechnology',
    institution: 'German University in Cairo (GUC)',
    year: '2012-2017',
  },
  {
    title: 'MSc in Pharmaceutical & Biopharmaceutical Formulations',
    institution: 'University of Sunderland',
    year: '2018-2019',
  },
  {
    title: 'MSc in Psychology',
    institution: 'University of Sunderland',
    year: '2020-2021',
  },
  {
    title: 'Diploma in Integrative Evidence-Based Clinical Hypnotherapy & Mind Body Health Practice',
    institution: 'ICCHP',
    year: '2023-Present',
    inProgress: true,
  },
]

export default function About() {
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
              About Me
            </h1>
            <p className="text-lg text-serenity-neutral-dark">
              Bridging the gap between science and soul through integrative therapy
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="prose prose-lg"
            >
              <p>
                My journey into therapy began with a deep fascination for both the scientific and human aspects of healing. 
                With a background in pharmacy and psychology, I've developed a unique perspective that combines evidence-based 
                approaches with compassionate care.
              </p>
              <p>
                My research in heart rate variability (HRV) and emotion recognition has given me valuable insights into the 
                mind-body connection, which I now apply in my therapeutic practice. I believe in creating a safe, nurturing 
                space where clients can explore their inner world and work towards meaningful change.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Qualifications Section */}
      <section className="py-20 bg-serenity-off-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="font-serif text-3xl font-bold text-serenity-blue-dark mb-12 text-center"
            >
              Education & Training
            </motion.h2>
            <div className="space-y-8">
              {qualifications.map((qual, index) => (
                <motion.div
                  key={qual.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                  className="bg-white p-6 rounded-lg shadow-sm border border-serenity-neutral"
                >
                  <h3 className="font-serif text-xl font-semibold text-serenity-blue-dark mb-2">
                    {qual.title}
                  </h3>
                  <p className="text-serenity-neutral-dark mb-1">{qual.institution}</p>
                  <p className="text-sm text-serenity-green">
                    {qual.year}
                    {qual.inProgress && ' (In Progress)'}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Approach Section */}
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
                My Approach
              </h2>
              <p>
                I integrate various therapeutic modalities to create a personalized approach for each client. 
                My practice combines:
              </p>
              <ul>
                <li>Evidence-based hypnotherapy techniques</li>
                <li>Mind-body integration practices</li>
                <li>Research-informed coaching methods</li>
                <li>Breathwork and relaxation techniques</li>
              </ul>
              <p>
                As a therapist in training, I work under supervision to ensure the highest standards of care 
                and professional development. My goal is to support clients in their journey towards greater 
                self-awareness, emotional well-being, and personal growth.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
} 