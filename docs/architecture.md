# Arquitetura

## Stack

- Astro
- TypeScript
- Tailwind CSS
- Astro Content Collections

## Hospedagem

- GitHub
- Azure

## Estrutura

```
src/
  config/       # dados de configuração centralizados (nav, siteInfo)
  content/      # Astro Content Collections (projetos, noticias)
  components/   # componentes Astro reutilizáveis
  layouts/      # layouts base (BaseLayout, PageLayout, BlogLayout)
  pages/        # rotas (arquivos .astro e slugs dinâmicos)
  styles/       # global.css com tokens Tailwind
```
