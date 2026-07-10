import { profile } from '@/data/portfolio';

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
        <p>
          © {new Date().getFullYear()} {profile.name}. Todos os direitos reservados.
        </p>
        <p>Desenvolvido com Next.js, TypeScript, Tailwind CSS e Framer Motion.</p>
      </div>
    </footer>
  );
}
