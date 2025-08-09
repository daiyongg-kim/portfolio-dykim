import { useState, useRef, useEffect } from 'react'
import { MapPin, Calendar, Briefcase, ChevronRight } from 'lucide-react'
import Card from '../ui/Card'
import Badge from '../ui/Badge'
import { experienceData } from '../../data/portfolio'

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [selectedJob, setSelectedJob] = useState(0)
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

  return (
    <section id="experience" ref={sectionRef} className="py-20 bg-white">
      <div className="section-container">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-800 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            15+ years of mobile innovation from Samsung Electronics to enterprise banking solutions, leading cutting-edge Android development.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Timeline Navigation */}
            <div className={`lg:col-span-1 transition-all duration-800 delay-200 ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
              <div className="space-y-4">
                {experienceData.map((job, index) => (
                  <div 
                    key={job.id}
                    className={`cursor-pointer transition-all duration-200 ${
                      selectedJob === index 
                        ? 'transform scale-105' 
                        : 'hover:transform hover:scale-102'
                    }`}
                    onClick={() => setSelectedJob(index)}
                  >
                    <Card 
                      hover={false}
                      className={`transition-all duration-200 ${
                        selectedJob === index
                          ? 'bg-primary-50 border-primary-200 shadow-lg'
                          : 'hover:shadow-md'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <h3 className={`font-semibold ${
                            selectedJob === index ? 'text-primary-700' : 'text-gray-900'
                          }`}>
                            {job.title}
                          </h3>
                          <p className={`text-sm ${
                            selectedJob === index ? 'text-primary-600' : 'text-gray-600'
                          }`}>
                            {job.company}
                          </p>
                          <div className={`flex items-center gap-2 text-xs mt-1 ${
                            selectedJob === index ? 'text-primary-600' : 'text-gray-500'
                          }`}>
                            <Calendar size={12} />
                            {job.duration}
                          </div>
                        </div>
                        <ChevronRight 
                          size={20} 
                          className={`transition-transform duration-200 ${
                            selectedJob === index 
                              ? 'text-primary-600 transform rotate-90' 
                              : 'text-gray-400'
                          }`} 
                        />
                      </div>
                    </Card>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience Details */}
            <div className={`lg:col-span-2 transition-all duration-800 delay-400 ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}>
              <Card className="h-full bg-gradient-to-br from-white via-gray-50/30 to-primary-50/20 border-gray-200">
                {experienceData[selectedJob] && (
                  <div>
                    {/* Job Header */}
                    <div className="mb-8">
                      <div className="flex items-center gap-2 text-primary-600 mb-2">
                        <Briefcase size={20} />
                        <span className="font-medium">{experienceData[selectedJob].type}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {experienceData[selectedJob].title}
                      </h3>
                      <div className="text-lg text-gray-700 mb-2">
                        {experienceData[selectedJob].company}
                      </div>
                      <div className="flex flex-wrap items-center gap-4 text-gray-600">
                        <div className="flex items-center gap-2">
                          <MapPin size={16} />
                          {experienceData[selectedJob].location}
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar size={16} />
                          {experienceData[selectedJob].duration}
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <div className="mb-6">
                      <p className="text-gray-700 leading-relaxed">
                        {experienceData[selectedJob].description}
                      </p>
                    </div>

                    {/* Key Achievements */}
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">Key Achievements</h4>
                      <ul className="space-y-3">
                        {experienceData[selectedJob].achievements.map((achievement, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-accent-green rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-700">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {experienceData[selectedJob].technologies.map((tech, index) => (
                          <Badge 
                            key={index}
                            variant={index % 3 === 0 ? 'default' : index % 3 === 1 ? 'purple' : 'info'}
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </Card>
            </div>
          </div>
        </div>

        {/* Career Progression Visualization */}
        <div className={`mt-16 transition-all duration-800 delay-600 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">Career Progression</h3>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-600 via-accent-purple to-accent-green"></div>
              
              {/* Timeline Items */}
              <div className="space-y-12">
                {experienceData.map((job, index) => (
                  <div 
                    key={job.id}
                    className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col md:gap-8`}
                  >
                    {/* Timeline Dot */}
                    <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-white border-4 border-primary-600 rounded-full z-10"></div>
                    
                    {/* Content */}
                    <div className={`w-full md:w-5/12 ml-12 md:ml-0 ${index % 2 === 0 ? '' : 'md:text-right'}`}>
                      <div className={`bg-white rounded-xl p-6 shadow-lg border border-gray-100 ${
                        index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                      }`}>
                        <div className="text-primary-600 font-medium text-sm mb-2">{job.duration}</div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-1">{job.title}</h4>
                        <p className="text-gray-600">{job.company}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience