'use client';

import { motion } from 'framer-motion';
import { Code2, GitBranch, Workflow } from 'lucide-react';
import { SectionHeader } from './SectionHeader';

const strengths = [
  {
    icon: Code2,
    title: 'Desenvolvimento full stack',
    text: 'Criacao e manutencao de interfaces, APIs, regras de negocio e integracoes.'
  },
  {
    icon: Workflow,
    title: 'Automacao e entrega',
    text: 'Apoio em pipelines, releases, deploys e processos que tornam a entrega mais previsivel.'
  },
  {
    icon: GitBranch,
    title: 'Sistemas corporativos',
    text: 'Experiencia com sustentacao, versionamento, consultas SQL e suporte tecnico.'
  }
];

export function About() {
  return (
    <section id="sobre" className="section-padding">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Sobre mim"
          title="Desenvolvimento com visao de produto, suporte e operacao"
          description="Atuo conectando codigo, infraestrutura de entrega e necessidades reais de negocio."
        />

        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
            className="rounded-lg border border-white/10 bg-white/[0.035] p-6 md:p-8"
          >
            <p className="text-lg leading-8 text-slate-200">
              Sou Desenvolvedor Full Stack e DevOps, atuando na Softin Sistemas como
              Cooperado. Tenho experiencia em desenvolvimento e manutencao de aplicacoes
              corporativas, integracao entre sistemas, criacao e consumo de APIs REST,
              automacao de processos, versionamento com Git/GitHub, pipelines CI/CD com
              Azure DevOps, deploy e sustentacao de aplicacoes.
            </p>
            <p className="mt-5 text-base leading-8 text-slate-300">
              Minha base tecnica passa por C#, .NET, Node.js, Express.js, Next.js, UmiJS,
              JavaScript, TypeScript, SQL, Python, Flutter, C, C++, Git, GitHub, Azure
              DevOps, Active Directory e manutencao de computadores.
            </p>
          </motion.div>

          <div className="grid gap-4">
            {strengths.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  className="group rounded-lg border border-white/10 bg-white/[0.03] p-5 transition hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-white/[0.055]"
                >
                  <div className="flex gap-4">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-md bg-cyan-300/10 text-cyan-200">
                      <Icon size={21} />
                    </span>
                    <div>
                      <h3 className="font-semibold text-white">{item.title}</h3>
                      <p className="mt-2 leading-7 text-slate-300">{item.text}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
