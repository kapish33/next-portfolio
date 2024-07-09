'use client'
import Link from 'next/link'
import { usePathname, useSelectedLayoutSegments } from 'next/navigation'
import React from 'react'
import Button from '../../app/[locale]/components/Button'

export const LangSwitcher: React.FC = () => {
  const pathname = usePathname()
  const urlSegments = useSelectedLayoutSegments()

  const currentLang = pathname.startsWith('/en') ? 'en' : 'hi'
  const toggleLang = currentLang === 'en' ? 'hi' : 'en'

  return (
    <Link href={`/${toggleLang}/${urlSegments.join('/')}`}>
      <Button className='text-destructive  w-10 text-center' size='small'>
        {toggleLang === 'en' ? 'En' : 'हिंदी'}
      </Button>
    </Link>
  )
}