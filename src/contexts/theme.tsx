import React, { ReactNode, createContext, useContext } from 'react'
import merge from 'deepmerge'
import theme, { ConfigurableTheme, Theme } from '../theme'

const ThemeContext = createContext<Theme>(theme)
ThemeContext.displayName = 'MTWUIThemeProvider'

interface ThemeProviderProps {
  value?: ConfigurableTheme
  children: ReactNode
}

export const ThemeProvider = ({ value = theme, children }: ThemeProviderProps) => {
  const mergedValue = merge(theme, value)

  return <ThemeContext.Provider value={mergedValue}>{children}</ThemeContext.Provider>
}

export const useTheme = () => useContext(ThemeContext)
