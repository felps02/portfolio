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

## Publicacao no GitHub Pages

Para publicar como Project Page, por exemplo em `https://felps02.github.io/portfolio`, rode o build com o base path do repositorio:

```powershell
$env:NEXT_PUBLIC_BASE_PATH="/portfolio"
npm run build
```

Depois publique o conteudo da pasta `out/` no GitHub Pages.

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
