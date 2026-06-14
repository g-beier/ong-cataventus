# Convenções

## TypeScript

- TypeScript obrigatório em todo código `.ts` e frontmatter `.astro`
- Sem `any` — usar tipos explícitos ou inferência
- Sem `satisfies` com tipo anônimo inline quando há tipo nomeado disponível

## Componentes

- PascalCase para nomes de arquivo e componente
- Preferir Astro sobre React — zero JS no cliente por padrão
- Evitar lógica no template: extrair para variáveis no frontmatter

## Dados de navegação e configuração

- **Nunca** definir listas de links de menu, colunas de rodapé ou dados do site inline nos componentes
- Toda navegação e metadados do site vivem em `src/config/nav.ts`
- Para adicionar/renomear item de menu: editar apenas `src/config/nav.ts`
- Links externos: sempre incluir `rel="noopener noreferrer"` **e** `target="_blank"`

## Links externos

```ts
// correto
{ label: "Instagram", href: "https://...", rel: "noopener noreferrer", target: "_blank" }

// errado — falta target
{ label: "Instagram", href: "https://...", rel: "noopener noreferrer" }
```

## CSS

- Tailwind utility classes — sem CSS custom salvo em `global.css` para tokens globais
- Usar tokens de cor da marca (`brand-orange`, `ink`, `ash`, `canvas`, etc.) — não hardcodar hex
- Sem dark mode
