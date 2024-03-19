import { DeepPartial } from '../types/base'
import button, { ButtonTheme } from './components/button'
import text, { TextTheme } from './components/text'

export interface Theme {
  button: ButtonTheme
  text: TextTheme
}
export type ConfigurableTheme = DeepPartial<Theme>

const theme: Theme = {
  button,
  text,
}

export * from './components/button'
export * from './components/text'
export default theme
