'use client'

import { useState } from 'react'
import styles from '../styles/reach_out_to_us.module.css'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', message: '' })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full max-w-2xl px-8">
      {/* Name and Email Row */}
      <div className="flex gap-4">
        <div className='flex flex-col gap-2 w-full'>
          <h3 className='font-(family-name:--font-fustat) text-[12px] font-extrabold tracking-[-5%] leading-[150%]'>Name</h3>
          <input
            type="text"
            placeholder="Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
            className="flex-1 px-2 py-2 border border-white/30 rounded-lg focus:outline-none focus:ring-1 focus:border-(--color-foreground) font-(family-name:--font-fustat) font-semibold text-[12px] tracking-[-2.5%]"
          />
        </div>  
        <div className='flex flex-col gap-2 w-full'>
          <h3 className='font-(family-name:--font-fustat) text-[12px] font-extrabold tracking-[-5%] leading-[150%]'>
            Email
          </h3>
          <input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
            className="flex-1 px-2 py-2 border border-white/30 rounded-lg focus:outline-none focus:ring-1 focus:border-(--color-foreground) font-(family-name:--font-fustat) font-semibold text-[12px] tracking-[-2.5%]"
          />
        </div>        
        
      </div>

      {/* Thoughts Field */}
      <div className='flex flex-col gap-2 w-full'>
        <h3 className='font-(family-name:--font-fustat) text-[12px] font-extrabold tracking-[-5%] leading-[150%]'>
          Thoughts?
        </h3>
        <textarea
          placeholder="We all wonder something about some people. Let us know what you wonder about us."
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          required
          rows={6}
          className="px-2 py-2 border border-white/30 rounded-lg focus:outline-none focus:ring-1 focus:border-(--color-foreground) font-(family-name:--font-fustat) font-semibold text-[12px] tracking-[-2.5%] resize-none"
        />
      </div>  

      {/* Submit Button */}
      <div className="flex items-end gap-4">
        <button
          type="submit"
          disabled={isSubmitting}
          className="px-8 py-3 bg-(--color-background) text-(--color-foreground) rounded-md ring-1 border-(--color-background) hover:bg-(--color-foreground) hover:text-(--color-background) disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors font-(family-name:--font-fustat) font-medium text-[12px] tracking-[-2.5%] cursor-pointer"
        >
          {isSubmitting ? 'Sending...' : 'Say Hello!'}
        </button>
        
        {submitStatus === 'success' && (
          <span className="text-green-600 font-(family-name:--font-fustat) font-medium text-[12px] tracking-[-2.5%]">Message sent successfully!</span>
        )}
        {submitStatus === 'error' && (
          <span className="text-red-400 font-(family-name:--font-fustat) font-medium text-[12px] tracking-[-2.5%]">Failed to send. Please try again.</span>
        )}
      </div>
    </form>
  )
}