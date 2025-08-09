import { Github, Linkedin, Mail, Heart } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/daiyongg-kim',
      icon: Github
    },
    {
      name: 'LinkedIn', 
      href: 'https://linkedin.com/in/kim-daiyong/',
      icon: Linkedin
    },
    {
      name: 'Email',
      href: 'mailto:daiyongg.kim@gmail.com',
      icon: Mail
    }
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="section-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="text-2xl font-bold bg-gradient-to-r from-primary-400 to-accent-purple bg-clip-text text-transparent mb-4">
              Daiyong Kim
            </div>
            <p className="text-gray-400 mb-4">
              Senior Android Developer with 15+ years of experience at Samsung Electronics, HSBC, and GIT America.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    className="p-2 bg-gray-800 rounded-lg hover:bg-primary-600 transition-colors duration-200"
                    aria-label={social.name}
                  >
                    <Icon size={20} />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['About', 'Experience', 'Skills', 'Projects', 'Contact'].map((link) => (
                <li key={link}>
                  <a 
                    href={`#${link.toLowerCase()}`}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Get In Touch</h3>
            <div className="space-y-2">
              <p className="text-gray-400">
                Ready to discuss your next Android project?
              </p>
              <a 
                href="mailto:daiyongg.kim@gmail.com"
                className="inline-flex items-center text-primary-400 hover:text-primary-300 transition-colors duration-200"
              >
                <Mail size={16} className="mr-2" />
                daiyongg.kim@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-400 mb-4 md:mb-0">
            © {currentYear} Daiyong Kim. All rights reserved.
          </p>
          <p className="text-gray-400 flex items-center">
            Made with <Heart size={16} className="mx-2 text-red-500" /> and lots of coffee
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer