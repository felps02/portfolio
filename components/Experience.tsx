'use client';

import { motion } from 'framer-motion';
import { BriefcaseBusiness, CheckCircle2 } from 'lucide-react';
import { experience } from '@/data/portfolio';
import { SectionHeader } from './SectionHeader';

export function Experience() {
  return (
    <section id="experiencia" className="section-padding bg-slate-900/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Experiencia"
          title="Vivencia em desenvolvimento, integracoes e entrega continua"
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55 }}
          className="mx-auto max-w-5xl rounded-lg border border-white/10 bg-slate-950/70 p-6 shadow-2xl shadow-slate-950/40 md:p-8"
        >
          <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
            <div className="flex gap-4">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-md bg-purple-400/10 text-purple-200">
                <BriefcaseBusiness size={23} />
              </span>
              <div>
                <h3 className="text-2xl font-semibold text-white">{experience.company}</h3>
                <p className="mt-2 text-cyan-200">{experience.role}</p>
              </div>
            </div>
            <span className="w-fit rounded-md border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-sm font-medium text-cyan-100">
              {experience.period}
            </span>
          </div>

          <p className="mt-6 max-w-4xl leading-8 text-slate-300">{experience.description}</p>

          <div className="mt-7 grid gap-3 md:grid-cols-2">
            {experience.activities.map((activity) => (
              <div key={activity} className="flex gap-3 rounded-md bg-white/[0.035] p-4">
                <CheckCircle2 className="mt-0.5 shrink-0 text-cyan-300" size={18} />
                <span className="text-sm leading-6 text-slate-200">{activity}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
