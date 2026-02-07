'use client'

import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Target, Eye, Users } from 'lucide-react'

function MissionCard({
  icon: Icon,
  title,
  description,
  imageSrc,
  index,
}: {
  icon: any
  title: string
  description: string
  imageSrc: string
  index: number
}) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="flex flex-col items-center gap-4 rounded-xl border border-border bg-white p-8 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
    >
      <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-primary/10 text-primary">
        <Icon size={32} />
      </div>
      <h3 className="text-xl font-bold text-foreground">{title}</h3>
      <p className="text-sm text-muted-foreground text-center leading-relaxed">
        {description}
      </p>
    </motion.div>
  )
}

export default function About() {
  const { ref: storyRef, inView: storyInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="pt-28 pb-16 dot-pattern relative">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-medium text-primary uppercase tracking-wider mb-3">
              Quem somos
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground tracking-tight">
              Somos a{' '}
              <span className="gradient-text">FAM Security</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16">
        <motion.div
          ref={storyRef}
          initial={{ opacity: 0, y: 30 }}
          animate={storyInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="space-y-6 text-base text-muted-foreground leading-relaxed">
            <p>
              A <strong className="text-foreground">FAM Security</strong> foi fundada
              no Brasil por um ex-Sargento dos Fuzileiros Navais Americanos (US Marines)
              com um propósito claro: oferecer aos clientes um ponto único para todas
              as necessidades de segurança.
            </p>
            <p>
              Prestamos serviços de excelência em Segurança Patrimonial e Serviços
              Terceirizados, com foco em qualidade e melhor custo-benefício. Nossa
              infraestrutura foi projetada para suportar operações complexas por meio
              da identificação e aconselhamento sobre riscos associados à sua empresa
              ou equipe.
            </p>
            <p>
              Contamos com profissionais treinados e qualificados para proporcionar
              tranquilidade e satisfação. Através de análise precisa e experiência
              consolidada no mercado, desenvolvemos serviços com qualidade e eficiência
              — visando a melhoria constante das operações e a satisfação total dos
              nossos clientes.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
              Nossos Pilares
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <MissionCard
              icon={Target}
              title="Missão"
              description="Ser a melhor e mais completa empresa multisserviços do Brasil, entregando soluções que fazem a diferença no dia a dia dos nossos clientes."
              imageSrc="/crescimento.png"
              index={0}
            />
            <MissionCard
              icon={Eye}
              title="Visão"
              description="Garantir a sinergia da atividade fim do cliente com apoio contínuo, inovação e tecnologia — permitindo crescimento e perpetuação."
              imageSrc="/location-1.png"
              index={1}
            />
            <MissionCard
              icon={Users}
              title="Valores"
              description="Equilíbrio entre Pessoas e Negócios com responsabilidade empresarial em nosso DNA, garantindo excelência e eficiência."
              imageSrc="/group.png"
              index={2}
            />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
