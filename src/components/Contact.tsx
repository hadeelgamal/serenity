import { motion } from 'framer-motion'
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'

const faqItems = [
  {
    question: 'What happens in the first session?',
    answer: 'The first session is an opportunity for us to discuss your goals, concerns, and expectations. We\'ll explore your background and create a personalized approach to your therapy journey.'
  },
  {
    question: 'How long are the sessions?',
    answer: 'Initial consultations are 60 minutes, while regular therapy sessions are 50 minutes. Mind-body sessions may be longer depending on the techniques used.'
  },
  {
    question: 'What is your cancellation policy?',
    answer: 'I require 24 hours notice for cancellations. This allows me to offer the slot to others who may be waiting for an appointment.'
  }
]

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="heading-2 text-center mb-12">Contact & Booking</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h3 className="heading-3 mb-6">Get in Touch</h3>
              <div className="space-y-6">
                <p className="body-text">
                  I'm here to support your journey to better mental health and well-being. Whether you have questions about my services or want to book a consultation, feel free to reach out.
                </p>
                
                <div className="space-y-4">
                  <a
                    href="mailto:contact@hanaaabdulkarim.com"
                    className="flex items-center gap-3 text-secondary hover:text-primary transition-colors"
                  >
                    <EnvelopeIcon className="w-5 h-5" />
                    <span>contact@hanaaabdulkarim.com</span>
                  </a>
                  
                  <a
                    href="https://wa.me/your-number"
                    className="flex items-center gap-3 text-secondary hover:text-primary transition-colors"
                  >
                    <PhoneIcon className="w-5 h-5" />
                    <span>Book via WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>

            {/* FAQ */}
            <div>
              <h3 className="heading-3 mb-6">First Session FAQ</h3>
              <div className="space-y-4">
                {faqItems.map((item, index) => (
                  <motion.div
                    key={item.question}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white/10 backdrop-blur-md p-4 rounded-lg shadow-sm border border-white/20"
                  >
                    <h4 className="font-medium text-secondary mb-2">
                      {item.question}
                    </h4>
                    <p className="text-sm text-secondary/70">
                      {item.answer}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  )
} 