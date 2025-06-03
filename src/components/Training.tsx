import { motion } from 'framer-motion'
import { CheckCircleIcon } from '@heroicons/react/24/solid'

const modules = [
  {
    title: 'Foundation in Hypnotherapy',
    status: 'Completed',
    description: 'Core principles and techniques of clinical hypnotherapy'
  },
  {
    title: 'Mind-Body Integration',
    status: 'Completed',
    description: 'Understanding the connection between physical and mental health'
  },
  {
    title: 'Evidence-Based Practice',
    status: 'In Progress',
    description: 'Research methodologies and clinical applications'
  },
  {
    title: 'Advanced Techniques',
    status: 'Upcoming',
    description: 'Specialized approaches for complex cases'
  }
]

const accreditations = [
  {
    name: 'General Hypnotherapy Standards Council (GHSC)',
    logo: '/logos/ghsc.png'
  },
  {
    name: 'Complementary & Natural Healthcare Council (CNHC)',
    logo: '/logos/cnhc.png'
  },
  {
    name: 'International Council of Hypnotherapy Practitioners (ICCHP)',
    logo: '/logos/icchp.png'
  }
]

export default function Training() {
  return (
    <section id="training" className="py-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="heading-2 text-center mb-12">Training & Credentials</h2>
          
          {/* Training Timeline */}
          <div className="mb-16">
            <h3 className="heading-3 mb-8 text-center">ICCHP Training Progress</h3>
            <div className="space-y-6">
              {modules.map((module, index) => (
                <motion.div
                  key={module.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-4 p-4 bg-white/10 backdrop-blur-md rounded-lg shadow-sm border border-white/20"
                >
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircleIcon className={`w-6 h-6 ${
                      module.status === 'Completed' ? 'text-primary' : 'text-secondary/30'
                    }`} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-medium text-secondary">{module.title}</h4>
                      <span className={`text-sm font-medium ${
                        module.status === 'Completed' ? 'text-primary' :
                        module.status === 'In Progress' ? 'text-secondary' :
                        'text-secondary/50'
                      }`}>
                        {module.status}
                      </span>
                    </div>
                    <p className="text-sm text-secondary/70">{module.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Accreditations */}
          <div>
            <h3 className="heading-3 mb-8 text-center">Accrediting Bodies</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {accreditations.map((accreditation, index) => (
                <motion.div
                  key={accreditation.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex flex-col items-center p-6 bg-white/10 backdrop-blur-md rounded-lg shadow-sm border border-white/20"
                >
                  <div className="w-24 h-24 mb-4 bg-neutral/20 rounded-full flex items-center justify-center">
                    {/* Placeholder for logo */}
                    <span className="text-2xl font-serif text-secondary/50">
                      {accreditation.name.charAt(0)}
                    </span>
                  </div>
                  <p className="text-sm text-center text-secondary/80">
                    {accreditation.name}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 