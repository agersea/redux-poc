import {createTheme, Theme, ThemeOptions} from '@mui/material/styles'

const l: ThemeOptions = {
  palette: {
    mode: 'light',
    primary: {
      main: '#234454',
    },
    secondary: {
      main: '#c72391',
    },
  },
  typography: {
    fontFamily: 'Lato, san-serif, roboto',
  },
}
export const Light: Theme = createTheme(l)

