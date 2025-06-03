import { motion } from 'framer-motion'
import { ChartBarIcon, ClockIcon, BeakerIcon } from '@heroicons/react/24/outline'

const approaches = [
  {
    title: 'HRV & Emotion Recognition',
    description: 'Research-backed understanding of how heart rate variability correlates with emotional states and stress responses.',
    icon: ChartBarIcon,
    details: [
      'Real-time biofeedback integration',
      'Personalized stress management strategies',
      'Evidence-based emotional regulation techniques'
    ]
  },
  {
    title: 'Procrastination & Task Aversiveness',
    description: 'Scientific approach to understanding and overcoming procrastination through behavioral psychology.',
    icon: ClockIcon,
    details: [
      'Task analysis and breakdown',
      'Motivation enhancement techniques',
      'Habit formation strategies'
    ]
  },
  {
    title: 'Mind-Body Therapeutics',
    description: 'Integrative approach combining psychological principles with physiological awareness.',
    icon: BeakerIcon,
    details: [
      'Somatic experiencing',
      'Breathwork integration',
      'Mindfulness-based interventions'
    ]
  }
]

export default function Approach() {
  return (
    <section id="approach" className="py-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="heading-2 text-center mb-12">Research & Approach</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {approaches.map((approach, index) => (
              <motion.div
                key={approach.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-md rounded-lg p-6 shadow-sm border border-white/20"
              >
                <div className="flex items-center gap-4 mb-4">
                  <approach.icon className="w-8 h-8 text-primary" />
                  <h3 className="heading-3 text-lg">{approach.title}</h3>
                </div>
                
                <p className="body-text mb-6">{approach.description}</p>
                
                <ul className="space-y-2">
                  {approach.details.map((detail, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.2 + (i * 0.1) }}
                      className="flex items-center gap-2 text-sm text-secondary/80"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {detail}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
} 