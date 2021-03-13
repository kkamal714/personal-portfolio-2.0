import { createMuiTheme, responsiveFontSizes } from '@material-ui/core'

let Theme = createMuiTheme({
  palette: {
    primary: {
      main: '#15B7E8',
      light: '#F6F4F2',
      dark: '#7968EE',
    },
    secondary: {
      main: '#000859',
      light: '#808080',
      dark: '#676767',
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 320,
      md: 750,
      lg: 1025,
      xl: 1920,
    },
  },
  typography: {
    fontFamily: '',
  },
})
Theme = responsiveFontSizes(Theme)

export default Theme
