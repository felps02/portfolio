'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { navItems, profile } from '@/data/portfolio';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl"
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#inicio" className="group flex items-center gap-3" aria-label="Ir para o inicio">
          <span className="grid h-9 w-9 place-items-center rounded-md border border-cyan-300/30 bg-cyan-300/10 text-sm font-bold text-cyan-200 shadow-glow">
            FR
          </span>
          <span className="hidden text-sm font-semibold text-white sm:block">Felipe Ribeiro</span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-slate-300 transition hover:bg-white/10 hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-2 lg:flex">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="icon-button"
            aria-label="Abrir GitHub"
            title="GitHub"
          >
            <Github size={18} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="icon-button"
            aria-label="Abrir LinkedIn"
            title="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
        </div>

        <button
          type="button"
          className="icon-button lg:hidden"
          aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
          onClick={() => setIsOpen((value) => !value)}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {isOpen ? (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="border-t border-white/10 bg-slate-950/95 px-4 py-4 lg:hidden"
        >
          <div className="mx-auto grid max-w-7xl gap-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="rounded-md px-3 py-3 text-sm font-medium text-slate-200 transition hover:bg-white/10"
              >
                {item.label}
              </a>
            ))}
          </div>
        </motion.div>
      ) : null}
    </motion.header>
  );
}
