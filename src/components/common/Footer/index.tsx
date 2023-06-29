import { ButtonBase, Container, Divider, Grid, Typography } from '@mui/material'
import type { SyntheticEvent } from 'react'

import { AppRoutes } from '@/config/routes'
import DiscordIcon from '@/public/images/discord-icon.svg'
import TwitterIcon from '@/public/images/twitter-icon.svg'
import MirrorIcon from '@/public/images/mirror-icon.svg'
import GithubIcon from '@/public/images/github-icon.svg'
import InstaIcon from '@/public/images/instagram.svg'

import css from './styles.module.css'
import Link from 'next/link'
import {
  DOCS_LINK,
  HELP_LINK,
  PRESS_LINK,
  CORE_LINK,
  FORUM_LINK,
  CHAT_LINK,
  GUARDIANS_LINK,
  BRAND_KIT,
  LICENSES_LINK,
  DEV_LINK,
  ZELAY_LINK,
  COMMU_LINK,
  STARTB_LINK,
  RPCNODE_LINK,
  TV_LINK,
  NETWORK_LINK,
  WALLET_ADDRESS_LINK
} from '@/config/constants'
import { useCookieBannerContext } from '../CookieBanner/CookieBannerContext'
import logo from '@/public/images/logo.png'
import Image from 'next/image'

const COOKIE_PREFERENCES = '#cookies'

const safeProtocolItems = [
  {
    label: 'LayerX Dao',
    href: CORE_LINK,
    target: '_blank',
    rel: 'noreferrer',
  },
  
  {
    label: 'LayerX Community',
    href: COMMU_LINK,
    target: '_blank',
    rel: 'noreferrer',
  },
  {
    label: 'Start Building',
    href: STARTB_LINK,
    target: '_blank',
    rel: 'noreferrer',
  },
  {
    label: 'RPC Nodes',
    href: RPCNODE_LINK,
    target: '_blank',
    rel: 'noreferrer',
  },
  {
    label: 'LayerX TV',
    href: TV_LINK,
    target: '_blank',
    rel: 'noreferrer',
  },
]

const communityItems = [
  {
    label: 'Guild',
    href: FORUM_LINK,
    target: '_blank',
    rel: 'noreferrer',
  },
  {
    label: 'Taskon',
    href: CHAT_LINK,
    target: '_blank',
    rel: 'noreferrer',
  },
  {
    label: 'Galxe',
    href: GUARDIANS_LINK,
    target: '_blank',
    rel: 'noreferrer',
  },
  {
    label: 'Zealy',
    href: ZELAY_LINK,
    target: '_blank',
    rel: 'noreferrer',
  },
]

const resourcesItems = [
  {
    label: 'News Channel', 
    href: BRAND_KIT,
    target: '_blank',
    rel: 'noreferrer',
  },
  {
    label: 'Devlopers',
    href: DEV_LINK,
    target: '_blank',
    rel: 'noreferrer',
  },
  {
    label: 'Docs',
    href: DOCS_LINK,
    target: '_blank',
    rel: 'noreferrer',
  },
  {
    label: 'Network Status',
    href: NETWORK_LINK,
    target: '_blank',
    rel: 'noreferrer',
  },
  {
    label: 'Wallet Address',
    href: WALLET_ADDRESS_LINK,
    target: '_blank',
    rel: 'noreferrer',
  },
]



const Footer = () => {
  const { openBanner } = useCookieBannerContext()

  const showBanner = (e: SyntheticEvent) => {
    // Prevent opening the hash link
    e.preventDefault()
    openBanner()
  }

  return (
    <Container>
      <Grid container flexDirection={{ xs: 'column', sm: 'row' }}>
        <Grid item xs={12} md={3} mb={{ xs: 4, md: 0 }}>
          <Link href={AppRoutes.index}>
            <Image className='logo-img-footer' src={logo} alt="logo" />
          </Link>
        </Grid>

        <Grid item sm={6} md={2}>
          <Typography variant="caption" color="text.primary">
            LayerX Core Protocol
          </Typography>
          <ul className={css.list}>
            {safeProtocolItems.map((item) => (
              <li className={css.listItem} key={item.href}>
                <Link href={item.href} target="_blank" rel="noreferrer">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </Grid>

        <Grid item sm={6} md={2}>
          <Typography variant="caption" color="text.primary">
            Community
          </Typography>
          <ul className={css.list}>
            {communityItems.map((item) => (
              <li className={css.listItem} key={item.href}>
                <Link href={item.href} target={item.target} rel={item.rel}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </Grid>

        <Grid item sm={6} md={2}>
          <Typography variant="caption" color="text.primary">
            Resources
          </Typography>
          <ul className={css.list}>
            {resourcesItems.map((item) => (
              <li className={css.listItem} key={item.href}>
                <Link href={item.href} target={item.target} rel={item.rel}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </Grid>

        <Grid item xs={12} md={3} mt={{ xs: 6, md: 0 }}>
          <div className={css.socials}>
            <ButtonBase
              disableRipple
              aria-label="Twitter link"
              href="https://twitter.com/layerx_build"
              target="_blank"
              rel="noreferrer"
            >
              <TwitterIcon />
            </ButtonBase>

            <ButtonBase
              disableRipple
              aria-label="Discord link"
              href="https://chat.safe.global"
              target="_blank"
              rel="noreferrer"
            >
              <DiscordIcon />
            </ButtonBase>
            <ButtonBase
              disableRipple
              aria-label="Mirror link"
              href="https://mirror.xyz/layerxdao.eth"
              target="_blank"
              rel="noreferrer"
            >
              <MirrorIcon />
            </ButtonBase>
            <ButtonBase
              disableRipple
              aria-label="Github link"
              href="https://github.com/layerxone"
              target="_blank"
              rel="noreferrer"
            >
              <GithubIcon />
            </ButtonBase>
            <ButtonBase
              disableRipple
              aria-label="Github link"
              href="https://www.instagram.com/lay.erx/"
              target="_blank"
              rel="noreferrer"
            >
              <InstaIcon />
            </ButtonBase>
          </div>
        </Grid>
      </Grid>

      <Divider sx={{ mt: 5, mb: { xs: 3, md: 0 } }} />

      <Grid container alignItems="center" justifyContent="center">
        <Grid item my={2}>
          <Typography color="primary.light" fontSize="16px">
            ©{new Date().getFullYear()} LayerX
          </Typography>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Footer
