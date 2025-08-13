import { useState, useEffect } from 'react'
import { ArrowDown, Download, ExternalLink, Smartphone } from 'lucide-react'
import Button from '../ui/Button'
import { heroContent, personalInfo } from '../../data/portfolio'

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleResumeDownload = () => {
    const resumePath = '/Daiyong_Kim_s_Resume_for_Android_Engineer.pdf'
    window.open(resumePath, '_blank')
  }

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
              <p className="text-primary-600 font-medium text-xl mb-3">
                Hi, I'm
              </p>
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-2">
                <span className="gradient-text">Daiyong Kim</span>
              </h1>
              <h2 className="text-3xl lg:text-4xl font-semibold text-gray-700 mb-6">
                Senior Android Developer
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-8 max-w-2xl">
                {heroContent.description}
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-1">15+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-1">Samsung</div>
                <div className="text-sm text-gray-600">Electronics</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-1">1.5M+</div>
                <div className="text-sm text-gray-600">Users Served</div>
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
                onClick={handleResumeDownload}
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
            <div className="relative w-72 sm:w-80 mx-auto scale-90 sm:scale-95">
              {/* Phone Mockup - Android Material Design */}
              <div className="relative">
                {/* Phone Frame - Android style */}
                <div className="bg-gray-800 rounded-[1.5rem] p-1.5 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                  <div className="bg-black rounded-[1rem] p-0.5">
                    <div className="bg-white rounded-[0.75rem] aspect-[9/19.5] relative overflow-hidden">
                      {/* Screen Content - Material Design */}
                      <div className="absolute inset-0 bg-gray-50 flex flex-col h-full">
                        {/* Android Status Bar */}
                        <div className="bg-gray-900 text-white flex justify-between items-center px-4 py-2">
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-medium">9:41</span>
                            <div className="flex items-center gap-1">
                              <div className="w-4 h-2 border border-white/60 rounded-sm">
                                <div className="w-3 h-1 bg-white rounded-sm m-0.5"></div>
                              </div>
                              <div className="flex gap-0.5">
                                <div className="w-1 h-3 bg-white rounded-full"></div>
                                <div className="w-1 h-3 bg-white rounded-full"></div>
                                <div className="w-1 h-3 bg-white/50 rounded-full"></div>
                                <div className="w-1 h-3 bg-white/30 rounded-full"></div>
                              </div>
                            </div>
                          </div>
                          <div className="text-xs">100%</div>
                        </div>

                        {/* Material App Bar */}
                        <div className="bg-primary-600 text-white p-4 shadow-md">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                              <Smartphone size={20} className="text-white" />
                            </div>
                            <div>
                              <h3 className="text-lg font-medium">Daiyong Kim</h3>
                              <p className="text-white/80 text-sm">Android Developer</p>
                            </div>
                          </div>
                        </div>

                        {/* Material Cards */}
                        <div className="flex-1 p-4 space-y-4">
                          {/* Stats Material Cards */}
                          <div className="grid grid-cols-2 gap-3">
                            <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-primary-500">
                              <div className="text-2xl font-bold text-gray-800">15+</div>
                              <div className="text-sm text-gray-600 uppercase tracking-wide">Years Exp</div>
                            </div>
                            <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-accent-green">
                              <div className="text-2xl font-bold text-gray-800">1.5M+</div>
                              <div className="text-sm text-gray-600 uppercase tracking-wide">Users</div>
                            </div>
                          </div>

                          {/* Experience Material Cards */}
                          <div className="space-y-3">
                            {[
                              { company: 'Samsung Electronics', role: 'Bixby Vision Developer', color: 'border-blue-500' },
                              { company: 'HSBC Bank', role: 'Zelle P2P Integration', color: 'border-red-500' },
                              { company: 'GIT America', role: 'Galaxy Diagnostics', color: 'border-green-500' }
                            ].map((exp, index) => (
                              <div 
                                key={exp.company}
                                className={`bg-white rounded-lg shadow-sm p-3 border-l-4 ${exp.color} animate-fade-in hover:shadow-md transition-shadow`}
                                style={{ animationDelay: `${index * 200}ms` }}
                              >
                                <div className="text-sm font-semibold text-gray-800">{exp.company}</div>
                                <div className="text-xs text-gray-600 mt-1">{exp.role}</div>
                              </div>
                            ))}
                          </div>

                          {/* Material Chips */}
                          <div className="bg-white rounded-lg shadow-sm p-4">
                            <div className="text-sm font-medium text-gray-700 mb-2">Tech Stack</div>
                            <div className="flex flex-wrap gap-2">
                              {[
                                { name: 'Kotlin', color: 'bg-purple-100 text-purple-700' },
                                { name: 'Java', color: 'bg-orange-100 text-orange-700' },
                                { name: 'Android', color: 'bg-green-100 text-green-700' },
                                { name: 'Python', color: 'bg-blue-100 text-blue-700' }
                              ].map((tech) => (
                                <span key={tech.name} className={`${tech.color} px-3 py-1 rounded-full text-xs font-medium`}>
                                  {tech.name}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Android Navigation Bar - Modern Gesture Style */}
                        <div className="bg-gray-900 p-3">
                          <div className="flex justify-center items-center space-x-8">
                            {/* Back Button */}
                            <div className="w-4 h-4 transform rotate-180">
                              <div className="w-full h-0.5 bg-white/70 rounded-full transform rotate-45 translate-y-1.5"></div>
                              <div className="w-full h-0.5 bg-white/70 rounded-full transform -rotate-45 -translate-y-0.5"></div>
                            </div>
                            
                            {/* Home Indicator */}
                            <div className="w-8 h-1 bg-white/80 rounded-full"></div>
                            
                            {/* Recent Apps (Hamburger) */}
                            <div className="space-y-1">
                              <div className="w-4 h-0.5 bg-white/70 rounded-full"></div>
                              <div className="w-4 h-0.5 bg-white/70 rounded-full"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-3 -left-3 w-8 h-8 sm:w-10 sm:h-10 bg-accent-green rounded-full flex items-center justify-center text-white font-bold shadow-lg animate-float text-sm">
                  K
                </div>
                <div className="absolute -bottom-3 -right-3 w-10 h-10 sm:w-12 sm:h-12 bg-accent-purple rounded-full flex items-center justify-center text-white font-bold shadow-lg animate-float" style={{ animationDelay: '1s' }}>
                  <Smartphone size={16} className="sm:w-5 sm:h-5" />
                </div>
                <div className="absolute top-1/3 -right-5 w-5 h-5 sm:w-6 sm:h-6 bg-accent-orange rounded-full shadow-lg animate-float" style={{ animationDelay: '2s' }}></div>
                <div className="absolute bottom-1/3 -left-5 w-4 h-4 sm:w-5 sm:h-5 bg-primary-300 rounded-full shadow-lg animate-float" style={{ animationDelay: '3s' }}></div>
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