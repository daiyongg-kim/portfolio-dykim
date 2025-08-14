import { useState, useEffect } from 'react'
import { Menu, X, Download } from 'lucide-react'
import Button from '../ui/Button'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const handleResumeDownload = () => {
    const resumePath = '/Daiyong_Kim_s_Resume_for_Android_Engineer.pdf'
    window.open(resumePath, '_blank')
  }

  const handleConnectClick = () => {
    window.open('https://paypal.me/DaiyongKim/5?locale.x=en_US&country.x=US', '_blank')
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#experience', label: 'Experience' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' }
  ]

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'glass-effect' : 'bg-transparent'
    }`}>
      <nav className="section-container py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-2xl font-bold gradient-text">
            DYKIM
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-primary-600 transition-colors duration-200 font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Button 
              variant="outline" 
              size="sm"
              className="flex items-center gap-2"
              onClick={handleResumeDownload}
            >
              <Download size={16} />
              Resume
            </Button>
            <div className="relative group">
              <Button size="sm" onClick={handleConnectClick}>
                Buy me a coffee
              </Button>
              {/* Tooltip */}
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-3 py-2 bg-white text-gray-800 text-sm rounded-lg shadow-lg border border-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50">
                Buy me a coffee ($5)
                {/* Arrow */}
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-b-white"></div>
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-b-gray-200" style={{marginBottom: '-1px'}}></div>
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-700 hover:text-primary-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t border-gray-200 z-40">
            <div className="section-container py-6">
              <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-gray-700 hover:text-primary-600 transition-colors duration-200 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-4 border-t border-gray-200 flex flex-col space-y-3">
                <Button 
                  variant="outline" 
                  size="sm"
                  className="flex items-center justify-center gap-2"
                  onClick={handleResumeDownload}
                >
                  <Download size={16} />
                  Resume
                </Button>
                <Button size="sm" onClick={() => {
                  handleConnectClick()
                  setIsMenuOpen(false) // 모바일 메뉴 닫기
                }}>
                  Buy me a coffee
                </Button>
              </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header