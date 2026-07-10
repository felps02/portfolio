'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, Github } from 'lucide-react';
import { projects } from '@/data/portfolio';
import { SectionHeader } from './SectionHeader';

export function Projects() {
  return (
    <section id="projetos" className="section-padding bg-slate-900/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Projetos"
          title="Projetos com foco em sistemas, APIs e automacao"
          description="Uma selecao alinhada a vagas de Full Stack, Analista de Sistemas, Analista de Desenvolvimento e DevOps Junior."
        />

        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              className="group flex min-h-[290px] flex-col rounded-lg border border-white/10 bg-slate-950/70 p-6 transition hover:-translate-y-1 hover:border-cyan-300/30 hover:shadow-glow"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="mb-3 text-sm font-medium text-cyan-300">Projeto 0{index + 1}</p>
                  <h3 className="text-2xl font-semibold text-white">{project.name}</h3>
                </div>
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-md border border-white/10 bg-white/[0.04] text-slate-200 transition group-hover:border-cyan-300/30 group-hover:text-cyan-200">
                  <ArrowUpRight size={20} />
                </span>
              </div>

              <p className="mt-5 flex-1 leading-8 text-slate-300">{project.description}</p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span key={technology} className="tech-badge">
                    {technology}
                  </span>
                ))}
              </div>

              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex w-fit items-center gap-2 rounded-md border border-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:border-cyan-300/40 hover:bg-cyan-300/10"
              >
                <Github size={17} />
                GitHub
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
