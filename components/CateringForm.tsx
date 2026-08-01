'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { cateringFormSchema, CateringFormData } from '@/schemas';
import { CheckCircle, AlertCircle } from 'lucide-react';

export default function CateringForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<CateringFormData>({
    resolver: zodResolver(cateringFormSchema),
    defaultValues: {
      name: '',
      phone: '',
      email: '',
      eventType: '',
      guestCount: 20,
      eventDate: '',
      message: ''
    }
  });

  const onSubmit = async (data: CateringFormData) => {
    setStatus('loading');
    setErrorMessage('');
    try {
      const response = await fetch('/api/catering', {
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
      setErrorMessage(error.message || 'Unable to submit the form. Please try calling us directly.');
    }
  };

  if (status === 'success') {
    return (
      <div className="bg-secondary-black border border-royal-gold/30 rounded-3xl p-8 text-center flex flex-col items-center justify-center min-h-[400px] shadow-gold-glow">
        <div className="w-16 h-16 rounded-full bg-royal-gold/10 text-royal-gold flex items-center justify-center mb-6">
          <CheckCircle size={40} className="stroke-[1.5]" />
        </div>
        <h3 className="font-playfair text-2xl font-bold tracking-wide text-royal-gold mb-3">
          Inquiry Submitted!
        </h3>
        <p className="font-plus-jakarta text-sm text-ivory/80 max-w-md mx-auto leading-relaxed mb-6">
          Thank you for choosing Classic Biryani. Our Catering Manager will review your request and contact you within 24 hours to discuss your menu.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="font-plus-jakarta text-xs font-semibold uppercase tracking-wider py-3 px-6 rounded-full border border-royal-gold/40 text-royal-gold hover:bg-royal-gold hover:text-primary-black transition-all duration-300"
        >
          Submit Another Request
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-secondary-black border border-royal-gold/15 rounded-3xl p-8 md:p-10 shadow-gold-glow"
      noValidate
    >
      <h3 className="font-playfair text-xl md:text-2xl font-bold tracking-wide text-royal-gold mb-2 text-center">
        Request Catering Quote
      </h3>
      <p className="font-plus-jakarta text-xs text-ivory/60 text-center mb-8">
        Fill out details below and our team will get in touch with you shortly.
      </p>

      {status === 'error' && (
        <div className="mb-6 p-4 rounded-xl border border-red-500/20 bg-red-950/20 text-red-400 flex items-start gap-3 text-sm">
          <AlertCircle size={18} className="shrink-0 mt-0.5" />
          <span>{errorMessage}</span>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Name */}
        <div className="flex flex-col">
          <label htmlFor="catering-name" className="font-plus-jakarta text-xs font-semibold text-ivory/80 uppercase tracking-wider mb-2">
            Full Name *
          </label>
          <input
            id="catering-name"
            type="text"
            placeholder="John Doe"
            {...register('name')}
            className={`h-[56px] px-5 rounded-2xl bg-primary-black border text-sm text-ivory placeholder-ivory/30 focus:outline-none focus:border-royal-gold transition-colors duration-300 ${
              errors.name ? 'border-red-500' : 'border-royal-gold/20'
            }`}
          />
          {errors.name && (
            <span className="text-red-500 text-xs mt-1.5 font-medium">{errors.name.message}</span>
          )}
        </div>

        {/* Phone */}
        <div className="flex flex-col">
          <label htmlFor="catering-phone" className="font-plus-jakarta text-xs font-semibold text-ivory/80 uppercase tracking-wider mb-2">
            Phone Number *
          </label>
          <input
            id="catering-phone"
            type="tel"
            placeholder="(603) 555-0100"
            {...register('phone')}
            className={`h-[56px] px-5 rounded-2xl bg-primary-black border text-sm text-ivory placeholder-ivory/30 focus:outline-none focus:border-royal-gold transition-colors duration-300 ${
              errors.phone ? 'border-red-500' : 'border-royal-gold/20'
            }`}
          />
          {errors.phone && (
            <span className="text-red-500 text-xs mt-1.5 font-medium">{errors.phone.message}</span>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Email */}
        <div className="flex flex-col">
          <label htmlFor="catering-email" className="font-plus-jakarta text-xs font-semibold text-ivory/80 uppercase tracking-wider mb-2">
            Email Address *
          </label>
          <input
            id="catering-email"
            type="email"
            placeholder="johndoe@example.com"
            {...register('email')}
            className={`h-[56px] px-5 rounded-2xl bg-primary-black border text-sm text-ivory placeholder-ivory/30 focus:outline-none focus:border-royal-gold transition-colors duration-300 ${
              errors.email ? 'border-red-500' : 'border-royal-gold/20'
            }`}
          />
          {errors.email && (
            <span className="text-red-500 text-xs mt-1.5 font-medium">{errors.email.message}</span>
          )}
        </div>

        {/* Event Type */}
        <div className="flex flex-col">
          <label htmlFor="catering-event-type" className="font-plus-jakarta text-xs font-semibold text-ivory/80 uppercase tracking-wider mb-2">
            Event Type *
          </label>
          <select
            id="catering-event-type"
            {...register('eventType')}
            className={`h-[56px] px-5 rounded-2xl bg-primary-black border text-sm text-ivory/80 focus:outline-none focus:border-royal-gold transition-colors duration-300 select-dark ${
              errors.eventType ? 'border-red-500' : 'border-royal-gold/20'
            }`}
          >
            <option value="">Select Event Type</option>
            <option value="wedding">Wedding / Walima</option>
            <option value="nikah">Nikah Ceremony</option>
            <option value="corporate">Corporate Banquet</option>
            <option value="birthday">Birthday Party</option>
            <option value="eid">Eid Celebration</option>
            <option value="graduation">Graduation Party</option>
            <option value="other">Other Gathering</option>
          </select>
          {errors.eventType && (
            <span className="text-red-500 text-xs mt-1.5 font-medium">{errors.eventType.message}</span>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Guest Count */}
        <div className="flex flex-col">
          <label htmlFor="catering-guests" className="font-plus-jakarta text-xs font-semibold text-ivory/80 uppercase tracking-wider mb-2">
            Estimated Guests * (Min 10)
          </label>
          <input
            id="catering-guests"
            type="number"
            placeholder="50"
            {...register('guestCount', { valueAsNumber: true })}
            className={`h-[56px] px-5 rounded-2xl bg-primary-black border text-sm text-ivory placeholder-ivory/30 focus:outline-none focus:border-royal-gold transition-colors duration-300 ${
              errors.guestCount ? 'border-red-500' : 'border-royal-gold/20'
            }`}
          />
          {errors.guestCount && (
            <span className="text-red-500 text-xs mt-1.5 font-medium">{errors.guestCount.message}</span>
          )}
        </div>

        {/* Event Date */}
        <div className="flex flex-col">
          <label htmlFor="catering-date" className="font-plus-jakarta text-xs font-semibold text-ivory/80 uppercase tracking-wider mb-2">
            Event Date *
          </label>
          <input
            id="catering-date"
            type="date"
            {...register('eventDate')}
            className={`h-[56px] px-5 rounded-2xl bg-primary-black border text-sm text-ivory/85 focus:outline-none focus:border-royal-gold transition-colors duration-300 ${
              errors.eventDate ? 'border-red-500' : 'border-royal-gold/20'
            }`}
          />
          {errors.eventDate && (
            <span className="text-red-500 text-xs mt-1.5 font-medium">{errors.eventDate.message}</span>
          )}
        </div>
      </div>

      {/* Message */}
      <div className="flex flex-col mb-8">
        <label htmlFor="catering-message" className="font-plus-jakarta text-xs font-semibold text-ivory/80 uppercase tracking-wider mb-2">
          Special Notes & Menu Preferences
        </label>
        <textarea
          id="catering-message"
          rows={4}
          placeholder="Let us know about live grill stations, specific dietary needs, or any other requirements..."
          {...register('message')}
          className="p-5 rounded-2xl bg-primary-black border border-royal-gold/20 text-sm text-ivory placeholder-ivory/30 focus:outline-none focus:border-royal-gold transition-colors duration-300 resize-none"
        />
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
          'Send Catering Inquiry'
        )}
      </button>
    </form>
  );
}
