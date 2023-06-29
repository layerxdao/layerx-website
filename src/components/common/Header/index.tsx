import { useState } from 'react'
import { Badge, Button, ButtonBase } from '@mui/material'
import Link from 'next/link'

import { AppRoutes } from '@/config/routes'
import logo from '@/public/images/logo.png'
import Image from 'next/image'
import { WALLET_LINK } from '@/config/constants'
import { useOpenPositions } from '@/hooks/useOpenPositions'
import css from './styles.module.css'
import clsx from 'clsx'
import { useRouter } from 'next/router' 

const navItems = [
  {
    label: 'Home',
    href: AppRoutes.index,
  },
  {
    label: 'Bridge',
    href: AppRoutes.core,
  },
  {
    label: 'Wallet',
    href: AppRoutes.wallet,
  },
  {
    label: 'Ecosystem',
    href: AppRoutes.ecosystem,
  }
]

const Header = () => {
  const { asPath } = useRouter()
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const { data: positions = [] } = useOpenPositions()

  const toggleNavigation = () => {
    setIsOpen((prev) => !prev)
    document.body.classList.toggle('navOpen')
  }

  const closeNavigation = () => {
    setIsOpen(false)
    document.body.classList.remove('navOpen')
  }

  return (
    <div className={clsx(css.header, isOpen && css.visible)}>
      <div className={css.logo}>
        <Link href={AppRoutes.index}>
          <Image className='logo-img'  src={logo} alt="logo"  />
        </Link>
      </div>
      <ButtonBase className={css.burger} onClick={toggleNavigation} aria-label="Toggle navigation" disableRipple>
        <span />
      </ButtonBase>
      <nav>
        <ul className={css.navigation}>
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                className={clsx(css.link, item.href === asPath && css.active)}
                href={item.href}
                onClick={closeNavigation}
              >
                <Badge
                  color="primary"
                  className={css.badge}
                  slotProps={{
                    badge: {
                      // @ts-expect-error - disable badge in search results
                      'data-nosnippet': true,
                    },
                  }}
                >
                  {item.label}
                </Badge>
              </Link>
            </li>
          ))}
          <li>
            <Button
              className={css.button}
              href="#sec"
              // target="_blank"
              // rel="noopener noreferrer"
              variant="contained" 
              size="large"
            >
              Connect Wallet
            </Button>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Header
