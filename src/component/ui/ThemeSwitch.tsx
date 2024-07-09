'use client'
import { useTheme } from 'next-themes'
import { Switch } from '@nextui-org/react'
import { FiSun, FiMoon } from 'react-icons/fi'
import { useEffect, useState } from 'react'

export function ThemeSwitch() {
  const { setTheme, theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <Switch
      defaultSelected={theme === 'dark'}
      size='sm'
      color='secondary'
      onChange={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      startContent={<FiSun />}
      endContent={<FiMoon />}
    />
  )
}
