'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactFormSchema, ContactFormData } from '@/schemas';
import { CheckCircle, AlertCircle } from 'lucide-react';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      phone: '',
      email: '',
      message: ''
    }
  });

  const onSubmit = async (data: ContactFormData) => {
    setStatus('loading');
    setErrorMessage('');
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        setStatus('success');
        reset();
      } else {
        const errData = await response.json();
        throw new Error(errData.message || 'Something went wrong. Please try again.');
      }
    } catch (error: any) {
      setStatus('error');
      setErrorMessage(error.message || 'Unable to submit your request. Please try calling us directly.');
    }
  };

  if (status === 'success') {
    return (
      <div className="bg-secondary-black border border-royal-gold/30 rounded-3xl p-8 text-center flex flex-col items-center justify-center min-h-[350px] shadow-gold-glow">
        <div className="w-16 h-16 rounded-full bg-royal-gold/10 text-royal-gold flex items-center justify-center mb-6">
          <CheckCircle size={40} className="stroke-[1.5]" />
        </div>
        <h3 className="font-playfair text-xl font-bold tracking-wide text-royal-gold mb-3">
          Message Sent Successfully!
        </h3>
        <p className="font-plus-jakarta text-sm text-ivory/80 max-w-sm mx-auto leading-relaxed mb-6">
          Thank you for reaching out to us. We will review your message and reply as soon as possible.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="font-plus-jakarta text-xs font-semibold uppercase tracking-wider py-3 px-6 rounded-full border border-royal-gold/40 text-royal-gold hover:bg-royal-gold hover:text-primary-black transition-all duration-300"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-secondary-black border border-royal-gold/15 rounded-3xl p-6 md:p-8 shadow-gold-glow"
      noValidate
    >
      <h3 className="font-playfair text-lg md:text-xl font-bold tracking-wide text-royal-gold mb-2">
        Send Us a Message
      </h3>
      <p className="font-plus-jakarta text-xs text-ivory/60 mb-6">
        Have questions or feedback? Drop us a line and we will get back to you.
      </p>

      {status === 'error' && (
        <div className="mb-4 p-4 rounded-xl border border-red-500/20 bg-red-950/20 text-red-400 flex items-start gap-3 text-sm">
          <AlertCircle size={18} className="shrink-0 mt-0.5" />
          <span>{errorMessage}</span>
        </div>
      )}

      {/* Name */}
      <div className="flex flex-col mb-4">
        <label htmlFor="contact-name" className="font-plus-jakarta text-xs font-semibold text-ivory/80 uppercase tracking-wider mb-2">
          Your Name *
        </label>
        <input
          id="contact-name"
          type="text"
          placeholder="Jane Doe"
          {...register('name')}
          className={`h-[56px] px-5 rounded-2xl bg-primary-black border text-sm text-ivory placeholder-ivory/30 focus:outline-none focus:border-royal-gold transition-colors duration-300 ${
            errors.name ? 'border-red-500' : 'border-royal-gold/20'
          }`}
        />
        {errors.name && (
          <span className="text-red-500 text-xs mt-1.5 font-medium">{errors.name.message}</span>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        {/* Phone */}
        <div className="flex flex-col">
          <label htmlFor="contact-phone" className="font-plus-jakarta text-xs font-semibold text-ivory/80 uppercase tracking-wider mb-2">
            Phone Number *
          </label>
          <input
            id="contact-phone"
            type="tel"
            placeholder="+1 603-206-5203"
            {...register('phone')}
            className={`h-[56px] px-5 rounded-2xl bg-primary-black border text-sm text-ivory placeholder-ivory/30 focus:outline-none focus:border-royal-gold transition-colors duration-300 ${
              errors.phone ? 'border-red-500' : 'border-royal-gold/20'
            }`}
          />
          {errors.phone && (
            <span className="text-red-500 text-xs mt-1.5 font-medium">{errors.phone.message}</span>
          )}
        </div>

        {/* Email */}
        <div className="flex flex-col">
          <label htmlFor="contact-email" className="font-plus-jakarta text-xs font-semibold text-ivory/80 uppercase tracking-wider mb-2">
            Email Address *
          </label>
          <input
            id="contact-email"
            type="email"
            placeholder="janedoe@example.com"
            {...register('email')}
            className={`h-[56px] px-5 rounded-2xl bg-primary-black border text-sm text-ivory placeholder-ivory/30 focus:outline-none focus:border-royal-gold transition-colors duration-300 ${
              errors.email ? 'border-red-500' : 'border-royal-gold/20'
            }`}
          />
          {errors.email && (
            <span className="text-red-500 text-xs mt-1.5 font-medium">{errors.email.message}</span>
          )}
        </div>
      </div>

      {/* Message */}
      <div className="flex flex-col mb-6">
        <label htmlFor="contact-message" className="font-plus-jakarta text-xs font-semibold text-ivory/80 uppercase tracking-wider mb-2">
          Message *
        </label>
        <textarea
          id="contact-message"
          rows={4}
          placeholder="Write your message here..."
          {...register('message')}
          className={`p-5 rounded-2xl bg-primary-black border text-sm text-ivory placeholder-ivory/30 focus:outline-none focus:border-royal-gold transition-colors duration-300 resize-none ${
            errors.message ? 'border-red-500' : 'border-royal-gold/20'
          }`}
        />
        {errors.message && (
          <span className="text-red-500 text-xs mt-1.5 font-medium">{errors.message.message}</span>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full h-[56px] font-plus-jakarta font-bold uppercase tracking-wider rounded-full bg-royal-gold text-primary-black hover:bg-light-gold disabled:bg-royal-gold/40 transition-colors duration-300 shadow-gold-glow flex items-center justify-center gap-2 cursor-pointer"
      >
        {status === 'loading' ? (
          <div className="w-5 h-5 border-2 border-primary-black border-t-transparent rounded-full animate-spin" />
        ) : (
          'Send Message'
        )}
      </button>
    </form>
  );
}
