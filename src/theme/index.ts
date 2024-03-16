import { DeepPartial } from 'tsdef'
import button, { ButtonTheme } from './components/button'

export interface Theme {
  button: ButtonTheme
}
export type ConfigurableTheme = DeepPartial<Theme>

const theme: Theme = {
  button,
}

export * from './components/button'
export default theme
