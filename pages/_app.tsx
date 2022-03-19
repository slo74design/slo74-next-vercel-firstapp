import { NextPage } from 'next'
import App, { AppProps } from 'next/app'
import { ReactElement, ReactNode } from 'react'
import '../styles/globals.css'

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {

  // se define esa nueva const getLayout para los Layouts anidados
  // Use the layout defined at the page level, if available
  // https://nextjs.org/docs/basic-features/layouts
  const getLayout = Component.getLayout || ((page) => page)

  // return <Component {...pageProps} />
  return getLayout(<Component {...pageProps} />)
}

export default MyApp
