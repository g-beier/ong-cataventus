import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const projetos = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projetos" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    objective: z.string(),
    targetAudience: z.array(z.string()),
    cover: z.string().optional(),
    status: z.enum(["Ativo", "Inativo", "Concluído"]),
    featured: z.boolean().default(false),
  }),
});

const noticias = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/noticias" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    cover: z.string().optional(),
    projeto: z.string().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    fotos: z
      .array(
        z.object({
          src: z.string(),
          alt: z.string(),
          legenda: z.string().optional(),
        })
      )
      .default([]),
  }),
});

export const collections = { projetos, noticias };
