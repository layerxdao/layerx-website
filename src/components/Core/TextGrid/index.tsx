import { Chip, Container, Grid, Typography } from '@mui/material'
import layoutCss from '@/components/common/styles.module.css'
import LinkButton from '@/components/common/LinkButton'
import ItemGrid from '@/components/common/ItemGrid'
import type { BaseBlock } from '@/components/Home/types'
import css from './styles.module.css'
import Link from 'next/link'

const TextGrid = ({
  image,
  caption,
  title,
  text,
  link,
  grid,
}: BaseBlock & {
  grid: BaseBlock
}) => {
  return (
    <Container>
      <Grid container className={layoutCss.containerMedium}>
        <Grid container className={`${image ? css.wrapper : ''}`} justifyContent="space-between">
          <Grid
            item
            md={!image ? 8 : 6}
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="flex-start"
            gap={{ xs: 3, md: 4 }}
          >
            <Chip
              label={
                <Typography variant="caption" color="primary.main">
                  {caption}
                </Typography>
              }
              className={css.chip}
              variant="outlined"
            />
            <Typography variant="h2">{title}</Typography>
            {text && <Typography>{text}</Typography>}
            {link && (
              <Link href={link.href} target="_blank" rel="noreferrer" passHref>
                <LinkButton>{link.title}</LinkButton>
              </Link>
            )}
          </Grid>
          {image ? (
            <Grid item md={6}>
              <img src={image.src} alt={image.alt} className={css.image} />
            </Grid>
          ) : null}
        </Grid>
        <ItemGrid {...grid} />
      </Grid>
    </Container>
  )
}

export default TextGrid
