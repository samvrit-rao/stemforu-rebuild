'use client'

import { useEffect } from 'react'
import Script from 'next/script'

export default function AdminPage() {
  useEffect(() => {
    // Hide the site header/footer so the CMS has full control
    const header = document.querySelector('header')
    const footer = document.querySelector('footer')
    if (header) header.style.display = 'none'
    if (footer) footer.style.display = 'none'

    return () => {
      if (header) header.style.display = ''
      if (footer) footer.style.display = ''
    }
  }, [])

  return (
    <>
      <Script src="https://unpkg.com/decap-cms@^3.0.0/dist/decap-cms.js" />
    </>
  )
}
