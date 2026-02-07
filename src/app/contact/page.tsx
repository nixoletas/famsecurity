'use client'

import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Send, CheckCircle2, Copy, Check } from 'lucide-react'

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [isCopied, setIsCopied] = useState(false)
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formError, setFormError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      const formData = new FormData()
      formData.append('entry.1563745019', name)
      formData.append('entry.606401615', email)
      formData.append('entry.2077698595', message)

      await fetch(
        'https://docs.google.com/forms/d/e/1FAIpQLSdENtwEoOcqQYe2Ip5joDJlwZN-_HbU_QGsoSagg2kw3SXJRg/formResponse',
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
                    Alameda Afonso Schmidt, 508
                    <br />
                    Santa Terezinha — São Paulo/SP
                    <br />
                    CEP 02450-001
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
                      Nome
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full rounded-lg border border-input bg-white px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-shadow"
                      placeholder="Seu nome completo"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-foreground mb-1.5"
                    >
                      E-mail
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full rounded-lg border border-input bg-white px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-shadow"
                      placeholder="seu@email.com"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-foreground mb-1.5"
                    >
                      Mensagem
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      rows={5}
                      className="w-full rounded-lg border border-input bg-white px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-shadow resize-none"
                      placeholder="Como podemos ajudar?"
                      required
                    />
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
