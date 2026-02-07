'use client'

import Link from 'next/link'
import Image from 'next/image'
import { MapPin, Phone, Mail, Home, Info, MessageSquare } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-border bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <Image
              src="/logotipo-1.png"
              alt="FAM Security"
              width={120}
              height={57}
              className="mb-4"
            />
            <p className="text-sm text-muted-foreground leading-relaxed">
              Proteção inteligente para o que importa.
              Soluções integradas em vigilância, tecnologia e facilities.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Navegação</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Home size={14} />
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Info size={14} />
                  Sobre nós
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <MessageSquare size={14} />
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <a href="https://maps.app.goo.gl/6LhAKPH9HvRS5yB86" target="_blank" rel="noopener noreferrer">
                <MapPin size={14} className="mt-0.5 flex-shrink-0 text-primary" />
                  <span>
                    Alameda Afonso Schmidt, 508 — Santa Terezinha
                    <br />
                    São Paulo/SP — CEP 02450-001
                  </span>
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone size={14} className="flex-shrink-0 text-primary" />
                (11) 2959-2079
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail size={14} className="flex-shrink-0 text-primary" />
                contato@famsecurity.com.br
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} FAM Security. Todos os direitos reservados.
          </p>
          <a
            href="https://api.whatsapp.com/send?phone=5511989184515"
            className="inline-flex items-center gap-2 text-xs font-medium text-primary hover:underline"
          >
            <MessageSquare size={12} />
            WhatsApp
          </a>
        </div>
      </div>
    </footer>
  )
}
