import { useState, useRef, useEffect } from 'react'
import { MapPin, Calendar, Briefcase, ChevronRight } from 'lucide-react'
import Card from '../ui/Card'
import Badge from '../ui/Badge'
import { experienceData } from '../../data/portfolio'
import { useTimelineItemAnimation, useTimelineLineAnimation } from '../../hooks/useScrollAnimation'

// Individual timeline item component with scroll animations
const TimelineItem = ({ job, index, totalItems, isLast, isHSBC }) => {
  const {
    elementRef,
    dotScale,
    lineProgress,
    contentOpacity,
    contentTranslateY
  } = useTimelineItemAnimation(index, totalItems, { 
    threshold: 0.1,
    offset: 100,
    smooth: true 
  })

  return (
    <div ref={elementRef} className={`relative flex items-center md:gap-8 flex-col md:flex-row ${
      isHSBC ? 'md:flex-row-reverse' : 'md:flex-row'
    }`}>
      {/* Timeline Dot with Animated Scale */}
      <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 z-20">
        <div 
          className="w-6 h-6 bg-white border-4 border-primary-600 rounded-full transition-all duration-700 ease-out shadow-lg"
          style={{
            transform: `scale(${0.3 + dotScale * 0.7})`,
            boxShadow: dotScale > 0.5 ? '0 0 20px rgba(2, 132, 199, 0.4)' : '0 4px 6px rgba(0, 0, 0, 0.1)'
          }}
        >
          {/* Inner dot that appears on hover/activation */}
          <div 
            className="absolute inset-1 bg-primary-600 rounded-full transition-all duration-500"
            style={{
              opacity: dotScale,
              transform: `scale(${dotScale})`
            }}
          />
        </div>
        
        {/* Animated connecting line to next item */}
        {!isLast && (
          <div 
            className="absolute top-6 left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-primary-600 to-primary-400 transition-all duration-1000 ease-out"
            style={{
              height: `${lineProgress * 80}px`,
              opacity: lineProgress
            }}
          />
        )}
      </div>
      
      {/* Content with Animation */}
      <div 
        className={`w-full md:w-5/12 ml-12 md:ml-0 transition-all duration-700 ease-out ${
          isHSBC ? 'md:text-right' : ''
        }`}
        style={{
          opacity: contentOpacity,
          transform: `translateY(${contentTranslateY}px)`
        }}
      >
        <div className={`bg-white rounded-xl p-6 shadow-lg border border-gray-100 transition-all duration-500 hover:shadow-xl hover:-translate-y-1 ${
          isHSBC ? 'md:ml-8' : 'md:mr-8'
        } ${isHSBC ? 'border-accent-purple shadow-accent-purple/10' : ''}`}>
          <div className="text-primary-600 font-medium text-sm mb-2 flex items-center gap-2">
            <Calendar size={14} />
            {job.duration}
          </div>
          <h4 className="text-lg font-semibold text-gray-900 mb-1">{job.title}</h4>
          <p className="text-gray-600 mb-2">{job.company}</p>
          <div className="text-sm text-gray-500 flex items-center gap-2">
            <MapPin size={12} />
            {job.location}
          </div>
          
          {/* Animated progress bar */}
          <div className="mt-4 h-1 bg-gray-100 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-primary-600 to-accent-purple transition-all duration-1000 ease-out"
              style={{
                width: `${contentOpacity * 100}%`
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [selectedJob, setSelectedJob] = useState(0)
  const sectionRef = useRef(null)
  
  // Reverse the experience data to show oldest to newest
  const reversedExperience = experienceData.slice().reverse()
  
  // Timeline line animation
  const { 
    elementRef: timelineRef, 
    lineHeight 
  } = useTimelineLineAnimation({ 
    threshold: 0.1,
    offset: 100 
  })

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
                {reversedExperience.map((job, index) => (
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
                {reversedExperience[selectedJob] && (
                  <div>
                    {/* Job Header */}
                    <div className="mb-8">
                      <div className="flex items-center gap-2 text-primary-600 mb-2">
                        <Briefcase size={20} />
                        <span className="font-medium">{reversedExperience[selectedJob].type}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {reversedExperience[selectedJob].title}
                      </h3>
                      <div className="text-lg text-gray-700 mb-2">
                        {reversedExperience[selectedJob].company}
                      </div>
                      <div className="flex flex-wrap items-center gap-4 text-gray-600">
                        <div className="flex items-center gap-2">
                          <MapPin size={16} />
                          {reversedExperience[selectedJob].location}
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar size={16} />
                          {reversedExperience[selectedJob].duration}
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <div className="mb-6">
                      <p className="text-gray-700 leading-relaxed">
                        {reversedExperience[selectedJob].description}
                      </p>
                    </div>

                    {/* Key Achievements */}
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">Key Achievements</h4>
                      <ul className="space-y-3">
                        {reversedExperience[selectedJob].achievements.map((achievement, index) => (
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
                        {reversedExperience[selectedJob].technologies.map((tech, index) => (
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

        {/* Career Progression Visualization with Scroll Animations */}
        <div className={`mt-16 transition-all duration-800 delay-600 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Career <span className="gradient-text">Progression</span>
          </h3>
          <div className="max-w-4xl mx-auto" ref={timelineRef}>
            <div className="relative">
              {/* Main Timeline Line with Scroll Progress */}
              <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1">
                {/* Background line */}
                <div className="absolute inset-0 bg-gray-200 rounded-full" />
                {/* Animated progress line */}
                <div 
                  className="absolute top-0 left-0 w-full bg-gradient-to-b from-primary-600 via-accent-purple to-accent-green rounded-full transition-all duration-300 ease-out"
                  style={{
                    height: `${Math.min(lineHeight, 100)}%`,
                    boxShadow: lineHeight > 10 ? '0 0 10px rgba(2, 132, 199, 0.3)' : 'none'
                  }}
                />
              </div>
              
              {/* Animated Timeline Items */}
              <div className="space-y-20 pb-16">
                {reversedExperience.map((job, index) => (
                  <TimelineItem
                    key={job.id}
                    job={job}
                    index={index}
                    totalItems={reversedExperience.length}
                    isLast={index === reversedExperience.length - 1}
                    isHSBC={job.company === "HSBC"}
                  />
                ))}
              </div>
            </div>
          </div>
          
          {/* Career Stats Animation - Separate Section */}
          <div className="max-w-4xl mx-auto mt-20">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
              {/* Left side - 2 boxes */}
              <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { label: 'Years of Experience', value: '15+', icon: '🚀', color: 'from-primary-600 to-primary-700' },
                  { label: 'Major Projects Delivered', value: '50+', icon: '📱', color: 'from-accent-purple to-purple-600' }
                ].map((stat, index) => (
                  <div 
                    key={stat.label}
                    className="text-center p-8 bg-white rounded-xl shadow-lg border border-gray-100 transition-all duration-500 hover:shadow-xl hover:-translate-y-2 group"
                    style={{
                      animationDelay: `${(index + 1) * 200}ms`
                    }}
                  >
                    <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{stat.icon}</div>
                    <div className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                      {stat.value}
                    </div>
                    <div className="text-gray-600 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
              
              {/* Right side - 1 box */}
              <div className="lg:col-span-2">
                <div 
                  className="text-center p-8 bg-white rounded-xl shadow-lg border border-gray-100 transition-all duration-500 hover:shadow-xl hover:-translate-y-2 group h-full flex flex-col justify-center"
                  style={{
                    animationDelay: '600ms'
                  }}
                >
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">👥</div>
                  <div className="text-3xl font-bold bg-gradient-to-r from-accent-green to-green-600 bg-clip-text text-transparent mb-2">
                    10+
                  </div>
                  <div className="text-gray-600 font-medium">Team Members Led</div>
                  <div className="text-sm text-gray-500 mt-2">Across multiple projects</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience