'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Shield, Cpu, Building2, ArrowRight } from 'lucide-react'
import { InteractiveGridPattern } from '@/components/ui/interactive-grid-pattern'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 h-full w-full overflow-hidden">
        <InteractiveGridPattern
        squaresHoverClassName="fill-primary/15 stroke-primary/25"
        />
      </div>
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white/80 pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-white/80 backdrop-blur-sm px-4 py-1.5 text-sm text-muted-foreground mb-8">
            <Shield size={14} className="text-primary" />
            Segurança, Parceria e Confiança
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-tight"
        >
          Proteção inteligente{' '}
          <br className="hidden sm:block" />
          <span className="gradient-text">para o que importa</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
          className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
        >
          Vigilância, tecnologia e facilities integrados em uma única solução.
          Sua segurança projetada com excelência e inovação.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45, ease: 'easeOut' }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="https://api.whatsapp.com/send?phone=5511989184515"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-base font-semibold text-primary-foreground hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30"
          >
            Solicite um Orçamento
            <ArrowRight size={18} />
          </a>
          <a
            href="#servicos"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-white px-6 py-3 text-base font-medium text-foreground hover:bg-accent transition-colors"
          >
            Conheça nossos serviços
          </a>
        </motion.div>

        {/* Service pillars */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6, ease: 'easeOut' }}
          className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto"
        >
          {[
            {
              icon: Shield,
              title: 'Vigilância',
              description: 'Proteção patrimonial com equipes especializadas',
              href: '#vigilancia',
            },
            {
              icon: Cpu,
              title: 'Tecnologia',
              description: 'CFTV, alarmes e portaria digital integrados',
              href: '#tecnologia',
            },
            {
              icon: Building2,
              title: 'Facilities',
              description: 'Serviços de apoio operacional completos',
              href: '#facilities',
            },
          ].map((item, i) => (
            <a
              key={item.title}
              href={item.href}
              className="group relative flex flex-col items-center gap-3 rounded-xl border border-border bg-white/60 backdrop-blur-sm p-6 hover:bg-white hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <item.icon size={24} />
              </div>
              <h3 className="font-semibold text-foreground">{item.title}</h3>
              <p className="text-sm text-muted-foreground text-center">
                {item.description}
              </p>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
