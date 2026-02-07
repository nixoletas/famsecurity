'use client'

import React from 'react'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { Star, CheckCircle2, ArrowRight } from 'lucide-react'

const values = [
  {
    title: 'Continuidade garantida',
    subtitle: 'Foco total na sua operação',
    description:
      'Asseguramos que sua atividade principal nunca pare. Nosso compromisso é manter tudo funcionando enquanto cuidamos da sua segurança.',
    stars: 1,
  },
  {
    title: 'Soluções sob medida',
    subtitle: 'Sua opinião é o ponto de partida',
    description:
      'Ouvimos, analisamos e construímos a melhor solução para o seu cenário. Cada projeto é único porque cada cliente é único.',
    stars: 2,
  },
  {
    title: 'Confiança como base',
    subtitle: 'Relações que geram valor',
    description:
      'Construímos parcerias de longo prazo baseadas em transparência, resultados e respeito mútuo.',
    stars: 3,
  },
  {
    title: 'Versatilidade operacional',
    subtitle: 'Adaptamos a missão ao desafio',
    description:
      'Independente da complexidade, nossa equipe se adapta com agilidade e competência para entregar resultados.',
    stars: 4,
  },
  {
    title: 'Presença permanente',
    subtitle: 'Ao seu lado em todos os momentos',
    description:
      'Disponibilidade 24/7 com suporte contínuo. Sua tranquilidade não tem hora para acontecer.',
    stars: 5,
  },
]

function ValueCard({ item, index }: { item: typeof values[0]; index: number }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative flex flex-col sm:flex-row items-start gap-5 rounded-xl border border-border bg-white p-6 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
    >
      <div className="flex-shrink-0 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
        <CheckCircle2 size={24} />
      </div>
      <div className="flex-1">
        <h3 className="font-semibold text-lg text-foreground">{item.title}</h3>
        <p className="text-sm font-medium text-primary mt-0.5">{item.subtitle}</p>
        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
          {item.description}
        </p>
        <div className="mt-3 flex gap-0.5">
          {Array.from({ length: item.stars }).map((_, i) => (
            <Star key={i} size={14} className="fill-amber-400 text-amber-400" />
          ))}
          {Array.from({ length: 5 - item.stars }).map((_, i) => (
            <Star key={i} size={14} className="text-border" />
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default function Section() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-primary uppercase tracking-wider mb-3">
            Por que nos escolher
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground tracking-tight">
            Por que confiar na FAM Security?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Mais do que segurança, entregamos tranquilidade. Conheça os pilares
            que sustentam nossa excelência.
          </p>
        </div>

        <div className="space-y-4">
          {values.map((item, index) => (
            <ValueCard key={item.title} item={item} index={index} />
          ))}
        </div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <a
            href="https://api.whatsapp.com/send?phone=5511989184515"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-base font-semibold text-primary-foreground hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
          >
            Fale com um especialista
            <ArrowRight size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
