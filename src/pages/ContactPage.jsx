import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom'

import { packages } from '../data/packageData.json'

const EMAIL = 'info@nepaltravel.com'
const WHATSAPP = 'https://wa.me/9779812345678'
const PHONE = '+977 9812 345678'
const ADDRESS = 'Thamel, Kathmandu 44600, Nepal'
const MAP_LINK = 'https://maps.google.com/?q=Thamel+Kathmandu'
const MAP_EMBED = 'https://www.google.com/maps?q=Thamel,+Kathmandu,+Nepal&z=15&output=embed'

const inputBase =
  "w-full rounded-md border bg-white/60 px-4 py-3 font-['Work_Sans'] text-sm text-[#2c4549] placeholder:text-[#2c4549]/40 outline-none transition focus:border-[#2c4549] focus:bg-white focus:ring-2 focus:ring-[#2c4549]/15 sm:text-base"

const Field = ({ id, label, error, optional, children }) => (
  <div>
    <label htmlFor={id} className="mb-2 flex items-baseline justify-between font-['Work_Sans'] text-sm font-medium text-[#2c4549]">
      <span>{label}</span>
      {optional && <span className="text-xs font-normal text-[#2c4549]/50">Optional</span>}
    </label>
    {children}
    {error && (
      <p id={`${id}-error`} role="alert" className="mt-1.5 font-['Work_Sans'] text-xs text-[#b4442c] sm:text-sm">
        {error}
      </p>
    )}
  </div>
)

const InfoRow = ({ title, children }) => (
  <div className="border-t border-[#2c4549]/15 py-5">
    <p className="font-['Work_Sans'] text-[11px] uppercase tracking-[0.2em] text-[#2c4549]/60">{title}</p>
    <div className="mt-1.5 font-['Playfair_Display'] text-xl leading-snug sm:text-2xl">{children}</div>
  </div>
)

const validate = (v) => {
  const e = {}
  if (!v.name.trim()) e.name = 'Please enter your name.'
  if (!v.email.trim()) e.email = 'Please enter your email.'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email)) e.email = 'Please enter a valid email address.'
  if (!v.message.trim()) e.message = 'Tell us a little about your trip.'
  else if (v.message.trim().length < 10) e.message = 'Please write at least a few words.'
  return e
}

const ContactPage = () => {
  const [params] = useSearchParams()
  const tripParam = params.get('trip')
  const initialTrip = packages.some((p) => p.slug === tripParam) ? tripParam : ''

  const [values, setValues] = useState({
    name: '',
    email: '',
    phone: '',
    trip: initialTrip,
    dates: '',
    message: '',
  })
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)

  const set = (key) => (e) => {
    setValues((prev) => ({ ...prev, [key]: e.target.value }))
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const found = validate(values)
    setErrors(found)
    if (Object.keys(found).length > 0) {
      document.getElementById(Object.keys(found)[0])?.focus()
      return
    }
    // TODO: send `values` to your backend / form service (Formspree, EmailJS, API route…).
    // The site is frontend-only for now, so this just shows the success state.
    setSent(true)
  }

  const reset = () => {
    setValues({ name: '', email: '', phone: '', trip: '', dates: '', message: '' })
    setErrors({})
    setSent(false)
  }

  const ring = (key) => (errors[key] ? 'border-[#b4442c]' : 'border-[#2c4549]/25')

  return (
    <>
      {/* Form */}
      <section className="bg-[#f6f3ef] px-5 py-12 text-[#2f4a4f] sm:px-8 sm:py-16 lg:px-10 lg:py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 pt-16 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16 xl:gap-24">
          {/* Details */}
          <div>
            <h2 className="font-['Playfair_Display'] text-3xl font-semibold uppercase leading-tight sm:text-4xl lg:text-5xl">
              Let’s talk
            </h2>
            <p className="mt-4 max-w-md font-['Work_Sans'] text-sm leading-relaxed text-[#2f4a4f]/70 sm:text-base">
              Whether it is a short sightseeing day or a two-week trek, we reply personally. You can also reach us
              directly.
            </p>

            <div className="mt-8 sm:mt-10">
              <InfoRow title="Email">
                <a href={`mailto:${EMAIL}`} className="break-all underline underline-offset-4 transition hover:opacity-70">
                  {EMAIL}
                </a>
              </InfoRow>
              <InfoRow title="WhatsApp">
                <a href={WHATSAPP} target="_blank" rel="noreferrer" className="underline underline-offset-4 transition hover:opacity-70">
                  {PHONE}
                </a>
              </InfoRow>
              <InfoRow title="Office">
                <a href={MAP_LINK} target="_blank" rel="noreferrer" className="underline underline-offset-4 transition hover:opacity-70">
                  {ADDRESS}
                </a>
              </InfoRow>
            </div>

            {/* Image: fills the empty space under the details on large screens */}
            <div className="relative mt-10 hidden aspect-[4/3] overflow-hidden rounded-xl shadow-xl shadow-black/10 lg:block">
              <img
                src="/images/t2.jpg"
                alt="Fishtail peak with a Nepali flag and prayer flags"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>

          {/* Form card */}
          <div className="rounded-xl border border-[#2c4549]/15 bg-white/40 p-5 shadow-md shadow-black/5 sm:p-8 lg:p-10">
            {sent ? (
              <div role="status" className="py-10 text-center sm:py-16">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="mx-auto h-14 w-14 text-[#e8b9a8]">
                  <circle cx="12" cy="12" r="9" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 12.5l2.7 2.7L16 9.8" />
                </svg>
                <h3 className="mt-5 font-['Playfair_Display'] text-2xl font-semibold sm:text-3xl">Thank you, {values.name.split(' ')[0]}</h3>
                <p className="mx-auto mt-3 max-w-sm font-['Work_Sans'] text-sm leading-relaxed text-[#2c4549]/70 sm:text-base">
                  We have your message and will get back to you soon.
                </p>
                <button
                  type="button"
                  onClick={reset}
                  className="mt-6 rounded-md border border-[#2c4549]/50 px-6 py-3 font-['Work_Sans'] text-sm transition hover:bg-[#2c4549] hover:text-white"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6">
                <Field id="name" label="Full name" error={errors.name}>
                  <input
                    id="name"
                    type="text"
                    autoComplete="name"
                    value={values.name}
                    onChange={set('name')}
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                    placeholder="Your name"
                    className={`${inputBase} ${ring('name')}`}
                  />
                </Field>

                <Field id="email" label="Email" error={errors.email}>
                  <input
                    id="email"
                    type="email"
                    autoComplete="email"
                    value={values.email}
                    onChange={set('email')}
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                    placeholder="you@example.com"
                    className={`${inputBase} ${ring('email')}`}
                  />
                </Field>

                <Field id="phone" label="Phone / WhatsApp" optional>
                  <input
                    id="phone"
                    type="tel"
                    autoComplete="tel"
                    value={values.phone}
                    onChange={set('phone')}
                    placeholder="+1 555 000 0000"
                    className={`${inputBase} ${ring('phone')}`}
                  />
                </Field>

                <Field id="dates" label="Preferred travel dates" optional>
                  <input
                    id="dates"
                    type="text"
                    value={values.dates}
                    onChange={set('dates')}
                    placeholder="e.g. April 2027"
                    className={`${inputBase} ${ring('dates')}`}
                  />
                </Field>

                <div className="sm:col-span-2">
                  <Field id="trip" label="I’m interested in" optional>
                    <select id="trip" value={values.trip} onChange={set('trip')} className={`${inputBase} ${ring('trip')}`}>
                      <option value="">A custom trip / not sure yet</option>
                      {packages.map((p) => (
                        <option key={p.slug} value={p.slug}>
                          {p.title}
                        </option>
                      ))}
                    </select>
                  </Field>
                </div>

                <div className="sm:col-span-2">
                  <Field id="message" label="Your message" error={errors.message}>
                    <textarea
                      id="message"
                      rows={5}
                      value={values.message}
                      onChange={set('message')}
                      aria-invalid={!!errors.message}
                      aria-describedby={errors.message ? 'message-error' : undefined}
                      placeholder="Group size, interests, fitness level, budget…"
                      className={`${inputBase} resize-y ${ring('message')}`}
                    />
                  </Field>
                </div>

                <div className="flex flex-col gap-3 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
                  <button
                    type="submit"
                    className="rounded-md border border-[#2c4549] bg-[#2c4549] px-8 py-3.5 font-['Work_Sans'] text-sm text-white transition-colors duration-300 hover:bg-transparent hover:text-[#2c4549]"
                  >
                    Send message
                  </button>
                  <a
                    href={WHATSAPP}
                    target="_blank"
                    rel="noreferrer"
                    className="text-center font-['Work_Sans'] text-sm underline underline-offset-4 transition hover:opacity-70 sm:text-left"
                  >
                    Prefer WhatsApp? Chat with us
                  </a>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="bg-[#f6f3ef] px-5 pb-12 text-[#2f4a4f] sm:px-8 sm:pb-16 lg:px-10 lg:pb-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-6 flex flex-col gap-3 sm:mb-8 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="font-['Playfair_Display'] text-3xl font-semibold uppercase leading-tight sm:text-4xl">
              Find us in Thamel
            </h2>
            <a
              href={MAP_LINK}
              target="_blank"
              rel="noreferrer"
              className="font-['Work_Sans'] text-sm underline underline-offset-4 transition hover:opacity-70"
            >
              Open in Google Maps
            </a>
          </div>

          <div className="overflow-hidden rounded-xl border border-[#2c4549]/15 shadow-md shadow-black/5">
            <iframe
              title="Urban Sherpa office location in Thamel, Kathmandu"
              src={MAP_EMBED}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
              className="block h-[320px] w-full border-0 sm:h-[420px] lg:h-[520px]"
            />
          </div>
        </div>
      </section>
    </>
  )
}

export default ContactPage