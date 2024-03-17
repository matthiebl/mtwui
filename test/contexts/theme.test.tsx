import React from 'react'
import { render } from '@testing-library/react'
import { ThemeProvider } from '../../src'
import { ConfigurableTheme } from '../../src/theme'

describe('ThemeProvider', () => {
  it('should render children', () => {
    const { getByText } = render(<ThemeProvider>Children</ThemeProvider>)
    expect(getByText('Children')).toBeDefined()
  })

  it('should allow overrides to the theme', () => {
    const overrides: ConfigurableTheme = {
      button: {
        defaultProps: {
          size: 'lg',
          disabled: true,
        },
      },
    }
    render(<ThemeProvider value={overrides}>Children</ThemeProvider>)
  })
})
