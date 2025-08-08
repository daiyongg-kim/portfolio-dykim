import { useState, useEffect } from 'react'
import { ArrowDown, Download, ExternalLink, Smartphone } from 'lucide-react'
import Button from '../ui/Button'
import { heroContent, personalInfo } from '../../data/portfolio'

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section id="home" className="min-h-screen relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-primary-50/30">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-200/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-purple/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-accent-green/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
          {/* Content */}
          <div className={`transition-all duration-1000 ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
            <div className="mb-6">
              <p className="text-primary-600 font-medium text-lg mb-2">
                {heroContent.greeting}
              </p>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
                <span className="gradient-text">{heroContent.headline}</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-8 max-w-2xl">
                {heroContent.description}
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-1">10+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-1">20+</div>
                <div className="text-sm text-gray-600">Apps Published</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-1">5M+</div>
                <div className="text-sm text-gray-600">Downloads</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button 
                size="lg"
                className="flex items-center justify-center gap-2"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <ExternalLink size={20} />
                {heroContent.cta.primary}
              </Button>
              <Button 
                variant="secondary" 
                size="lg"
                className="flex items-center justify-center gap-2"
                onClick={() => window.open('/resume.pdf', '_blank')}
              >
                <Download size={20} />
                {heroContent.cta.secondary}
              </Button>
            </div>

            {/* Contact Info */}
            <div className="text-gray-600">
              <p className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                Available for new opportunities
              </p>
              <p>📍 {personalInfo.location}</p>
            </div>
          </div>

          {/* Visual */}
          <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}>
            <div className="relative max-w-lg mx-auto">
              {/* Phone Mockup */}
              <div className="relative">
                {/* Phone Frame */}
                <div className="bg-gray-900 rounded-[3rem] p-3 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                  <div className="bg-black rounded-[2.5rem] p-1">
                    <div className="bg-white rounded-[2rem] aspect-[9/19] relative overflow-hidden">
                      {/* Screen Content */}
                      <div className="absolute inset-0 bg-gradient-to-b from-primary-500 to-primary-700 p-6 text-white">
                        {/* Status Bar */}
                        <div className="flex justify-between items-center mb-8">
                          <span className="text-sm font-medium">9:41</span>
                          <div className="flex items-center gap-1">
                            <div className="w-6 h-3 border border-white/50 rounded-sm">
                              <div className="w-4 h-1.5 bg-white rounded-sm m-0.5"></div>
                            </div>
                          </div>
                        </div>

                        {/* App Interface */}
                        <div className="text-center mb-8">
                          <div className="w-20 h-20 bg-white/20 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                            <Smartphone size={32} />
                          </div>
                          <h3 className="text-lg font-semibold mb-2">Android Master</h3>
                          <p className="text-white/80 text-sm">10+ Years of Excellence</p>
                        </div>

                        {/* Features */}
                        <div className="space-y-4">
                          {[
                            'Kotlin & Java Expert',
                            'Modern Architecture',
                            'Performance Optimization',
                            'Team Leadership'
                          ].map((feature, index) => (
                            <div 
                              key={feature}
                              className="flex items-center gap-3 animate-fade-in"
                              style={{ animationDelay: `${index * 200}ms` }}
                            >
                              <div className="w-2 h-2 bg-accent-green rounded-full"></div>
                              <span className="text-sm">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-accent-green rounded-full flex items-center justify-center text-white font-bold shadow-lg animate-float">
                  K
                </div>
                <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-accent-purple rounded-full flex items-center justify-center text-white font-bold shadow-lg animate-float" style={{ animationDelay: '1s' }}>
                  <Smartphone size={24} />
                </div>
                <div className="absolute top-1/2 -right-8 w-8 h-8 bg-accent-orange rounded-full shadow-lg animate-float" style={{ animationDelay: '2s' }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button 
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            className="p-2 text-gray-400 hover:text-primary-600 transition-colors duration-200"
          >
            <ArrowDown size={24} />
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero