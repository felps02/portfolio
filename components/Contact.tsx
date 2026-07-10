'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, MessageCircle } from 'lucide-react';
import { profile } from '@/data/portfolio';
import { SectionHeader } from './SectionHeader';

const contacts = [
  {
    label: 'E-mail',
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: Mail
  },
  {
    label: 'GitHub',
    value: 'github.com/felps02',
    href: profile.github,
    icon: Github
  },
  {
    label: 'LinkedIn',
    value: 'Felipe Ribeiro',
    href: profile.linkedin,
    icon: Linkedin
  },
  {
    label: 'WhatsApp',
    value: '47 9 997119758',
    href: profile.whatsapp,
    icon: MessageCircle
  }
];

export function Contact() {
  return (
    <section id="contato" className="section-padding bg-slate-900/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Contato"
          title="Vamos conversar sobre desenvolvimento, sistemas e entregas"
          description="Disponivel para oportunidades em Desenvolvimento Full Stack, Analise de Sistemas, Analise de Desenvolvimento e DevOps Junior."
        />

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="mx-auto grid max-w-5xl gap-4 md:grid-cols-2"
        >
          {contacts.map((contact) => {
            const Icon = contact.icon;

            return (
              <a
                key={contact.label}
                href={contact.href}
                target={contact.href.startsWith('http') ? '_blank' : undefined}
                rel={contact.href.startsWith('http') ? 'noreferrer' : undefined}
                className="group rounded-lg border border-white/10 bg-white/[0.035] p-5 transition hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-white/[0.055]"
              >
                <div className="flex items-center gap-4">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-md bg-cyan-300/10 text-cyan-200">
                    <Icon size={22} />
                  </span>
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-slate-400">{contact.label}</p>
                    <p className="mt-1 break-words font-semibold text-white">{contact.value}</p>
                  </div>
                </div>
              </a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
