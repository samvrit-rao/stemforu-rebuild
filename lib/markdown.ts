import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const contentDirectory = path.join(process.cwd(), 'content')

export interface PostMeta {
  slug: string
  title: string
  date?: string
  excerpt: string
  image: string
  author?: string
}

export interface Post extends PostMeta {
  contentHtml: string
}

export function getAllPosts(collection: 'blogs' | 'news'): PostMeta[] {
  const dir = path.join(contentDirectory, collection)
  if (!fs.existsSync(dir)) return []

  const filenames = fs.readdirSync(dir).filter((f) => f.endsWith('.md'))

  const posts = filenames.map((filename) => {
    const slug = filename.replace(/\.md$/, '')
    const filePath = path.join(dir, filename)
    const fileContents = fs.readFileSync(filePath, 'utf8')
    const { data } = matter(fileContents)

    return {
      slug,
      title: data.title,
      date: data.date || undefined,
      excerpt: data.excerpt,
      image: data.image,
      author: data.author || undefined,
    }
  })

  // Sort by date descending (newest first)
  return posts.sort((a, b) => {
    if (!a.date) return 1
    if (!b.date) return -1
    return new Date(b.date).getTime() - new Date(a.date).getTime()
  })
}

export async function getPostBySlug(
  collection: 'blogs' | 'news',
  slug: string
): Promise<Post | null> {
  const filePath = path.join(contentDirectory, collection, `${slug}.md`)
  if (!fs.existsSync(filePath)) return null

  const fileContents = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(fileContents)

  const processedContent = await remark().use(html).process(content)
  const contentHtml = processedContent.toString()

  return {
    slug,
    title: data.title,
    date: data.date || undefined,
    excerpt: data.excerpt,
    image: data.image,
    author: data.author || undefined,
    contentHtml,
  }
}

export function getAllSlugs(collection: 'blogs' | 'news'): string[] {
  const dir = path.join(contentDirectory, collection)
  if (!fs.existsSync(dir)) return []

  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith('.md'))
    .map((f) => f.replace(/\.md$/, ''))
}
