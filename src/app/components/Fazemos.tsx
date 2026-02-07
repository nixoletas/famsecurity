'use client'

import Image from 'next/image'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { Shield, Camera, Bell, Monitor, Smartphone, DoorOpen, Leaf, Coffee, SprayCan, UserCheck, CarFront, Flame } from 'lucide-react'

function SectionHeader({ title, id }: { title: string; id: string }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })

  return (
    <div id={id} ref={ref} className="scroll-mt-24 mb-12 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
          {title}
        </h3>
        <div className="mt-3 mx-auto h-1 w-16 rounded-full bg-primary/30" />
      </motion.div>
    </div>
  )
}

function ServiceCard({
  icon: Icon,
  imageSrc,
  title,
  description,
  index,
}: {
  icon?: any
  imageSrc?: string
  title: string
  description: string
  index: number
}) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="group flex flex-col items-center gap-4 rounded-xl border border-border bg-white p-6 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1"
    >
      {imageSrc ? (
        <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-primary/5">
          <Image
            width={40}
            height={40}
            src={imageSrc}
            alt={title}
            loading="lazy"
          />
        </div>
      ) : Icon ? (
        <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
          <Icon size={28} />
        </div>
      ) : null}
      <h4 className="font-semibold text-lg text-foreground text-center">{title}</h4>
      <p className="text-sm text-muted-foreground text-center leading-relaxed">
        {description}
      </p>
    </motion.div>
  )
}

export default function Fazemos() {
  return (
    <section id="servicos" className="py-24 scroll-mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section intro */}
        <div className="text-center mb-20">
          <p className="text-sm font-medium text-primary uppercase tracking-wider mb-3">
            Nossos Serviços
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground tracking-tight">
            O que fazemos?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Soluções completas para proteger, monitorar e manter seu patrimônio
            com profissionais treinados e tecnologia de ponta.
          </p>
        </div>

        {/* Vigilância */}
        <SectionHeader title="Vigilância" id="vigilancia" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          <ServiceCard
            imageSrc="/police-car.webp"
            title="Segurança Patrimonial e Escolta Armada"
            description="Equipes treinadas e qualificadas com atuação preventiva, cumprindo prazos e superando expectativas dos nossos clientes."
            index={0}
          />
          <ServiceCard
            imageSrc="/vigilancia/consultation.png"
            title="Consultoria em Segurança"
            description="Análise de riscos personalizada com soluções sob medida, garantindo proteção eficiente e custo-benefício otimizado."
            index={1}
          />
          <ServiceCard
            imageSrc="/vigilancia/guarda.png"
            title="VSPP"
            description="Segurança pessoal para executivos, autoridades e personalidades — proteção contínua ou para eventos específicos."
            index={2}
          />
        </div>

        {/* Tecnologia */}
        <SectionHeader title="Tecnologia" id="tecnologia" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          <ServiceCard
            imageSrc="/tecnologia/security-camera-1.png"
            title="CFTV"
            description="Monitoramento com equipamentos de última geração e equipes capacitadas para respostas rápidas e precisas."
            index={0}
          />
          <ServiceCard
            imageSrc="/tecnologia/alarme.png"
            title="Alarmes Monitorados"
            description="Sensores de presença, movimento e múltiplas vias de comunicação para proteção 24 horas."
            index={1}
          />
          <ServiceCard
            imageSrc="/tecnologia/interfone.png"
            title="Portaria Digital"
            description="Controle inteligente de pedestres e veículos sem necessidade de porteiro presencial."
            index={2}
          />
          <ServiceCard
            imageSrc="/tecnologia/digital-1.png"
            title="Mensageria Digital"
            description="Rastreamento de encomendas com avisos automáticos e protocolos digitais seguros do recebimento à entrega."
            index={3}
          />
        </div>

        {/* Facilities */}
        <SectionHeader title="Facilities" id="facilities" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <ServiceCard
            imageSrc="/facilities/policeman.png"
            title="Portaria e Controle de Acesso"
            description="Profissionais capacitados para operar catracas, cancelas, portas giratórias e controles de acesso com eficiência."
            index={0}
          />
          <ServiceCard
            imageSrc="/facilities/farming.png"
            title="Jardinagem"
            description="Serviço completo de jardinagem, paisagismo e manutenção de áreas verdes."
            index={1}
          />
          <ServiceCard
            imageSrc="/facilities/waitress.png"
            title="Copeira"
            description="Profissionais qualificados para organização de copa, preparo de ambientes e atendimento em reuniões."
            index={2}
          />
          <ServiceCard
            imageSrc="/facilities/cleaning.png"
            title="Limpeza e Conservação"
            description="Equipes capacitadas com técnicas e equipamentos modernos para limpeza com discrição e eficiência."
            index={3}
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <ServiceCard
            imageSrc="/facilities/receptionist-1.png"
            title="Recepção"
            description="Identificação, cadastramento e direcionamento de visitantes com empatia e profissionalismo."
            index={4}
          />
          <ServiceCard
            imageSrc="/facilities/valet.png"
            title="Manobrista"
            description="Comodidade e segurança no embarque e desembarque com agilidade e cuidado."
            index={5}
          />
          <ServiceCard
            imageSrc="/facilities/fireman.png"
            title="Bombeiro Civil"
            description="Bombeiros capacitados para atender emergências com precisão, agilidade e o cuidado que a profissão exige."
            index={6}
          />
        </div>
      </div>
    </section>
  )
}
