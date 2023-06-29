import { Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material'
import { Container } from '@mui/system'
import clsx from 'clsx'
import type { ReactElement } from 'react'

import ArrowIcon from '@/public/images/arrow-out-icon.svg';
import G3Img from '@/public/images/g3.png';
import G2Img from '@/public/images/g2.png';

import layoutCss from '@/components/common/styles.module.css'
import css from './styles.module.css'

export const Values = ({
  title,
  items,
}: {
  title: string
  items: { title: string; text: string; items: string[]; img: string }[]
}): ReactElement => {
  return (
    <Container>
      <Grid container className={clsx(layoutCss.containerShort, css.container)}>
        <Typography variant="h2" className={css.title}>
          {title}
        </Typography>
        <Typography variant="h5" className={css.title}>
          {`All-in-one solution`}
        </Typography>
        <div className={css.tree}>
          <hr className={css.rule} />
        </div>
        <Grid container item xs={12} gap={{ sm: '0px', xs: '0px', md: "0px" }}>
          <Grid container item xs={6} className={css.card}>
            <Typography className={css.value}>INFRASTRUCTURE</Typography>
          </Grid>
          <Grid container item xs={6} className={css.card}>
            <Typography className={css.value}>DEV TOOLS</Typography>
          </Grid>
          {items.map(({ title, text, items, img }, index, arr) => (
            <>

              <Grid key={index} item  xs={3}  >
                <List className={css.list}>
                  {items.map((text, index) => (
                    <ListItem key={index}>
                      <ListItemIcon>
                        <ArrowIcon className={css.icon} />
                      </ListItemIcon>
                      <ListItemText primary={text} />
                    </ListItem>


                  ))}
                </List>
              </Grid>
              <Grid item  xs={3}  >
                <img src={img} className={css.imgicon} alt="back" />
              </Grid>
            </>
          ))}

        </Grid>
      </Grid>
    </Container >
  )
}

export default Values
