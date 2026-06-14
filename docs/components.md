# Componentes

## Configuração centralizada

Dados de navegação vivem em **`src/config/nav.ts`** — nunca inline nos componentes.

| Export | Tipo | Uso |
|---|---|---|
| `navLinks` | `NavLink[]` | itens do menu principal |
| `socialLinks` | `FooterLink[]` | redes sociais (inclui `target` e `rel`) |
| `footerColumns` | `{ title, links: FooterLink[] }[]` | colunas do rodapé |
| `siteInfo` | objeto | nome, CNPJ, tagline |

Tipos exportados: `NavLink`, `FooterLink` (em `src/config/nav.ts`).

Links externos **obrigatoriamente** devem ter `rel="noopener noreferrer"` e `target="_blank"`.

---

## Header

Sticky no topo. Contém logo + `<Navigation>` (desktop) + menu hamburguer (mobile).  
O menu mobile duplica `navLinks` via import — **não** redefine a lista.

## Navigation

Menu desktop. Consome `navLinks` de `src/config/nav.ts`.  
Marca item ativo com `aria-current="page"` e classe `text-brand-orange`.

## Footer

Grade 4 colunas: logo/tagline + colunas de `footerColumns`.  
Usa `siteInfo.tagline`, `siteInfo.name`, `siteInfo.cnpj`.

## Hero

Título, subtítulo e CTA principal da home.

## HeroStats

Números de impacto exibidos abaixo do Hero.

## Stats

Estatísticas gerais da ONG (variante de uso interno de página).

## HelpCTA

Bloco de chamada para ação de apoio/doação.

## DoacaoModal

Modal de doação. Ativado por botão no HelpCTA.

## Carrossel

Carrossel de imagens/conteúdo.

## TimeLinha

Linha do tempo histórica da ONG.

## Catavento

Componente SVG/decorativo do catavento animado.

## Logo

SVG da marca. Props: `horizontal` (boolean), `class`.

## projetos/ProjetoCard

Card de projeto: imagem, título, resumo.

## projetos/ProjetoDetails

Detalhes completos de um projeto (usado em `/projetos/[slug]`).

## projetos/ProjetosGrid

Grade de `ProjetoCard`s.
