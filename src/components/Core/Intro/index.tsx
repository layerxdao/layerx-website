import { Button, Container, Divider, Grid, Typography } from '@mui/material'
import css from './styles.module.css'
import type { BaseBlock } from '@/components/Home/types'

const CoreIntro = ({ title, text, link }: BaseBlock) => {
  return (
    <Container>
      <Grid
        container
        className={css.tinyContainer}
        spacing={{ xs: 6, md: '30px', xl: '50px' }}
        justifyContent="space-between"
        alignItems="center"
      >

        <Grid item md={6}>
          <Typography className={css.title} variant="h3" mb={4}>
            {title}
          </Typography>
          <Typography variant="h4" component="div" mb={5}>
            {text}
          </Typography>
          {link && (
            <Button key={link.href} href={link.href} target="_blank" rel="noreferrer" variant="contained" size="large">
              {link.title}
            </Button>
          )}
        </Grid>
        <Grid item md={6} display="flex"  justifyContent="center">
          <img src="/images/deposit.png" className={css.video} alt="hero-img" />
          {/* <video autoPlay muted loop className={css.video}>
            <source src="/videos/intro-chip.webm" type="video/webm" />
            <source src="/videos/intro-chip.hevc.mp4" type="video/mp4" />
            <source src="/videos/intro-chip.mp4" type="video/mp4" />
            <img src="/images/intro-chip.png" alt="Core Chip" />
          </video> */}
        </Grid>
      </Grid>
    </Container>
  )
}

export default CoreIntro
