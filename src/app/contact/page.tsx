'use client'

import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Send, CheckCircle2, Copy, Check } from 'lucide-react'

const MESSAGE_MAX_LENGTH = 500
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [isCopied, setIsCopied] = useState(false)
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formError, setFormError] = useState('')
  const [fieldErrors, setFieldErrors] = useState<{
    name?: string
    email?: string
    message?: string
  }>({})

  const validate = () => {
    const errors: typeof fieldErrors = {}
    const trimmedName = name.trim()
    const trimmedEmail = email.trim()

    if (!trimmedName) {
      errors.name = 'Nome é obrigatório.'
    }
    if (!trimmedEmail) {
      errors.email = 'E-mail é obrigatório.'
    } else if (!EMAIL_REGEX.test(trimmedEmail)) {
      errors.email = 'Informe um e-mail válido.'
    }
    if (message.length > MESSAGE_MAX_LENGTH) {
      errors.message = `Mensagem deve ter no máximo ${MESSAGE_MAX_LENGTH} caracteres.`
    }

    setFieldErrors(errors)
    return Object.keys(errors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormError('')
    if (!validate()) return

    try {
      const formData = new FormData()
      formData.append('entry.880865109', name)
      formData.append('entry.255463999', email)
      formData.append('entry.1676664265', message)

      await fetch(
        'https://docs.google.com/forms/d/e/1FAIpQLScHdGEG6c6oxUvGcqqLPyZ8XVCc_R744hOVNWw2JCxQhdRtOg/formResponse',
        {
          method: 'POST',
          body: formData,
          mode: 'no-cors',
        }
      )

      setFormSubmitted(true)
      setName('')
      setEmail('')
      setMessage('')
      setFieldErrors({})
    } catch (error) {
      setFormError('Falha ao enviar o formulário. Por favor, tente novamente.')
    }
  }

  const copyEmailToClipboard = async () => {
    try {
      await navigator.clipboard.writeText('contato@famsecurity.com.br')
    } catch {
      const el = document.createElement('textarea')
      el.value = 'contato@famsecurity.com.br'
      document.body.appendChild(el)
      el.select()
      document.execCommand('copy')
      document.body.removeChild(el)
    }
    setIsCopied(true)
    setTimeout(() => setIsCopied(false), 2000)
  }

  return (
    <main className="min-h-screen">
      <Navbar />

      <section className="pt-28 pb-16 dot-pattern relative">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-medium text-primary uppercase tracking-wider mb-3">
              Fale conosco
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground tracking-tight">
              Entre em contato
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
              Estamos prontos para ouvir suas necessidades e propor a melhor solução em segurança.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:col-span-2 space-y-6"
            >
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary flex-shrink-0">
                  <MapPin size={18} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-sm">Endereço</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                  <a href="https://maps.app.goo.gl/6LhAKPH9HvRS5yB86" target="_blank" rel="noopener noreferrer">
                    Alameda Afonso Schmidt, 508
                    <br />
                    Santa Terezinha — São Paulo/SP
                    <br />
                    CEP 02450-001
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary flex-shrink-0">
                  <Phone size={18} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-sm">Telefone</h3>
                  <p className="text-sm text-muted-foreground mt-1">(11) 2959-2079</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary flex-shrink-0">
                  <Mail size={18} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-sm">E-mail</h3>
                  <button
                    onClick={copyEmailToClipboard}
                    className="flex items-center gap-2 text-sm text-primary hover:underline mt-1 transition-colors"
                  >
                    contato@famsecurity.com.br
                    {isCopied ? (
                      <Check size={14} className="text-green-500" />
                    ) : (
                      <Copy size={14} />
                    )}
                  </button>
                  {isCopied && (
                    <p className="text-xs text-green-600 mt-1">Copiado!</p>
                  )}
                </div>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="lg:col-span-3"
            >
              {!formSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-foreground mb-1.5"
                    >
                      Nome <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value)
                        if (fieldErrors.name) setFieldErrors((prev) => ({ ...prev, name: undefined }))
                      }}
                      className={`w-full rounded-lg border bg-white px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-shadow ${fieldErrors.name ? 'border-red-500' : 'border-input'}`}
                      placeholder="Seu nome completo"
                      aria-invalid={!!fieldErrors.name}
                      aria-describedby={fieldErrors.name ? 'name-error' : undefined}
                    />
                    {fieldErrors.name && (
                      <p id="name-error" className="mt-1 text-sm text-red-500" role="alert">
                        {fieldErrors.name}
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-foreground mb-1.5"
                    >
                      E-mail <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value)
                        if (fieldErrors.email) setFieldErrors((prev) => ({ ...prev, email: undefined }))
                      }}
                      className={`w-full rounded-lg border bg-white px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-shadow ${fieldErrors.email ? 'border-red-500' : 'border-input'}`}
                      placeholder="seu@email.com"
                      aria-invalid={!!fieldErrors.email}
                      aria-describedby={fieldErrors.email ? 'email-error' : undefined}
                    />
                    {fieldErrors.email && (
                      <p id="email-error" className="mt-1 text-sm text-red-500" role="alert">
                        {fieldErrors.email}
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-foreground mb-1.5"
                    >
                      Mensagem <span className="text-muted-foreground font-normal">(opcional)</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={message}
                      onChange={(e) => {
                        setMessage(e.target.value)
                        if (fieldErrors.message) setFieldErrors((prev) => ({ ...prev, message: undefined }))
                      }}
                      rows={5}
                      maxLength={MESSAGE_MAX_LENGTH}
                      className={`w-full rounded-lg border bg-white px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-shadow resize-none ${fieldErrors.message ? 'border-red-500' : 'border-input'}`}
                      placeholder="Como podemos ajudar? Fale sobre seu projeto, sua necessidade ou o que você precisa."
                      aria-invalid={!!fieldErrors.message}
                      aria-describedby={fieldErrors.message ? 'message-error' : 'message-count'}
                    />
                    <div className="mt-1 flex justify-between items-baseline">
                      <span>
                        {fieldErrors.message && (
                          <span id="message-error" className="text-sm text-red-500" role="alert">
                            {fieldErrors.message}
                          </span>
                        )}
                      </span>
                      <span
                        id="message-count"
                        className={`text-xs ${message.length > MESSAGE_MAX_LENGTH ? 'text-red-500' : 'text-muted-foreground'}`}
                      >
                        {message.length}/{MESSAGE_MAX_LENGTH}
                      </span>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20"
                  >
                    <Send size={16} />
                    Enviar mensagem
                  </button>
                </form>
              ) : (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600 mb-4">
                    <CheckCircle2 size={32} />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    Mensagem enviada!
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Recebemos sua mensagem e entraremos em contato em breve.
                  </p>
                </div>
              )}

              {formError && (
                <p className="mt-4 text-sm text-red-500">{formError}</p>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
