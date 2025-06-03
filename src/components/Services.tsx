import { motion } from 'framer-motion'
import { HeartIcon, AcademicCapIcon, SparklesIcon } from '@heroicons/react/24/outline'

const services = [
  {
    title: 'Hypnotherapy',
    description: 'Evidence-based hypnotherapy sessions to help you overcome challenges and achieve your goals. Currently in training under supervision.',
    icon: AcademicCapIcon,
    status: 'Trainee Stage'
  },
  {
    title: 'Mind-Body Sessions',
    description: 'Integrative sessions combining mindfulness, breathing techniques, and body awareness to promote holistic well-being.',
    icon: HeartIcon,
    status: 'Available'
  },
  {
    title: 'Research-Informed Coaching',
    description: 'Personal development coaching grounded in psychological research and evidence-based practices.',
    icon: SparklesIcon,
    status: 'In Development'
  }
]

export default function Services() {
  return (
    <section id="services" className="py-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="heading-2 text-center mb-12">Services</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-md rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow border border-white/20"
              >
                <div className="flex items-center gap-4 mb-4">
                  <service.icon className="w-8 h-8 text-primary" />
                  <h3 className="heading-3 text-lg">{service.title}</h3>
                </div>
                
                <p className="body-text mb-4">{service.description}</p>
                
                <div className="mt-4">
                  <span className="inline-block px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full">
                    {service.status}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="body-text text-secondary/70">
              Note: All hypnotherapy sessions are conducted under supervision as part of my training at ICCHP.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 