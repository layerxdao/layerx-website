import { Button, Container, Grid, Typography } from '@mui/material'
import { WALLET_LINK } from '@/config/constants'
import css from '@/components/Home/Intro/styles.module.css'
import type { BaseBlock } from '@/components/Home/types'
import Link from 'next/link'
import { AppRoutes } from '@/config/routes'
import LinkButton from '@/components/common/LinkButton'

const Intro = ({ title, text }: BaseBlock) => {
  return (
    <div className={css.container}>
      <div className={css.wrapper}>
        <Container>
          <Grid container flexDirection="column" className={css.content}>
            <Grid item md={7}>
              <Typography className={css.title} variant="h1">
                {title}
              </Typography>
            </Grid>
            <Grid item md={6}>
              <Typography className={css.subtitle}>{text}</Typography>
              <div className={css.buttons}>

                <Link href="http://dev.layerx.build" passHref target="_blank" rel="noreferrer">
                  <LinkButton>START BUILDING</LinkButton>
                </Link>
                <Button href="https://bridge.layerx.build/" variant="contained" size="large" target="_blank" rel="noreferrer">
                  BRIDGE ASSETS
                </Button>


              </div>
            </Grid>
          </Grid>
        </Container>
        <div className={css.filter}>
          <img src="/images/gr2.png" height="300px" width="auto" className={css.video} alt="back" />
          {/* <video autoPlay muted loop className={css.video}>
            <source src="/videos/safe-logo.mp4" type="video/mp4" />
          </video> */}
          <div className={css.frame} />
        </div>

        <Typography variant="caption" className={css.scroll}>
          Scroll
        </Typography>
      </div>
    </div>
  )
}

export default Intro
