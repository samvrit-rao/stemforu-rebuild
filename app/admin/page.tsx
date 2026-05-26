'use client'

import { useEffect } from 'react'

export default function AdminPage() {
  useEffect(() => {
    // Hide the site header/footer so the CMS has full control
    const header = document.querySelector('header')
    const footer = document.querySelector('footer')
    if (header) header.style.display = 'none'
    if (footer) footer.style.display = 'none'

    // Set config before loading the CMS script
    ;(window as any).CMS_MANUAL_INIT = true

    const script = document.createElement('script')
    script.src = 'https://unpkg.com/decap-cms@^3.0.0/dist/decap-cms.js'
    script.onload = () => {
      const CMS = (window as any).CMS
      CMS.init({
        config: {
          backend: {
            name: 'github',
            repo: 'samvrit-rao/stemforu-rebuild',
            branch: 'main',
            base_url: 'https://www.stemforu.org',
            auth_endpoint: '/api/auth',
          },
          media_folder: 'public/images/uploads',
          public_folder: '/images/uploads',
          collections: [
            {
              name: 'blogs',
              label: 'Blog Posts',
              folder: 'content/blogs',
              create: true,
              slug: '{{slug}}',
              fields: [
                { label: 'Title', name: 'title', widget: 'string' },
                { label: 'Publish Date', name: 'date', widget: 'datetime', format: 'YYYY-MM-DD' },
                { label: 'Excerpt', name: 'excerpt', widget: 'text' },
                { label: 'Featured Image', name: 'image', widget: 'image' },
                { label: 'Author', name: 'author', widget: 'string', default: 'STEMForU Team' },
                { label: 'Body', name: 'body', widget: 'markdown' },
              ],
            },
            {
              name: 'news',
              label: 'News Articles',
              folder: 'content/news',
              create: true,
              slug: '{{slug}}',
              fields: [
                { label: 'Title', name: 'title', widget: 'string' },
                { label: 'Excerpt', name: 'excerpt', widget: 'text' },
                { label: 'Featured Image', name: 'image', widget: 'image' },
                { label: 'Author', name: 'author', widget: 'string', default: 'STEMForU Team' },
                { label: 'Body', name: 'body', widget: 'markdown' },
              ],
            },
          ],
        },
      })
    }
    document.body.appendChild(script)

    return () => {
      if (header) header.style.display = ''
      if (footer) footer.style.display = ''
    }
  }, [])

  return <div id="nc-root" />
}
