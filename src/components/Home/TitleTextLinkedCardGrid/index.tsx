import type { ReactElement } from 'react'
import { Container, Grid, Typography } from '@mui/material'

import ArrowIcon from '@/public/images/arrow-out-icon.svg'
import css from './styles.module.css'
import clsx from 'clsx'
import layoutCss from '@/components/common/styles.module.css'
import type { BaseBlock } from '@/components/Home/types'

const TitleTextLinkedCardGrid = ({ title, text, caption, items }: BaseBlock): ReactElement => {
  return (
    <Container>
      <div className={layoutCss.container}>
        <Typography variant="caption" component="div" mb={{ xs: 2, md: 3 }}>
          {caption}
        </Typography>
        <Grid container mb={{ xs: 8, md: '180px' }} columnSpacing={{ xs: '30px', xl: '50px' }}>
          <Grid item md={6}>
            <Typography variant="h2" mb={{ xs: 4, md: 0 }}>
              {title}
            </Typography>
          </Grid>
          <Grid item md={1} display={{ xs: 'none', md: 'block' }} />
          <Grid item md={5} mt={{ xs: 0, md: 1 }}>
            <Typography>{text}</Typography>
          </Grid>
        </Grid>

        <Grid container spacing={{ xs: '30px', xl: '50px' }}>
          {items &&
            items.map((item, index) => {
              const isLastItem = index === items.length - 1

              return (
                <Grid key={index} item xs={12} md={4}>
                  <div className={clsx(css.card, isLastItem && css.gradient)}>
                    <a href={item.link?.href} target="_blank" rel="noreferrer" className={css.cardLink}>
                      <Typography variant="caption" component="div" pb="77px" color={isLastItem ? 'secondary' : ''}>
                        {item.caption}
                      </Typography>
                      <Typography variant="h3" color="text.primary">
                        {item.title}
                      </Typography>
                      <ArrowIcon className={css.icon} />
                    </a>
                  </div>
                </Grid>
              )
            })}
        </Grid>
      </div>
    </Container>
  )
}

export default TitleTextLinkedCardGrid
