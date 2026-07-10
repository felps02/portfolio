# Portfolio Felipe Ribeiro

Portfolio profissional desenvolvido com Next.js, TypeScript, Tailwind CSS, Framer Motion e Lucide React. O projeto usa exportacao estatica, sem backend e sem banco de dados, pronto para publicacao no GitHub Pages.

## Tecnologias

- Next.js
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React

## Como rodar localmente

```bash
npm install
npm run dev
```

Acesse `http://localhost:3000`.

## Build estatico

```bash
npm run build
```

O Next.js gera a pasta `out/` porque `next.config.js` esta configurado com `output: 'export'`.

## Publicacao no GitHub Pages com GitHub Actions

O repositorio ja inclui o workflow `.github/workflows/deploy-github-pages.yml`.
Ele publica automaticamente quando houver push na branch `main`.

No GitHub, confira em `Settings > Pages` se a origem esta configurada como `GitHub Actions`.

Para testar localmente o mesmo caminho usado em `https://felps02.github.io/portfolio`, rode:

```powershell
$env:NEXT_PUBLIC_BASE_PATH="/portfolio"
npm run build
```

O Next.js gera a pasta `out/` e o workflow publica esse conteudo.

Se o site for publicado em `https://felps02.github.io`, use o build sem `NEXT_PUBLIC_BASE_PATH`.

## Curriculo

O botao "Baixar curriculo" aponta para `public/curriculo-felipe-ribeiro.pdf`. Adicione o arquivo com esse nome antes de publicar, ou altere o caminho em `data/portfolio.ts`.

## Estrutura

```text
app/
  globals.css
  layout.tsx
  page.tsx
components/
  About.tsx
  Contact.tsx
  Education.tsx
  Experience.tsx
  Footer.tsx
  Hero.tsx
  Navbar.tsx
  Projects.tsx
  SectionHeader.tsx
  Skills.tsx
data/
  portfolio.ts
```

## Manutencao

As informacoes pessoais, experiencias, tecnologias, projetos e formacao ficam em `data/portfolio.ts`, facilitando atualizacoes futuras.
