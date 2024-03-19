import React from 'react'
import { render } from '@testing-library/react'
import { Text } from '../../src'

describe('Text', () => {
  beforeEach(() => {
    jest.resetAllMocks()
  })

  it('should render a default text element with content', () => {
    const { getByText } = render(<Text>Paragraph</Text>)
    expect(getByText('Paragraph')).toBeDefined()
  })

  it('should allow for titles', () => {
    const { getByRole } = render(<Text variant='h1'>Title</Text>)
    expect(getByRole('heading').textContent).toBe('Title')
  })

  it('should allow for classNames to be provided', () => {
    const { getByRole } = render(
      <Text variant='h1' className='bg-red-500'>
        Title
      </Text>,
    )
    expect(getByRole('heading').classList).toContain('bg-red-500')
  })
})
