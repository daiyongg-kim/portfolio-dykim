import { useState, useRef, useEffect } from 'react'
import { Mail, Phone, MapPin, Send, CheckCircle, Clock, Briefcase, Loader2, AlertCircle } from 'lucide-react'
import emailjs from '@emailjs/browser'
import Card from '../ui/Card'
import Button from '../ui/Button'
import Badge from '../ui/Badge'
import { contactInfo, personalInfo } from '../../data/portfolio'

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    projectType: 'new-app'
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null) // 'success' | 'error' | null
  const [errorMessage, setErrorMessage] = useState('')
  const sectionRef = useRef(null)
  const formRef = useRef(null)

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

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)
    setErrorMessage('')

    try {
      // EmailJS configuration from environment variables
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

      // Debug: Check if environment variables are loaded
      console.log('EmailJS Config Check:', {
        serviceId: serviceId ? 'Present' : 'Missing',
        templateId: templateId ? 'Present' : 'Missing',
        publicKey: publicKey ? 'Present' : 'Missing'
      })

      // Validate configuration
      if (!serviceId || !templateId || !publicKey) {
        throw new Error('EmailJS configuration is missing. Please check environment variables.')
      }

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        company: formData.company || 'Not specified',
        project_type: projectTypes.find(type => type.value === formData.projectType)?.label,
        message: formData.message,
        to_email: contactInfo.email
      }

      console.log('Sending email with params:', templateParams)

      const response = await emailjs.send(serviceId, templateId, templateParams, publicKey)
      console.log('EmailJS Response:', response)
      
      setSubmitStatus('success')
      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        message: '',
        projectType: 'new-app'
      })
    } catch (error) {
      console.error('Email sending failed:', error)
      setSubmitStatus('error')
      
      let errorMsg = 'Failed to send message. Please try again or contact me directly at ' + contactInfo.email
      
      // Provide more specific error messages
      if (error.message?.includes('configuration')) {
        errorMsg = 'Email service configuration error. Please contact me directly at ' + contactInfo.email
      } else if (error.status === 400) {
        errorMsg = 'Invalid email data. Please check your input and try again.'
      } else if (error.status === 401) {
        errorMsg = 'Email service authentication failed. Please contact me directly at ' + contactInfo.email
      } else if (error.status === 403) {
        errorMsg = 'Email service access denied. Please contact me directly at ' + contactInfo.email
      } else if (error.status === 429) {
        errorMsg = 'Too many requests. Please wait a moment and try again.'
      }
      
      setErrorMessage(errorMsg)
    } finally {
      setIsSubmitting(false)
    }
  }

  const projectTypes = [
    { value: 'new-app', label: 'New App Development' },
    { value: 'existing-app', label: 'Existing App Enhancement' },
    { value: 'consultation', label: 'Technical Consultation' },
    { value: 'team-lead', label: 'Team Leadership Role' },
    { value: 'code-review', label: 'Code Review & Architecture' },
    { value: 'mentoring', label: 'Developer Mentoring' }
  ]

  return (
    <section id="contact" ref={sectionRef} className="py-20 bg-gray-50">
      <div className="section-container">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-800 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {contactInfo.description}
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className={`transition-all duration-800 delay-200 ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
              <Card className="h-full bg-white border-gray-200">
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Get In Touch</h3>
                  <p className="text-gray-700 mb-6">
                    Ready to discuss your Android project? I'm here to help bring your vision to life.
                  </p>
                </div>

                {/* Contact Methods */}
                <div className="space-y-6 mb-8">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                      <Mail size={24} className="text-primary-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Email</div>
                      <a 
                        href={`mailto:${contactInfo.email}`}
                        className="text-primary-600 hover:text-primary-700 transition-colors duration-200"
                      >
                        {contactInfo.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-accent-green/10 rounded-full flex items-center justify-center">
                      <Phone size={24} className="text-accent-green" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Phone</div>
                      <a 
                        href={`tel:${contactInfo.phone}`}
                        className="text-accent-green hover:text-green-700 transition-colors duration-200"
                      >
                        {contactInfo.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-accent-purple/10 rounded-full flex items-center justify-center">
                      <MapPin size={24} className="text-accent-purple" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Location</div>
                      <div className="text-gray-600">{personalInfo.location}</div>
                    </div>
                  </div>
                </div>

                {/* Availability Status */}
                <div className="mb-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="font-semibold text-gray-900">{contactInfo.availability}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 mb-2">
                    <Clock size={16} />
                    <span className="text-sm">{contactInfo.responseTime}</span>
                  </div>
                </div>

                {/* Specialties */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">My Specialties</h4>
                  <div className="space-y-3">
                    {contactInfo.specialties.map((specialty, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <CheckCircle size={16} className="text-accent-green" />
                        <span className="text-gray-700">{specialty}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            </div>

            {/* Contact Form */}
            <div className={`transition-all duration-800 delay-400 ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}>
              <Card className="h-full bg-white border-gray-200">
                {/* Success Message */}
                {submitStatus === 'success' && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl">
                    <div className="flex items-center gap-3">
                      <CheckCircle size={20} className="text-green-600" />
                      <div>
                        <h4 className="font-semibold text-green-800">Message Sent Successfully!</h4>
                        <p className="text-green-700 text-sm">Thank you for reaching out. I'll get back to you within 24 hours.</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Error Message */}
                {submitStatus === 'error' && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl">
                    <div className="flex items-center gap-3">
                      <AlertCircle size={20} className="text-red-600" />
                      <div>
                        <h4 className="font-semibold text-red-800">Message Failed to Send</h4>
                        <p className="text-red-700 text-sm">{errorMessage}</p>
                      </div>
                    </div>
                  </div>
                )}

                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Start Your Project</h3>
                    <p className="text-gray-600">Tell me about your Android development needs</p>
                  </div>

                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200"
                      placeholder="Your full name"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200"
                      placeholder="your.email@company.com"
                    />
                  </div>

                  {/* Company */}
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Company/Organization
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200"
                      placeholder="Your company name"
                    />
                  </div>

                  {/* Project Type */}
                  <div>
                    <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-2">
                      Project Type *
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      required
                      value={formData.projectType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200"
                    >
                      {projectTypes.map((type) => (
                        <option key={type.value} value={type.value}>
                          {type.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Project Details *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200 resize-none"
                      placeholder="Tell me about your project, timeline, budget, and any specific requirements..."
                    />
                  </div>

                  {/* Submit Button */}
                  <Button 
                    type="submit"
                    size="lg" 
                    className="w-full flex items-center justify-center gap-2"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 size={20} className="animate-spin" />
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        Send Message
                      </>
                    )}
                  </Button>

                  <p className="text-sm text-gray-500 text-center">
                    By sending this message, you agree to discuss your project requirements. 
                    I typically respond within 24 hours.
                  </p>
                </form>
              </Card>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className={`mt-16 text-center transition-all duration-800 delay-600 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <Card className="bg-gradient-to-r from-primary-600 to-primary-700 text-white border-primary-600">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Mobile Vision?</h3>
              <p className="text-primary-100 mb-6 text-lg">
                With 10+ years of Android expertise and a track record of successful apps serving millions of users, 
                I'm here to help you build something extraordinary. Whether you need a new app, want to enhance an existing one, 
                or require technical leadership for your team, let's discuss how we can achieve your goals together.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold mb-2">24hrs</div>
                  <div className="text-primary-100">Response Time</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">10+</div>
                  <div className="text-primary-100">Years Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">5M+</div>
                  <div className="text-primary-100">App Downloads</div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default Contact