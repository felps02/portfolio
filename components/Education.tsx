'use client';

import { motion } from 'framer-motion';
import { Award, GraduationCap } from 'lucide-react';
import { education, futureCertificates } from '@/data/portfolio';
import { SectionHeader } from './SectionHeader';

export function Education() {
  return (
    <section id="formacao" className="section-padding">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Formacao"
          title="Base academica e espaco para novas certificacoes"
        />

        <div className="grid gap-5 lg:grid-cols-2">
          {education.map((item) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.45 }}
              className="rounded-lg border border-white/10 bg-white/[0.035] p-6"
            >
              <div className="flex gap-4">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-md bg-purple-400/10 text-purple-200">
                  <GraduationCap size={24} />
                </span>
                <div>
                  <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm font-medium text-cyan-200">{item.status}</p>
                  <p className="mt-4 leading-7 text-slate-300">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.45, delay: 0.08 }}
            className="rounded-lg border border-dashed border-cyan-300/30 bg-cyan-300/[0.04] p-6"
          >
            <div className="flex gap-4">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-md bg-cyan-300/10 text-cyan-200">
                <Award size={24} />
              </span>
              <div>
                <h3 className="text-xl font-semibold text-white">Futuros certificados</h3>
                {futureCertificates.map((certificate) => (
                  <p key={certificate} className="mt-4 leading-7 text-slate-300">
                    {certificate}
                  </p>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
