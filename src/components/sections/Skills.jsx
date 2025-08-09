import { useState, useRef, useEffect } from 'react'
import { Code, Database, Wrench, Users, Star, TrendingUp } from 'lucide-react'
import Card from '../ui/Card'
import Badge from '../ui/Badge'
import { skillsData } from '../../data/portfolio'

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState(0)
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

  const categoryIcons = {
    "Mobile Development": Code,
    "Architecture & Patterns": Wrench,
    "Data & Networking": Database,
    "Tools & DevOps": TrendingUp
  }

  const getSkillColor = (level) => {
    if (level >= 90) return 'from-green-500 to-emerald-600'
    if (level >= 80) return 'from-blue-500 to-cyan-600'
    if (level >= 70) return 'from-purple-500 to-indigo-600'
    return 'from-gray-500 to-slate-600'
  }

  const getSkillBadgeVariant = (level) => {
    if (level >= 90) return 'success'
    if (level >= 80) return 'info'
    if (level >= 70) return 'purple'
    return 'default'
  }

  return (
    <section id="skills" ref={sectionRef} className="py-20 bg-gray-50">
      <div className="section-container">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-800 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive technology stack mastered over 15+ years, from Samsung Electronics innovation to enterprise banking solutions.
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Technical Skills */}
          <div className="grid grid-cols-1 xl:grid-cols-4 gap-8 mb-16">
            {/* Category Navigation */}
            <div className={`xl:col-span-1 transition-all duration-800 delay-200 ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
              <div className="space-y-3">
                {skillsData.technical.map((category, index) => {
                  const Icon = categoryIcons[category.category] || Code
                  return (
                    <button
                      key={index}
                      onClick={() => setSelectedCategory(index)}
                      className={`w-full text-left p-4 rounded-xl transition-all duration-200 ${
                        selectedCategory === index
                          ? 'bg-primary-600 text-white shadow-lg transform scale-105'
                          : 'bg-white text-gray-700 hover:bg-gray-50 hover:shadow-md'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <Icon size={20} className={selectedCategory === index ? 'text-white' : 'text-primary-600'} />
                        <span className="font-medium">{category.category}</span>
                      </div>
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Skills Display */}
            <div className={`xl:col-span-3 transition-all duration-800 delay-400 ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}>
              <Card className="h-full bg-white border-gray-200">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {skillsData.technical[selectedCategory]?.category}
                  </h3>
                  <p className="text-gray-600">
                    Expertise level and years of experience in each technology
                  </p>
                </div>

                <div className="space-y-6">
                  {skillsData.technical[selectedCategory]?.skills.map((skill, index) => (
                    <div 
                      key={index}
                      className={`transition-all duration-500 ${
                        isVisible ? 'animate-slide-up' : 'opacity-0'
                      }`}
                      style={{ animationDelay: `${600 + index * 100}ms` }}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <span className="font-semibold text-gray-900">{skill.name}</span>
                          <Badge variant={getSkillBadgeVariant(skill.level)} size="sm">
                            {skill.years} exp
                          </Badge>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-medium text-gray-600">{skill.level}%</span>
                          <div className="flex gap-1">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <Star 
                                key={star}
                                size={12} 
                                className={`${
                                  star <= Math.ceil(skill.level / 20) 
                                    ? 'text-yellow-500 fill-current' 
                                    : 'text-gray-300'
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      {/* Progress Bar */}
                      <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                        <div 
                          className={`h-full bg-gradient-to-r ${getSkillColor(skill.level)} rounded-full transition-all duration-1000 ease-out`}
                          style={{ 
                            width: isVisible ? `${skill.level}%` : '0%',
                            transitionDelay: `${800 + index * 100}ms`
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>

          {/* Soft Skills */}
          <div className={`transition-all duration-800 delay-600 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
              Leadership & Soft Skills
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {skillsData.soft.map((skill, index) => (
                <Card 
                  key={index}
                  className={`text-center py-4 bg-gradient-to-br from-white to-gray-50 border-gray-200 transition-all duration-500 ${
                    isVisible ? 'animate-slide-up' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${800 + index * 50}ms` }}
                >
                  <div className="mb-3">
                    <Users size={24} className="text-primary-600 mx-auto" />
                  </div>
                  <span className="font-medium text-gray-800">{skill}</span>
                </Card>
              ))}
            </div>
          </div>

          {/* Skills Summary */}
          <div className={`mt-16 transition-all duration-800 delay-800 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <Card className="bg-gradient-to-r from-primary-600 to-primary-700 text-white border-primary-600">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4">Technology Mastery</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div>
                    <div className="text-3xl font-bold mb-2">20+</div>
                    <div className="text-primary-100">Technologies Mastered</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold mb-2">15+</div>
                    <div className="text-primary-100">Years of Android</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold mb-2">30+</div>
                    <div className="text-primary-100">Global Team Members</div>
                  </div>
                </div>
                <p className="mt-6 text-primary-100">
                  Constantly learning and adapting to new technologies while maintaining 
                  expertise in proven, battle-tested solutions.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills