import '../styles/globals.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


import { Provider } from 'react-redux'
import type { AppProps } from 'next/app'
import { ThemeProvider } from '@mui/system'

import store from '../store'
import { Light } from '../theme'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={Light}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </ThemeProvider>
  )
}
