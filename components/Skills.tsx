'use client';

import { motion } from 'framer-motion';
import { Database, Layers3, Server, Settings2, Wrench } from 'lucide-react';
import { skillGroups } from '@/data/portfolio';
import { SectionHeader } from './SectionHeader';

const icons = [Layers3, Server, Database, Settings2, Wrench];

export function Skills() {
  return (
    <section id="tecnologias" className="section-padding">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Tecnologias"
          title="Stack preparada para construir, integrar e sustentar sistemas"
        />

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {skillGroups.map((group, index) => {
            const Icon = icons[index] ?? Wrench;

            return (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                className="rounded-lg border border-white/10 bg-white/[0.035] p-5 transition hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-white/[0.055]"
              >
                <div className="mb-5 flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-md bg-cyan-300/10 text-cyan-200">
                    <Icon size={20} />
                  </span>
                  <h3 className="font-semibold text-white">{group.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span key={skill} className="tech-badge">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
