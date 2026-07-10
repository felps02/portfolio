'use client';

import { motion } from 'framer-motion';
import {
  ArrowDown,
  Download,
  Github,
  Linkedin,
  MapPin,
  ServerCog,
  TerminalSquare
} from 'lucide-react';
import { profile } from '@/data/portfolio';

const highlights = ['APIs REST', 'CI/CD', 'Sistemas corporativos', 'Deploys'];

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative isolate flex min-h-screen items-center overflow-hidden px-4 pb-20 pt-28 sm:px-6 lg:px-8"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.18),transparent_34%),linear-gradient(135deg,rgba(15,23,42,0.98),rgba(2,6,23,1)_48%,rgba(24,12,54,0.92))]" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-36 bg-gradient-to-t from-slate-950 to-transparent" />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1.04fr_0.96fr]">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-md border border-cyan-300/20 bg-cyan-300/10 px-3 py-2 text-sm text-cyan-100">
            <MapPin size={16} />
            {profile.location}
          </div>

          <h1 className="max-w-4xl text-5xl font-semibold leading-[1.04] text-white sm:text-6xl lg:text-7xl">
            {profile.name}
          </h1>
          <p className="mt-5 max-w-3xl text-xl font-medium text-cyan-200 md:text-2xl">
            {profile.title}
          </p>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
            Desenvolvo e mantenho aplicacoes corporativas com foco em integracao entre
            sistemas, automacao de processos, APIs REST, versionamento, pipelines CI/CD e
            sustentacao de entregas em producao.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projetos" className="btn-primary">
              <ArrowDown size={18} />
              Ver projetos
            </a>
            <a href={profile.resume} className="btn-secondary">
              <Download size={18} />
              Baixar curriculo
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="btn-secondary">
              <Linkedin size={18} />
              LinkedIn
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer" className="btn-secondary">
              <Github size={18} />
              GitHub
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
          className="relative"
        >
          <div className="rounded-lg border border-white/10 bg-white/[0.035] p-3 shadow-2xl shadow-cyan-950/40 backdrop-blur">
            <div className="rounded-md border border-white/10 bg-slate-950/90">
              <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
                <div className="flex gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-400" />
                  <span className="h-3 w-3 rounded-full bg-amber-300" />
                  <span className="h-3 w-3 rounded-full bg-emerald-400" />
                </div>
                <span className="text-xs text-slate-400">portfolio.ts</span>
              </div>
              <div className="space-y-4 p-5 font-mono text-sm leading-7 text-slate-300 sm:p-6">
                <p>
                  <span className="text-purple-300">const</span>{' '}
                  <span className="text-cyan-200">developer</span> = {'{'}
                </p>
                <p className="pl-4">
                  role: <span className="text-emerald-300">'Full Stack + DevOps'</span>,
                </p>
                <p className="pl-4">
                  focus: <span className="text-emerald-300">'corporate systems'</span>,
                </p>
                <p className="pl-4">
                  stack: <span className="text-emerald-300">'Next.js, .NET, Node, SQL'</span>,
                </p>
                <p className="pl-4">
                  delivery: <span className="text-emerald-300">'CI/CD + releases'</span>
                </p>
                <p>{'};'}</p>
              </div>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-3">
            {highlights.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.28 + index * 0.08, duration: 0.45 }}
                className="rounded-md border border-white/10 bg-white/[0.045] p-4 text-sm font-medium text-slate-200"
              >
                <div className="mb-3 text-cyan-300">
                  {index % 2 === 0 ? <TerminalSquare size={20} /> : <ServerCog size={20} />}
                </div>
                {item}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
