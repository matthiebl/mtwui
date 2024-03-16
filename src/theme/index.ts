import button, { ButtonTheme } from './components/button'

export interface Theme {
  button: ButtonTheme
}

const theme = {
  button,
}

export * from './components/button'
export default theme
