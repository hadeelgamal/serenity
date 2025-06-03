'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement form submission
    console.log('Form submitted:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

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
              Contact & Booking
            </h1>
            <p className="text-lg text-serenity-neutral-dark">
              Take the first step towards positive change
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="font-serif text-2xl font-semibold text-serenity-blue-dark mb-6">
                  Get in Touch
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-serenity-blue-dark mb-2">Email</h3>
                    <a
                      href="mailto:contact@hanaaabdulkarim.com"
                      className="text-serenity-green hover:text-serenity-green-dark transition-colors duration-200"
                    >
                      contact@hanaaabdulkarim.com
                    </a>
                  </div>
                  <div>
                    <h3 className="font-semibold text-serenity-blue-dark mb-2">WhatsApp</h3>
                    <a
                      href="https://wa.me/your-number"
                      className="text-serenity-green hover:text-serenity-green-dark transition-colors duration-200"
                    >
                      +44 (0) XXX XXX XXXX
                    </a>
                  </div>
                  <div>
                    <h3 className="font-semibold text-serenity-blue-dark mb-2">Location</h3>
                    <p className="text-serenity-neutral-dark">
                      Online sessions available worldwide<br />
                      In-person sessions in [Location]
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Booking Form */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-serenity-blue-dark mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-serenity-neutral rounded-md focus:ring-2 focus:ring-serenity-green focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-serenity-blue-dark mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-serenity-neutral rounded-md focus:ring-2 focus:ring-serenity-green focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-serenity-blue-dark mb-2">
                      Phone (optional)
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-serenity-neutral rounded-md focus:ring-2 focus:ring-serenity-green focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-serenity-blue-dark mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-4 py-2 border border-serenity-neutral rounded-md focus:ring-2 focus:ring-serenity-green focus:border-transparent"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-serenity-green hover:bg-serenity-green-dark transition-colors duration-200"
                  >
                    Send Message
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-serenity-off-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-serif text-3xl font-bold text-serenity-blue-dark mb-8 text-center">
                First Session FAQ
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-serenity-blue-dark mb-2">
                    What can I expect from the first session?
                  </h3>
                  <p className="text-serenity-neutral-dark">
                    The first session is an opportunity for us to get to know each other and discuss your goals. 
                    We'll explore your current situation, what brings you to therapy, and how we might work together.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-serenity-blue-dark mb-2">
                    How long are the sessions?
                  </h3>
                  <p className="text-serenity-neutral-dark">
                    Initial consultations typically last 60 minutes. Regular therapy sessions are 50 minutes long.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-serenity-blue-dark mb-2">
                    What is your cancellation policy?
                  </h3>
                  <p className="text-serenity-neutral-dark">
                    I require 24 hours notice for cancellations. Late cancellations may be subject to a fee.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
} 