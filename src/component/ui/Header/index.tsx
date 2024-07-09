'use client'
import { Link } from '@/src/navigation'
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle
} from '@nextui-org/react'
import { useTranslations } from 'next-intl'
import { FC, useState } from 'react'
import { AcmeLogo } from './AcmeLogo'
import { LangSwitcher } from '../LangSwitcher'
import { ThemeSwitch } from '../ThemeSwitch'

interface Props {
  locale: string
}
const menuItems = [
  'Profile',
  'Dashboard',
  'Activity',
  'Analytics',
  'System',
  'Deployments',
  'My Settings',
  'Team Settings',
  'Help & Feedback',
  'Log Out'
]
export const Header: FC<Props> = ({ locale }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const t = useTranslations('')

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className='sm:hidden'
        />
        <NavbarBrand>
          <AcmeLogo />
          <p className='font-bold text-inherit'>ACME</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className='hidden gap-4 sm:flex' justify='center'>
        <NavbarItem>
          <Link color='foreground' lang={locale} href={`/about`}>
            Features
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link lang={locale} href={`/about`}>
            {t('About')}
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color='foreground' lang={locale} href={`/about`}>
            Integrations
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify='end'>
        <NavbarItem>
          <ThemeSwitch />
        </NavbarItem>
        <NavbarItem>
          <LangSwitcher />
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2
                  ? 'primary'
                  : index === menuItems.length - 1
                    ? 'danger'
                    : 'foreground'
              }
              className='w-full'
              lang={locale}
              href={`/about`}
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  )
}
