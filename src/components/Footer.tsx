import { motion } from 'framer-motion'

const currentYear = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="bg-[#1A1B3D] text-white py-12">
      <div className="container">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div>
              <h3 className="font-serif text-lg font-bold mb-4">Contact</h3>
              <p className="text-white/80 mb-2">
                Email: contact@hanaaabdulkarim.com
              </p>
              <p className="text-white/80">
                Based in Sunderland, UK
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-serif text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#about" className="text-white/80 hover:text-white transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-white/80 hover:text-white transition-colors">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#approach" className="text-white/80 hover:text-white transition-colors">
                    Approach
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-white/80 hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="font-serif text-lg font-bold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <a href="/privacy" className="text-white/80 hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="/terms" className="text-white/80 hover:text-white transition-colors">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-12 pt-8 border-t border-white/10 text-center text-white/60">
            <p>
              © {currentYear} Hanaa Abdulkarim. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
} 