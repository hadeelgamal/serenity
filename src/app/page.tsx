"use client";

import { motion } from 'framer-motion'
import About from '@/components/About'
import Services from '@/components/Services'
import Approach from '@/components/Approach'
import Training from '@/components/Training'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full"
        >
          <source src="/Ripples_on_water_(light_theme).webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
        
        {/* Content */}
        <div className="absolute mb-[300px] inset-0 flex items-center justify-center">
          <div className="container relative z-10 text-center">
            <motion.h1 
              className="font-sans text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-text-dark"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Integrative Hypnotherapy
            </motion.h1>
            <motion.p 
              className="font-sans text-base md:text-lg max-w-2xl mx-auto mb-8 text-text-dark"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Supportive, research-based therapy grounded in both science and soul.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex gap-4 justify-center"
            >
              
            </motion.div>
          </div>
        </div>

        {/* Blur Glass Effect */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-bg-violet/90 via-bg-violet/40 to-transparent backdrop-blur-sm"></div>
      </section>

      {/* About Section */}
      <About />

      {/* Services Section */}
      <Services />

      {/* Approach Section */}
      <Approach />

      {/* Training Section */}
      <Training />

      {/* Contact Section */}
      <Contact />
    </main>
  )
} 