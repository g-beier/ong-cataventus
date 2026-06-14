export type NavLink = { href: string; label: string }

export type FooterLink = {
  label: string
  href: string
  rel?: string
  target?: string
}

export const navLinks: NavLink[] = [
  { href: "/quem-somos", label: "Quem Somos" },
  { href: "/projetos",   label: "Projetos" },
  { href: "/noticias",   label: "Notícias" },
  { href: "/contato",    label: "Contato" },
]

export const socialLinks: FooterLink[] = [
  {
    label: "Instagram",
    href: "https://instagram.com/cataventusgrupo",
    rel: "noopener noreferrer",
    target: "_blank",
  },
]

export const footerColumns: { title: string; links: FooterLink[] }[] = [
  {
    title: "Organização",
    links: [
      { label: "Quem Somos",     href: "/quem-somos" },
      { label: "Nossa História", href: "/quem-somos#historia" },
      { label: "Parceiros",      href: "/quem-somos#parceiros" },
    ],
  },
  {
    title: "Projetos",
    links: [
      { label: "Todos os Projetos", href: "/projetos" },
      { label: "Notícias",          href: "/noticias" },
    ],
  },
  {
    title: "Contato",
    links: [
      { label: "Fale Conosco", href: "/contato" },
      ...socialLinks,
    ],
  },
]

export const siteInfo = {
  name: "Cataventus",
  cnpj: "06.111.224/0001-57",
  tagline: "Transformando vidas através da cultura e da arte.",
}
