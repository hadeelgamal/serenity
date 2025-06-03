import { motion } from 'framer-motion'

const qualifications = [
  {
    title: 'BSc in Pharmacy and Biotechnology',
    institution: 'German University in Cairo (GUC)',
    year: '2018'
  },
  {
    title: 'MSc in Pharmaceutical & Biopharmaceutical Formulations',
    institution: 'University of Sunderland',
    year: '2020'
  },
  {
    title: 'MSc in Psychology',
    institution: 'University of Sunderland',
    year: '2022'
  },
  {
    title: 'Diploma in Integrative Evidence-Based Clinical Hypnotherapy & Mind Body Health Practice',
    institution: 'ICCHP',
    year: 'In Progress'
  }
]

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="heading-2 text-center mb-12">About Me</h2>
          
          <div className="space-y-8">
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg shadow-sm border border-white/20">
              <p className="body-text">
                My journey into integrative hypnotherapy is rooted in a unique blend of scientific expertise and deep understanding of human psychology. With a background spanning pharmacy, psychology, and now hypnotherapy, I bring a comprehensive perspective to mental health and well-being.
              </p>
            </div>
            
            
            <div className="mt-12">
              <h3 className="heading-3 mb-6">Education & Training</h3>
              <div className="space-y-6">
                {qualifications.map((qual, index) => (
                  <motion.div
                    key={qual.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 p-4 bg-white/10 backdrop-blur-md rounded-lg shadow-sm border border-white/20"
                  >
                    <div className="flex-1">
                      <h4 className="font-medium text-secondary">{qual.title}</h4>
                      <p className="text-sm text-secondary/70">{qual.institution}</p>
                    </div>
                    <div className="text-sm font-medium text-primary">
                      {qual.year}
                    </div>
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