import rss from "@astrojs/rss"
import { getCollection } from "astro:content"
import { SITE } from "@consts"

type Context = {
  site: string
}

export async function GET(context: Context) {
  const posts = await getCollection("blog")
  const projects = await getCollection("projects")

  const items = [...posts, ...projects]

  // Cambié "date" a "fecha" para los nuevos nombres de campos.
  items.sort((a, b) => new Date(b.data.fecha).getTime() - new Date(a.data.fecha).getTime())

  return rss({
    title: SITE.TITLE,
    description: SITE.DESCRIPTION,
    site: context.site,
    items: items.map((item) => ({
      // Cambié "title" a "titulo", "summary" a "resumen", y "date" a "fecha".
      title: item.data.titulo,
      description: item.data.resumen,
      pubDate: item.data.fecha,
      link: item.slug.startsWith("blog")
        ? `/blog/${item.slug}/`
        : `/projects/${item.slug}/`,
    })),
  })
}
