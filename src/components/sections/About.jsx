import { useState, useRef, useEffect } from 'react'
import { CheckCircle, Users, Download, Award, Code, Smartphone } from 'lucide-react'
import Card from '../ui/Card'
import { aboutContent } from '../../data/portfolio'

const About = () => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const statIcons = {
    "Years Experience": Award,
    "Apps Published": Smartphone,
    "Total Downloads": Download,
    "Team Members Led": Users
  }

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-gray-50">
      <div className="section-container">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-800 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Passionate about creating exceptional mobile experiences that delight users and drive business success.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Bio & Highlights */}
          <div className={`transition-all duration-800 delay-200 ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-gray-700 leading-relaxed mb-6">
                {aboutContent.bio}
              </p>
            </div>

            {/* Highlights */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Key Highlights</h3>
              {aboutContent.highlights.map((highlight, index) => (
                <div 
                  key={index}
                  className={`flex items-start gap-3 transition-all duration-500 ${
                    isVisible ? 'animate-slide-up' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${300 + index * 100}ms` }}
                >
                  <CheckCircle size={20} className="text-accent-green mt-1 flex-shrink-0" />
                  <p className="text-gray-700">{highlight}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Cards */}
          <div className={`transition-all duration-800 delay-400 ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}>
            <div className="grid grid-cols-2 gap-6">
              {aboutContent.stats.map((stat, index) => {
                const Icon = statIcons[stat.label] || Code
                return (
                  <Card 
                    key={index}
                    className={`text-center transition-all duration-500 ${
                      isVisible ? 'animate-slide-up' : 'opacity-0'
                    }`}
                    style={{ animationDelay: `${500 + index * 100}ms` }}
                  >
                    <div className="mb-4">
                      <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Icon size={24} className="text-primary-600" />
                      </div>
                      <div className="text-3xl font-bold text-primary-600 mb-2">
                        {stat.value}
                      </div>
                      <div className="text-gray-600 font-medium">
                        {stat.label}
                      </div>
                    </div>
                  </Card>
                )
              })}
            </div>

            {/* Additional Info Card */}
            <Card className={`mt-6 bg-gradient-to-r from-primary-50 to-accent-purple/10 border-primary-200 transition-all duration-500 ${
              isVisible ? 'animate-slide-up' : 'opacity-0'
            }`} style={{ animationDelay: '900ms' }}>
              <div className="text-center">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">
                  What Drives Me
                </h4>
                <p className="text-gray-700">
                  I believe great mobile apps are born from understanding user needs, 
                  embracing cutting-edge technology, and never compromising on quality. 
                  Every line of code I write is an opportunity to create something amazing.
                </p>
              </div>
            </Card>
          </div>
        </div>

        {/* Technology Philosophy */}
        <div className={`mt-16 text-center transition-all duration-800 delay-600 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <Card className="max-w-4xl mx-auto bg-white border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Code size={32} className="text-primary-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Clean Code</h4>
                <p className="text-gray-600">Writing maintainable, scalable, and testable code following best practices</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-accent-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users size={32} className="text-accent-green" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Team Leadership</h4>
                <p className="text-gray-600">Mentoring developers and fostering collaborative, high-performing teams</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-accent-purple/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Smartphone size={32} className="text-accent-purple" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">User-Centric</h4>
                <p className="text-gray-600">Creating intuitive experiences that solve real problems for millions of users</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default About