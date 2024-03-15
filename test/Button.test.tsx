import React from 'react'
import { render } from '@testing-library/react'
import { Button } from '../src'

const onClickMock = jest.fn()

describe('Button', () => {
  beforeEach(() => {
    jest.resetAllMocks()
  })

  it('should render a basic primary button with the text as children', () => {
    const { getByRole } = render(<Button>Button Text</Button>)
    const button = getByRole('button')

    expect(button.textContent).toBe('Button Text')
  })

  it('should render a button with other components inside it', () => {
    const { getByRole } = render(
      <Button>
        Button text<span>, screen reader</span>
      </Button>,
    )

    const button = getByRole('button')
    expect(button.textContent).toBe('Button text, screen reader')
  })

  it('should render a button with href as an anchor tag', () => {
    const { container } = render(<Button href='/example/path'>Link Text</Button>)
    const button = container.getElementsByTagName('a')

    expect(button.length).toBe(1)
    expect(button[0].textContent).toBe('Link Text')
    expect(button[0].getAttribute('href')).toBe('/example/path')
    expect(button[0].getAttribute('target')).not.toBe('_blank')
  })

  it('should render a button with href and external prop as anchor tag with target blank', () => {
    const { container } = render(
      <Button href='/example/path' external>
        Link Text
      </Button>,
    )
    const button = container.getElementsByTagName('a')

    expect(button.length).toBe(1)
    expect(button[0].textContent).toBe('Link Text')
    expect(button[0].getAttribute('href')).toBe('/example/path')
    expect(button[0].getAttribute('target')).toBe('_blank')
  })

  it('should render button with type submit', () => {
    const { getByRole } = render(<Button type='submit'>Submit button</Button>)
    const button = getByRole('button')

    expect(button.textContent).toBe('Submit button')
    expect(button.getAttribute('type')).toBe('submit')
  })

  it('should call the onClick handler when clicked', () => {
    const { getByRole } = render(<Button onClick={onClickMock}>Link Text</Button>)

    const button = getByRole('button')
    button.click()
    expect(onClickMock).toBeCalled()
  })

  it('should not call the onClick handler when disabled', () => {
    const buttonRender = render(
      <Button onClick={onClickMock} disabled>
        Button Text
      </Button>,
    )

    const button = buttonRender.getByRole('button')
    button.click()
    expect(onClickMock).not.toBeCalled()

    const anchorRender = render(
      <Button href='/test' onClick={onClickMock} disabled>
        Link Text
      </Button>,
    )

    const anchor = anchorRender.getByRole('button')
    anchor.click()
    expect(onClickMock).not.toBeCalled()
  })

  it('should not do anything when clicked with no handler', () => {
    const { getByRole } = render(<Button>Link Text</Button>)

    const button = getByRole('button')
    button.click()
  })

  // Simple rendering for coverage as tests do not focus on style
  it('should render the different variants', () => {
    render(<Button variant='primary'>Text</Button>)
    render(<Button variant='secondary'>Text</Button>)
    render(<Button variant='text'>Text</Button>)
  })

  // Simple rendering for coverage as tests do not focus on style
  it('should render the different sizes', () => {
    render(<Button size='small'>Text</Button>)
    render(<Button size='medium'>Text</Button>)
    render(<Button size='large'>Text</Button>)
  })
})
