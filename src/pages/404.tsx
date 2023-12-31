import Head from 'next/head'
import type { NextPage } from 'next'
import NextLink from 'next/link'
import { AppRoutes } from '@/config/routes'
import { Box, Link } from '@mui/material'

const My404Page: NextPage = () => (
  <>
    <Head>
      <title>LayerX – Page not found</title>
    </Head>

    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" height="55vh">
      <h1>Page not found</h1>

      <p>
        <NextLink href={AppRoutes.index}>
          <Link>Go home</Link>
        </NextLink>
      </p>
    </Box>
  </>
)

export default My404Page
