import { useState, useRef, useEffect } from 'react'
import { ExternalLink, Github, Star, Download, Users, Eye } from 'lucide-react'
import Card from '../ui/Card'
import Badge from '../ui/Badge'
import Button from '../ui/Button'
import { projectsData } from '../../data/portfolio'

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [selectedProject, setSelectedProject] = useState(0)
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
    <section id="projects" ref={sectionRef} className="py-20 bg-white">
      <div className="section-container">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-800 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Showcasing innovative Android applications that have served millions of users 
            and demonstrated cutting-edge mobile development expertise.
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Project Navigation */}
          <div className={`mb-12 transition-all duration-800 delay-200 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
            <div className="flex flex-wrap justify-center gap-4">
              {projectsData.map((project, index) => (
                <button
                  key={project.id}
                  onClick={() => setSelectedProject(index)}
                  className={`px-6 py-3 rounded-xl font-medium transition-all duration-200 ${
                    selectedProject === index
                      ? 'bg-primary-600 text-white shadow-lg transform scale-105'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-102'
                  }`}
                >
                  {project.title}
                </button>
              ))}
            </div>
          </div>

          {/* Selected Project Display */}
          <div className={`transition-all duration-800 delay-400 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            {projectsData[selectedProject] && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                {/* Project Image/Demo */}
                <div className="relative">
                  <Card className="overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 border-gray-200">
                    <div className="aspect-video bg-gradient-to-br from-primary-100 via-primary-50 to-accent-purple/10 flex items-center justify-center">
                      {/* Placeholder for project image */}
                      <div className="text-center">
                        <div className="w-24 h-24 bg-primary-600 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                          <span className="text-3xl text-white font-bold">
                            {projectsData[selectedProject].title.charAt(0)}
                          </span>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-700">
                          {projectsData[selectedProject].title}
                        </h3>
                        <p className="text-gray-600 mt-2">Interactive Demo Available</p>
                      </div>
                    </div>
                  </Card>

                  {/* Project Metrics */}
                  <div className="mt-6 grid grid-cols-3 gap-4">
                    <Card className="text-center py-4 bg-gradient-to-br from-accent-green/10 to-accent-green/5 border-accent-green/20">
                      <div className="flex items-center justify-center mb-2">
                        <Users size={20} className="text-accent-green" />
                      </div>
                      <div className="text-lg font-bold text-accent-green">
                        {projectsData[selectedProject].metrics.users}
                      </div>
                      <div className="text-xs text-gray-600">Active Users</div>
                    </Card>
                    <Card className="text-center py-4 bg-gradient-to-br from-yellow-100 to-yellow-50 border-yellow-200">
                      <div className="flex items-center justify-center mb-2">
                        <Star size={20} className="text-yellow-600" />
                      </div>
                      <div className="text-lg font-bold text-yellow-700">
                        {projectsData[selectedProject].metrics.rating}
                      </div>
                      <div className="text-xs text-gray-600">Rating</div>
                    </Card>
                    <Card className="text-center py-4 bg-gradient-to-br from-primary-100 to-primary-50 border-primary-200">
                      <div className="flex items-center justify-center mb-2">
                        <Download size={20} className="text-primary-600" />
                      </div>
                      <div className="text-lg font-bold text-primary-700">
                        {projectsData[selectedProject].metrics.downloads}
                      </div>
                      <div className="text-xs text-gray-600">Downloads</div>
                    </Card>
                  </div>
                </div>

                {/* Project Details */}
                <div>
                  <Card className="h-full bg-gray-50 border-gray-200">
                    {/* Header */}
                    <div className="mb-6">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-2xl font-bold text-gray-900">
                          {projectsData[selectedProject].title}
                        </h3>
                        <Badge 
                          variant={projectsData[selectedProject].status === 'Published' ? 'success' : 'warning'}
                          size="sm"
                        >
                          {projectsData[selectedProject].status}
                        </Badge>
                      </div>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        {projectsData[selectedProject].description}
                      </p>
                    </div>

                    {/* Technologies */}
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Tech Stack</h4>
                      <div className="flex flex-wrap gap-2">
                        {projectsData[selectedProject].tags.map((tag, index) => (
                          <Badge 
                            key={index}
                            variant={index % 4 === 0 ? 'default' : index % 4 === 1 ? 'purple' : index % 4 === 2 ? 'info' : 'orange'}
                            size="sm"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Key Features */}
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Features</h4>
                      <ul className="space-y-2">
                        {projectsData[selectedProject].features.map((feature, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-gray-200">
                      <Button 
                        className="flex items-center justify-center gap-2"
                        onClick={() => window.open(projectsData[selectedProject].links.playStore, '_blank')}
                      >
                        <ExternalLink size={18} />
                        View on Play Store
                      </Button>
                      <Button 
                        variant="outline"
                        className="flex items-center justify-center gap-2"
                        onClick={() => window.open(projectsData[selectedProject].links.github, '_blank')}
                      >
                        <Github size={18} />
                        Source Code
                      </Button>
                    </div>
                  </Card>
                </div>
              </div>
            )}
          </div>

          {/* All Projects Grid */}
          <div className={`mt-16 transition-all duration-800 delay-600 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">All Projects</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
              {projectsData.map((project, index) => (
                <Card 
                  key={project.id}
                  className={`cursor-pointer transition-all duration-300 ${
                    selectedProject === index
                      ? 'bg-primary-50 border-primary-200 shadow-lg transform scale-105'
                      : 'hover:shadow-lg hover:scale-102'
                  }`}
                  onClick={() => setSelectedProject(index)}
                >
                  <div className="mb-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mb-3">
                      <span className="text-xl font-bold text-primary-600">
                        {project.title.charAt(0)}
                      </span>
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">{project.title}</h4>
                    <p className="text-gray-600 text-sm line-clamp-2">{project.description}</p>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Users size={14} />
                        {project.metrics.users}
                      </div>
                      <div className="flex items-center gap-1">
                        <Star size={14} />
                        {project.metrics.rating}
                      </div>
                    </div>
                    <Badge 
                      variant={project.status === 'Published' ? 'success' : 'warning'}
                      size="sm"
                    >
                      {project.status}
                    </Badge>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className={`mt-16 text-center transition-all duration-800 delay-800 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <Card className="bg-gradient-to-r from-primary-600 to-primary-700 text-white border-primary-600">
              <div className="max-w-3xl mx-auto">
                <h3 className="text-2xl font-bold mb-4">Ready to Build Your Next App?</h3>
                <p className="text-primary-100 mb-6">
                  Let's collaborate to create an exceptional Android application that delights your users 
                  and drives your business forward. From concept to deployment, I'll guide you through every step.
                </p>
                <Button 
                  variant="secondary"
                  size="lg"
                  className="bg-white text-primary-600 hover:bg-primary-50"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Start Your Project
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects