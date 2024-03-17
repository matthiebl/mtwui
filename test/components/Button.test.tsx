import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import { Button } from '../../src'

const onClickMock = jest.fn()

describe('Button', () => {
  beforeEach(() => {
    jest.resetAllMocks()
  })

  it('should render a default button with text context', () => {
    const { getByRole } = render(<Button>Click Me!</Button>)
    const button = getByRole('button')

    expect(button.textContent).toBe('Click Me!')
  })

  it('should render a button with other components inside it', () => {
    const { getByRole } = render(
      <Button>
        Button text<span>, screen reader</span>
      </Button>,
    )

    const button = getByRole('button')
    // Buttons flatten all components within them due
    // to presentation role being implicitly applied
    expect(button.textContent).toBe('Button text, screen reader')
  })

  it('should call the onClick handler when clicked', () => {
    const { getByRole } = render(<Button onClick={onClickMock}>Click Me!</Button>)

    const button = getByRole('button')
    fireEvent.click(button)
    expect(onClickMock).toBeCalled()
  })

  it('should not call the onClick handler when disabled', () => {
    const buttonRender = render(
      <Button onClick={onClickMock} disabled>
        Button Text
      </Button>,
    )

    const button = buttonRender.getByRole('button')
    fireEvent.click(button)
    expect(onClickMock).not.toBeCalled()
  })

  // Simple rendering for coverage as tests do not focus on style
  it('should render the different variants', () => {
    render(
      <Button
        size='sm'
        variant='primary'
        fullWidth
        className='text-red-500'
        buttonProps={{ type: 'submit' }}
      >
        Text
      </Button>,
    )
  })
})
